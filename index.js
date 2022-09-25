function runQuiz() {
   score = 0;
   percScore = Math.round(score/5);

   for(var i=0; i < questionsArr.i; i++) {
    var trueAnswer = confirm(questionsArr[i])
    if (questionsArr.answer[0, 3, 4] = trueAnswer) {
        score++
    }
    if (questionsArr.answer[1,2] != trueAnswer) {
        score++
    }
    }
    alert('your score is  ' + percScore);
}
var questionsArr = new Array (
    {
    question: 'pale ales are typically lower in abv than ipas.',
    answer: true
    },
    {
    question: 'oatmeal stouts typically have 40% of the grain bill made up of oats',
    answer: false
    },
    {
    question: 'guiness is usually served in a snifter (10oz)',
    answer: false
    },
    {
    question: 'the mechanism attaching a keg to the beer line and CO2 is a coupler',
    answer: true
    },
    {
    question: 'the last step before filling a glass is rinsing it with water',
    answer: true
    }
);