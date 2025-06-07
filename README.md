# tnb-bill-calculator
Calculate your household electricity bill for 2016

Demo: https://trtshen.github.io/tnb-bill-calculator/

Features:
- Predict your consumable kWh by assumed expense amount
- Check cost with kWh consumption

## Technology Stack
- **Frontend**: React (via CDN)
- **Calculation Logic**: Separated JavaScript utilities (`src/billCalculations.js`)
- **Components**: Modular React components (`src/components.js`)

## Project Structure
- `index.html` - Main React application
- `index-angular.html` - Original AngularJS version (backup)
- `src/billCalculations.js` - Bill calculation utilities and rates data
- `src/components.js` - React components (TariffTable, ConsumptionInput, etc.)
- `package.json` - Project configuration and dependencies

## Development
To run locally:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`
