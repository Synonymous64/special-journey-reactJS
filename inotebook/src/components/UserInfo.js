import React from 'react'

const UserInfo = () => {
    return (
        <div className='container mt-3'>
            <h2>Your Info on iNotebook</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name"
                        minLength={3}
                        aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email"
                        aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">BIO</label>
                    <textarea className="form-control" id="bio" name="bio" rows="2" maxLength={120}></textarea>
                </div>
            </form>
        </div >
    )
}

export default UserInfo;