import React from 'react';

const ConsumptionInput = ({ kwh, setKwh, onCalculate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate();
  };

  return (
    <section className="col-md-12">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <span className="input-group-addon" id="consumption">Consumption (kWh)</span>
          <input 
            type="number" 
            className="form-control" 
            placeholder="kWh" 
            aria-describedby="consumption" 
            value={kwh || ''} 
            onChange={(e) => setKwh(parseFloat(e.target.value) || null)}
            autoFocus
          />
        </div>
      </form>
    </section>
  );
};

export default ConsumptionInput;