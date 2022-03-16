// Модальное окно
function bindModal(trigger, modal, close) {
  trigger = document.querySelector(trigger),
  modal = document.querySelector(modal),
  close = document.querySelector(close)
  trigger.addEventListener('click', e => {
    e.preventDefault()
    modal.style.display = 'flex'
  });
  close.addEventListener('click', () => {
    modal.style.display = 'none'
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none'
    }
  })
}

bindModal('.modal__btn', '.modal__wrapper', '.modal__close')
