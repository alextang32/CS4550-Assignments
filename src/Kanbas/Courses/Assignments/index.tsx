import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "./LessonControlButtons"
import ModulesControls from "./AssignmentControls";
import { TfiWrite } from "react-icons/tfi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useParams, useLocation } from "react-router";
import * as db from "../../Database";
export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const { pathname } = useLocation();
    return (
      <div id="wd-assignments">
  <ModulesControls /><br /><br /><br /><br />
  <ul id="wd-modules" className="list-group rounded-0">
  {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" />
        <IoMdArrowDropdown className="me-2 fs-3" />
        ASSIGNMENTS
        <AssignmentControlButtons />
      </div>
      <ul className="wd-lessons list-group rounded-0">
        
        <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          <TfiWrite className="me-2 fs-3"/>
          <LessonControlButtons />
          <a href= "#/Kanbas/Courses/1234/Assignments/"   style={{ textDecoration: 'none', color: 'black'}}>
        <span style={{ fontWeight: 'bold' }}>
        {assignment.title}
        </span>
        </a>
          <div style={{ marginLeft: '72px', display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: 'red', fontSize: '0.8em' }}>
            Multiple Modules&nbsp;
            <span style={{color: 'black', fontWeight: 'bold',}}>
          | Not Available Until&nbsp;
          <span style={{color: 'black', fontWeight: 'normal',}}>
          May 6 at 12:00am |
          </span>
          </span>
          </span>
          <span style={{fontWeight: 'bold', fontSize: '0.8em'}}>
         Due&nbsp;
          <span style={{fontWeight: 'normal'}}>
          May 13 at 11:59pm | 100pts
            </span>
          </span>
          
        </div>
        </li>
        
      </ul>  </li> ))} </ul>
      </div>
  );}
  