import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";

const Table = ({ data, titulo }) =>
  !data.length ? (    
    <div className="column">
      <h2 className="subtitle">
        {titulo} <strong>0 items</strong>
      </h2>
    </div>
  ) : (
    <div className="column">
      <h2 className="subtitle">
        {titulo} <strong>{data.length} items</strong>
      </h2>
      <table className="table is-striped">
        <thead>
          <tr>
            {Object.entries(data[0]).map(el => <th key={key(el)}>{el[0]}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map(el => (
            <tr key={el.id}>
              {Object.entries(el).map(el => (
                <td key={key(el)}>{el[1]}</td>)
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
Table.propTypes = {
  data: PropTypes.array.isRequired
};
export default Table;