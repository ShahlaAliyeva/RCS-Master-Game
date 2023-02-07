let rulesImage = $('.rules-image')
// let darkerBackground = $('.darker-background').css('display', 'block')
console.log(rulesImage);

$(document).ready(function () {
    $('.rules button').on('click', function() {
        $('.rules-image').css('display', 'block')

        if($(rulesImage).css('display') == 'block') {
            $('.darker-background').css('display', 'block')
        } else {
            $('.darker-background').css('display', 'none')
        }
    })

    
    
});