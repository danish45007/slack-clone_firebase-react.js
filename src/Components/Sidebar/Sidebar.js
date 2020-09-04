import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import "./Sidebar.css";
import SidebarOption from '../SidebarOptions/SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';

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
                {/* Sidebar Option Components takes props as Icon as
                component and title  */}
            <div>
                <SidebarOption Icon={InsertCommentIcon} title="Threads" />
                <SidebarOption title="backend" />
            </div>
        </div>
    )
}

export default Sidebar
