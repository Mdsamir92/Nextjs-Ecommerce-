// import { connect } from "@/DbConn/dbConn";
// import User from "@/models/userModal";
// import { NextResponse } from 'next/server'
// import  jwt  from "jsonwebtoken";


// connect();

// export async function POST(req, res) {

//   try {

//     const { email, password } = await req.json();
//     const usersame = await User.findOne({ email, password })
  
//     if (!usersame) {
//       return NextResponse.json({ error: " please register than login" }, { status: 400 })
//     }

//     else {
//     const tokenData = {
//     id:usersame._id,
//     username:usersame.username,
//     email:usersame.email,
//     }
//      const token =    jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:"1d"})
//      const response =  NextResponse.json({message: "Login successfully!" }, { status: 200 })

//     response.cookies.set("token",token,{
//       httpOnly:true,
//     })
//     return response;

//   }


//   } catch (err) {
//     return NextResponse.json({ err: "error" }, { status: 500 })
//   }

// }
