const kimigayo = new Audio('https://www.mod.go.jp/gsdf/fan/sound/download/kimigayo.mp3')
kimigayo.loop = true

$(document).ready(function(){
    $("body").bind("touchstart touchmove scroll mousedown DOMMouseScroll mousewheel keyup", function(){
        if (kimigayo.paused) {
            kimigayo.play()
        }
    })

    $('form').keyup(calc)

    $('#hande').change(function () {
        calc()
        if (this.checked) {
            $('#kadou').prop("disabled", false)
            $('#kadou_remaining').prop("disabled", false)
        } else {
            $('#kadou').prop("disabled", true)
            $('#kadou_remaining').prop("disabled", true)
        }
    })

    $('#darkMode').change(function () {
        if (this.checked) {
            $('html').attr('data-bs-theme', 'dark')
        } else {
            $('html').attr('data-bs-theme', 'light')
        }
    })

    function calc() {
        const target_av = parseInt($("#target_av").val())
        const kadou = parseInt($("#kadou").val())
        const noruma_total = parseFloat($("#noruma_total").val())
        const uriage = parseFloat($("#uriage").val())
        const kadou_remaining = parseInt($("#kadou_remaining").val())
        const noruma_remaining = parseFloat($("#noruma_remaining").val())
        const cb = $('#hande')
        let result = 0
        
        if (cb.is(':checked')) {
            if (target_av && kadou && noruma_total && uriage && kadou_remaining && noruma_remaining) {
                result = (target_av * 0.01 - (kadou + kadou_remaining) * 0.001) * (noruma_total + noruma_remaining) - uriage
            } else {
                result = ""
            }
        } else {
            if (target_av && noruma_total && uriage && noruma_remaining) {
                result = target_av * 0.01 * (noruma_total + noruma_remaining) - uriage
            } else {
                result = ""
            }
        }
        if (result < 0 || result === 0) {
            $('#result').val("目標達成済") 
        } else if (result != "") {
            $('#result').val(result.toFixed(3))
        } else {
            $('#result').val("")
        }
    }
})
