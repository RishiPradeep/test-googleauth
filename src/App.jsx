import { useState } from "react";
import { signInWithGoogle, auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import "./App.css";
export default function App() {
  const [user, setUser] = useState(null);
  const time = new Date().toLocaleTimeString();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleClick = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {user ? (
        <div className="maindiv">
          <div className="flex flex-col justify-center items-center gap-8">
            <h1>Hello {user.displayName}</h1>
            <p>Welcome to the world,The time is {time}</p>
            <button
              className="bg-slate-400 p-4 rounded-md flex items-center"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="maindiv">
          <button className="buttondesign" onClick={handleClick}>
            <span className="googlelogo">
              <FaGoogle size={30} />
            </span>
            Login with google
          </button>
        </div>
      )}
    </div>
  );
}
