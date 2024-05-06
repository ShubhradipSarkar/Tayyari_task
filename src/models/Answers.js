import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const AnswerSchema = new mongoose.Schema({
    StudentName:{
        type: String,
    },
    Student_id: {
        type: String,
    },
    question_id:{
        type: String,
    },
    selectedOption:{
        type: String,
    },
    
})
const Answer = mongoose.models.Answer || mongoose.model("Answer", AnswerSchema);
export default Answer;