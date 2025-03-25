document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        themeToggle.textContent = document.body.classList.contains("light-theme") ? "🌞" : "🌙";
    });

    // Smooth Scroll for Navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Scroll Animation
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });
});
