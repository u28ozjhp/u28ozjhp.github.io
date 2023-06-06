const kimigayo = new Audio('assets/kimigayo.mp3')
kimigayo.loop = true

document.addEventListener('DOMContentLoaded', function() {
    
    document.body.addEventListener("touchstart", playKimigayo)
    document.body.addEventListener("mousedown", playKimigayo)

    document.querySelector('#calculator').addEventListener('keyup', () => calc())

    document.querySelector('#hande').addEventListener('change', function() {
        document.querySelector('#kadou').disabled = !this.checked
        document.querySelector('#kadou_remaining').disabled = !this.checked
        calc()
    })

    document.querySelector('#hikokumin').addEventListener('change', function() {
        this.checked ? kimigayo.pause() : kimigayo.play()
        calc()
    })
})

function playKimigayo() {
    if (kimigayo.paused && !document.querySelector('#hikokumin').checked) {
        kimigayo.play()
    }
}

function calc() {
    const target_av = parseFloat(document.querySelector('#target_av').value)
    const kadou = parseFloat(document.querySelector('#kadou').value)
    const noruma_total = parseFloat(document.querySelector('#noruma_total').value)
    const uriage = parseFloat(document.querySelector('#uriage').value)
    const kadou_remaining = parseFloat(document.querySelector('#kadou_remaining').value)
    const noruma_remaining = parseFloat(document.querySelector('#noruma_remaining').value)

    let result
    const resultField = document.querySelector('#resultField')
    resultField.value = ""

    if (isNaN(target_av) || isNaN(noruma_total) || isNaN(uriage) || isNaN(noruma_remaining)) return

    if (document.querySelector('#hande').checked) {
        if (isNaN(kadou) || isNaN(kadou_remaining)) return
        result = (target_av * 0.01 - (kadou + kadou_remaining) * 0.001) * (noruma_total + noruma_remaining) - uriage
    } else {
        result = target_av * 0.01 * (noruma_total + noruma_remaining) - uriage
    }
    
    if (result < 0 || result === 0) {
        resultField.value = document.querySelector('#hikokumin').checked ? "目標達成済" : "🎌目標達成済🎌"
    } else {
        resultField.value = result.toFixed(3)
    }
}