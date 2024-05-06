import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const QuestionSchema = new mongoose.Schema({
    question:{
        type: String,
    },
    question_img: {
        type: String,
    },
    options: {
        type: [String],
    },
    correctOption:{
        type: String,
    },
    answer : {
        type: String,
    },
    answer_img: {
        type: String,
    }
})
const Question = mongoose.models.question || mongoose.model("question", QuestionSchema);
export default Question;