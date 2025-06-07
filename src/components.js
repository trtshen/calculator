// React components for TNB Calculator

// TariffTable Component
const TariffTable = () => {
  return React.createElement('section', { className: 'col-md-12' },
    React.createElement('table', { className: 'table table-striped' },
      React.createElement('thead', null,
        React.createElement('tr', null,
          React.createElement('th', null, 'No'),
          React.createElement('th', null, 'Tariff Block (kWh)'),
          React.createElement('th', null, 'Rate (cents)')
        )
      ),
      React.createElement('tbody', null,
        rates.map((rate, index) =>
          React.createElement('tr', { key: rate.level },
            React.createElement('td', null, index + 1),
            React.createElement('td', null, rate.limit),
            React.createElement('td', null, rate.charge)
          )
        )
      )
    )
  );
};

// ConsumptionInput Component
const ConsumptionInput = ({ kwh, setKwh, onCalculate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate();
  };

  return React.createElement('section', { className: 'col-md-12' },
    React.createElement('form', { onSubmit: handleSubmit },
      React.createElement('div', { className: 'input-group' },
        React.createElement('span', { className: 'input-group-addon', id: 'consumption' }, 'Consumption (kWh)'),
        React.createElement('input', {
          type: 'number',
          className: 'form-control',
          placeholder: 'kWh',
          'aria-describedby': 'consumption',
          value: kwh || '',
          onChange: (e) => setKwh(parseFloat(e.target.value) || null),
          autoFocus: true
        })
      )
    )
  );
};

// PredictionInput Component
const PredictionInput = ({ finance, setFinance, onRefinance }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onRefinance(finance);
  };

  return React.createElement('section', { className: 'col-md-12 spacer' },
    React.createElement('form', { onSubmit: handleSubmit },
      React.createElement('div', { className: 'input-group' },
        React.createElement('span', { className: 'input-group-addon', id: 'prediction' }, 'Predict consumable kWh (RM)'),
        React.createElement('input', {
          type: 'number',
          className: 'form-control',
          placeholder: 'currency in MYR',
          'aria-describedby': 'prediction',
          value: finance || '',
          onChange: (e) => setFinance(parseFloat(e.target.value) || null)
        })
      )
    )
  );
};

// BillingSummary Component
const BillingSummary = ({ billData }) => {
  if (!billData || !billData.total || billData.total <= 0) {
    return null;
  }

  return React.createElement('section', { className: 'col-md-12 spacer' },
    React.createElement('div', { className: 'panel panel-default' },
      React.createElement('div', { className: 'panel-heading' }, 'Billing Summary'),
      React.createElement('table', { className: 'table table-striped' },
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { width: '50%' }, 'Total (Before GST)'),
            React.createElement('td', null, `RM${billData.total}`)
          ),
          React.createElement('tr', null,
            React.createElement('td', null, 'GST'),
            React.createElement('td', null, `RM${billData.gst}`)
          ),
          React.createElement('tr', null,
            React.createElement('td', null, 'ICPT Rebate (Valid till June 2016)'),
            React.createElement('td', null, `RM${billData.icpt}`)
          ),
          React.createElement('tr', null,
            React.createElement('td', null, 'Total (After GST)'),
            React.createElement('td', null, `RM${billData.gstTotal}`)
          )
        )
      )
    )
  );
};

// ConsumableSummary Component
const ConsumableSummary = ({ consumable }) => {
  if (!consumable || consumable <= 0) {
    return null;
  }

  return React.createElement('section', { className: 'col-md-12 spacer' },
    React.createElement('div', { className: 'panel panel-default' },
      React.createElement('div', { className: 'panel-heading' }, 'Consumable kWh (Experimental)'),
      React.createElement('table', { className: 'table table-striped' },
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { width: '50%' }, 'Predicted Consumable kWh'),
            React.createElement('td', null, `${consumable} kWh`)
          )
        )
      )
    )
  );
};

// NotesSection Component
const NotesSection = () => {
  return React.createElement('section', { className: 'col-md-12 spacer' },
    React.createElement('div', { className: 'panel panel-default' },
      React.createElement('div', { className: 'panel-heading' }, 'Notes'),
      React.createElement('div', { className: 'panel-body' },
        React.createElement('p', { className: 'text-info' }, 'Minimum bill amount of Domestic Tariff is RM3.00'),
        React.createElement('p', { className: 'text-info' },
          'ICPT Rebate only available for consumption ',
          React.createElement('a', {
            href: 'https://www.tnb.com.my/faq/tariff',
            target: '_blank',
            rel: 'noopener noreferrer'
          }, 'exceed 300 kWh')
        ),
        React.createElement('p', { className: 'text-info' },
          'ICPT abbr. of ',
          React.createElement('strong', null,
            React.createElement('a', {
              href: 'https://www.tnb.com.my/faq/tariff#what-is-imbalance-cost-pass-through-icpt',
              target: '_blank',
              rel: 'noopener noreferrer'
            }, 'Imbalance Cost Pass-Through')
          )
        )
      )
    )
  );
};

// Main App Component
const App = () => {
  const [kwh, setKwh] = React.useState(null);
  const [finance, setFinance] = React.useState(null);
  const [billData, setBillData] = React.useState(null);
  const [consumable, setConsumable] = React.useState(null);

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

  return React.createElement('main', { className: 'text-center' },
    React.createElement('section', null,
      React.createElement('header', null,
        React.createElement('h1', null, 'TNB Calculator 2016 (Household)'),
        React.createElement('p', null, 'Calculate your electricity bill here!')
      ),
      React.createElement(TariffTable),
      React.createElement(ConsumptionInput, {
        kwh: kwh,
        setKwh: setKwh,
        onCalculate: handleCalculate
      }),
      React.createElement(PredictionInput, {
        finance: finance,
        setFinance: setFinance,
        onRefinance: handleRefinance
      }),
      React.createElement(ConsumableSummary, { consumable: consumable }),
      React.createElement(BillingSummary, { billData: billData }),
      React.createElement(NotesSection)
    )
  );
};