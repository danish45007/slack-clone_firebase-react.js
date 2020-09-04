import React from 'react'
import './SidebarOption.css';

function SidebarOption( {Icon,title} ) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            
            {/* Icon exists then normal clickable options and if Icon doesn't exists title as Channel name */}
            
            {Icon ? 
                <h3>{title}</h3> : (
                <h3 className="sidebarOption__channel">
                    <span className="sidebarOption__hash"># </span>
                    {title}
                </h3>
                )}
        </div>
    );
}

export default SidebarOption
