import { useEffect, useState } from "react";

const Card = ({ name, flag, abbr }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        width: "200px",
        border: "1px solid gray",
        borderRadius: "4px",
        textAlign: "center"
      }}
    >
      <img src={flag} alt={`flag of ${abbr}`} width="100" height="60" />
      <h2>{name}</h2>
    </div>
  );
};

const API = " https://xcountries-backend.labs.crio.do/all";

export const Countries = () => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setCountryData(data))
      .catch((error) => console.error("Error fetching data: " + error));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {countryData.map((country, index) => (
        <Card
          key={index}
          name={country.name}
          flag={country.flag}
          abbr={country.abbr}
        />
      ))}
    </div>
  );
};

export default Card;
