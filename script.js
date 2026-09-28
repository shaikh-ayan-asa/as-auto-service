function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("show");
}

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("mobileMenu").classList.remove("show");
    });
});