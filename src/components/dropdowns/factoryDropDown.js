import React, { useState, useEffect } from "react";
import axios from "axios";

function FactoryDropDown() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://qx.azurewebsites.net/api/factory")
      .then(result => setData(result.data));
  }, []);

  return (
    <div>
      <select>
        {data.map(factory => (
          <option key={factory.FactoryID} value={factory.FactoryID}>
            {factory.FactoryName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FactoryDropDown;
