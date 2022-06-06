import React, { useState } from "react";

const HookForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const User = { firstName, lastName, email, password, confirmPassword };
    console.log("Hello", User);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <form onSubmit={createUser}>
        <div>
          <label> First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>{" "}
        <br></br>
        <div>
          <label> Last Name: </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <br></br>
        <div>
          <label> Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br></br>
        <div>
          <label> Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br></br>
        <div>
          <label> Confirm Password: </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <br></br>
        <input type="submit" value="Create User" />
      </form>
      <div>
        <h3>Your Form Data</h3>
        <div className = 'User'>First Name: {firstName}</div>
        <div className = 'User'>Last Name: {lastName}</div>
        <div className = 'User'>Email: {email}</div>
        <div className = 'User'>Password: {password}</div>
        <div className = 'User'>Confirm Password: {confirmPassword}</div>
      </div>
    </>
  );
};

export default HookForm;
