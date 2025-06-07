import React from 'react';

const NotesSection = () => {
  return (
    <section className="col-md-12 spacer">
      <div className="panel panel-default">
        <div className="panel-heading">Notes</div>
        <div className="panel-body">
          <p className="text-info">Minimum bill amount of Domestic Tariff is RM3.00</p>
          <p className="text-info">
            ICPT Rebate only available for consumption{' '}
            <a href="https://www.tnb.com.my/faq/tariff" target="_blank" rel="noopener noreferrer">
              exceed 300 kWh
            </a>
          </p>
          <p className="text-info">
            ICPT abbr. of{' '}
            <strong>
              <a 
                href="https://www.tnb.com.my/faq/tariff#what-is-imbalance-cost-pass-through-icpt" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Imbalance Cost Pass-Through
              </a>
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotesSection;