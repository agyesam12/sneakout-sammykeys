// Optional JavaScript for interactive features
console.log("Campus Navigation System Loaded");

// Example: Scroll to sections smoothly
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});