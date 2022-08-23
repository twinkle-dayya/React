import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";

const Table = ({ result, setResult, allResults, length }) => {
  // Search
  // console.log(result, "result");
  const [search, setSearch] = useState("");
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItemPerPage, setTotalItemPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  const handlePagination = (event) => {
    if (event) {
      setTotalItemPerPage(event.target.value);
    }
  };

  useEffect(() => {
    let total = Math.ceil(length / totalItemPerPage);
    setTotalPages(total);
    let start = (currentPage - 1) * totalItemPerPage;
    let res1 = [...result];
    let res = res1.splice(start, totalItemPerPage);
    setCurrentItems(res);
  }, [currentPage, totalItemPerPage, result, setResult, allResults, length]);

  // Search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (!search) {
      setResult(allResults);
    } else {
      setResult(
        result?.filter((el) =>
          el.disclaimer.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, result, setResult]);

  // Shorting
  const shortByDisclaimer = (event, value) => {
    console.log(event, value);
    if (value) {
      currentItems.sort((a, b) => {
        if (a[value] < b[value]) {
          return -1;
        }
        if (a[value] > b[value]) {
          return 1;
        }
        return 0;
      });
    }
    setCurrentItems([...currentItems]);
  };

  return (
    <div>
      <label>search here</label>
      <input type="text" placeholder="search" onChange={handleChange}></input>

      <input
        type="number"
        placeholder="value"
        onChange={handlePagination}
      ></input>

      <TableBody
        currentItems={currentItems}
        shortByDisclaimer={shortByDisclaimer}
      />

      {totalItemPerPage &&
        [...Array(totalPages).keys()].map((item, index) => (
          <button onClick={() => setCurrentPage(index + 1)}>{item + 1}</button>
        ))}
    </div>
  );
};

export default Table;
