import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";

function Chat() {
	const { roomId } = useParams();
	const { roomId1 } = useParams();
	return (
		<div className="chat">
			<h3>You are in the {roomId} room</h3>
		</div>
	);
}

export default Chat;
