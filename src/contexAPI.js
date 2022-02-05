import React, { createContext, useEffect, useState } from 'react';
import Component1 from './component1';

export const contexApi = createContext()
export const ContexAPI = (props) => {
    const [users,setUser]=useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUser(data))
    }, [])
    return (
        <contexApi.Provider value={[users,setUser]}>
            {props.children}
        </contexApi.Provider>
    );
};

export default ContexAPI;