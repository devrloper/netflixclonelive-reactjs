import React, { useState } from 'react';
import Account1 from "../assets/Images/Account1.png";
import Account2 from "../assets/Images/Account2.png";
import Account3 from "../assets/Images/Account3.png";
import "../css/Accounts.css";

const ProfileSelection = () => {
    const [count, setCount] = useState("Who's watching?");
    const [count1, setCount1] = useState("Harm");
    const [count2, setCount2] = useState("Arooba");
    const [count3, setCount3] = useState("Areeba");
    const [count4, setCount4] = useState("Add Profile");
    const [count5, setCount5] = useState("Manage Profiles");

    return (
        <div className="container-fluid body ">
            <h1 className="h1" style={{overflow:"hidden", color:"white"}}>{count}</h1>
            <div className="row justify-content-center mt-4">
                <div className="col-6 col-sm-3 col-md-2 profile-container">
                    <img
                        src={Account1}
                        alt="Profile 1"
                        className="profile-pic"
                    />
                    <a href="./main" style={{ textDecoration: 'none' }}>
                        <div className="profile-name">{count1}</div>
                    </a>
                </div>
                <div className="col-6 col-sm-3 col-md-2 profile-container">
                    <img
                        src={Account2}
                        alt="Profile 2"
                        className="profile-pic"
                    />
                    <a href="./main" style={{ textDecoration: 'none' }}>
                        <div className="profile-name">{count2}</div>
                    </a>
                </div>
                <div className="col-6 col-sm-3 col-md-2 profile-container">
                    <img
                        src={Account3}
                        alt="Profile 3"
                        className="profile-pic"
                    />
                    <a href="./main" style={{ textDecoration: 'none' }}>
                        <div className="profile-name">{count3}</div>
                    </a>
                </div>
                <div className="col-6 col-sm-3 col-md-2 profile-container">
                    <div className="add-profile">
                        <span>+</span>
                    </div>
                    <div className="profile-name name">{count4}</div>
                </div>
            </div>
            <button className="btn btn-outline-light">{count5}</button>
        </div>
    );
};

export default ProfileSelection;
