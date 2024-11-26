const burgerDialog = document.querySelector('.burgerDialog')

burgerDialog.addEventListener('click', closeOnBackDropClick)

function closeOnBackDropClick({currentTarget, target}) {
  if(currentTarget === target) {
    burgerDialog.close()
  }
}