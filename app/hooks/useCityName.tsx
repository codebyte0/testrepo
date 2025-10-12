import { useState, useEffect } from 'react';
import axios from 'axios';

const useLocationDetection = () => {
  const [displayName, setDisplayName] = useState('Surrey');
  
  // ADD THIS: Manual override for testing
  const MANUAL_LOCATION = "White Rock"; // Set to 'White Rock' or 'Surrey' or null for auto-detect
  
  const whiteRockAreas = ['White Rock', 'South Surrey'];
  const surreyAreas = ['Surrey', 'Newton', 'Guildford', 'Fleetwood', 'Cloverdale', 'Whalley'];

  useEffect(() => {
    // If manual location is set, use it
    if (MANUAL_LOCATION) {
      setDisplayName(MANUAL_LOCATION);
      console.log('Manual override:', MANUAL_LOCATION);
      return;
    }

    const detectLocation = async () => {
      try {
        const response = await axios.get('https://ipinfo.io?token=a2b26e919e08a9');
        const { city } = response.data;
        
        const normalizedCity = city ? city.trim().toLowerCase() : '';
        const isWhiteRockArea = whiteRockAreas.find(area => area.toLowerCase() === normalizedCity);
        const isSurreyArea = surreyAreas.find(area => area.toLowerCase() === normalizedCity);

        if (isWhiteRockArea) {
          setDisplayName('White Rock');
        } else if (isSurreyArea) {
          setDisplayName('Surrey');
        } else {
          setDisplayName('Surrey');
        }
      } catch (error) {
        console.error('Location detection failed:', error);
        setDisplayName('Surrey');
      }
    };

    detectLocation();
  }, []);

  return { displayName };
};

export default useLocationDetection;