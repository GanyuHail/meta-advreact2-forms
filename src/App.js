import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return (
      firstName &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  // const clearForm = () => {
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  //   setPassword({
  //     value: "",
  //     isTouched: false,
  //   });
  //   setRole("role");
  // };

  const handleSubmit = () => {
    alert("Account created!");
    // clearForm();
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.firstName)
  };

  const handleLastName = (e) => {
    setLastName(e.target.lastName)
  };

  const handleEmail = (e) => {
    e.preventDefault();
    validateEmail();
    setEmail(e.target.email)
  };

  // const handlePassword = (e) => {
  //   e.preventDefault();
  //   setPassword({ ...password, value: e.target.value });
  //   if (password.isTouched && password.value.length < 8) {
  //     return <PasswordErrorMessage />
  //   }
  // };

  const handleRole = (e) => {
    setRole(e.target.role)
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              value={firstName}
              onChange={handleFirstName}
              type="text"
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name"
              value={lastName}
              onChange={handleLastName}
              type="text"
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address"
              value={email}
              onChange={handleEmail}
              type="email"
            />
          </div>
          <div className="Field"> 
           <label> 
             Password <sup>*</sup> 
           </label> 
           <input 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
             placeholder="Password" 
           /> 
           {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 
         </div> 
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select
              value={role}
              onChange={handleRole}
              type="select"
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
