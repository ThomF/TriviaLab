


export class Question {

        constructor(data){
            this.difficulty = data.difficulty;
            this.question = data.question;
            this.answer = data.correct_answer
            this.wrong = data.incorrect_answers
        }





        get QuestionCardTemplate(){
            return /*html */`
            <div class="col-12">
                <div class="card bg-dark">
                    <p>${this.question}</p>
                </div>
                .<div class="row justify-content-center align-items-center g-2 bg-dark">
                    <div class="col-3">${this.answer}</div>
                    <div class="col-3">${this.wrong}</div>
                    <div class="col-3">${this.wrong}</div>
                    <div class="col-3">${this.wrong}</div>
                </div>
            </div>
            
            `
        }

}


