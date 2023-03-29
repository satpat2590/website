import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'any-user-name': '1tS3Ocq5mj1deU1e3Tr96Bpgvi8QhH3C9q292cK2ln1slheRobr4',
        Authorization:
          'Basic YW55LXVzZXItbmFtZToxdFMzT2NxNW1qMWRlVTFlM1RyOTZCcGd2aThRaEgzQzlxMjkyY0sybG4xc2xoZVJvYnI0',
      },
    };

    const response = await fetch(
      'https://api.footprintnetwork.org/v1/data/all/2000',
      options
    );

    const jsonResponse = await response.json();

    console.log(jsonResponse); // print entire response object

    const filteredData = jsonResponse.filter(
      (item) =>
        item.record === 'Population' || item.record === 'GDP' || item.record === 'HDI'
    );

    const combinedData = filteredData.reduce((acc, item) => {
      const existingCountry = acc.find((c) => c.countryName === item.countryName);
      if (existingCountry) {
        existingCountry[item.record] = item.value;
      } else {
        acc.push({
          countryName: item.countryName,
          [item.record]: item.value,
        });
      }
      return acc;
    }, []);

    console.log(combinedData); // print combined data object

    setData(combinedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Population</th>
            <th>GDP</th>
            <th>HDI</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.countryName}>
              <td>{item.countryName}</td>
              <td>{item.Population}</td>
              <td>{item.GDP}</td>
              <td>{item.HDI}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
