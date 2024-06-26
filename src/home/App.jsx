import React, { useState, useEffect } from 'react';
import Card from '../components/card/Card.component';
import Search from '../components/search/Search.component';
import './App.styles.scss';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [quotes, setQuotes] = useState([]);
  const [filteredQuotes, setFilteredQuotes] = useState([]);

  useEffect(() => {
    // Function to fetch quotes
    const fetchQuotes = async () => {
      const quotesArray = [];
      for (let i = 0; i < 10; i++) {
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
      setQuotes(quotesArray);
    };

    fetchQuotes();
  }, []);

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

        <h1>Random Useless FACTS</h1>      

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
