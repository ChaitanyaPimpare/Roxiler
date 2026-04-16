import { useState } from "react";
import API from "../services/api";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: ""
  });

  const handleSignup = async () => {
    try {
      await API.post("/auth/signup", form);
      alert("Signup successful");
      window.location.href = "/";
    } catch {
      alert("Error signing up");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <input placeholder="Name" className="input"
          onChange={e => setForm({...form, name: e.target.value})} />

        <input placeholder="Email" className="input"
          onChange={e => setForm({...form, email: e.target.value})} />

        <input type="password" placeholder="Password" className="input"
          onChange={e => setForm({...form, password: e.target.value})} />

        <input placeholder="Address" className="input"
          onChange={e => setForm({...form, address: e.target.value})} />

        <button onClick={handleSignup}
          className="w-full bg-green-600 text-white p-2 rounded-lg mt-3">
          Signup
        </button>

      </div>
    </div>
  );
}