import React, { useContext } from 'react';
import { contexApi } from './contexAPI';

const Component1 = () => {
    const [users,setUser]=useContext(contexApi)
    return (
        <div>
            {users.map(user=><h5>{user.name}</h5>)}
        </div>
    );
};

export default Component1;