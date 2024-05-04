# Entertainment App

The Entertainment App is a full-stack application designed to provide users with access to a vast collection of movies and TV shows, leveraging the TMDB API for fetching media details. It features user authentication, media exploration, and personal bookmarks, offering a comprehensive and personalized media browsing experience.


## Deployment

- **Frontend:** [Entertainment App Frontend](https://entertainment-app-frontend-110.onrender.com)
- **Backend:** [Entertainment App Backend](https://entertainment-app-backend-110.onrender.com)



## Important Links 
- API Documentation : 
- Database Design :  


## Features

- **User Authentication:** Utilizes JWT for secure login and registration, ensuring user data protection.
- **Media Exploration:** Allows users to discover trending movies and TV shows, with detailed views available for each media item.
- **Bookmarks:** Enables users to bookmark their favorite media, creating a personalized list of favorites accessible at any time.
- **Detailed Media Information:** Provides in-depth details about movies and TV shows, including cast, genres, ratings, and more.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB instance (local or remote)
- TMDB API key for fetching media data

## Getting Started For Backend

### Backend Setup

1.  **Clone the Repository:** Start by cloning the Entertainment App repository to your local machine.

    ```sh
    git clone https://github.com/yourusername/entertainment-app.git
    ```

2.  **Navigate to the Backend Directory:** Move into the backend directory of the project.

    ```sh
    cd entertainment-web-app/backend
    ```

3.  **Install Dependencies:** Install the necessary dependencies using npm.

    ```sh
    npm install
    ```

4.  **Configure Environment Variables:** Create a `.env` file based on the provided `.env.example` file. Provide your MongoDB URI and TMDB API key in the `.env` file.

    ```
    MONGODB_URL= "Mongodb connection string our url "
    TOKEN= "Secret token for authentication & cookies"
    NODE_ENV="Current environment - Development or Production"
    TMDB_KEY="TMDB api key "
    FRONTEND_URL="Frontend url"
    ```

5.  **Start the Server:** Run the backend server.

    ```sh
    node index.js
    ```

6.  **Verify Backend Setup:** Confirm that the backend server is running without any errors.

### Backend Project Structure

- **Controllers:** Contains logic for handling API requests, such as `DetailMediaController.js` for fetching detailed media information.
- **Models:** Defines the schema for database collections, including Users and Bookmarks.
- **Routes:** API routes for handling requests to different endpoints.
- **Middleware:** Includes middleware for authentication and error handling.
- **Utils:** Helper functions for interacting with external APIs (`fetchDataUtils.js`) and customizing media response data (`customizeMediaResponse.js`).


## Getting Started For Frontend

### Frontend Setup

1. **Navigate to the Frontend Directory:** Move into the frontend directory of the project.

   ```sh
   cd entertainment-web-app/frontend
   ```

2. **Install Dependencies:** Install the necessary dependencies using npm.

   ```sh
   npm install
   ```

3. **Configure Base Url or API end points :** This is our api endpoins, comming from backend

   ```
   const baseUrl = "Enter Your own backend api endpoints",
   ```

   eg.
   const baseUrl = "https://entertainment-web-app-0aqb.onrender.com/api",

4. **Start the Application:** Run the frontend application.

   ```sh
   npm run dev
   ```

5. **Access the Application:** Open your web browser and navigate to the specified URL (default: http://localhost:PORT) to access the Entertainment App.

### Frontend Project Structure

- **Components:** Reusable UI components like `SingleCard` for displaying media information.
- **Pages:** React components representing pages (`Home.jsx`, `Login.jsx`, `SignUp.jsx`, `MovieDetail.jsx`, and `TvDetail.jsx`), utilizing hooks like `useParams` and services (`TmdbService.js`) for fetching media details.
- **Services:** Functions for making API requests, including user authentication (`UserService.js`) and media data fetching (`TmdbService.js`).
- **Store:** Redux setup for state management, including slices like `BookmarkSlice.js` for managing bookmarks.
- **Utils:** Utility functions such as `cookieActionUtils.js` for managing cookies and `customToast.js` for displaying toast notifications.




## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.
