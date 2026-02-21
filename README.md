# REAL-TIME-CHAT-APPLICATION
COMPANY: CODTECH IT SOLUTIONS
NAME: RAJ CHOTHANI
INTERN ID: CTIS4135
DOMAIN: FRONTEND DEVELOPER
MENTOR: NEELA SANTOSH

#DESCRIPTION:
This project is a basic real-time chat web application developed to understand how instant messaging works between users connected to the same server. The goal of this project is to learn how messages can be transferred immediately without refreshing the browser page. It is not a full-featured social messaging platform but a simple implementation created for learning real-time communication.

The application allows multiple users to open the chat page and send text messages. When one user sends a message, it appears instantly on the screens of other connected users. This happens using WebSocket communication, which keeps the connection active between the client and server. Because of this continuous connection, the page does not reload every time a new message is received.

The chat system supports only basic text messaging. It does not include advanced features such as authentication, private chats, media sharing, typing indicators, or user profiles. The purpose is to demonstrate the core idea of live message transfer in a clear and understandable way.

To maintain message history, the application stores chat data in a local JSON file on the server side. When the server restarts, previously sent messages are loaded again so users can still view earlier conversations. This storage method is simple and avoids the use of a database, keeping the project beginner-friendly.

The interface design is minimal and easy to use. Messages are displayed inside a chat container with clear separation between different users. Basic styling is applied to maintain readability and alignment. The layout is responsive, allowing the chat window to adjust properly on both desktop and mobile screens.

While working on this project, I learned how frontend and backend communicate in real time using events. I also understood how server-side logic handles connections and broadcasts messages to all clients. The project improved my understanding of client-server interaction and event-based programming.

Overall, this project represents a beginner-level real-time chat system that demonstrates live communication using simple technologies without complex configurations.

#TECHNOLOGY USED:
React.js: user interface and component structure
Socket.io: real-time communication between client and server
Node.js & Express.js: server setup and connection handling
JSON file: storing chat message history
CSS: basic chat layout and responsiveness
EDITOR: Visual Studio Code
BROWSER: Google Chrome
#OUTPUT
