import React, { useEffect, useState } from 'react';

const Covidapp = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        // console.log(actualData.statewise);
        setData(actualData.statewise)
    }

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
                            <th>State</th>
                            <th>Confirmed</th>
                            <th className="recovered">Recovered</th>
                            <th className="deaths">Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            // use Array map() method to get the data from Api
                            data.map((curElem, index) => {
                                return (
                                    <tr key={index}>
                                        <td data-label="State">{curElem.state}</td>
                                        <td data-label="Confirmed">{curElem.confirmed}</td>
                                        <td data-label="Recovered">{curElem.recovered}</td>
                                        <td data-label="Deaths">{curElem.deaths}</td>
                                        <td data-label="Active">{curElem.active}</td>
                                        <td data-label="Updated">{curElem.lastupdatedtime}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Covidapp;



