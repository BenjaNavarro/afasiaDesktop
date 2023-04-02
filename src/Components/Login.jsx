/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

export default function Login(props) {

    useEffect(()=>{
        console.log({props});
    },[]);

    return (
        <div className='w-full h-screen bg-green-800 text-white text-center'>Login</div>
    )
}