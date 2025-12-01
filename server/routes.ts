import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { sendContactEmails } from "./email";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validationResult = insertContactMessageSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const errorMessage = fromZodError(validationResult.error).message;
        return res.status(400).json({ error: errorMessage });
      }

      const contactData = validationResult.data;

      const savedMessage = await storage.createContactMessage(contactData);

      try {
        await sendContactEmails(contactData);
      } catch (emailError) {
        console.error("Failed to send emails:", emailError);
      }

      return res.status(201).json({ 
        success: true, 
        message: "Your message has been sent successfully!",
        id: savedMessage.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "Failed to process your message. Please try again." });
    }
  });

  app.get("/api/messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      return res.json(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      return res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  return httpServer;
}