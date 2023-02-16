let rulesImage = $('.rules-image')
// let darkerBackground = $('.darker-background').css('display', 'block')
console.log(rulesImage);

$(document).ready(function () {
    $('.rules button').on('click', function() {
        $(rulesImage).fadeIn('slow');
        $(rulesImage).css('display', 'block')


        if($(rulesImage).css('display') == 'block') {
            $('.darker-background').css('display', 'block')
        } 
    })

    $('.fa-xmark').on('click', function() {
        $(rulesImage).fadeOut('slow');
        $(rulesImage).css('display', 'none')

        if($(rulesImage).css('display') == 'none') {
            $('.darker-background').css('display', 'none')
        } 
    })
});