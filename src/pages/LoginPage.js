import React from "react";

const LoginPage = () =>{
    return (
        <div className="w-screen h-screen bg-orange-200 flex justify-center">
            <div className="w-96 bg-white h-fit p-5 rounded-3xl shadow-2xl mt-24" >
                <div>
                    <p className="text-xl w-full flex justify-center">LOGIN</p>
                </div>
                <div className="my-5">
                    <label>Email</label>
                    <input type="email" className="w-full p-2 border-2 rounded-lg" placeholder="sample@gmail.com"></input>
                </div>
                <div className="my-5">
                    <label>Password</label>
                    <input type="password" className="w-full p-2 border-2 rounded-lg" placeholder="password"></input>
                </div>
                <div className="w-full flex justify-center">
                    <button className="border-2 bg-blue-500 rounded-lg py-2 px-5 text-white">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;