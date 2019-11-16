
// object for default house scores

const houses = {
    gryffindor: 0,
    slytherin: 0,
    hufflepuff: 0,
    ravenclaw: 0
}


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
        description: "insert text",
        image: "insert image here"
    },

    slytherin: {
        title: "Slytherin!",
        description: "insert text",
        image: "insert image here"
    },

    hufflepuff: {
        title: "Hufflepuff!",
        description: "insert text",
        image: "insert image here"
    },

    ravenclaw: {
        title: "Ravenclaw!",
        description: "insert text",
        image: "insert image here"
    }

}


// $('input:submit').on('click', function() {
//     $('input:submit').fadeOut('slow');
// });


    // add up the final answers to find out what house they're in
const finalAnswer = $('#submitFinal').on('click', function (e) {
    e.preventDefault();

    let answers = $('form').find('input:radio:checked');

    //  let houseKeys = Object.keys(houses);
    //     let houseArray = houseKeys.map(function(key) {
    //         return {
    //             value: key,
    //             score: houses[key]
    //         }
    //     });

        // const score = ;
        // console.log(houseArray);

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



    } else {
        // add warning to complete all questions in order to see result.
        $('.answerAll').text('Answer all the questions to find out the result!');
    }

    // if ()
    // let answerScore = houses[$(this)];
    // if (answers.length === 5) {
    $('.resultContainer').append(`<h2>${resultingWinner.title}</h2><p>${resultingWinner.description}</p>`);
      
});

$(document).ready(function() {
    finalAnswer;
});