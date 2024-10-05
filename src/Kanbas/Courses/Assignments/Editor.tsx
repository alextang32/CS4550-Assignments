export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
            <select id="wd-group">
                <option selected value="ASSIGNMENTS">
                    ASSIGNMENTS</option>
                <option value="ASSIGNMENTS 2">ASSIGNMENTS 2</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
            <select id="wd-display-grade-as">
                <option selected value="Percentage">
                    Percentage</option>
                <option value="Points">Points</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
            <select id="wd-submission-type">
                <option selected value="Submission Type">
                    Online</option>
                <option value="In Person">In Person</option>
                </select>
            </td>
          </tr>
          <tr>
                <td align="left"> Online Entry Options</td>
            </tr>
          <tr>
            <td align="left" valign="top">

                <input type="checkbox" name="text-entry" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" name="website-url" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox" name="media-recordings" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                <input type="checkbox" name="student-annotation" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                
                <input type="checkbox" name="file-upload" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Upload</label>
            </td>
          </tr>
          <tr>
          <label htmlFor="wd-assign-to"> Assign To: </label><br />
            <input id="wd-assign-to" value={"Everyone"}/>
          </tr>
          <tr>  
            <label htmlFor="wd-due-date"> Due </label><br/>
            <input type="date"
                id="wd-due-date"
                value="2024-05-13"/><br/>
          </tr>
          <tr>  
            <label htmlFor="wd-available-from"> Available from &nbsp;&nbsp;&nbsp; </label>
            <label htmlFor="wd-available-until"> Until </label><br/>
            <input type="date"
                id="wd-available-from"
                value="2024-05-06"/>

            <input type="date"
                id="wd-available-until"
                value="2024-05-28"/> <br/>
          </tr>
          
          <td align="right">
          <hr></hr><br/>
          <tr>
            <button id="wd-cancel">Cancel</button>
            <button id="wd-save">Save</button>
          </tr>
          </td>
        </table>
      </div>
  );}
  