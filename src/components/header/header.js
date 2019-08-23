import React, { Component } from 'react';

export default class Header extends Component {

    render() {
        return (
            <div style={{ backgroundColor: "white", color: "#282c34" }}>
                <div className="p-5">
                    <img src={require("./profilePic.png")} style={{ borderRadius: 50 }} width="100" height="100" alt="profile" /><br /><br /><br />
                    <div className="m-2">
                        <h1>Aurélie Tudare</h1><br />
                    </div>
                    <h1>Développeuse Frontend React</h1><br />
                    <div className="my-5">
                        <img src={require("./competences.png")} width="auto" height="auto" alt="competences" /><br />
                    </div>
                    <div >
                        <a className="p-2" href="https://github.com/LieChou"><img src={require("./github.svg")} width="50" height="50" alt="github icon" /></a>
                        <a className="p-2" href="https://www.linkedin.com/in/aurélie-t-32367011"><img src={require("./linkedin.svg")} width="50" height="50" alt="linkedin icon" /></a>
                    </div>
                </div>
            </div>


        )
    }
}