var Quiz = function (Question, Options, Answer) {
    this.Question = Question;
    this.Options = Options;
    this.Answer = Answer;
    Ask: function () {
        console.log("Question:" + Quiz.Question + "?" + "1" + Options[0] + "2" + Options[1] + "3" + Options[2]);
    }
}

let Best = new Quiz("Who is My Best Friend", [Lebron, Curry, Durant]  2);
Quiz.ask();
