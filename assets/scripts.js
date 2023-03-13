const kimigayo = new Audio('https://www.mod.go.jp/gsdf/fan/sound/download/kimigayo.mp3')
kimigayo.loop = true

$(document).ready(function(){
    $("body").on("touchstart touchmove scroll mousedown DOMMouseScroll mousewheel keyup", function() {
        if (kimigayo.paused && !$('#hikokumin').prop('checked')) {
            kimigayo.play();
        }
    });

    $('form').keyup(calc)

    $('#hande').change(function () {
        calc()
        const isHandeChecked = this.checked
        $('#kadou, #kadou_remaining').prop("disabled", !isHandeChecked)
    });

    $('#hikokumin').change(function () {
        this.checked ? kimigayo.pause() : kimigayo.play()
    })

    function calc() {
        const target_av = parseInt($("#target_av").val())
        const kadou = parseInt($("#kadou").val())
        const noruma_total = parseFloat($("#noruma_total").val())
        const uriage = parseFloat($("#uriage").val())
        const kadou_remaining = parseInt($("#kadou_remaining").val())
        const noruma_remaining = parseFloat($("#noruma_remaining").val())
        let result = ""
        
        if ($('#hande').is(':checked')) {
            if (target_av && kadou && noruma_total && uriage && kadou_remaining && noruma_remaining) {
                result = ((target_av * 0.01 - (kadou + kadou_remaining) * 0.001) * (noruma_total + noruma_remaining) - uriage).toFixed(3)
            } else {
                result = ""
            }
        } else {
            if (target_av && noruma_total && uriage && noruma_remaining) {
                result = (target_av * 0.01 * (noruma_total + noruma_remaining) - uriage).toFixed(3)
            } else {
                result = ""
            }
        }

        $('#resultField').val(parseFloat(result) <= 0 ? "目標達成済" : result)
    }
})
