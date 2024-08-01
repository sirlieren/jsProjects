const cords = { x: 0, y: 0 };

const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", function (e) {
    cords.x = e.clientX;
    cords.y = e.clientY;


})

function AnimateCircles() {
    let x = cords.x;
    let y = cords.y;

    circles.forEach((circle, index) => {
        circle.style.left = x - 10 + "px";
        circle.style.top = y - 10 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(AnimateCircles);
}

AnimateCircles();