import React, { useState, useEffect } from "react";
import axios from "axios";

function BrandDropDown() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://qstrike.azurewebsites.net/api/brands")
      .then(result => setData(result.data));
  }, []);

  return (
    <div>
      <select>
        {data.map(brand => (
          <option key={brand.brandID} value={brand.brandID}>
            {brand.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BrandDropDown;
