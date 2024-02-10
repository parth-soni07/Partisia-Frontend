// App.js
import React from 'react';
import './App.css';
import Home from './home';
import { Route, Routes } from 'react-router-dom';
import List from './List';
import YourBids from './YourBids';
import ListBid from './ListBid';
import YourListing from './YourListing';

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/list" element={<List />} />
      <Route exact path="/yourbid" element={<YourBids />}      />
      <Route exact path="/list-bid" element={<ListBid />}      />
      <Route exact path='/your-listing' element={<YourListing /> } />  
      {/* Add other routes here if necessary */}
    </Routes>
  );
}

export default App;
