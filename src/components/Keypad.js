import React,{useState} from'react'

const Keypad=() =>{
    const [password,setPassword] =useState('')//state management tracks password and initializes an empty string
  //updates the password when inputs changes   
    const handleChange =(event) =>{
        setPassword(event.target.value)
         console.log("Entering password...")
    };
    return (
        <div>
            <input
            type='password'
            value='{password}'
            onChange={handleChange}/>


        </div>
    )
}

export default Keypad;