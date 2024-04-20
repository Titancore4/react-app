import React, { useState, useEffect } from 'react';
import Card from '../components/card/Card.component';
import Search from '../components/search/Search.component';
import './App.styles.css'; // Assuming you have a CSS file for styling

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [quotes, setQuotes] = useState([]);
  const [filteredQuotes, setFilteredQuotes] = useState([]);

  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=10")
      .then(response => response.json())
      .then(data => {
        setQuotes(data);
      })
      .catch(error => {
        console.error('Error fetching quotes:', error);
      });
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
