import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Component1 from './component1';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
const app = initializeApp(firebaseConfig);

const Component2 = () => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({
        SignedIn: false,
        Name: '',
        email: '',
        password: ''
    })
    const handleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                const { displayName, email } = user;
                const SignedInUser = {
                    SignedIn: true,
                    Name: displayName,
                    email: email
                }
                setUser(SignedInUser)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            const SignOut = {
                SignedIn: false,
                Name: '',
                email: '',
                password: ''
            }
            setUser(SignOut)
        }).catch((error) => {
            // An error happened.
        });
    }
    const handleSignUp = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const { displayName, email } = user;
                const SignedInUser = {
                    SignedIn: false,
                    Name: displayName,
                    email: email
                }
                setUser(SignedInUser)
            })
    }
    const handleBlur = (e) => {
        const newUser = {
            ...user
        }
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
        console.log(newUser)
    }
    const handleSubmit = (e) => {

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }
    const SignIn=(e)=>{
        const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                const user = userCredential.user;
                const {email,password } = user;
                const SignedInUser = {
                    SignedIn: false,
                    password: password,
                    email: email
                }
                setUser(SignedInUser)
                console.log(user)
            })
            e.preventDefault();    }
    return (
        <div>
            {
                user.SignedIn ? <button onClick={handleSignOut}>Sign out</button> :
                    <button onClick={handleSignIn}>Sign in</button>
            }

            {
                user.SignedIn && <p>Welcome, {user.email}</p>
            }
            {
                user.SignedIn ? null : <button onClick={handleSignUp}>Sign up</button>
            }
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" onBlur={handleBlur} required />
                <br />
                <input type="password" name="password" onBlur={handleBlur} required />
                <br />
                <button onClick={SignIn}>Sign in</button>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Component2;