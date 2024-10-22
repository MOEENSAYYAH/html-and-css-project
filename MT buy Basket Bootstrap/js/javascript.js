const buttonClose = document.querySelectorAll(".btn-close")
const listGroup = document.querySelector("ul")
const purchaseButton = document.getElementById('purchase')
console.log(buttonClose);

buttonClose.forEach(function (close) {
  close.addEventListener('click' , function (event) {
    event.target.parentElement.remove()
  })
})
purchaseButton.addEventListener('click' , function () {
  listGroup.innerHTML = ""
})