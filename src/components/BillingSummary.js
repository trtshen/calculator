import React from 'react';

const BillingSummary = ({ billData }) => {
  if (!billData || !billData.total || billData.total <= 0) {
    return null;
  }

  return (
    <section className="col-md-12 spacer">
      <div className="panel panel-default">
        <div className="panel-heading">
          Billing Summary
        </div>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td width="50%">Total (Before GST)</td>
              <td>RM{billData.total}</td>
            </tr>
            <tr>
              <td>GST</td>
              <td>RM{billData.gst}</td>
            </tr>
            <tr>
              <td>ICPT Rebate (Valid till June 2016)</td>
              <td>RM{billData.icpt}</td>
            </tr>
            <tr>
              <td>Total (After GST)</td>
              <td>RM{billData.gstTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BillingSummary;