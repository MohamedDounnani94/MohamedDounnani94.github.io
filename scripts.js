function handleButtonClick() {
  const door = document.getElementById('door')
  const button = document.getElementById('button')
  const typewriter = document.getElementById('typewriter')
  const myContent = document.getElementById('m-content')
  button.classList.add('invisible')
  typewriter.classList.add('invisible')
  myContent.classList.remove('invisible')
  if(door.classList.contains('door')) {
    door.classList.add('door-open')
  }
}

function handleFieldsAnimation() {
  const fields = document.getElementsByClassName('field')
  console.log({fields})
}

handleFieldsAnimation()
