export function keyboardTrap(e, callback, firstTabStop, lastTabStop) {
  if (e.key === 'Escape') {
    callback()
    return
  }

  if (e.key === 'Tab') {
    if (e.shiftKey) {
      if (document.activeElement === firstTabStop) {
        e.preventDefault()
        lastTabStop.focus()
      }
    } else {
      if (document.activeElement === lastTabStop) {
        e.preventDefault()
        firstTabStop.focus()
      }
    }
  }
}
