import React, { useState } from 'react';
import TariffTable from './components/TariffTable';
import ConsumptionInput from './components/ConsumptionInput';
import PredictionInput from './components/PredictionInput';
import BillingSummary from './components/BillingSummary';
import ConsumableSummary from './components/ConsumableSummary';
import NotesSection from './components/NotesSection';
import { calculateBill, calculateConsumable } from './utils/billCalculations';

function App() {
  const [kwh, setKwh] = useState(null);
  const [finance, setFinance] = useState(null);
  const [billData, setBillData] = useState(null);
  const [consumable, setConsumable] = useState(null);

  const handleCalculate = () => {
    setConsumable(null);
    setFinance(null);
    
    const result = calculateBill(kwh);
    setBillData(result);
  };

  const handleRefinance = (amount) => {
    setBillData(null);
    setKwh(null);
    
    const result = calculateConsumable(amount);
    setConsumable(result);
  };

  return (
    <main className="text-center">
      <section>
        <header>
          <h1>TNB Calculator 2016 (Household)</h1>
          <p>Calculate your electricity bill here!</p>
        </header>

        <TariffTable />
        
        <ConsumptionInput 
          kwh={kwh} 
          setKwh={setKwh} 
          onCalculate={handleCalculate} 
        />
        
        <PredictionInput 
          finance={finance} 
          setFinance={setFinance} 
          onRefinance={handleRefinance} 
        />
        
        <ConsumableSummary consumable={consumable} />
        
        <BillingSummary billData={billData} />
        
        <NotesSection />
      </section>
    </main>
  );
}

export default App;