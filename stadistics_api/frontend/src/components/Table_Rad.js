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
           <th>ID</th>
           <th>Clave Establecida</th>
           <th>Direccion</th>
           <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
    </div>
  );
Table.propTypes = {
  data: PropTypes.array.isRequired
};
export default Table;