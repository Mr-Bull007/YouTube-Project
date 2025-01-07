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
