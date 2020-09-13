import React, { useState,useEffect } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import "./Sidebar.css";
import SidebarOption from '../SidebarOptions/SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from '../../Firebase';


function Sidebar() {

    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection("rooms").onSnapshot((snapshot) => (
            // setting the channel with an obj as (id,name)
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name
            })))
        ))
    }, [])

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
                <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
                <SidebarOption Icon={DraftsIcon} title="Saved items" />
                <SidebarOption Icon={BookmarkBorderIcon} title="Channels" />
                <SidebarOption Icon={PeopleAltIcon} title="People & users groups" />
                <SidebarOption Icon={AppsIcon} title="Apps" />
                <SidebarOption Icon={FileCopyIcon} title="File browser" />
                <SidebarOption Icon={ExpandLessIcon} title="Show less" />
                <hr className="hr" />
                <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
                <hr className="hr" />
                <SidebarOption Icon={AddIcon} title="Add channels" />
                {channels.map(channel => (
                    <SidebarOption title={channel.name} key={channel.id} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
