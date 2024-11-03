import { Link, useLocation, useParams} from "react-router-dom";
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const basePath = pathname.substring(0, pathname.lastIndexOf("/"));
  const links = [
    { label: "Home", path: basePath + "/Home"},
    { label: "Modules", path: basePath +  "/Modules"},
    { label: "Piazza", path: basePath +  "/Piazza"},
    { label: "Zoom", path: basePath + "/Zoom"},
    { label: "Assignments", path:  basePath + "/Assignments"},
    { label: "Quizzes", path:  basePath + "/Quizzes"},
    { label: "Grades", path: basePath +  "/Grades"},
    { label: "People", path: basePath + "/People"},

  ];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item border border-0
          ${pathname.includes(link.label) ? "active" : "text-danger"}`}>
      <br />
      {link.label}
    </Link>
      ))}
    
    </div>
);}
