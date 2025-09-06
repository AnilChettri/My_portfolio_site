# Anil Chhetri Portfolio Setup Guide

This is a modern, animated developer portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📧 EmailJS Setup (Optional - for Contact Form)

To enable the contact form notifications:

1. **Create EmailJS Account:**
   - Go to [EmailJS.com](https://emailjs.com)
   - Sign up for a free account (200 emails/month)

2. **Configure EmailJS:**
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Note your Service ID, Template ID, and Public Key

3. **Update Contact Component:**
   - Open `src/components/Contact.tsx`
   - Replace the placeholder values:
     ```typescript
     const serviceId = 'your_service_id'
     const templateId = 'your_template_id'
     const publicKey = 'your_public_key'
     ```
   - Uncomment the EmailJS send function

## 🎨 Features

- **Dark Theme:** Modern glassmorphism design with neon highlights
- **Animations:** Smooth scroll, hover effects, tilt cards, and magnetic buttons
- **Responsive:** Mobile-first design that works on all devices
- **SEO Optimized:** Meta tags, OpenGraph, and JSON-LD structured data
- **Project Gallery:** Image gallery modal for project screenshots
- **Contact Form:** EmailJS integration for notifications

## 📁 Project Structure

- `/src/components/` - React components
- `/src/lib/` - Utilities and configurations
- `/src/types/` - TypeScript type definitions
- `/public/projects/` - Project images and screenshots

## 🖼️ Adding Project Images

1. Add your project screenshots to `/public/projects/`
2. Update the `getProjectImages()` function in `Projects.tsx`
3. Add project data to the `fallbackProjects` array

## 🎯 Customization

- **Colors:** Update neon colors in `tailwind.config.ts`
- **Content:** Modify component text and data
- **Skills:** Update skills array in `Skills.tsx`
- **Experience:** Update experience data in `Experience.tsx`
- **Contact:** Update email address in Contact and Footer components

## 📱 Deployment

Deploy for free on:
- **Vercel:** `vercel --prod`
- **Netlify:** Connect your GitHub repository
- **Cloudflare Pages:** Connect your GitHub repository

## 🛠️ Technologies Used

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (Icons)
- EmailJS (Contact Form)
- React Intersection Observer

## 📧 Contact

- **Email:** chettrianil899@gmail.com
- **GitHub:** [@anilchhetri](https://github.com/anilchhetri)

---

Built with ❤️ and Next.js by Anil Chhetri
