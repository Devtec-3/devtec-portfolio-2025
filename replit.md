# Devtec Portfolio - Muhammad Abdulwadud Ayinde

## Overview
A modern, futuristic full-stack portfolio website for Muhammad Abdulwadud Ayinde (Devtec), a Frontend Developer. Built with React, Express, PostgreSQL, and SendGrid for email functionality.

## Architecture

### Frontend (React + Vite)
- **Location**: `client/src/`
- **Styling**: Tailwind CSS v4 with custom design system (glassmorphism, neon accents)
- **Routing**: Wouter
- **State Management**: TanStack Query for server state
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives with shadcn/ui

### Backend (Express)
- **Location**: `server/`
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Email Service**: SendGrid integration for contact form emails

### Shared
- **Location**: `shared/schema.ts`
- **Contains**: Drizzle schemas, Zod validation schemas, TypeScript types

## Key Features
1. **Hero Section** - Animated introduction with profile image
2. **About Me** - Personal bio with statistics cards
3. **Skills** - Interactive skill badges with hover effects
4. **Projects** - Featured projects with images and tags
5. **Experience & Education** - Timeline-based display
6. **Contact Form** - Full-stack with dual email notifications:
   - Notification email to owner (muhammadabdulwadudalata@gmail.com)
   - Confirmation email to sender

## API Endpoints
- `POST /api/contact` - Submit contact form (saves to DB + sends emails)
- `GET /api/messages` - Retrieve all contact messages (admin use)

## Database Schema
- `users` - User authentication (reserved for future use)
- `contact_messages` - Stores contact form submissions

## Integrations
- **SendGrid** - Connected via Replit Connectors for email functionality. The integration handles API key management automatically.

## Environment Variables
- `DATABASE_URL` - PostgreSQL connection string
- SendGrid credentials are managed via Replit Connectors

## Recent Changes
- December 2025: Initial full-stack portfolio build
- Implemented SendGrid email integration for contact form
- Added PostgreSQL database for message persistence

## Color Palette
- **Primary**: Cyan (#0ea5e9 / hsl 189 94% 43%)
- **Secondary**: Purple (#8b5cf6 / hsl 271 91% 65%)
- **Dark Background**: Deep Void (#1e293b / hsl 222 47% 11%)
- **Light Background**: Ice White (#f8fafc / hsl 210 40% 98%)

## Typography
- **Display Font**: Outfit
- **Mono Font**: Space Grotesk
