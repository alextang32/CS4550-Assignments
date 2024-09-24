import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/CS4550/Home">
            <img src="/images/webdev.jpg" width={200} />
            <div>
              <h5>
                 CS4550
              </h5>
              <p className="wd-dashboard-course-title">
                Web Development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">         
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/CS3800/Home">
            <img src="/images/theory.jpg" width={200} />
            <div>
              <h5>
                 CS3800
              </h5>
              <p className="wd-dashboard-course-title">
                Theory of Computation
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
          <div className="wd-dashboard-course">         
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/MUSC1001/Home">
            <img src="/images/music.jpg" width={200} />
            <div>
              <h5>
                 MUSC1001
              </h5>
              <p className="wd-dashboard-course-title">
                Music in Everyday Life
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
          <div className="wd-dashboard-course">         
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/MUSC1112/Home">
            <img src="/images/jazz.jpg" width={200} />
            <div>
              <h5>
                 MUSC1112
              </h5>
              <p className="wd-dashboard-course-title">
                Jazz
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
          <div className="wd-dashboard-course">         
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/PHYS1151/Home">
            <img src="/images/physics.jpg" width={200} />
            <div>
              <h5>
                 PHYS1151
              </h5>
              <p className="wd-dashboard-course-title">
                Physics
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
          <div className="wd-dashboard-course">         
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/CS4530/Home">
            <img src="/images/swe.jpg" width={200} />
            <div>
              <h5>
                 CS4530
              </h5>
              <p className="wd-dashboard-course-title">
                Software Engineering
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
          <div className="wd-dashboard-course">         
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/MATH1342/Home">
            <img src="/images/calc.jpg" width={200} />
            <div>
              <h5>
                 MATH1342
              </h5>
              <p className="wd-dashboard-course-title">
                Calculus 2
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
      </div>
    </div>
  );
}
