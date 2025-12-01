# devtec-portfolio-2025

## Frontend Developer Portfolio

A modern, futuristic portfolio website for Muhammad Abdulwadud Ayinde (Devtec) built with React, TypeScript, and Tailwind CSS.

### Features

- 🌓 **Light & Dark Modes** - Seamless theme switching with Void dark mode and Ice White light mode
- 📱 **Fully Responsive** - Beautiful design on all devices
- 🎨 **Futuristic Design** - Glassmorphism effects with neon cyan and purple accents
- 📧 **Contact Form** - Dual email functionality:
  - Notification emails to the owner
  - Automatic confirmation emails to senders
- 🔗 **GitHub Integration** - Display your projects and repositories
- 📄 **Resume Download** - One-click resume download
- ✨ **Smooth Animations** - Framer Motion animations throughout
- 🚀 **Full-Stack** - React frontend with Express backend and PostgreSQL database

### Tech Stack

**Frontend:**
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Wouter (routing)
- React Hook Form

**Backend:**
- Express.js
- Node.js
- PostgreSQL (Neon)
- Drizzle ORM
- SendGrid (email service)

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

### Environment Variables

You'll need the following environment variables:

- `DATABASE_URL` - PostgreSQL connection string
- SendGrid API key (configured via Replit integrations)

### Project Structure

```
├── client/              # Frontend React app
│   ├── src/
│   │   ├── pages/      # Page components
│   │   ├── components/ # Reusable components
│   │   └── lib/        # Utilities and data
│   └── index.html      # HTML entry point
├── server/             # Express backend
│   ├── routes.ts       # API routes
│   ├── storage.ts      # Database operations
│   └── email.ts        # Email functionality
├── shared/             # Shared types and schemas
│   └── schema.ts       # Drizzle ORM schemas
└── script/             # Build scripts
```

### Features in Detail

#### Contact Form
- Validates email and message content
- Sends two emails:
  1. **Owner Notification** - Alerts you when someone submits the form
  2. **Sender Confirmation** - Confirms to the visitor that you received their message
- Stores messages in PostgreSQL database

#### Light & Dark Modes
- **Void Dark Mode** - Professional dark theme with neon accents
- **Ice White Light Mode** - Clean, bright professional theme
- Persistent theme preference using local storage

#### Responsive Design
- Mobile-first approach
- Optimized layouts for tablets and desktops
- Touch-friendly interactive elements

### Deployment

Deploy this application to Vercel, Netlify, or Replit:

1. Push to GitHub
2. Connect your repository to your deployment platform
3. Set up environment variables
4. Deploy!

### Author

**Muhammad Abdulwadud Ayinde (Devtec)**
- GitHub: [@Devtec-3](https://github.com/Devtec-3)
- LinkedIn: [devtec3](https://www.linkedin.com/in/devtec3)
- Twitter/X: [@Devtec_codes](https://twitter.com/Devtec_codes)

### License

This project is open source and available under the MIT License.
