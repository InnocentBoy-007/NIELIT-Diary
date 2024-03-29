const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.image-slide');
const navItems = document.querySelectorAll('.navigation-items');
const contents = document.querySelectorAll('.content');

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
})

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active")
    });

    slides.forEach((slide) => {
        slide.classList.remove("active")
    });

    contents.forEach((content) => {
        content.classList.remove("active")
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

sliderNav(0);

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});

document.querySelectorAll('.pro img').forEach(img => {
    img.addEventListener('click', function () {
        const loading = document.querySelector('.loading');
        loading.style.display = 'flex';

        const newImg = new Image();
        newImg.src = this.src;
        newImg.onload = function () {
            window.open(this.src, '_blank');
            loading.style.display = 'none';
        };
    });
});

window.onload = function () {
    document.getElementById('loading-overlay').style.display = 'none';
}
