if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
}

const kimigayo = new Audio('/assets/kimigayo.opus')
kimigayo.loop = true

document.addEventListener('DOMContentLoaded',  () => {
    const hikokuminLS = localStorage.getItem('hikokuminLS')
    !hikokuminLS && localStorage.setItem('hikokuminLS', 'false')
    document.getElementById('hikokumin').checked = hikokuminLS === 'true'

    document.body.addEventListener("touchstart", playKimigayo)
    document.body.addEventListener("mousedown", playKimigayo)

    document.querySelector('#calculator').addEventListener('keyup', () => calc())

    document.getElementById('hande').addEventListener('change', (e) => {
        document.getElementById('kadou-total').disabled = !e.target.checked
        document.getElementById('kadou-remaining').disabled = !e.target.checked
        calc()
    })

    document.getElementById('hikokumin').addEventListener('change', (e) => {
        e.target.checked ? kimigayo.pause() : kimigayo.play()
        document.title = e.target.checked ? "計算機" : "🎌日本万歳🎌"
        localStorage.setItem('hikokuminLS', e.target.checked)
        calc()
    })

    document.getElementById('share').addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: '🎌日本万歳🎌',
                text: '日本同胞国民諸君へ',
                url: 'https://u28ozjhp.github.io/'
            })
        }
    })
})

function playKimigayo() {
    if (kimigayo.paused && !document.querySelector('#hikokumin').checked) {
        kimigayo.play()
    }
}

function calc() {
    const targetAV = parseFloat(document.querySelector('#target-av').value)
    const norumaTotal = parseFloat(document.querySelector('#noruma-total').value)
    const uriage = parseFloat(document.querySelector('#uriage').value)
    const norumaRemaining = parseFloat(document.querySelector('#noruma-remaining').value)

    const resultField = document.querySelector('#resultField')
    resultField.value = ""
    
    if (isNaN(targetAV) || isNaN(norumaTotal) || isNaN(uriage) || isNaN(norumaRemaining)) return
    
    let result
    if (document.querySelector('#hande').checked) {
        const kadouTotal = parseFloat(document.querySelector('#kadou-total').value)
        const kadouRemaining = parseFloat(document.querySelector('#kadou-remaining').value)
        if (isNaN(kadouTotal) || isNaN(kadouRemaining)) return
        result = (targetAV * 0.01 - (kadouTotal + kadouRemaining) * 0.001) * (norumaTotal + norumaRemaining) - uriage
    } else {
        result = targetAV * 0.01 * (norumaTotal + norumaRemaining) - uriage
    }
    
    if (result < 0 || result === 0) {
        resultField.value = document.querySelector('#hikokumin').checked ? "目標達成済" : "🎌目標達成済🎌"
    } else {
        resultField.value = parseFloat(result.toFixed(3))
    }
}
