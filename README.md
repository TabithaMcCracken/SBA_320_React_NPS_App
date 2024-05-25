# National Parks Activity Finder

You can access the live version of the application [here](https://elaborate-pithivier-8aa5cf.netlify.app/).

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Approach](#approach)
5. [Usage Instructions](#usage-instructions)
6. [License](#license)

## Project Overview
The National Parks Activity Finder is a web application that allows users to search for national parks based on specific activities they want to engage in, such as hiking, camping, and more. Users can also save their favorite parks for easy access later.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript, React
- **Backend:** Axios for API requests
- **Hosting:** Netlify
- **Version Control:** GitHub

## Project Structure
The project consists of the following main components:
- **App.js:** The main component that holds the state and renders other components.
- **ActivitySelector.jsx:** Dropdown menu for selecting activities.
- **Gallery.jsx:** Component for displaying a gallery of images.
- **ParkList.jsx:** Lists parks based on selected activity.
- **Favorites.jsx:** Lists favorite parks.
- **NavBar.jsx:** Navigation bar for switching between main view and favorites view.
- **reducer.js:** Reducer for managing application state.
- **apiService.jsx:** Service file for making API requests.

## Approach
The application was built using a component-based architecture with React. State management is handled using React's `useReducer` hook. Axios was used to fetch data from the National Park Service API. The application fetches activities and park data based on user selections and displays them in a user-friendly manner.

### Key Features:
1. **Activity Selection:** Users can select an activity from the dropdown menu to see parks where the activity is available.
2. **Favorites:** Users can add parks to their favorites list and view them on a separate page.
3. **Gallery:** A gallery of images related to national parks is displayed, with automatic image rotation.
4. **Error Handling:** Proper error handling for API requests is implemented.

## Usage Instructions
1. **Select an Activity:** Choose an activity from the dropdown menu on the main page.
2. **View Parks:** A list of parks where the selected activity is available will be displayed.
3. **Add to Favorites:** Click the "Add to Favorites" button on a park to save it to your favorites list.
4. **View Favorites:** Use the navigation bar to switch to the favorites view and see your saved parks.

## License

This project is licensed under the [MIT License](LICENSE).