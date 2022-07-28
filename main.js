var cardButtons = document.querySelectorAll('.card-button')

// [
//   <button class="card-button">Learn Bananas</button>,
//   <button class="card-button">Learn Apples</button>,
//   <button class="card-button">Learn Grapes</button>
// ]

cardButtons.forEach(theElement => {
  theElement.addEventListener('click', () => {
    var justTheText = theElement.textContent
    var justTheFruit = justTheText.split(' ')[1]
    console.log(justTheFruit + ' are great!')
  })
})


var inputElement = document.querySelector('#my-name')

inputElement.addEventListener('input', (inputEvent) => {
  console.log(inputEvent.target.value)
})

