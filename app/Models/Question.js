


export class Question {

        constructor(data){
            this.difficulty = data.difficulty;
            this.question = data.question;
            this.answer = data.correct_answer
            this.wrong = data.incorrect_answers
        }





        get QuestionCardTemplate(){
            return /*html */`
            <div class="col-12 mt-3">
                <div class="card bg-dark">
                    <p>${this.question}</p>
                </div>
                .<div class="row justify-content-center align-items-center g-2 bg-dark">
                    <div class="col-3 border-light">${this.answer}</div>
                    <div class="col-3">${this.wrong[0]}</div>
                    <div class="col-3">${this.wrong[1]}</div>
                    <div class="col-3">${this.wrong[2]}</div>
                </div>
            </div>
            
            `
        }

}


