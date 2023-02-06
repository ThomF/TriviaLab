


export class Question {

        constructor(data){
            this.difficulty = data.difficulty;
            this.question = data.question;
            this.answer = data.correct_answer
            this.wrong = data.wrong_answer
        }





        get QuestionCard(){
            return `
            <div class="col-12">
            <div class="row">
            <div class="col-12">
                <div class="card">
                <div class="card-body">
                    <h4>${this.question}</h4>
                </div>
                </div>
                
            </div>
            </div>
        </div>  
            
            `
        }

}


