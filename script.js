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
            extraLove.textContent = " WOOOOW You love me that much?? 🥰🚀💝";
        } else if (value > 1000) {
            extraLove.classList.remove('super-love');
            extraLove.textContent = " and beyond! To infinity and beyond! 🚀💝";
        } else {
            extraLove.classList.remove('super-love');
            extraLove.textContent = " and beyond! 🥰";
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
    document.getElementById('celebration').classList.remove('hidden');
    
    // Create heart explosion
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = ['❤️', '💖', '💝', '💗', '💓'][Math.floor(Math.random() * 5)];
        heart.className = 'heart';
        document.querySelector('.floating-elements').appendChild(heart);
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.animationDuration = 5 + Math.random() * 10 + 's';
    }
} 