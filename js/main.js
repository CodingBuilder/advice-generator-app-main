let adviceId = document.querySelector(".advice .id span");
let advice = document.querySelector(".advice q");
let dice = document.querySelector(".advice .dice");

function getAdvice(id, advice) {
  fetch("https://api.adviceslip.com/advice")
  .then((resolved) => resolved.json())
  .then((data) => {
    id.textContent = data.slip.id
    advice.textContent = data.slip.advice
  });
  
}

dice.addEventListener("click", (e) => {
  getAdvice(adviceId, advice);
});

getAdvice(adviceId, advice);