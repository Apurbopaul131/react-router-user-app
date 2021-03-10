import React from 'react';
import { Link } from 'react-router-dom';


const EveryUsers = (props) => {
    // console.log(props);
    const {name,phone,website,username,id} = props.users;
    return (
        <div style={{border: '1px solid gray',marginLeft:'10px',paddingLeft:'10px'}} s>
           
           <h3>Name:<Link style={{textDecoration:"none",color:"blue"}} to={"/user/"+id}>{name}</Link></h3>
            <h4>Username:{username}</h4>
            <p>Phone:{phone}</p>
           
            <p>Website:{website}</p>
           

        </div>
    );
};

export default EveryUsers;