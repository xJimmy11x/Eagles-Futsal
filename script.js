window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.remove("transparent");
        nav.classList.add("solid");
    } else {
        nav.classList.remove("solid");
        nav.classList.add("transparent");
    }
});
