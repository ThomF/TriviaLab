import { appState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { questionsService } from "../Services/QuestionsService.js";



function _drawQuestions(){
    let template =''
    appState.questions.forEach(q => template += q.question)
    setHTML('question-container', template)
}


export class QuestionsController{

    constructor(){
        // _drawQuestions()
        appState.on('questions', _drawQuestions)
        console.log("work")
        this.getQuestions()
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions()
        } catch (error) {
            Pop.error(error)
        }
    }



}