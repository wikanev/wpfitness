import React, { useState, useEffect } from 'react';
import Display from './display.jsx';

const SearchExercises = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [error, setError] = useState(null); // Add error state
    const [exerciseList, setExerciseList] = useState([]); 
      

    useEffect(() => {
       
        const timeoutId = setTimeout(async () => {
            if (searchTerm.length > 0) {
       
        const fetchSuggestions = async () => {
            try {
                const url = `https://exercisedb.p.rapidapi.com/exercises/name/${searchTerm}?offset=0&limit=5`;
                const options = {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': '6394613b54msh2c9eca131a09230p16e08ejsn727fdf8f4e9e',
                        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                    }
                };

                const response = await fetch(url, options);
                const data = await response.json();
                setSuggestions(data); // Correct state update
            } 
            catch (error) {
                setError('Error fetching data'); // Handle error
                console.error('Error fetching data:', error);
            }
        }
        fetchSuggestions();
    };
        }, 1500);
        

        return () => clearTimeout(timeoutId);
    }

    
    , [searchTerm]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSuggestionClick = (suggestionName) => {
        setSearchTerm(suggestionName);
      
    
    };

     const handleSubmit = () => {
        
          const fetchExerciseData = async () => {
            try {
                const url = `https://exercisedb.p.rapidapi.com/exercises/name/${searchTerm}?offset=0&limit=5`;
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
    fetchExerciseData();

    };
   

    return (
        <>
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search exercises"
                list="suggestions"
            />
            {/* Handle error display */}
            {error && <div>{error}</div>}
            
            {suggestions.length > 0 && (
                <datalist id="suggestions">
                    {suggestions.map((suggestion) => (
                        <option key={suggestion.id} value={suggestion.name} onClick={() => handleSuggestionClick(suggestion.name)}/>

                    ))}
                    
                </datalist>
              
                
                
            )}
              <button type="submit" onClick={() => handleSubmit(suggestions.name)}>Submit</button>
              
        </div>
        <div>
        {exerciseList.length > 0 && <Display exerciseList={exerciseList} /> } 
        </div>
        </>
    );
};

export default SearchExercises;


