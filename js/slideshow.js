const images = [
    "../images/my_workout.png",
    "../images/IMG_E0636.JPG"
];

let current = 0;

const image = document.getElementById("work-image");

setInterval(() => {

    // 現在の画像を消す
    image.style.opacity = 0;

    // 0.8秒後に画像を変更
    setTimeout(() => {

        current = (current + 1) % images.length;

        image.src = images[current];

        // 新しい画像を表示
        image.style.opacity = 1;

    }, 800);

}, 3000);
