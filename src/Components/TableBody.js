import React from "react";

const TableBody = ({ currentItems, shortByDisclaimer }) => {
  const shortByAll = (e, value) => {
    shortByDisclaimer(e, value);
  };
  return (
    <table>
      <tr>
        <th>count</th>
        <th>
          disclaimer
          <button onClick={(e) => shortByAll(e, "disclaimer")}>Short</button>
        </th>
        <th>
          sub_category
          <button onClick={(e) => shortByAll(e, "sub_category")}>Short</button>
        </th>
        <th>weight</th>
        <th>weight_type</th>
      </tr>
      {currentItems?.map((res, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{res.disclaimer}</td>
          <td>{res.sub_category}</td>
          <td>{res.weight}</td>
          <td>{res.weight_type}</td>
        </tr>
      ))}
    </table>
  );
};

export default TableBody;
