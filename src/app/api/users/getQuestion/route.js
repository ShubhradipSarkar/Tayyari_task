import { NextRequest, NextResponse } from "next/server";
import Question from "../../../../models/QuestionModel";
import {connect} from "../../../../DBConfig/DBConfig"
connect();

export async function POST(request, response) {
   
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

