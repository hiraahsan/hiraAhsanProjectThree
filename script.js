
// declaring the score function which will tally up the score according to each house

const currentQuestion = 0;
let score = 0;

// onclick functions for submit next

//function that will calculate the scores for each house after each question is answered
$('form').on('submit', function (e) {
    //to prevent page from refreshing every time a form is submitted (i.e., when question is answered)
    e.preventDefault();
    //when radio button is checked off, record and store house name in a variable
    let answer = $(this).find('input:radio:checked').attr('data-house');

    if (answer === 'gryffindor') {
        score += 40;
        $(this).find('input:submit').attr('disabled', true);

    }
        else if(answer === "slytherin") {
        score += 10;
        $(this).find('input:submit').attr('disabled', true);
    }

        else if (answer === "hufflepuff") {
        score += 20;

        $(this).find('input:submit').attr('disabled', true);
        }
        else if (answer === "ravenclaw") {
        score += 30;
        $(this).find('input:submit').attr('disabled', true);
        }

    else {
        $(this).find('.pickOne').text('You have to answer to continue!');
        // alert to complete answer
    }
});

$('.nextButtonOne').on('click', function () {
    location.href = '#q2';
});

$('.nextButtonTwo').on('click', function () {
    location.href = '#q3';
});

$('.nextButtonThree').on('click', function () {
    location.href = '#q4';
});

$('.nextButtonFour').on('click', function () {
    location.href = '#q5';
});

$('.nextButtonFive').on('click', function () {
    location.href = '#submitFinal';
});

// results object to push to html once final score is calculated
const results = {
    gryffindor: {
        title: "Gryffindor!",
        description: `You might belong in Gryffindor,<br>
        Where dwell the brave at heart,<br>
        Their daring, nerve and chivalry,<br>
        Set Gryffindors apart.` ,
        image: `<iframe src="https://giphy.com/embed/Tl2AK8HOHj7SU" frameBorder="0"class="giphy-embed"></iframe> <p><a href="https://giphy.com/gifs/mic-harry-potter-hufflepuff-hogwarts-houses-Tl2AK8HOHj7SU">via GIPHY</a></p>`
    },

    slytherin: {
        title: "Slytherin!",
        description: `Or perhaps in Slytherin, <br>
        You'll make your real friends,<br>
        Those cunning folk use any means,<br>
        To achieve their ends.`,
        image: `<iframe src="https://giphy.com/embed/UTYINTtzZCs2DN4gsY"  frameBorder="0"class="giphy-embed"></iframe><p><a href="https://giphy.com/gifs/bobs-burgers-bobs-burgers-draco-malfoy-slytherin-UTYINTtzZCs2DN4gsY">via GIPHY</a></p>`
    },

    hufflepuff: {
        title: "Hufflepuff!",
        description: `You might belong in Hufflepuff,<br>
        Where they are just and loyal,<br>
        Those patient Hufflepuffs are true,<br>
        And unafraid of toil. `,
        image: `<iframe src="https://giphy.com/embed/jIhX9ZrJIKGic" frameBorder="0"class="giphy-embed" ></iframe> <p><a href="https://giphy.com/gifs/hogwarts-pottermore-sorting-jIhX9ZrJIKGic">via GIPHY</a></p>`
    },

    ravenclaw: {
        title: "Ravenclaw!",
        description: `Or yet in wise old Ravenclaw,<br>
        If you've a ready mind,<br>
        Where those of wit and learning,<br>
        Will always find their kind.`,
        image: `<iframe src="https://giphy.com/embed/EXhSJyrGvFv5C" frameBorder="0" class="giphy-embed"></iframe><p><a href="https://giphy.com/gifs/luna-lovegood-EXhSJyrGvFv5C">via GIPHY</a></p>`
    }

}

    // add up the final answers to find out what house they're in, then assign them

const finalAnswer = $('#submitFinal').on('click', function (e) {
    e.preventDefault();
    
    const answers = $('form').find('input:radio:checked');

        if (answers.length === 5) {

        if (score > 0 && score <= 80) {
            resultingWinner = results['slytherin']


        }
        else if (score > 80 && score <= 120) {
            resultingWinner = results['hufflepuff']

        }

        else if (score > 120 && score <= 160) {
            resultingWinner = results['ravenclaw']



        } else if (score > 160 && score <= 200) {
            resultingWinner = results['gryffindor']

        }
            $(this).find('#submitFinal').attr('disabled', true);


    } else {
        // add warning to complete all questions in order to see result.
        $('.answerAll').text('Answer all the questions to find out the result!');
    }

$('.resultContainer').html(`<br>${resultingWinner.image}<br><h2>${resultingWinner.title}</h2><p>${resultingWinner.description}</p><br><br>`);

});

$(document).ready(function() {
    finalAnswer;
});