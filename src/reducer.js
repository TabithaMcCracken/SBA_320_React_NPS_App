// src/reducer.js
export const initialState = {
  activities: [],
  selectedActivity: "",
  parks: [],
  loading: false,
  error: null,
  galleryImages: [],
  currentIndex: 0,
  favorites: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ACTIVITIES":
      return { ...state, activities: action.payload };
    case "SET_SELECTED_ACTIVITY":
      return { ...state, selectedActivity: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_PARKS":
      return { ...state, parks: action.payload };
    case "SET_GALLERY_IMAGES":
      return { ...state, galleryImages: action.payload };
    case "SET_CURRENT_INDEX":
      return { ...state, currentIndex: action.payload };
    case "ADD_TO_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (park) => park.parkCode !== action.payload
        ),
      };
    default:
      return state;
  }
};
