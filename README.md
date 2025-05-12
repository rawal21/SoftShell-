# SoftSell - Software License Reselling Platform

A modern, responsive single-page website for a fictional startup called "SoftSell" that helps businesses resell their unused software licenses.

## 🚀 Features

- **Attention-grabbing hero section** with headline and CTA button
- **How It Works section** explaining the 3-step process
- **Benefits section** highlighting why users should choose SoftSell
- **Testimonials section** with customer reviews
- **Contact form** with validation
- **Responsive design** that works on all device sizes
- **Light/dark mode toggle**
- **Smooth animations** using Framer Motion
- **SEO optimized**

## 🛠️ Tech Stack

- **Framework**: React.js
- **Styling**: Bootstrap + CSS Modules
- **Animations**: Framer Motion
- **Deployment**: Vercel/Netlify/GitHub Pages

## 🎨 Design Decisions

- **Color Scheme**: Used a purple/indigo gradient as the primary color to convey trust and innovation
- **Typography**: Clean, modern sans-serif font for readability
- **Layout**: Focused on clear sections with ample whitespace for better readability
- **Animations**: Subtle animations to enhance user experience without being distracting
- **Responsive Design**: Mobile-first approach ensuring the site looks great on all devices

## ⏱️ Time Spent

- **Planning & Design**: 1 hour
- **Development**: 4 hours
- **Testing & Refinement**: 1 hour
- **Total**: 6 hours

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm start
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Future Improvements

- Add actual backend functionality for the contact form
- Implement more interactive elements like pricing calculators
- Add animations for page transitions
- Improve accessibility features
- Add more content sections like FAQ, blog, etc.

## 📄 License

This project is licensed under the MIT License.
\`\`\`

```html file="public/index.html"
&lt;!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="SoftSell - Turn unused software licenses into cash"
    />
    <meta name="keywords" content="software licenses, license reselling, sell software, SoftSell" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>SoftSell - Resell Your Software Licenses</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
