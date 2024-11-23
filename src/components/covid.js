import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {
  // State to hold the COVID-19 data
  const [data, setData] = useState(null);

  // Function to fetch COVID-19 data
  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://disease.sh/v3/covid-19/countries/pakistan"
      );
      const actualData = await res.json();
      setData(actualData); // Store the data in state
    } catch (err) {
      console.error("Error fetching COVID-19 data:", err);
    }
  };

  // useEffect to call getCovidData on component mount
  useEffect(() => {
    getCovidData();
  }, []);

  // If data is not yet loaded, show loading message
  if (!data) {
    return <h1>Loading...</h1>;
  }

  // Render the UI with the fetched data
  return (
    <>
      <section>
        <h1>Live</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <ul>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name">
                  <span>OUR</span> COUNTRY
                </p>
                <p className="card_total card_small">{data.country}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span> RECOVERED
                </p>
                <p className="card_total card_small">{data.recovered}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span> CONFIRM
                </p>
                <p className="card_total card_small">{data.cases}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span> DEATHS
                </p>
                <p className="card_total card_small">{data.deaths}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span> ACTIVE
                </p>
                <p className="card_total card_small">{data.active}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name">
                  <span>LAST</span> UPDATE
                </p>
                <p className="card_total card_small">
                  {new Date(data.updated).toLocaleString()}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
