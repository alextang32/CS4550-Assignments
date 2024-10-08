import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        <div className="wd-dashboard-course col"   style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">

          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/CS4550/Home">
            <img src="/images/webdev.jpg"  width="100%" height={160} />
            <div className="card-body">
              <h5  className="wd-dashboard-course-title card-title">
                 CS4550
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Web Development
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>         
        <div className="card rounded-3 overflow-hidden">
<Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/CS3800/Home">
            <img src="/images/theory.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5  className="wd-dashboard-course-title card-title">
                 CS3800
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Theory of Computation
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link> 
          </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>         
        <div className="card rounded-3 overflow-hidden">
<Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/MUSC1001/Home">
            <img src="/images/music.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5  className="wd-dashboard-course-title card-title">
                 MUSC1001
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Music in Everyday Life
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link> 
          </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>         
        <div className="card rounded-3 overflow-hidden">
<Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/MUSC1112/Home">
            <img src="/images/jazz.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5  className="wd-dashboard-course-title card-title">
                 MUSC1112
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Jazz
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link> 
          </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>         
        <div className="card rounded-3 overflow-hidden">
<Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/PHYS1151/Home">
            <img src="/images/physics.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5  className="wd-dashboard-course-title card-title">
                 PHYS1151
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Physics
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link> 
          </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>         
        <div className="card rounded-3 overflow-hidden">
<Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/CS4530/Home">
            <img src="/images/swe.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5  className="wd-dashboard-course-title card-title">
                 CS4530
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Software Engineering
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link> 
          </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>         
        <div className="card rounded-3 overflow-hidden">
<Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/MATH1342/Home">
            <img src="/images/calc.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5  className="wd-dashboard-course-title card-title">
                 MATH1342
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Calculus 2
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link> 
          </div>
          </div>
          </div>
      </div>
    </div>
  );
}
