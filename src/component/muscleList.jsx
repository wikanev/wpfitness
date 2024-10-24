import React, { useState, useEffect } from 'react';
import Display from './display.jsx';
import './muscleList.css';

const MuscleList = () => {
  const [muscleList, setMuscleList] = useState([]);
  const [error, setError] = useState(null);
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [exerciseList, setExerciseList] = useState([]);

  useEffect(() => {
    const fetchMuscleListData = async () => {
      try {
        const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '6394613b54msh2c9eca131a09230p16e08ejsn727fdf8f4e9e', 
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
          }
        };

        const response = await fetch(url, options);
        const data = await response.json();
        setMuscleList(data); // Update the state with the fetched data
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };

    fetchMuscleListData();
  }, []); // Empty dependency array to run the effect once on mount

  const handleSelectChange = (event) => {
    setSelectedMuscle(event.target.value); // Update selected muscle
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedMuscle}?limit=100`;
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '6394613b54msh2c9eca131a09230p16e08ejsn727fdf8f4e9e',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
          }
        };

        const response = await fetch(url, options);
        const data = await response.json();
        setExerciseList(data); // Update the state with the fetched data
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };

    if (selectedMuscle) {
      fetchExerciseData();
    }
  }, [selectedMuscle]); // Update the effect when selectedMuscle changes

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="muscle-list">
      <h2>Select a Muscle Group</h2>
      <select value={selectedMuscle} onChange={handleSelectChange}>
        <option value="">Select a muscle group</option>
        {muscleList.map((muscle, index) => (
          <option key={index} value={muscle}>{muscle}</option>
        ))}
      </select>

      {selectedMuscle && (
        <div>
          <h3>You selected: {selectedMuscle}</h3>
          <h3>Exercises for {selectedMuscle} muscle group:</h3>
          <Display exerciseList={exerciseList} />
        </div>
      )}
    </div>
  );
};

export default MuscleList;

