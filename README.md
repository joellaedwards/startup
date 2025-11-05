# Just4Fun

[My Notes](notes.md)

This application will be an online version of the classic game Connect Four. It will allow users to login and play their friends. This README will be an overview of various technologies used in the game as well as a few possible uses.

## 🚀 Specification Deliverable


For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Remember when you were a kid and played Connect Four with your siblings or friends? So fun right? Now remember how frustrated you were when the game broke, letting all the pieces fall before you were finished. Or how annoying it was when your little sister threw the game across the room because you beat her (again)? The Just4Fun application removes all these and other obstacles, allowing you and your friends to play a new version of Connect Four without the drama! After logging in, you can play game after game with your friends, even saving games you don't have time to finish, allowing you to come back later. Just4Fun is all the nostalgia and none of the nuisance!

### Design

![Design image](design.png)

### Key features

- Users will be able to choose their chip color
- Players choose where to play their next piece by moving a sliding arrow across the top
- Two players can play each other in a game. Their moves will be broadcast to each other

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Basic structure of my website. I'll use HTML to create the base of my login page and the page where users play the game.
- **CSS** - I'll use CSS to add colors to the page so players know whose piece is whose. CSS will help me style the pages I created using HTML so they're more user-friendly.
- **React** - I will use React to let the user interact with the board. This technology will allow players to click where they want their pieces to go.
- **Service** - Provides endpoints for:
  - register, login, logout
  - accessing unfinished games
  - creating a new game
  - playing a piece in the game
  - checking if someone has won the game
  - calling http://numbersapi.com/ to display random facts about the number 4 and its multiples
- **DB/Login** - Store authentication information of users as well as their unfinished games.
- **WebSocket** - communicates back and forth to the two users playing the game what the other user did in their last turn.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Server deployed and accessible with custom domain name** - [My server link](https://just4fungame.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **HTML pages** - I added three HTML pages. A home page, a page to play the game, and a page to look at previous games.
- [X] **Proper HTML element usage** - I added headers, footers, navigation sections, and a few lists on these pages.
- [X] **Links** - I have links on each page that links to each of the other pages. I also added a link on the bottom of each page to my github repo.
- [X] **Text** - I added text about the game and headers on each page.
- [X] **3rd party API placeholder** - I added a placeholder for the random number fact on my gameplay page.
- [X] **Images** - I added an image of connect four to the website.
- [X] **Login placeholder** - I added a login placeholder on the home page.
- [X] **DB data placeholder** - I added a placeholder for the list of games that will be stored in the database.
- [X] **WebSocket placeholder** - I put a placeholder in for updating the board when the other person makes a move.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Header, footer, and main content body** - I added a different font and made the header a different color than the rest of the page. I added a background color for the main and footer sections because I liked how they look when the blend into each other.
- [X] **Navigation elements** - I added a section of the CSS just for the navigation elements. The bootstrap that I used was making it difficult to work with the CSS, but when I imported the CSS after the bootstrap, it stopped overriding my CSS changes to the nav-bar.
- [X] **Responsive to window resizing** - This deliverable was especially tricky on the grid I created for the connect 4 game itself. I had to remove some of the constraints I had added regarding minimum height/width and add an aspect ratio so the page could be minimied without losing the integrity of the board.
- [X] **Application elements** - The spacing and contrast on the board will make it easy for players to see and know where they can play next.
- [X] **Application text content** - Used the same font family throughout my application.
- [X] **Application images** - Added a picture of the classic connect4 game on the header of my home page. Used CSS to adjust the spacing to make it the same height as the other header items.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Bundled using Vite** - I feel like everything is so much better organized! It's not just a ton of html and css files anymore.
- [X] **Components** - I have 3 components: login/home page, play, and a list of previous games.
- [X] **Router** - I use the router to go between each of the three components.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **All functionality implemented or mocked out** - I added all functionality except for the ones that will depend on database interaction and webhooks. For the list of games that will eventually use a database, I created a mock list of games that I add too and use to display the list of saved games. I commented out the part that will switch the players' turns because that will depend on the two players being able to interact with one another. Without it, I'm still able to show the functionality of completing a game, notifying who wins, and saving that game. 
- [X] **Hooks** - I used hooks multiple times. I used useState to check and update if the user is logged in. I also used it to update the list of saved games and the color of the person playing. This was important because then the person can pick between four colors and it will stay the same. I keep track of my board using hooks. In the future when I finish implementing game play between two people, I will use it to keep track of whose turn it is as well. 

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Node.js/Express HTTP service** - Set up index.js inside my service folder and hosted the backend on express. I set up an app using express and set it to listen on port 4000.
- [X] **Static middleware for frontend** - I included my public folder that stores all my images. This folder had all my static files that I use for the frontend.
- [X] **Calls to third party endpoints** - I had planned to use the numbersapi, but it's not accessible anymore so I pivoted and accessed a third party api that provides random facts about dogs.
- [X] **Backend service endpoints** - I created backend endpoints for login, creating an account, logging out, saving a game, and accessing saved games.
- [X] **Frontend calls service endpoints** - In order to login, logout, register, save, or view saved games, the frontend calls the endpoints I created.
- [X] **Supports registration, login, logout, and restricted endpoint** - My website alerts users when they try to login with an incorrect username or password. It supporst registration, login, and logout. In order to view the list of saved games, a user must be signed in. 


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
