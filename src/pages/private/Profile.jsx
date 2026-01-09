import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>My Profile</h1>

      <p>Email: {user?.email}</p>
      <p>Email Verified: {user?.emailVerified ? "Yes" : "No"}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
