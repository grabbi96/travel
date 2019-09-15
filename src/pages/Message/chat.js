import React, { Component } from 'react'
import { MDBContainer } from 'mdbreact'
import Media from 'react-media'
import './chat.css'
import ChatSidebar from './section/ChatSidebar'
import ChatContent from './section/ChatContent'
import MobileChatSidebar from './section/MobileChatSidebar'
class chat extends Component {

	render() {
		return (
			<main>
				<section className="chat-section">
					<MDBContainer>
						<div className="chat-area">
							<aside className="chat-sidebar">
								<Media query="(max-width: 768px)">
									{matches =>
										matches ? <MobileChatSidebar /> : <ChatSidebar />
									}
								</Media>
							</aside>
							<Media query="(max-width: 768px)">
								{matches =>
									matches ? null : <ChatContent />
								}
							</Media>

						</div>
					</MDBContainer>
				</section>

			</main>
		);
	}
}

export default chat;






