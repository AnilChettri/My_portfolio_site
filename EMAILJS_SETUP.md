# 📧 EmailJS Setup Guide - Get Notified When Someone Contacts You

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://emailjs.com)
2. Sign up with your email (FREE - 200 emails/month)
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, click "Add New Service"
2. Choose "Gmail" (recommended) or your email provider
3. Connect your email account (this is where you'll receive notifications)
4. Name it something like "portfolio-contact"
5. **Note the Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" and click "Create New Template"
2. Use this template:

```
Subject: 🚀 New Portfolio Contact: {{from_name}}

Hi Anil!

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Reply directly to this email to respond to {{from_name}}.

Best regards,
Your Portfolio Website
```

3. Set template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email  
   - `{{message}}` - Their message
4. **Note the Template ID** (looks like: `template_xyz789`)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (looks like: `user_AbCd123EfGh`)

### Step 5: Update Your Portfolio
1. Open `src/components/Contact.tsx`
2. Find lines 74-76 and replace with your actual values:

```typescript
const serviceId = 'service_abc123'      // Your Service ID
const templateId = 'template_xyz789'    // Your Template ID  
const publicKey = 'user_AbCd123EfGh'    // Your Public Key
```

3. Uncomment lines 84-95 (remove `/*` and `*/`)
4. Comment out line 80 (add `//` in front)

### Step 6: Test It!
1. Save the file and refresh your portfolio
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email! 📧

## 🎯 What You'll Receive

When someone contacts you through your portfolio, you'll get an email like this:

**Subject**: 🚀 New Portfolio Contact: John Doe

**Body**:
```
Hi Anil!

You have received a new message from your portfolio website:

Name: John Doe
Email: john@company.com
Message: Hi Anil! I'm interested in discussing a potential collaboration on an AI project. Would you be available for a call next week?

Reply directly to this email to respond to John Doe.

Best regards,
Your Portfolio Website
```

## 🔧 Alternative: Formspree (50 emails/month)
If you prefer Formspree instead:

1. Go to [Formspree.io](https://formspree.io)
2. Create account and get your form endpoint
3. Replace the EmailJS code with a simple form POST to Formspree

## 🆘 Need Help?
If you encounter any issues:
1. Check the browser console for errors
2. Verify all IDs are correct
3. Make sure EmailJS service is active
4. Test the template in EmailJS dashboard first

Your contact form will be fully functional and you'll get notified instantly when someone reaches out! 🎉
