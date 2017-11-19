var tooltiper = (function() {
    const _def = {
        initClassName: 'tooltip-helper',
        tooltipClassName: 'tooltip-container',
        numMask: '--sum--',
        tooltipText: 'data-tooltip-text'
    }
    let elements = document.getElementsByClassName(_def.initClassName)

    let template = function(cls, text) {
        return '<div class="' + cls + '">' + text + '</div>'
    }

    function sumInText(el) {
        let sum = 0
        let text = el.innerText.split(' ')
        for (i = text.length; i--;) {
            if (!isNaN(text[i])) {
                sum += +text[i]
            }
        }
        return sum
    }

    function tooltipText(el, number) {
        if (el.getAttribute(_def.tooltipText))
            text = el.getAttribute(_def.tooltipText).replace(_def.numMask, number)
        else text = number || '?'
        return text
    }

    function show(el) {
        originContent = el.innerHTML
        let text = tooltipText(el, sumInText(el))
        el.innerHTML = originContent + template(_def.tooltipClassName, text)
    }

    function hide(el) {
        el.innerHTML = originContent
    }

    return {
        init: function() {
            for (var i = elements.length; i--;) {
                elements[i].addEventListener('mouseenter', (el) => show(el.target))
                elements[i].addEventListener('mouseleave', (el) => hide(el.target))
            }
        }
    }
}())