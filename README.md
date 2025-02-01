# 💝 Valentine's Day Website 2025 💝

A beautiful, interactive Valentine's Day website to ask your special someone to be your Valentine! 

## ✨ Features
- 💖 Floating hearts and bears
- 🎯 Interactive questions
- 📏 Love meter that goes beyond 100%
- 🏃‍♂️ Playful buttons that run away
- 🎁 Hidden special message
- 🎉 Grand celebration when they say yes!

## 🚀 Quick Start Guide

### 1. Get Your Own Copy
1. Click the "Fork" button at the top right of this page
2. Wait a few seconds while GitHub creates your copy
3. You now have your own version of the code!

Note: Make sure you're logged into your GitHub account. If you don't have one, you can [create a free account here](https://github.com/signup).

### 2. Customize for Your Valentine

#### Easy Way (Recommended)
1. In your new repository, click on `config.js`
2. Click the pencil icon (✏️) to edit
3. Change the values to personalize your website
4. Click "Commit changes" at the bottom

Here's what you can customize in `config.js`:
```javascript
// Basic Information
valentineName: "Jade"                    // Your Valentine's name
pageTitle: "Will You Be My Valentine? 💝" // Browser tab title

// Floating Background Elements
floatingEmojis: {
    hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis in background
    bears: ['🧸', '🐻']                       // Bear emojis in background
}

// Questions and Buttons
questions: {
    first: {
        text: "Do you like me?",                   // First question
        yesBtn: "Yes",                             // Yes button text
        noBtn: "No",                               // No button text
        secretAnswer: "I don't like you, I love you! ❤️"  // Hidden message
    },
    second: {
        text: "How much do you love me?",          // Second question
        startText: "This much!",                   // Text before percentage
        nextBtn: "Next ❤️"                         // Next button text
    },
    third: {
        text: "Will you be my Valentine...?",      // Final question
        yesBtn: "Yes!",                            // Yes button text
        noBtn: "No"                                // No button text
    }
}

// Love Meter Messages
loveMessages: {
    extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows above 5000%
    high: "To infinity and beyond! 🚀💝",              // Shows above 1000%
    normal: "And beyond! 🥰"                           // Shows above 100%
}

// Final Celebration
celebration: {
    title: "Yay! I'm the luckiest person...",     // Celebration title
    message: "Now come get your gift...",          // Celebration message
    emojis: "🎁💖🤗💝💋❤️💕"                        // Celebration emojis
}

// Website Colors
colors: {
    backgroundStart: "#ffafbd",      // Background gradient start
    backgroundEnd: "#ffc3a0",        // Background gradient end
    buttonBackground: "#ff6b6b",     // Button color
    buttonHover: "#ff8787",          // Button hover color
    textColor: "#ff4757"            // Text color
}

// Animation Settings
animations: {
    floatDuration: "15s",           // How long hearts float (10-20s)
    floatDistance: "50px",          // Sideways movement (30-70px)
    bounceSpeed: "0.5s",            // Bounce animation speed (0.3-0.7s)
    heartExplosionSize: 1.5         // Final heart explosion size (1.2-2.0)
}
```

### 3. Make It Live!

#### Using GitHub Pages (Free)
1. Go to your repository's "Settings"
2. Click "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait a few minutes
6. Your site will be live at: `https://your-username.github.io/repository-name`

#### Using Netlify (Free, Recommended, Custom URL)
1. Go to [Netlify](https://www.netlify.com/)
2. Sign up for a free account
3. Click "Add new site" → "Import an existing project"
4. Choose your GitHub repository
5. Click "Deploy site"
6. Once deployed, click "Domain settings"
7. Choose a custom domain (e.g., `my-valentine-2025.netlify.app`)

## 💡 Tips
- Test the website before sending it to your Valentine
- Try all the buttons and interactions
- Check how it looks on mobile phones
- Keep the secret message subtle (bottom-right corner)

## 🎨 Want Different Colors?
Use these tools to find beautiful colors:
- [Coolors](https://coolors.co/) - Color palette generator
- [ColorHunt](https://colorhunt.co/) - Color palettes

## 🔍 Need More Emojis?
Find more emojis at:
- [EmojiKeyboard](https://emojikeyboard.top/fr/)
- [Emojipedia](https://emojipedia.org/)

## 🤝 Need Help?
- Create an issue in this repository
- Check existing issues for solutions
- Contact me through GitHub

## 💖 Credits
Created with love for Valentine's Day 2025.
Feel free to use and modify for your special someone!
- Louis Fontaine -

## 📜 License
MIT License - Feel free to use this for your Valentine! 
