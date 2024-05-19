import { connect } from "@/DbConn/dbConn";
import User from "@/models/userModal";
import {NextResponse } from 'next/server'


connect();

export async function POST(req,res){

    try{
 
    const {username,email,password} = await req.json();

    const usersame = await User.findOne({email})
    if(usersame){
     return NextResponse.json({error:" Email already registered"},{status:400})
    }

     else{

        const user = new User({username, email, password});
        await user.save();
        return NextResponse.json({message:"Register successfully!"},{status:200})
    }

}catch(err){
    return NextResponse.json({err:"error"},{status:500})
}

}