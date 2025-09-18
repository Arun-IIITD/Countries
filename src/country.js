import { useEffect, useState } from "react";

const Card = ({ name, flag }) => {
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
      <img src={flag} alt={`flag of ${name}`} width="100" height="60" />
      <h2>{name}</h2>
    </div>
  );
};

const API = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";
//const API = "https://xcountries-backend.labs.crio.do/all";

export const Countries = () => {
  const [countryData, setCountryData] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setCountryData(data))
      .catch((error) => console.error("Error fetching data: " + error));
  }, []);

  const filteredcountries = countryData.filter((country) => 
    //country.name.toLowerCase().includes(search.toLowerCase())
   country.common?.toLowerCase().includes(search.toLowerCase())
  )



  

  return (
    <div>

      <div> 
        <input
        style = {{marginLeft: "300px", marginBottom: "20px"}}
        type="text"
        placeholder="Search for countries..."
        name="search"
        value={search}
        onChange={(e) => setsearch(e.target.value)}



        />
      </div>


    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {filteredcountries.map((country, index) => (
        <Card
          key={index}
          name={country.common}
          flag={country.png}
          // abbr={country.abbr}
        />
      ))}

    </div>

    </div>
  );
};

export default Countries;
