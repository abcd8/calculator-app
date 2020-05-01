const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')
const previousKeyType = calculator.dataset.previousKeyType

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    // Remove class is-depressed
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
    if (!action) {
      if (displayedNum === '0' || previousKeyType) {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
    }
    switch (action) {
      case 'add':
      case 'subtract':
      case 'multiply':
      case 'divide':
        key.classList.add('is-depressed')
        // Add custom attribute
        calculator.dataset.previousKeyType = 'operator'
        calculator.dataset.firstValue = displayedNum
        calculator.dataset.operator = action
        break;
      case 'decimal':
        display.textContent = displayedNum + '.'
        break;
      case 'calculate':
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum
        display.textContent = calculate(firstValue, operator, secondValue)
        break;
      default:
        console.log('No pressed key')
    }
  }
})

const calculate = (n1, operator, n2) => {
  let result = '';
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);
  switch (operator) {
    case 'add':
      return result = n1 + n2
    case 'subtract':
      return result = n1 - n2
    case 'multiply':
      return result = n1 * n2
    case 'divide':
      return result = n1 / n2
    default:
      break;
  }
}

