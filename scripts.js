document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const slide = document.querySelectorAll(".slide");
    let currentIndex = 0;
    const totalSlides = slide.length;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextSlide, 3000); // 每3秒切换一次图片
});
