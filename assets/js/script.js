var myQuestions = [
	{
		question: "What is a variable?",
		answers: {
			a: 'a magazine',
			b: 'container that stores data',
			c: 'a train station'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is a primitive data type?",
		answers: {
			a: 'simple data object that is not an object or a method',
			b: 'a toothpaste',
			c: 'a monkey wrench'
		},
		correctAnswer: 'a'
	},
	{
		question: "What is an array?",
		answers: {
			a: 'a function that displays variables',
			b: 'a variable that eats numbers',
			c: 'single variable that contains a list of values'
		},
		correctAnswer: 'c'
	}
];
function makeQuiz(questions, quizBox, resultsBox, submitButton){

	function showQuestions(questions, quizBox){
		var output =[];
		var answers;

		for(var i=0; i<questions.length; i++){
			answers = [];
			for(letter in questions[i].answers){
				answers.push(
					'<label>'
					+ '<input type="radio" name="question'+i+'"value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
				);	
		}
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
		quizBox.innerHTML = output.join('');
		}
		showQuestions(questions, quizBox);
	}
	function showResults(questions, quizBox, resultsBox){
	function 
    showQuestions(questions, quizBox);
submitButton.onclick = function(){
		showResults(questions, quizBox, resultsBox);

		//Add a timer to the questions//

	