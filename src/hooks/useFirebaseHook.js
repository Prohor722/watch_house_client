import { useEffect, useState } from "react";
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import Loading from "../components/Shared/Loading";
import auth from '../firebase.init'

const useFirebaseHook = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [user, setUser] = useState({});

    // useEffect(()=>{
    //     setEmail(mail);
    //     setPassword(pass);
    // },[]);
    
    const SignIn = () => {
        const [createUserWithEmailAndPassword,user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

        if(loading){
            <Loading/>
        }
        if(!error){
            setUser(user);
        }
    }
    return {user, SignIn};
};

export default useFirebaseHook;