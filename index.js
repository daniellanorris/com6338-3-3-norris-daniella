
var questionsArr = [
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
];

function runQuiz() {
    var score = 0;
    var total = 5;
    for(var i=0; i < questionsArr.length; i++) {
     var response = window.confirm(questionsArr[i].question);
     if (response == questionsArr[i].answer) {
         score++;
     } else {}
 }  var finalScore = 100 *(score/total);
    alert('your score is  ' + Math.round(finalScore) + '%');
}
