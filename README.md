# 💝 Valentine's Day Website 2025 💝

A cute and interactive Valentine's Day website where you can ask your special someone to be your Valentine! The website features:
- Floating hearts and bears
- Interactive questions
- A love meter that goes beyond 100%
- Playful buttons that run away
- A hidden special message
- A grand celebration when they say yes!

## 🎯 How to Use This for Your Valentine

### Deployment with Netlify (Free Custom URL)
1. Go to [Netlify](https://www.netlify.com/) and sign up for a free account
2. Click the "Add new site" button
3. Choose "Import an existing project"
4. Select "Deploy with GitHub"
5. Choose your forked repository
6. Click "Deploy site"
7. Once deployed, click on "Domain settings"
8. Under "Custom domains", click "Add custom domain"
9. Type your desired subdomain, for example: `my-valentine-2025`
   - This will create: `my-valentine-2025.netlify.app`
   - If the name is taken, try another one!
10. Your website will be live at your chosen URL (e.g., `do-you-want-to-be-my-valentines.netlify.app`)

Note: Netlify offers free custom domains ending in `.netlify.app`. You can also use your own domain name if you have one!

### Customization Guide

#### To Change the Text
In `script.js`, find these sections at the top:
- `VALENTINE_NAME`: Your valentine's name
- `LOVE_MESSAGES`: Different messages for the love meter
- `CELEBRATION`: The final celebration text
- `HEARTS` and `BEARS`: Floating emojis

In `index.html`, look for "CUSTOMIZE" comments to change:
- Questions text
- Secret answer message

#### To Change Colors
In `styles.css`, find the `:root` section with color variables:
- Background gradient colors
- Button colors
- Text colors

#### To Change Animation Settings
In `styles.css`, find the `:root` section with animation variables:
- Floating speed and distance
- Bounce animation speed
- Heart explosion size

## 🚀 Advanced Customization
For those who know coding:
- The main logic is in `script.js`
- Styles are in `styles.css`
- HTML structure is in `index.html`

## 📱 Testing
- Open the website on your phone to test before sending
- Make sure all animations work
- Test the love meter
- Try clicking all buttons

## 💡 Ideas for Customization
- Add your own background music
- Change the floating emojis
- Add more questions
- Modify the celebration effects

## 💖 Credits
Created with love for Valentine's Day 2025. Feel free to use and modify for your special someone!

## 🤝 Contributing
Found a bug or want to improve the code? Feel free to create an issue or pull request!

## 📜 License
MIT License - Feel free to use this for your Valentine! 