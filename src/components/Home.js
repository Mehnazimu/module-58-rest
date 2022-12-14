import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h3>This is home for {user?.displayName}</h3>
        </div>
    );
};

export default Home;