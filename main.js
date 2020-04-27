const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = key.textContent
        console.log('keyContent::', keyContent)
        console.log('displayedNum::', displayedNum)
        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyContent + displayedNum
            } else {
                display.textContent = keyContent
            }
        }
        switch (action) {
            case 'add':
            case 'subtract':
            case 'multiply':
            case 'divide':
                console.log('operator key')
                break;
            case 'decimal':
                console.log('decimal key')
                break;
            case 'calculate':
                console.log('equal key')
                break;
            default:
                console.log('No pressed key')
        }
    }
})

