if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
}

const kimigayo = new Audio('/assets/kimigayo.opus')
const playKimigayo = () => kimigayo.paused && !document.getElementById('hikokumin').checked && kimigayo.play()
kimigayo.loop = true

const calc = () => {
    const targetAV = parseFloat(document.getElementById('target-av').value)
    const norumaTotal = parseFloat(document.getElementById('noruma-total').value)
    const uriage = parseFloat(document.getElementById('uriage').value)
    const norumaRemaining = parseFloat(document.getElementById('noruma-remaining').value)

    const resultField = document.getElementById('result')
    resultField.value = ""
    
    if (isNaN(targetAV) || isNaN(norumaTotal) || isNaN(uriage) || isNaN(norumaRemaining)) return
    
    let result
    if (document.getElementById('hande').checked) {
        const kadouTotal = parseFloat(document.getElementById('kadou-total').value)
        const kadouRemaining = parseFloat(document.getElementById('kadou-remaining').value)
        if (isNaN(kadouTotal) || isNaN(kadouRemaining)) return
        result = (targetAV * 0.01 - (kadouTotal + kadouRemaining) * 0.001) * (norumaTotal + norumaRemaining) - uriage
    } else {
        result = targetAV * 0.01 * (norumaTotal + norumaRemaining) - uriage
    }
    
    if (result < 0 || result === 0) {
        resultField.value = document.getElementById('hikokumin').checked ? "目標達成済" : "🎌目標達成済🎌"
    } else {
        resultField.value = parseFloat(result.toFixed(3))
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const hikokuminLS = localStorage.getItem('hikokuminLS')
    !hikokuminLS && localStorage.setItem('hikokuminLS', 'false')
    document.getElementById('hikokumin').checked = hikokuminLS === 'true'
    document.title = hikokuminLS === 'true' ? "計算機" : "🎌日本万歳🎌"

    document.body.addEventListener("touchstart", playKimigayo)
    document.body.addEventListener("mousedown", playKimigayo)

    document.getElementById('calculator').addEventListener('keyup', () => calc())

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

    ;(async () => {
        const today = new Date().toISOString().slice(0, 10)
        const response = await fetch(`https://holidays-jp.github.io/api/v1/${today.slice(0,4)}/date.json`)
        const holidays = await response.json()
        const holidayName = holidays[today]
        if (holidayName && !holidayName.includes("振替休日")) {
            document.body.classList.add('🎌')
        }
    })()
})
