import React, { useState } from 'react'

const UserInfo = () => {
    const host = "http://localhost:3001";
    const [credentials, setCredentials] = useState({ name: "", email: "", bio: "" });
    const useInfo = async (name, email, bio) => {
        //TODO API CALL
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')        // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ name, email, bio }), // body data type must match "Content-Type" header
        });
        const note = await response.json(); // parses JSON response into native JavaScript objects
        // console.log(note.name);
        setCredentials({
            name: note.name,
            email: note.email,
            bio: note.bio
        })
    };
    useInfo();
    return (
        <div className='container mt-3'>
            <h2>Your Info on iNotebook</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name"
                        minLength={3}
                        value={credentials.name}
                        disabled readOnly
                        aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email"
                        value={credentials.email}
                        disabled readOnly
                        aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Bio</label>
                    <textarea className="form-control" id="bio" name="bio" rows="2" maxLength={120}
                        value={credentials.bio}
                        disabled readOnly></textarea>
                </div>
            </form>
        </div>
    )
}

export default UserInfo;