import React from 'react';
import { rates } from '../utils/billCalculations';

const TariffTable = () => {
  return (
    <section className="col-md-12">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Tariff Block (kWh)</th>
            <th>Rate (cents)</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate, index) => (
            <tr key={rate.level}>
              <td>{index + 1}</td>
              <td>{rate.limit}</td>
              <td>{rate.charge}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TariffTable;