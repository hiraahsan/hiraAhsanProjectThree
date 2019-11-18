
// object for default house scores

const houses = {
    gryffindor: 0,
    slytherin: 0,
    hufflepuff: 0,
    ravenclaw: 0
}

// onclick functions for submit next

$('.nextButtonOne').on('click', function() {
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

// $('.nextButtonOne').on('click', location.href = $(this).next('.questions'));




// $('.nextButtonOne').on('click', function(e) {
//     e.preventDefault;
//     location.href = $(this).next('.questions')});
// $('')


const quiz = [
       { choices: ["Tell the professor immediately – cheating is wrong, no matter what.",
    "Give them a high five for managing to sneak the quill into the exam.",
    " Encourage the other student to admit what they'd done to the professor. ",
    " Nothing, but if I hadn't come top of the class, I'd definitely tell the professor. "],
        answer: [1, 2, 3, 4]
    },
        { choices: ["Expelliarmus!",
"Protego!",
"Stupefy!",
"Crucio!"],
answer: [1, 2, 3, 4]
        },
    {choices: ["My ability to absorb new information.",
"My ability to make new friends.",
"My ability to get what I want.",
"My ability to keep secrets." ],
    answer: [1, 2, 3, 4]
},

    {choices: ["Sneaking into the Forbidden Forest at night on a dare.",
"Being put in detention after I was caught in the library after hours.",
        "Nothing! I'd never do anything to warrant a Howler.",
"Getting caught cheating in my Divination O.W.L."],
    answer: [1, 2, 3, 4]
},
    {choices: ["Owl", "Cat",
"Toad",
"Nothing.I can't be trusted to look after a pet!"],
    answer: [1, 2, 3, 4]
}
];



// init vars

const currentQuestion = 0;
let score = 0;

function question() {}

let choices = quiz[currentQuestion].choices,
choicesHtml = "";

console.log(quiz[currentQuestion].choices);


// const smoothScroll = (hash) => {
//     let $hash= $(hash);
//     $('html', 'body').animate(
//         {
//             scrollTop: $(hash).offset().top
//         }, 800, function() {
//             window.location.hash = hash;
//         }
//     )
// }

//function that will tally the scores for each house after each question is answered
$('form').on('submit', function (e) {
    //to prevent page from refreshing every time a form is submitted (i.e., when question is answered)
    e.preventDefault();
    //when radio button is checked off, record and store house name in a variable
    let answer = $(this).find('input:radio:checked').attr('data-house');


    console.log(answer);


    if (answer === 'gryffindor') {
        // houses['gryffindor'] += 40;
        score += 40;
        $(this).find('input:submit').attr('disabled', true);

    }
        else if(answer === "slytherin") {
            // houses['slytherin'] += 10;
        score += 10;
        $(this).find('input:submit').attr('disabled', true);
    }

        else if (answer === "hufflepuff") {
            // houses['hufflepuff'] += 20;
        score += 20;

        $(this).find('input:submit').attr('disabled', true);
        }
        else if (answer === "ravenclaw") {
            // houses['ravenclaw'] += 30;
        score += 30;
        $(this).find('input:submit').attr('disabled', true);
        }

    else {
        $(this).find('.pickOne').text('You have to answer to continue!');
        //add alert to complete answer
    }
});

console.log(Object.values(houses));

// results section to push to html once final score is calculated
const results = {
    gryffindor: {
        title: "Gryffindor!",
        description: `You might belong in Gryffindor,<br>
        Where dwell the brave at heart,<br>
        Their daring, nerve and chivalry,<br>
        Set Gryffindors apart.` ,
        image: `<iframe src="https://giphy.com/embed/Tl2AK8HOHj7SU" width="480" height="200" frameBorder="0"class="giphy-embed" allowFullScreen></iframe> <p><a href="https://giphy.com/gifs/mic-harry-potter-hufflepuff-hogwarts-houses-Tl2AK8HOHj7SU">via GIPHY</a></p>`
    },

    slytherin: {
        title: "Slytherin!",
        description: `Or perhaps in Slytherin, <br>
        You'll make your real friends,<br>
        Those cunning folk use any means,<br>
        To achieve their ends.`,
        image: `<iframe src="https://giphy.com/embed/UTYINTtzZCs2DN4gsY" width="480" height="270" frameBorder="0"class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bobs-burgers-bobs-burgers-draco-malfoy-slytherin-UTYINTtzZCs2DN4gsY">via GIPHY</a></p>`
    },

    hufflepuff: {
        title: "Hufflepuff!",
        description: `You might belong in Hufflepuff,<br>
        Where they are just and loyal,<br>
        Those patient Hufflepuffs are true,<br>
        And unafraid of toil. `,
        image: `<iframe src="https://giphy.com/embed/jIhX9ZrJIKGic" width="480" height="480" frameBorder="0"class="giphy-embed" allowFullScreen></iframe> <p><a href="https://giphy.com/gifs/hogwarts-pottermore-sorting-jIhX9ZrJIKGic">via GIPHY</a></p>`
    },

    ravenclaw: {
        title: "Ravenclaw!",
        description: `Or yet in wise old Ravenclaw,
If you've a ready mind,
Where those of wit and learning,
        Will always find their kind.`,
        image: `<iframe src="https://giphy.com/embed/10UJquJMEEgRvG" width="480" height="480" frameBorder="0"class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hpedit-luna-lovegood-hpgif-10UJquJMEEgRvG">via GIPHY</a></p>`
    }

}


// $('input:submit').on('click', function() {
//     $('input:submit').fadeOut('slow');
// });


    // add up the final answers to find out what house they're in
const finalAnswer = $('#submitFinal').on('click', function (e) {
    e.preventDefault();
    // $(this).find('#submitFinal').attr('disabled', true);


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

$('.resultContainer').html(`${resultingWinner.image}<br><h2>${resultingWinner.title}</h2><p>${resultingWinner.description}</p>`);
    // $(this).find('#submitFinal').attr('disabled', true);
    console.log(this);




    // if ()
    // let answerScore = houses[$(this)];
    // if (answers.length === 5) {

});

$(document).ready(function() {
    finalAnswer;
});