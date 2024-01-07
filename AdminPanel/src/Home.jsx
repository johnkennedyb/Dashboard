import React, { useState, useEffect, useRef } from "react";
import {
  BsFillBellFill,
  BsPeopleFill,
  BsFillGrid3X3GapFill,
  BsFillArchiveFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Home() {
  const intensityRef = useRef(null);
  const likelyhoodRef = useRef(null);
  const relevanceRef = useRef(null);
  const yearRef = useRef(null);

  const OpenSidebar = (ref) => {
    console.log("OpenSidebar called with ref:", ref);
    if (ref && ref.current) {
      console.log("Scrolling into view");
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched data
        setChartData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  const totalIntensity = chartData.reduce((total, data) => total + data.intensity, 0);


  return (
    <main className="main-container">
      <div className="main-title">
        <h3>Dashboard</h3>
      </div>
      <div className="main-card">
        <div id="intensity" ref={intensityRef} className="card">
          <div className="card-inner">
            <h3>INTENSITY</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{totalIntensity}</h1>
        </div>

        <div id="likelyhood" ref={likelyhoodRef} className="card">
          <div className="card-inner">
            <h3>LIKELYHOOD</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>24</h1>
        </div>

        <div id="relevance" ref={relevanceRef} className="card">
          <div className="card-inner">
            <h3>RELIVANCE</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>

        <div id="year" ref={yearRef} className="card">
          <div className="card-inner">
            <h3>YEAR</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
        <div className="charts">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="intensity" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
              <Bar dataKey="relevance" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={chartData}  
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="intensity" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="relevance" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Home;
