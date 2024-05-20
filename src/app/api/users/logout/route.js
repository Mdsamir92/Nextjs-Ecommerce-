// import { connect } from "@/DbConn/dbConn";
// import { NextResponse } from 'next/server'

// connect();


// export async function POST(){
//     try{

//       const response = NextResponse.json({message:"Logout successfully",success:true})

//         response.cookies.set("token","",{
//             httpOnly:true,
//             expires: new Date()
//         },)
//         return response

//     }
//    catch(err){
//     return NextResponse.json({ err: "error" }, { status: 500 })
//    }
// }

