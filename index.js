const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
    "#800080",
    "#008000",
    "#000080"
];

const btn = document.getElementById('btn')
const bgColorText = document.getElementById('bgColorText')

const getRandomNumber = (len) => {
    return Math.floor(Math.random() * len)
}
const changeBackgroundColor = () => {
    const randomNumber = getRandomNumber(colors.length)
    const bgColor = colors[randomNumber]
    document.body.style.backgroundColor = bgColor
    bgColorText.innerText = bgColor
}
btn.addEventListener('click', () => {
    changeBackgroundColor()
})  