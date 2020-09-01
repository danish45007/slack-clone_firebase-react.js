import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import "./Sidebar.css";


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h2>UnNamed Developers
                </h2>
                <h3>
                    <FiberManualRecordIcon />
                    Danish
                </h3>
            </div>          
        </div>
    )
}

export default Sidebar
