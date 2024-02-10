// MakeBid.js
import React, { useState } from 'react';
import './MakeBid.css';

function MakeBid({ onClose }) {
  const [bidAmount, setBidAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleBidAmountChange = (e) => {
    setBidAmount(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleListBid = () => {
    // Implement logic to list bid
    console.log("Bid Amount:", bidAmount);
    console.log("Description:", description);
    // Close the MakeBid component
    onClose();
  };

  return (
    <div className="make-bid">
      <h2>Make Your Bid</h2>
      <label htmlFor="bidAmount">Bid Amount:</label>
      <input
        type="number"
        id="bidAmount"
        value={bidAmount}
        onChange={handleBidAmountChange}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button onClick={handleListBid}>List Your Bid</button>
    </div>
  );
}

export default MakeBid;
