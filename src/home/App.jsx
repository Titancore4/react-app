import React, { useState, useEffect } from 'react';
import Card from '../components/card/Card.component';
import Search from '../components/search/Search.component';
import './App.styles.scss'; // Assuming you have a CSS file for styling

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [quotes, setQuotes] = useState([]);
  const [filteredQuotes, setFilteredQuotes] = useState([]);

  useEffect(() => {
    // Function to fetch quotes
    const fetchQuotes = async () => {
      const quotesArray = [];
      for (let i = 0; i < 10; i++) { // Loop 10 times
        try {
          const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          quotesArray.push(data);
        } catch (error) {
          console.error('Error fetching quotes:', error);
        }
      }
      setQuotes(quotesArray); // Set the quotes array
    };

    fetchQuotes(); // Call the fetchQuotes function
  }, []); // Empty dependency array to run once on mount

  useEffect(() => {
    const filtered = quotes.filter(quote => quote.text.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredQuotes(filtered);
  }, [searchText, quotes]);

  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };

  return (
    <div className="App">
      <header className="App-header">

        <Search className="search" handleSearch={handleSearch} />

        <div className="card-container">

          {filteredQuotes.map((quote, index) => (
            <Card key={index} text={quote.text} />
          ))}

        </div>

      </header>
    </div>
  );
}

export default App;
