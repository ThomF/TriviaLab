import { open_tbd } from "./AxiosService.js";
import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";

class QuestionsService {

    async getQuestions(){
        const res = await open_tbd.get('api.php?amount=4&category=15&difficulty=hard')
        console.log('WORKING ON IT', res);

        console.log(res.data)

        const QuestionsNeeded = res.data.filter(q => q.questions).map(q => new Question(q))
        appState.questions = QuestionsNeeded
    }


}

export const questionsService = new QuestionsService()