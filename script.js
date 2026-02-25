const btn = document.querySelector(".surprise-btn");
const confettiContainer = document.querySelector(".confetti-container");
const videoModal = document.getElementById("videoModal");
const birthdayVideo = document.getElementById("birthdayVideo");
const bgMusic = document.getElementById("bg-music");
const closeBtn = document.getElementById("closeVideo");

// 🎵 Try autoplay (some mobile browsers require interaction)
window.addEventListener("load", () => {
    bgMusic.volume = 0.5;
    bgMusic.play().catch(() => {
        // If autoplay blocked, play on first click anywhere
        document.body.addEventListener("click", () => {
            bgMusic.play();
        }, { once: true });
    });
});

// 🎈 Balloons
for (let i = 0; i < 15; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
    balloon.style.animationDuration = (5 + Math.random() * 5) + "s";
    document.body.appendChild(balloon);
}

// 🎊 Surprise Click
btn.addEventListener("click", () => {

    // Stop background music immediately
    bgMusic.pause();
    bgMusic.currentTime = 0;

    btn.disabled = true;
    btn.innerText = "Enjoy the Surprise 🎉";

    // Confetti
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = (2 + Math.random() * 2) + "s";

        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }

    // Show Video after confetti
    setTimeout(() => {
        videoModal.classList.add("active");
        birthdayVideo.play();
    }, 4000);
});

// ❌ Close Video
closeBtn.addEventListener("click", () => {
    birthdayVideo.pause();
    birthdayVideo.currentTime = 0;
    videoModal.classList.remove("active");

    // Resume background music
    bgMusic.play();
});
