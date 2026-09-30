// main.js — students will add JavaScript here as features are built

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('demo-modal');
    const demoBtn = document.getElementById('demo-btn');
    const closeBtn = document.querySelector('.modal-close');
    const overlay = document.querySelector('.modal-overlay');
    const video = document.getElementById('demo-video');
    const videoSrc = video.src;

    function openModal() {
        modal.classList.add('open');
    }

    function closeModal() {
        modal.classList.remove('open');
        video.src = '';
        setTimeout(() => {
            video.src = videoSrc;
        }, 100);
    }

    demoBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
});
