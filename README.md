Podcast App
Introduction
Welcome to the Podcast App! This application offers a seamless and engaging experience for podcast enthusiasts. Users can browse, search, and listen to a diverse range of podcasts, with data fetched from a reliable remote API. The app provides an organized and user-friendly interface for viewing podcast details, episodes, and listening to audio directly.

Features

Browse Podcasts: Users can explore a vast collection of podcasts.
View Podcast Details: Detailed information about each podcast, including title, description, genres, and seasons, is available.
Listen to Episodes: Users can play podcast episodes using the built-in audio player.
Smooth Navigation: The app uses React Router for effortless navigation between different views.
Setup Instructions
To set up the project locally, follow these steps:

Clone the repository: Download the project files from the GitHub repository.
Navigate to the project directory: Open the project folder in your terminal or command prompt.

Install dependencies:
Run the necessary commands to install project dependencies. Run using npm install and after installing type npm run dev to view the web application.
Start the development server: Launch the server to run the application locally.

Open your browser: 
Access the application by navigating to the local server URL.

Usage Examples
Browsing Podcasts
Open the app and view the list of available podcasts, displayed in alphabetical order.

Viewing Podcast Details
Select a podcast to view its detailed information, including image, title, description, number of seasons, genres, and last updated date.

Listening to Episodes
Within the podcast detail view, select a season and click on an episode to see its details. Use the audio player to listen to the episode directly.

Code Overview
PodcastList Component
The PodcastList component is responsible for fetching and displaying a list of podcasts. It manages the podcasts state, fetches podcast data from the API, and renders each podcast as a list item with a link to its detailed view.

ShowDetail Component
The ShowDetail component displays detailed information about a selected podcast, including its seasons and episodes. It manages the show details state, fetches detailed information based on the podcast ID, and renders the podcast details and a list of seasons with episodes.

Contact Information
Name: Ndumiso Sibanda
Email: ndumisonduh523@gmail.com
LinkedIn: Ndumiso Sibanda