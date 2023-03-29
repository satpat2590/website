import React, { useEffect, useState } from 'react';

const options = {
  method: "GET",
  headers: {
    'Content-Type': "application/json",
    'any-user-name': "1tS3Ocq5mj1deU1e3Tr96Bpgvi8QhH3C9q292cK2ln1slheRobr4",
    'Authorization': 'Basic YW55LXVzZXItbmFtZToxdFMzT2NxNW1qMWRlVTFlM1RyOTZCcGd2aThRaEgzQzlxMjkyY0sybG4xc2xoZVJvYnI0'
  }
};

const FootprintData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // fetch data from API endpoint, all from the year 2000
      const response = await fetch('https://api.footprintnetwork.org/v1/data/all/2000', options);
      const json = await response.json();
      // filter out records that are not population, GDP, or HDI
      const records = json.filter(obj => obj.record && ['Population', 'GDP', 'HDI'].includes(obj.record));

      let countries = {};
      records.forEach(record => {
        const { countryName, record: field, value } = record;
        if (countries[countryName]) { //if country exists within countries object, add field and value
          countries[countryName][field] = value;
        } else {
          countries[countryName] = { countryName, [field]: value }; //if country doesn't exist, create it
        }
      });

      setData(Object.values(countries)); // set data to array of country objects
      console.log(json); // log entire response object
    };

    fetchData();
  }, []);

  return (
    <div style={{ overflowX: 'auto'}}>
    <table style={{ borderCollapse: 'collapse', width: 'calc(100vw - 75px)', overflowX: 'auto'}}>
      <thead>
        <tr style={{ backgroundColor: 'darkgreen', color: 'white' }}>
          <th style={{ padding: '10px', border: '1px solid black' }}>Country Name</th>
          <th style={{ padding: '10px', border: '1px solid black' }}>Population</th>
          <th style={{ padding: '10px', border: '1px solid black' }}>GDP</th>
          <th style={{ padding: '10px', border: '1px solid black' }}>HDI</th>
        </tr>
      </thead>
      <tbody>
        {data.map((country, index) => (
          <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'lightbrown' : 'white' }}>
            <td style={{ padding: '10px', border: '1px solid black' }}>{country.countryName}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>{country.Population}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>{country.GDP}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>{country.HDI}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default FootprintData;