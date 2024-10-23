import { useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";

import * as db from "../../Database";
export default function AssignmentEditor() {
    const { aid } = useParams();
      const { cid } = useParams();
    const { pathname } = useLocation();
    const assignments = db.assignments;
  const description = `The assignment is available online 
Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

-Your full name and section
-Links to each of the lab assignments
-Link to the Kanbas application
-Links to all relevant source code repositories
The Kanbas application should include a link to navigate back to the landing page.
`;
console.log(aid)
console.log(pathname)
  return (
    <div id="wd-assignments-editor">
      <div wd-title p-3 ps-2 bg-secondary>
        Assignment Name </div>
      <div wd-title className="p-3 ps-2 bg-white" style={{ marginBottom: '7px' }}>
     
      {assignments
          .filter((assignment: any) => assignment._id === aid)
          .map((assignment: any) => (
        <input
          type="text"
          value={assignment.title}
          className="form-control ps-3"
          style={{ width: '100%' }}
        />))} </div>
      <textarea
        value={description}
        className="form-control ps-3"
        style={{ width: '100%', height: '280px' }}
      />
      <div wd-title p-3 ps-2 bg-secondary style={{ display: 'flex', marginBottom: '15px' }}>
        <span style={{ marginRight: '10px', marginBottom: '15px', marginTop: '7px' }}>Points</span>
        <input
          type="text"
          value="100"
          className="form-control ps-3"
          style={{ width: '250px' }}
        />
      </div>
      <div wd-title p-3 ps-2 bg-secondary style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px', marginBottom: '15px' }}>Assignment Group</span>
        <select id="wd-group" className="form-select" style={{ width: '280px', marginBottom: '15px' }}>
          <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="ASSIGNMENTS 2">ASSIGNMENTS 2</option>
        </select>
      </div>
      <div wd-title p-3 ps-2 bg-secondary style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px', marginBottom: '15px' }}>Display Grade as</span>
        <select id="wd-group" className="form-select" style={{ width: '280px', marginBottom: '15px' }}>
          <option selected value="ASSIGNMENTS">Percentage</option>
          <option value="ASSIGNMENTS 2">Points</option>
        </select>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ marginRight: '10px' }}>Submission Type</span>

      </div>

      <div wd-title p-3 ps-2 bg-secondary style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
        <select id="wd-group" className="form-select" style={{ width: '280px' }}>
          <option selected value="Online">Online</option>
          <option value="In Person">In Person</option>
        </select>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span style={{ fontWeight: 'bold', marginBottom: '10px' }}>Online Entry Options</span>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" name="text-entry" id="wd-text-entry" style={{ marginRight: '10px' }} />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" name="website-url" id="wd-website-url" style={{ marginRight: '10px' }} />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" name="media-recordings" id="wd-media-recordings" style={{ marginRight: '10px' }} />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" name="student-annotation" id="wd-student-annotation" style={{ marginRight: '10px' }} />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" name="file-upload" id="wd-file-upload" style={{ marginRight: '10px' }} />
            <label htmlFor="wd-file-upload">File Upload</label>
          </div>
        </div>

      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ marginRight: '10px' }}>Assign</span>

      </div>

      <div wd-title p-3 ps-2 bg-secondary style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span style={{ fontWeight: 'bold', marginBottom: '5px' }}>Assign to</span>

          <input
            type="text"
            value="Everyone"
            className="form-control ps-3"
            style={{ width: '100%' }}
          />


          <span style={{ marginRight: '10px', marginBottom: '5px' }}>Date</span>
          <input type="date"
            id="wd-due-date"
            value="2024-05-13" />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <span style={{ marginRight: '35px' }}>Available from</span>
            <span style={{ marginRight: '10px' }}>Until</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
            <input type="date"
              id="wd-available-from"
              value="2024-05-06" />

            <input type="date"
              id="wd-available-until"
              value="2024-05-28" />
          </div>

        </div>

      </div>
      <hr></hr>
      <div className="form-control ps-3" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
 
        <button style={{ width: '120px', padding: '10px', background: 'transparent', border: '1px solid #ccc', cursor: 'pointer', textAlign: 'center' }}
          onClick={() => window.location.href = `/#/Kanbas/Courses/${cid}/Assignments`}>
          Cancel
        </button>
        <button className="form-control ps-3" style={{ width: '120px', padding: '10px', background: 'red', color: 'white', border: 'none', cursor: 'pointer', textAlign: 'center' }}
        onClick={() => window.location.href = `/#/Kanbas/Courses/${cid}/Assignments`}>
          Save
        </button>
      </div>


    </div>
  );
}
