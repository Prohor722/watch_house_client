import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const Myitems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [ products ,setProducts ] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/products/?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[user])    

    if(loading){
        return <Loading/>;
    }
    if(error){
        console.log(error.message);
    }
    return (
        <div>
            <h1>My Items</h1>
            <p>Products: {products?.length}</p>
        </div>
    );
};

export default Myitems;