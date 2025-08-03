import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/"); // after login go to home (App.jsx)
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Shifaa's Site</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded shadow-md transition"
      >
        Sign in with Google
      </button>
    </div>
  );
}
