function changeColor() {
    const colors = ['#ff6347', '#4682b4', '#32cd32', '#ff8c00', '#8a2be2'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
