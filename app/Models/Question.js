


export class Question {

        constructor(data){
            this.difficulty = data.difficulty;
            this.Question = data.question;
            this.answer = data.correct_answer
        }





        get QuestionCard(){
            return `
            <div class="col-12">
            <div class="row">
            <div class="col-12">
                <div class="card">
                <div class="h1">
                    ${this.Question}
                </div>
                </div>
                <div>
                <div class="card pt-2 mt-2">
                    <h2></h2>
                </div>
                <div class="card pt-2 mt-2">
                    <h2>No</h2>
                </div>
                </div>
            </div>
            </div>
        </div>  
            
            `
        }

}


