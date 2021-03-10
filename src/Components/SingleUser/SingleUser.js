import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleUser = () => {
    const {userId} = useParams();
    const [singleUser,setsingleUser] = useState({});
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data =>setsingleUser(data) )
       
        
      
        
        
    },[userId])
   
   
    
    const {name,username,email,phone,website} = singleUser;
    return (
        <div style={{margin:"10px",border:"1px solid gray",paddingLeft:"5px", backgroundColor:"blue",color:"white",frontWeight:"400"}}>
            <h3>User id: {userId}</h3>
            <h4>Name:{name}</h4>
            <h5>Username:{username}</h5>
            <p>Email:{email}</p>
         
            <p>Phone:{phone}</p>
            <p>Website:{website}</p>
         

           
            
        </div>
    );
};

export default SingleUser;