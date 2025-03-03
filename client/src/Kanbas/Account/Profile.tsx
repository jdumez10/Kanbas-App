// src/Kanbas/Account/Profile.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      setProfile(account);
    } catch (err: any) {
      navigate("/Kanbas/Account/Signin");
    }
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
          <input
            className="form-control mb-2"
            value={profile.username}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
          <input
            className="form-control mb-2"
            type="password"
            value={profile.password}
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          />
          <input
            className="form-control mb-2"
            value={profile.firstName}
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <input
            className="form-control mb-2"
            value={profile.lastName}
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          <input
            className="form-control mb-2"
            type="date"
            value={profile.dob}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <input
            className="form-control mb-2"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            className="form-control mb-2"
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}
      <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
        Sign out
      </button>
    </div>
  );
}
