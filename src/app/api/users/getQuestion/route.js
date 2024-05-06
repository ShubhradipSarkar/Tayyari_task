//import { connect } from "@/DBConfig/DBConfig";
import { NextRequest, NextResponse } from "next/server";
import Question from "../../../../models/QuestionModel";
import {connect} from "../../../../DBConfig/DBConfig"
connect();

export async function POST(request, response) {
    // const session = await getServerSession(request, response, authOptions)
    try {
        

    } catch (error) {
        return NextResponse.json({ error: error.message },{ status: 500 });
    }
}

export async function GET(request) {
    try {
        const Questions = await Question.find({});
        //console.log(member);
        return NextResponse.json({
            Questions
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// export async function PUT(request) {
//     try {
//         const reqBody = await request.json();
//         const { year, folderName, img } = reqBody;
//         //const description_short = description.slice(0,50);
//         const folderFind = await Folder.findOne({ year: year });
        
//         // if(title!=="") {
//         //     Post.title=title;
//         // }
//         // if(description!==""){
//         //     Post.description=description;
//         //     Post.description_short=description_short;
//         // }
//         if(img === ""){
//             return NextResponse.json({ status: 500 });
//         }
//         console.log("folder searching =======", folderFind);
//         const found = folderFind.Folders;
//         console.log("found folder === ", found);
//         await found.push(img);
//         await found.save();
//         return NextResponse.json({
//             message: "Folder Updated",
//         });
//     } catch (error) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }
