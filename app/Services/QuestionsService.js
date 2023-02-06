import { open_tbd } from "./AxiosService.js";
import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";

class QuestionsService {

    async getQuestions(){
        const res = await open_tbd.get('api.php?amount=1&category=15&difficulty=hard')
        console.log('WORKING ON IT', res);

        console.log('this is the res.data', res.data)

        const QuestionsNeeded = res.data.results.map(q => new Question(q))
        appState.questions = QuestionsNeeded
    }


}

export const questionsService = new QuestionsService()