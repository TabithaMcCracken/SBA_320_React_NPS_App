// src/components/ActivitySelector.js
import React from 'react';

const ActivitySelector = ({ activities, selectedActivity, onActivityChange }) => (
  <div>
    {/* <label htmlFor="activity">Select an activity: </label> */}
    <select id="activity" value={selectedActivity} onChange={onActivityChange}>
      <option value="">--Select an activity--</option>
      {activities.map((activity) => (
        <option key={activity.id} value={activity.id}>
          {activity.name}
        </option>
      ))}
    </select>
  </div>
);

export default ActivitySelector;
