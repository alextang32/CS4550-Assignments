import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./AssignmentControls";
import { TfiWrite } from "react-icons/tfi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useParams } from "react-router";
import * as db from "../../Database";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import { setAssignments, addAssignment, updateAssignment, deleteAssignment } from "./reducer";
export default function Assignments() {
 
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);
  const [assignmentToDelete, setAssignmentToDelete] = useState("");
  const fetchAssignments = async () => {
    const Assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(Assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  return (
    <div id="wd-assignments">
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        {assignments
          .map((assignment: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" key={assignment._id}>
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <IoMdArrowDropdown className="me-2 fs-3" />
                ASSIGNMENTS
                <AssignmentControlButtons />
              </div>
              <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <TfiWrite className="me-2 fs-3" />
                  <LessonControlButtons />
                  <a href={`/#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <span style={{ fontWeight: 'bold' }}>
                      {assignment.title}
                    </span>
                  </a>
                  
                  <div style={{ marginLeft: '72px', display: 'flex', flexDirection: 'column' }}>
                    <span style={{ color: 'red', fontSize: '0.8em' }}>
                      Multiple Modules&nbsp;
                      <span style={{ color: 'black', fontWeight: 'bold' }}>
                        | Not Available Until&nbsp;
                        <span style={{ color: 'black', fontWeight: 'normal' }}>
                          May 6 at 12:00am |
                        </span>
                      </span>
                    </span>
                    <span style={{ fontWeight: 'bold', fontSize: '0.8em' }}>
                      Due&nbsp;
                      <span style={{ fontWeight: 'normal' }}>
                        May 13 at 11:59pm | 100pts
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}
