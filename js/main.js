const genBtn = document.querySelector(".btn")
const idNum = document.querySelector(".id")
const adviceText = document.querySelector(".advice")

fetch('	https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        let num = data.slip.id
        let advice = data.slip.advice
        idNum.textContent = num
        adviceText.textContent = advice
})

genBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    fetch('	https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        let num = data.slip.id
        let advice = data.slip.advice
        idNum.textContent = num
        adviceText.textContent = advice
    })
})