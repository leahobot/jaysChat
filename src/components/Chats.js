import React from "react";
import {useHistory} from "react-router-dom";
import {ChatEngine} from "react-chat-engine";
import {auth} from "../firebase";

const Chats = () => {
	return (
		<div className='chat-page'>
			<div className='nav-bar'>
				<div className='logo-chat'>Jay's Chat</div>
			</div>
			<div className='logo-tab'>Logout</div>

			<ChatEngine
				height='calc(100vh-66px)'
				projectId='3a9b3d1c-da84-4aac-a3fa-61c91e931ee7'
			/>
		</div>
	);
};

export default Chats;
