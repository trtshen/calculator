import React from 'react';

const ConsumableSummary = ({ consumable }) => {
  if (!consumable || consumable <= 0) {
    return null;
  }

  return (
    <section className="col-md-12 spacer">
      <div className="panel panel-default">
        <div className="panel-heading">
          Consumable kWh (Experimental)
        </div>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td width="50%">Predicted Consumable kWh</td>
              <td>{consumable} kWh</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ConsumableSummary;