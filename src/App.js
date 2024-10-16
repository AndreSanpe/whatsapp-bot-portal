import React, { useState, useEffect } from 'react';
import './App.css';
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  // Function to handle user registration
  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to handle user login
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to handle user logout
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <div className="home">
          <h2>Welcome, {user.email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="login-register-popup">
          <h2>{isRegistering ? 'Register' : 'Login'}</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={isRegistering ? handleRegister : handleLogin}>
            {isRegistering ? 'Register' : 'Login'}
          </button>
          {error && <p className="error">{error}</p>}
          <p>
            {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span onClick={() => setIsRegistering(!isRegistering)}>
              {isRegistering ? 'Login' : 'Register'}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
