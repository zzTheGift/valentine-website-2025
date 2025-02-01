// CUSTOMIZE: Your Valentine's name
const VALENTINE_NAME = "Jade";  // <- Change this to your valentine's name

// CUSTOMIZE: Floating emojis - Add or remove emojis from these arrays
const HEARTS = ['❤️', '💖', '💝', '💗', '💓'];  // Emojis for floating hearts
const BEARS = ['🧸', '🐻'];  // Emojis for floating bears

// CUSTOMIZE: Love meter messages
const LOVE_MESSAGES = {
    extreme: " WOOOOW You love me that much?? 🥰🚀💝",  // Shown at 5000%+
    high: " and beyond! To infinity and beyond! 🚀💝",   // Shown at 1000%+
    normal: " and beyond! 🥰"                           // Shown above 100%
};

// CUSTOMIZE: Celebration message
const CELEBRATION = {
    title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
    message: "Now come get your gift, a big warm hug and a huge kiss!",
    emojis: "🎁💖🤗💝💋❤️💕"
};

// Add this at the top of script.js
window.addEventListener('DOMContentLoaded', () => {
    // Set the valentine's name in the title
    document.getElementById('valentineTitle').textContent = `${VALENTINE_NAME}, my love, ...`;
});

// Position floating elements randomly
const floatingElements = document.querySelectorAll('.heart, .bear');
floatingElements.forEach(element => {
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.animationDuration = 10 + Math.random() * 20 + 's';
});

// Function to show next question
function showNextQuestion(questionNumber) {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById(`question${questionNumber}`).classList.remove('hidden');
}

// Function to move the "No" button when hovered
function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

// Update love meter value with extra love message and visual feedback
const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');
const extraLove = document.getElementById('extraLove');

function setInitialPosition() {
    loveMeter.value = 100;
    loveValue.textContent = 100;
    loveMeter.style.width = '100%';
}

loveMeter.addEventListener('input', () => {
    const value = parseInt(loveMeter.value);
    loveValue.textContent = value;
    
    if (value > 100) {
        extraLove.classList.remove('hidden');
        const overflowPercentage = (value - 100) / 9900;
        const extraWidth = overflowPercentage * window.innerWidth * 0.8;
        loveMeter.style.width = `calc(100% + ${extraWidth}px)`;
        loveMeter.style.transition = 'width 0.3s';
        
        // Add some fun text variations based on the percentage
        if (value >= 5000) {
            extraLove.classList.add('super-love');
            extraLove.textContent = LOVE_MESSAGES.extreme;
        } else if (value > 1000) {
            extraLove.classList.remove('super-love');
            extraLove.textContent = LOVE_MESSAGES.high;
        } else {
            extraLove.classList.remove('super-love');
            extraLove.textContent = LOVE_MESSAGES.normal;
        }
    } else {
        extraLove.classList.add('hidden');
        extraLove.classList.remove('super-love');
        loveMeter.style.width = '100%';
    }
});

// Ensure proper initialization
window.addEventListener('DOMContentLoaded', setInitialPosition);
window.addEventListener('load', setInitialPosition);

// Celebration function
function celebrate() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    
    // Set celebration messages from constants
    document.getElementById('celebrationTitle').textContent = CELEBRATION.title;
    document.getElementById('celebrationMessage').textContent = CELEBRATION.message;
    document.getElementById('celebrationEmojis').textContent = CELEBRATION.emojis;
    
    // Create heart explosion
    createHeartExplosion();
}

function createHeartExplosion() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = HEARTS[Math.floor(Math.random() * HEARTS.length)];
        heart.className = 'heart';
        document.querySelector('.floating-elements').appendChild(heart);
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.animationDuration = `${5 + Math.random() * 10}s`;
    }
} 