const API_KEY = "uudbgJPfE5zc88wYFiJOfqMJSoVwIRY1eMlv6aPa"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState('');
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current image index

  // Fetch activities on mount
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('https://developer.nps.gov/api/v1/activities', {
          params: {
            api_key: API_KEY
          }
        });
        console.log('Activities response:', response.data);
        setActivities(response.data.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
        setError('Failed to fetch activities');
      }
    };

    const fetchGallery = async () => {
      try {
        const response = await axios.get('https://developer.nps.gov/api/v1/multimedia/galleries', {
          params: {
            api_key: API_KEY
          }
        });
        console.log('Gallery response:', response.data);
        if (response.data.data && response.data.data.length > 0) {
          const images = response.data.data.flatMap(gallery => gallery.images);
          console.log('Images: ', images)
          setGalleryImages(images);
        }
      } catch (error) {
        console.error('Error fetching gallery:', error);
        setError('Failed to fetch gallery images');
      }
    };

    fetchActivities();
    fetchGallery();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length); // Advance to the next image
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [galleryImages]); // Re-run effect when galleryImages changes

  const fetchParksByActivity = async (activityId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://developer.nps.gov/api/v1/activities/parks', {
        params: {
          id: activityId,
          api_key: API_KEY
        }
      });
      console.log('Parks response:', response.data);
      if (response.data.data && response.data.data.length > 0) {
        const parksData = response.data.data[0].parks;
        setParks(parksData);
      } else {
        setParks([]);
        setError('No parks found for this activity.');
      }
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response);
        setError(`Error: ${error.response.status} - ${error.response.data.message}`);
      } else if (error.request) {
        console.error('Error request:', error.request);
        setError('Error: No response received from server.');
      } else {
        console.error('Error message:', error.message);
        setError(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleActivityChange = (event) => {
    const activityId = event.target.value;
    setSelectedActivity(activityId);
    if (activityId) {
      fetchParksByActivity(activityId);
    }
  };

  return (
    <div>
      <h1>National Parks by Activity</h1>

      {/* Gallery */}
      <div className="gallery">
        {galleryImages.length > 0 && (
          <img
            src={galleryImages[currentIndex].url}
            alt={galleryImages[currentIndex].altText}
            title={galleryImages[currentIndex].title}
            className="gallery-image"
            style={{ maxWidth: '200px', maxHeight: '150px' }}
          />
        )}
      </div>

{/* <div className="gallery">
  {galleryImages.map((data, index) => {
    console.log('Data object:', data);
    const constraintsInfo = data.constraintsInfo;
    console.log('Constraints info:', constraintsInfo);
    
    // Check if the image constraint is "Public domain"
    return constraintsInfo && constraintsInfo.constraint === "Public domain" ? (
      <img
        key={index}
        src={data.url}
        alt={data.altText}
        title={data.title}
        className="gallery-image"
        style={{ maxWidth: '200px', maxHeight: '150px' }}
      />
    ) : null;
  })}
</div> */}




      <div>
        <label htmlFor="activity">Select an activity: </label>
        <select id="activity" value={selectedActivity} onChange={handleActivityChange}>
          <option value="">--Select an activity--</option>
          {activities.map((activity) => (
            <option key={activity.id} value={activity.id}>
              {activity.name}
            </option>
          ))}
        </select>
      </div>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <ul>
        {parks.map((park) => (
          <li key={park.parkCode}>
            <h2>{park.fullName}</h2>
            <p>{park.designation}</p>
            <a href={park.url} target="_blank" rel="noopener noreferrer">Visit Park Website</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;


