import "./feedback.css";
import React, { useState } from 'react'
function FeedBack() {
    const [user,setUser]=useState("");
    const [email,setEmail]=useState("");
    const [msg,setMsg]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [EmailErr,setEmailErr]=useState(false);
    const [msgErr,setmsgErr]=useState(false);

  function feedbackHandle(e)
    {
        if(user.length<3 || email.length<3 || msg.length<8)
        {
            alert("type correct values")
        }
        else
        {
            alert("Your FeedBack has been submitted successfully!")
        }

        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }
    function emailHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setEmailErr(true)
        }
        else
        {
            setEmailErr(false)
        }
        setEmail(item)

    }
    function msgHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setmsgErr(true)
        }
        else
        {
            setmsgErr(false)
        }
        setMsg(item)
    }

    
    
    return (
        <div>
            <h3>FeedBack</h3>
           <form onSubmit={feedbackHandle}>
           UserName: <input type="number" placeholder="Enter User Id" onChange={userHandler} />{userErr?<span>UserName Not Valid</span>:""}
            <br /> <br />
           Email: <input type="email" placeholder="abc@email.com" onChange={emailHandler}/>{EmailErr?<span>Email Not Correct</span>:""}
            <br /> <br />
           FeedBack: <input type="text" placeholder="Message" onChange={msgHandler}/>{msgErr?<span> Max limit 8 words</span>:""}
            <br /> <br />
            
            <button type="submit"  >Submit</button>
           </form>
        </div>
    )
}

export default FeedBack;