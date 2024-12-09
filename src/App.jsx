import React from 'react';
import Navigation from './components/Navigation';
import TopContent from './components/TopContent';
import CardsSection from './components/CardsSection';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="main-content">
        <SearchBar />
        <TopContent />
        <CardsSection />
      </div>
    </div>
  );
}

export default App;