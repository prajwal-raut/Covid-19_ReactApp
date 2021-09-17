import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
      const actualData = await res.json();
      //console.log(actualData.data.regional);
      setData(actualData.data.regional);
    } catch (err) {
      alert("API Error");
    }
  };

  // useEffect hook to get the state
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>    
      <div className="table-container">
        <h1 className="heading">India Covid-19 Dashboard</h1>
        <table className="table">
          <thead>
            <tr>
              <th>State Name</th>
              <th className="confirmCol">Confirmed*</th>
              <th className="recoverCol">Recovered*</th>
              <th className="deathCol">Deaths*</th>
            </tr>
          </thead>
          <tbody>
            {
              // use Array map() method to get the data from Api
              data.map((curElem, index) => {
                return (
                  <tr key={index}>
                    <td data-label="State Name" className="stateHover">
                      {curElem.loc}
                    </td>
                    <td data-label="Confirmed*" className="confirmHover">
                      {curElem.totalConfirmed}
                    </td>
                    <td data-label="Recovered*" className="recoverHover">
                      {curElem.discharged}
                    </td>
                    <td data-label="Deaths*" className="deathHover">
                      {curElem.deaths}
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
