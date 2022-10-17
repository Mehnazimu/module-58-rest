import React, { useState } from 'react';
import { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.init.js';

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'AAaakash' })



    const authInfo = { user: user }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>

        </div>
    );
};

export default UserContext;