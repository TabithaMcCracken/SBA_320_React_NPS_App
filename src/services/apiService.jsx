
import axios from 'axios';

// const API_KEY = import.meta.env.VITE_API_KEY;
const API_KEY = "uudbgJPfE5zc88wYFiJOfqMJSoVwIRY1eMlv6aPa";

export const fetchActivities = async () => {
  const response = await axios.get('https://developer.nps.gov/api/v1/activities', {
    params: { api_key: API_KEY }
  });
  return response.data.data;
};

export const fetchGalleryImages = async () => {
  const response = await axios.get('https://developer.nps.gov/api/v1/multimedia/galleries', {
    params: { api_key: API_KEY }
  });
  if (response.data.data && response.data.data.length > 0) {
    return response.data.data.flatMap(gallery => gallery.images);
  }
  return [];
};

export const fetchParksByActivity = async (activityId) => {
  const response = await axios.get('https://developer.nps.gov/api/v1/activities/parks', {
    params: { id: activityId, api_key: API_KEY }
  });
  if (response.data.data && response.data.data.length > 0) {
    return response.data.data[0].parks;
  }
  return [];
};
