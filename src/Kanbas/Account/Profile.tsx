import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input id="wd-username"
        placeholder="alice"
        className="form-control mb-2" />
      <input id="wd-password"
        placeholder="123" type="text"
        className="form-control mb-2" />
      <input id="wd-first-name"
        placeholder="Alice" type="text"
        className="form-control mb-2" />
      <input id="wd-last-name"
        placeholder="Wonderland" type="text"
        className="form-control mb-2" />
      <input id="wd-date"
        placeholder="mm/dd/yyy" type="date"
        className="form-control mb-2" />
             <input id="wd-email"
        placeholder="alice@wonderland.com" type="text"
        className="form-control mb-2" />
       <select className="form-control mb-2" defaultValue="USER" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link id="wd-signout-btn"
        to="/Kanbas/Account/signin"
        className="btn btn-danger w-100">
        Signout </Link>

    </div>
  );
}
