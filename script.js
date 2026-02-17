const btn = document.querySelector(".surprise-btn");
const confettiContainer = document.querySelector(".confetti-container");
const videoModal = document.getElementById("videoModal");
const birthdayVideo = document.getElementById("birthdayVideo");
const bgMusic = document.getElementById("bg-music");

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

    // Start Music (required user interaction for mobile autoplay)
    bgMusic.play();

    // Disable button
    btn.disabled = true;
    btn.innerText = "Enjoy the Surprise 🎉";

    // Create Confetti
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

    // After confetti ends → Show Video
    setTimeout(() => {
        videoModal.classList.add("active");
        birthdayVideo.play();
    }, 4000);
});
c