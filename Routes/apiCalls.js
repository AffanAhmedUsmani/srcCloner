import axios from 'axios'

export const fetchAllSubjects = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/allSubjects/');
      return response.data;
    } catch (error) {
      console.error('Error fetching subjects:', error);
      return [];
    }
  };