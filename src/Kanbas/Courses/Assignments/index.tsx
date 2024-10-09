import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "./LessonControlButtons"
import ModulesControls from "./AssignmentControls";
import { TfiWrite } from "react-icons/tfi";
import { IoMdArrowDropdown } from "react-icons/io";
export default function Assignments() {
    return (
      <div id="wd-assignments">
  <ModulesControls /><br /><br /><br /><br />
  <ul id="wd-modules" className="list-group rounded-0">
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
          <a href="#/Kanbas/Courses/1234/Assignments/123" style={{ textDecoration: 'none', color: 'black'}}>
        <span style={{ fontWeight: 'bold' }}>
        A1
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
        <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          <TfiWrite className="me-2 fs-3"/>
          <LessonControlButtons />
          <span style={{ fontWeight: 'bold' }}>
          <a href="#/Kanbas/Courses/1234/Assignments/123" style={{ textDecoration: 'none', color: 'black'}}>
        <span style={{ fontWeight: 'bold' }}>
        A2
        </span>
        </a>
            </span>
          <div style={{ marginLeft: '72px', display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: 'red', fontSize: '0.8em' }}>
            Multiple Modules&nbsp;
            <span style={{color: 'black', fontWeight: 'bold',}}>
          | Not Available Until&nbsp;
          <span style={{color: 'black', fontWeight: 'normal',}}>
          May 13 at 12:00am |
          </span>
          </span>
          </span>
          <span style={{fontWeight: 'bold', fontSize: '0.8em'}}>
         Due&nbsp;
          <span style={{fontWeight: 'normal'}}>
          May 20 at 11:59pm | 100pts
            </span>
          </span>
          
        </div>
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          <TfiWrite className="me-2 fs-3"/>
          <LessonControlButtons />
          <span style={{ fontWeight: 'bold' }}>
          <a href="#/Kanbas/Courses/1234/Assignments/123" style={{ textDecoration: 'none', color: 'black'}}>
        <span style={{ fontWeight: 'bold' }}>
        A3
        </span>
        </a>
            </span>
          <div style={{ marginLeft: '72px', display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: 'red', fontSize: '0.8em' }}>
            Multiple Modules&nbsp;
            <span style={{color: 'black', fontWeight: 'bold',}}>
          | Not Available Until&nbsp;
          <span style={{color: 'black', fontWeight: 'normal',}}>
          May 20 at 12:00am |
          </span>
          </span>
          </span>
          <span style={{fontWeight: 'bold', fontSize: '0.8em'}}>
         Due&nbsp;
          <span style={{fontWeight: 'normal'}}>
          May 27 at 11:59pm | 100pts
            </span>
          </span>
          
        </div>
        </li>
      </ul>  </li>  </ul>
      </div>
  );}
  