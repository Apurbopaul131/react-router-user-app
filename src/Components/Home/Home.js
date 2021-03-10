import React, { useEffect, useState } from 'react';
import EveryUsers from '../EveryUseres/EveryUsers';
const Home = () => {
    const [Users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=> setUsers(data))
    },[])
    return (
        <div>
           {
             Users.map(us=><EveryUsers users={us}></EveryUsers>)
           }
        </div>
    );
};

export default Home;
