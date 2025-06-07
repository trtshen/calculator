import React from 'react';

const PredictionInput = ({ finance, setFinance, onRefinance }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onRefinance(finance);
  };

  return (
    <section className="col-md-12 spacer">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <span className="input-group-addon" id="prediction">Predict consumable kWh (RM)</span>
          <input 
            type="number" 
            className="form-control" 
            placeholder="currency in MYR" 
            aria-describedby="prediction" 
            value={finance || ''} 
            onChange={(e) => setFinance(parseFloat(e.target.value) || null)}
          />
        </div>
      </form>
    </section>
  );
};

export default PredictionInput;