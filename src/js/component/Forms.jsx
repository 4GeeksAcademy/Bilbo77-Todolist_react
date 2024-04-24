import React, {useState} from "react";

export const Forms = () => {

  const [email, setEmail] = useState('email@test.com');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState('false');

  const handleEmail = (event) => {
    setEmail(event.target.value)
    console.log(event.target.value)
  }
  
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleCheck = (event) => {
    setCheck(event.target.checked)
    }

    return (
        <>
            <h1 className = "text-center">Testing forms with React</h1>
            <h2 className = "m-3">Essential functions/elements</h2>
            <ul>
                <li>const example [one, setOne] = useState('')</li>
                <li>event.target.value & event.target.checked</li>
                <li>function onchange</li>
                <li>Golden rule : Submit Event.preventDefault ()</li>
                <li>const dataToSend with imput list</li>
            </ul>
        
        <form className="col-6 p-3">
        <div className = "mb-3">
          <label htmlFor="exampleInputEmail1" className = "form-label">Email address</label>
          <input type="email" className = "form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          value={email} onChange={handleEmail}/>
          <div id="emailHelp" className = "form-text">Data protection.</div>
        </div>
        <div className = "mb-3">
          <label htmlFor="exampleInputPassword1" className = "form-label">Password</label>
          <input type="password" className = "form-control" id="exampleInputPassword1"
          value={password} onChange={handlePassword}/>
        </div>
        <div className = "mb-3 form-check">
          <input type="checkbox" className = "form-check-input" id="exampleCheck1"
          checked={check} onChange={handleCheck}/>
          <label className = "form-check-label" htmlFor="exampleCheck1">Accept conditions</label>
        </div>
        <button type="submit" className = "btn btn-primary">Send</button>
        <button type="submit" className = "btn btn-primary m-3">Restart</button>
      </form>
      </>
    );
}; 