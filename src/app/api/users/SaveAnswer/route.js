import { NextRequest, NextResponse } from "next/server";
import Answer from "../../../../models/Answers";
import {connect} from "../../../../DBConfig/DBConfig"
connect();

export async function POST(request, response) {
    try {
        const reqBody = await request.json()
        
        // Save response
        const NewAns = new Answer({
            reqBody
        })
        await NewAns.save();

        return NextResponse.json({
            message: "Answer Uploaded",
            success: true,
        })

    } catch (error) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}


