import React, {useState} from 'react'
import Display from './Display';

const form = () => {


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState(false)

    const validateUsername = (e) =>{
        setUsername(e.target.value)

        if(e.target.value.length < 3){
            setError(true)
        }else{
           setError(false);
        }

    }

    const createUser = (e) =>{
        e.preventDefault();
        
        const newUser = {
            username,
            email,
            password
        }

        setNewUser(newUser)
        // console.log(newUser);
    }

  return (
    <div>
        <form onSubmit={(e)=>{createUser(e)}}>
            username: {JSON.stringify(username)} <br />
            email: {JSON.stringify(email)} <br />
            password: {JSON.stringify(password)} <br />
            <div>
                <label>Username: </label> 
                <input onChange={(e)=>{validateUsername(e);}}  /> <br />
               {error ?  <p style={{color:"red"}}>Too Short !</p>: ""}
            </div>
            <div>
                <label>Email Address: </label> 
                <input onChange={(e)=>{setEmail(e.target.value);}}  />
            </div>
            <div>
                <label>Password: </label>
                <input onChange={(e)=>{setPassword(e.target.value);}}/>
            </div>
            <button>Create</button>
        </form>


    <Display newUser = {newUser} />
    </div>
  )
}

export default form