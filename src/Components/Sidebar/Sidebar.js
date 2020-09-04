import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import "./Sidebar.css";


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>UnNamed Dev</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Danish
                    </h3>
                </div>
                <div className="create">
                    <CreateIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
