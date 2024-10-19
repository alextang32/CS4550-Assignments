import { FaPlus } from "react-icons/fa6";
import {MdSearch } from "react-icons/md";

export default function AssignmentControls() {
  return (
    <div id="wd-assignment-controls" className="d-flex align-items-center justify-content-end text-nowrap">
      <div className="position-relative me-3" style={{ width: '250px' }}>
        <MdSearch className="position-absolute" style={{ top: '50%', left: '10px', transform: 'translateY(-50%)', color: '#aaa' }} />
        <input
          type="text"
          placeholder="Search..."
          className="form-control ps-5" 
          style={{ width: '100%' }}
        />
      </div>

      <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-2">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-2">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
    </div>
  );
}
