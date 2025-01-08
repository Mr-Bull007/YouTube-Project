# Youtube Project!

~ Ideation:
Header

- hamburger(linked with side-bar)
- Logo
- Searchbar
- Profile

Side Bar (Expands when hamburger of header is clicked)

- Home
- Shorts
- Subscriptions
- Music
- Movies
- Gaming
- Sports

Main Body

- Tag List
  - Tags
- Video List
  - Videos

Video Page

- Watch Page
- CommentContainer

~ Steps Followed:

- Created React App using vite
- Did npm i and npm run dev to check if react app is properly initialised
- installed tailwindcss and configured it
- installed react-router-dom
- Planned for the Header Component
- Made the required files.
- Using Redux for state management
- Created the SideBar and the required components ie SideBar.jsx and SideCard.jsx
- Using Link from react-router-dom in the Logo in header.
- Created TagList component of the main Body.
- Made the Body of HomePageBody for HomePage.
- SUGGESTION: I think the way I had arranged my components is not efficient. Because, when I route to "/watch", VideoPage loads up which contains the Header and other things again. So, they have to be rendered again.
- I re-arranged the components, created a Layout component and deleted the not required files.
- Also, created the VideoPageBody, containing WatchPage.
- Used useLocation hook, for rendering sidebar only on a particular page.
- Updated Routing with children.
- Working on the Search Functionality.
- Learning about the concept of "Debouncing" related to API calls w.r.t search functionality.
- Executing debouncing in search functionality.
- Making comments section with infinitely nested comments.

- Now, we are making the Live Chat feature of Youtube.
  - When we are talking of Live Chat ie Live data, we can't rely on useEffect.
  - There are two ways that Live data is handled:
    1. Web Sockets: 
        - It is a two-way connection (like a hand-shake) between the server and the UI.
        - We are able to quickly send data from either side.
        - So it is bidirectional ie data can be sent from UI to backend and vice versa.
        - Ex: Trading Apps, WhatsApp, etc.
    2. API Polling:
        - Here the data transaction is unidirectional ie from server to UI.
        - Also, unlike Web Sockets, there is a regular interval gap between the data.
        - Ex: Cricbuzz, gmail(probably).
- So, even YouTube live chat uses API polling.
