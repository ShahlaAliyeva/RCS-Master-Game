let rulesImage = $('.rules-image')
// let darkerBackground = $('.darker-background').css('display', 'block')
console.log(rulesImage);

$(document).ready(function () {
    $('.rules button').on('click', function() {
        $(rulesImage).fadeIn('slow');
        $(rulesImage).css('display', 'flex')


        if($(rulesImage).css('display') == 'flex') {
            $('.darker-background').css('display', 'block')
            $('body').css('owerflow', 'hidden')
        } 
    })

    $('.fa-xmark').on('click', function() {
        $(rulesImage).fadeOut('slow');
        $(rulesImage).css('display', 'none')

        if($(rulesImage).css('display') == 'none') {
            $('.darker-background').css('display', 'none')
            $('body').css('owerflow', 'auto')
        } 
    })

    // Game Side

    let choisesArray = ['lizard', 'paper', 'rock', 'scissors', 'spock']
    let imgArray = ['./assets/images/icon-lizard.svg', './assets/images/icon-paper.svg', './assets/images/icon-rock.svg', './assets/images/icon-scissors.svg', './assets/images/icon-spock.svg']
    let borderColors = ['hsl(261, 72%, 63%)', 'hsl(230, 89%, 65%)', 'hsl(349, 70%, 56%)', 'hsl(40, 84%, 53%)','hsl(189, 58%, 57%)']
    

    // setTimeout(chooseComputerCommand, 5000)

    

    // Duello Side User Choice 
    $('.bck-img .choices').on('click', function() {
        $('.bck-img').fadeIn();
        $('.duello-section').fadeIn();
        $('.bck-img').css('display', 'none')
        $('.duello-section').css('display','flex')

        var clickedBtn = $(this).attr('id');
        console.log('User choise: ', clickedBtn);

        /* function userChoise (clickedElement) {
        //     clickedElement = this.clickedBtn
        //     console.log('function: ', clickedElement);
        //     return clickedElement
        }*/

        let choosenElementIndex = choisesArray.indexOf(clickedBtn)
        console.log(choosenElementIndex);
        $('.your-choise').append(
            `<img src='${imgArray[choosenElementIndex]}' alt='${choisesArray[choosenElementIndex]}'>`
        )
        $('.your-choise').css('border-color',`${borderColors[choosenElementIndex]}`)

        // Duello Side Comp Choice
    function chooseComputerCommand () {
        let index = Math.floor(Math.random() * (choisesArray.length))
        let randomChoise = choisesArray[index]
        console.log(`${choisesArray}\n Index: ${index} and element is ${randomChoise}`);

        $('.comp-choise').append(
            `<img src='${imgArray[index]}' alt='${randomChoise}'/>`
        );

        $('.comp-choise').css('background-color', '#fff');
        $('.comp-choise').css('border','15px solid transparent')
        $('.comp-choise').css('border-color',`${borderColors[index]}`)

        return randomChoise
    }

        //Choose Winner
        let compChoise = chooseComputerCommand()
        // console.log('sdfkfsbjljv: ', setTimeout(chooseComputerCommand, 3000));
        let score = parseInt($('.score-side .score').text())
        // console.log('score: ', score);
        function chooseWinner() {
            var width = $(window).width();
            console.log('Width', Math.ceil($('.duello-section').width()) == Math.ceil(35 / 100 * width));
            if(Math.ceil($('.duello-section').width()) == Math.ceil(35 / 100 * width)) {
                $('.duello-section').css('width', '55%')
            } else if (Math.ceil($('.duello-section').width()) == Math.ceil(85 / 100 * width)) {
                $('.duello-section').css('width', '90%')
            }
            $('.result-side').css('display', 'flex')
            $('.score-side .score').fadeIn()
            if(clickedBtn === compChoise) {
                $('.result-side').append(
                    '<button>play again</button>'
                )
                $('.result-side span').text('Equality')
            } else if ((clickedBtn==='lizard' && compChoise==='spock') || (clickedBtn==='lizard' && compChoise==='paper')){
                $('.result-side span').text('You win')
                $('.result-side').append(
                    '<button>play again</button>'
                )
                score += 1
                $('.score-side .score').fadeOut()
            } else if ((clickedBtn==='lizard' && compChoise==='scissors') || (clickedBtn==='lizard' && compChoise==='rock')) {
                $('.result-side').append(
                    '<button>play again</button>'
                )
                $('.result-side span').text('you lose')
            } else if ((clickedBtn==='spock' && compChoise==='rock') || (clickedBtn==='spock' && compChoise==='scissors')){
                $('.result-side span').text('You win')
                $('.result-side').append(
                    '<button>play again</button>'
                )
                score += 1
                $('.score-side .score').fadeOut()
            } else if ((clickedBtn==='spock' && compChoise==='lizard') || (clickedBtn==='spock' && compChoise==='paper')) {
                $('.result-side').append(
                    '<button>play again</button>'
                )
                $('.result-side span').text('you lose')
            } else if ((clickedBtn==='scissors' && compChoise==='paper') || (clickedBtn==='scissors' && compChoise==='lizard')){
                $('.result-side span').text('You win')
                $('.result-side').append(
                    '<button>play again</button>'
                )
                score += 1
                $('.score-side .score').fadeOut()
            } else if ((clickedBtn==='scissors' && compChoise==='rock') || (clickedBtn==='scissors' && compChoise==='spock')) {
                $('.result-side').append(
                    '<button>play again</button>'
                )
                $('.result-side span').text('you lose')
            } else if ((clickedBtn==='paper' && compChoise==='rock') || (clickedBtn==='paper' && compChoise==='spock')){
                $('.result-side span').text('You win')
                $('.result-side').append(
                    '<button>play again</button>'
                )
                score += 1
                $('.score-side .score').fadeOut()
            } else if ((clickedBtn==='paper' && compChoise==='scissors') || (clickedBtn==='paper' && compChoise==='lizard')) {
                $('.result-side').append(
                    '<button>play again</button>'
                )
                $('.result-side span').text('you lose')
            } else if ((clickedBtn==='rock' && compChoise==='lizard') || (clickedBtn==='rock' && compChoise==='scissors')){
                $('.result-side span').text('You win')
                $('.result-side').append(
                    '<button>play again</button>'
                )
                score += 1
                $('.score-side .score').fadeOut()
            } else if ((clickedBtn==='rock' && compChoise==='paper') || (clickedBtn==='rock' && compChoise==='spock')) {
                $('.result-side').append(
                    '<button>play again</button>'
                )
                $('.result-side span').text('you lose')
            }

            console.log(`New score: ${score}`);
            $('.score-side .score').fadeIn()
            $('.score-side .score').text(`${score}`)

            // if($('.result-side span').text('You win')) {
            //     score += 1
            //     console.log('New score: ', score);
            // }

            $('.result-side button').on('click', function() {
                $('.bck-img').fadeIn();
                $('.duello-section').fadeOut();
                if(Math.ceil($('.duello-section').width()) == Math.ceil(35 / 100 * width)) {
                $('.duello-section').css('width', '55%')
            } else if (Math.ceil($('.duello-section').width()) == Math.ceil(85 / 100 * width)) {
                $('.duello-section').css('width', '90%')
            }
                $('.result-side').css('display', 'none')
                $('.bck-img').css('display', 'flex')
                $('.duello-section').css('display','none')
                //remove everything in last game
                $('.your-choise img').remove();
                $('.comp-choise img').remove()
                $('.result-side button').remove()
                console.log('Play Again button clicked');
            })

            console.log(`User: ${clickedBtn} and Comp: ${compChoise}`);
        }

        setTimeout(chooseWinner, 2000);
    })

});