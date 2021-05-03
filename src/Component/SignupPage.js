import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs"

const SignupPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [data, setData] = useState([]);
    const [showpassword, setShowpassword] = useState("false");
    const [showsecondpassword, setShowsecondpassword] = useState("false");
   

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            alert(" Both Password is not same ");
            return;
        }
        const newData = {
            name: name,
            email: email,
            password: password,
            confirmpassword: confirmpassword,
        };
        setData([...data, newData]);
        console.log(newData)
        
        setName("");
        setEmail("");
        setPassword("");
        setconfirmpassword("");
    };
    const tooglePassword = () => {
        setShowpassword(showpassword ? false : true);
    };
    const secondTooglePassword = () => {
        setShowsecondpassword(showsecondpassword ? false : true);
    };
    return (
        <>
            <div className=" signup-page d-flex justify-content-center">
                <div className="page-body mt-3">
                    <div style={{ textAlign: "center" }}>
                        <h2 className="text-white mt-5" style={{ textAlign: "center" }}>
                            Sign Up{" "}
                        </h2>
                        <FaUserCircle className="sign-icon" />
                    </div>
                    <div className="container">
                        <form onSubmit={onSubmit}>
                            <div className="form-group mt-4">
                                <h6>Name :-</h6>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-4">
                                <h6>Email :-</h6>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email Id"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            
                            </div>
                            
                            <div className="form-group mt-4">
                                <h6>Password :-</h6>
                                <input
                                    type={showpassword ? "password" : "text"}
                                    placeholder="Enter Your Password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <BsEyeFill
                                    className="eye-icon"
                                    onClick={tooglePassword}/>
                            </div>
                            <div className="form-group mt-4">
                                <h6>Confirm Password :-</h6>
                                <input
                                    type={showsecondpassword ? "password" : "text"}
                                    placeholder="Enter Your confirm Password"
                                    className="form-control"
                                    value={confirmpassword}
                                    onChange={(e) => setconfirmpassword(e.target.value)}
                                />
                                <BsEyeFill
                                    className="eye-icon"
                                    onClick={secondTooglePassword}
                                />
                            </div>
                            <div className="form-group mt-5">
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="form-control bg-success"
                                />
                            </div>
                        </form>
                        {/* <div>
                            {data.map((currData) => {
                                return (
                                    <div>
                                        <p style={{ color: "whit" }}>{currData.name}</p>
                                    </div>
                                );
                            })}
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupPage;
