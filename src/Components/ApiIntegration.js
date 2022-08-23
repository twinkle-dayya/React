import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Table from "./Table";

const ApiIntegration = () => {
  console.log("hello this is new");
  const [result, setResult] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [length, setLength] = useState(0);

  useEffect(() => {
    axios
      .get("https://prabhujipurefood.com/administration/api/paginate_product")
      .then((res) => {
        setResult(res.data.data);
        setAllResults(res.data.data);
        setLength(res.data.data.length);
      });
  }, []);

  return (
    <Table
      result={result}
      setResult={setResult}
      allResults={allResults}
      length={length}
    />
  );
};

export default ApiIntegration;
