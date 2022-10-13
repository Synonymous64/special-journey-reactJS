import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cPassword: "", bio: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, bio } = credentials;
    const response = await fetch("http://localhost:3001/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, bio })
    });
    const json = await response.json();
    console.log(json);
    //! Save the auth-token and then redirect 
    if (json.success) {
      //! Save the auth-token and then redirect 
      localStorage.setItem('token', json.authToken);
      navigate("/login");
    } else alert('Invalid Credentials')
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name"
            onChange={onChange}
            minLength={3}
            aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email"
            onChange={onChange}
            aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" id="password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name="cPassword" id="cPassword" onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Tell us about yourself</label>
          <textarea className="form-control" id="bio" name="bio" rows="2" onChange={onChange} maxLength={120}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SignUp