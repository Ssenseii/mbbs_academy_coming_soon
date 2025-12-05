function getTargetDate() {
	// Note: Month is 0-indexed (0 = January, 11 = December)
	return new Date(2026, 0, 1, 0, 0, 0); // December 14, 2025
}

const targetDate = getTargetDate();

function updateCountdown() {
	const now = new Date();
	const diff = targetDate - now;

	if (diff <= 0) {
		document.getElementById("countdown").innerHTML =
			'<div class="countdown-item" style="grid-column: 1/-1;"><div class="countdown-value">🚀 C\'est parti!</div><div class="countdown-label">Le projet est maintenant lancé!</div></div>';
		return;
	}

	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((diff / (1000 * 60)) % 60);
	const seconds = Math.floor((diff / 1000) % 60);

	document.getElementById("days").textContent = days.toString().padStart(2, "0");
	document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
	document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
	document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

// Interactive elements
document.getElementById("secretMessage").addEventListener("click", function () {
	const hiddenText = document.getElementById("hiddenText");
	hiddenText.classList.toggle("visible");

	// Add subtle animation
	this.style.transform = this.style.transform ? "" : "scale(0.99)";
	setTimeout(() => {
		this.style.transform = "";
	}, 150);
});

// document.getElementById("surpriseBtn").addEventListener("click", function () {
// 	const messages = [
// 		"🎯 Préparation intensive optimisée",
// 		"🧠 Approche cognitive révolutionnaire",
// 		"🏆 Succès garanti par l'innovation",
// 		"📚 Ressources exclusives en développement",
// 	];

// 	const randomMessage = messages[Math.floor(Math.random() * messages.length)];
// 	this.innerHTML = `✨ ${randomMessage}`;

// 	// Reset after 3 seconds
// 	setTimeout(() => {
// 		this.innerHTML = "🎁 Surprise Exclusive";
// 	}, 3000);
// });

// Particle background
function createParticles() {
	const particlesContainer = document.getElementById("particles");
	const particleCount = 30;

	for (let i = 0; i < particleCount; i++) {
		const particle = document.createElement("div");
		particle.classList.add("particle");

		const size = Math.random() * 20 + 5;
		particle.style.width = `${size}px`;
		particle.style.height = `${size}px`;

		const x = Math.random() * 100;
		const y = Math.random() * 100;
		particle.style.left = `${x}%`;
		particle.style.top = `${y}%`;

		particle.style.animation = `pulse ${Math.random() * 3 + 2}s infinite ease-in-out`;
		particle.style.animationDelay = `${Math.random() * 2}s`;

		particlesContainer.appendChild(particle);
	}
}

// Initialize everything
setInterval(updateCountdown, 1000);
updateCountdown();
createParticles();

// Add hover effect to countdown items
document.querySelectorAll(".countdown-item").forEach((item) => {
	item.addEventListener("mouseenter", function () {
		const value = this.querySelector(".countdown-value");
		value.style.color = "#00ffaa";
		value.style.textShadow = "0 0 20px rgba(0, 255, 170, 0.8)";
	});

	item.addEventListener("mouseleave", function () {
		const value = this.querySelector(".countdown-value");
		value.style.color = "";
		value.style.textShadow = "";
	});
});

// Add typing effect to title
const title = document.querySelector(".title");
const originalText = title.textContent;
title.textContent = "";

let charIndex = 0;
function typeWriter() {
	if (charIndex < originalText.length) {
		title.textContent += originalText.charAt(charIndex);
		charIndex++;
		setTimeout(typeWriter, 50);
	}
}

// Start typing after a delay
setTimeout(typeWriter, 1000);
