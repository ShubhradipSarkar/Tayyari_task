import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const StudentSchema = new mongoose.Schema({
    StudentName:{
        type: String,
    },
    Student_img: {
        type: String,
    },
    
})
const Student = mongoose.models.Student || mongoose.model("Student", StudentSchema);
export default Student;