import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (e: any) {
      setError(e.response.data.message);
    }
  };

  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <input
        className="form-control mb-2"
        placeholder="username"
        value={user.username || ""}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        className="form-control mb-2"
        type="password"
        placeholder="password"
        value={user.password || ""}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button className="btn btn-primary w-100" onClick={signup}>Sign up</button>
      <br />
      <Link to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
  );
}
