import React, {useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from "./Components/NasaPhoto";
import styled from "styled-components";



/*
const dummyData = {
  date: "2022-11-10",
  explanation: "The beginning, middle, and end of a journey through planet Earth's colorful umbral shadow is captured in this timelapse composite image of a total lunar eclipse. Taken on November 8 from Kitt Peak National Observatory this eclipse's 1 hour and 25 minute long total phase starts on the right and finishes on the left. Reddened sunlight, scattered into the central shadow by Earth's dusty atmosphere produces the dramatic dark red hues reflected by the lunar disk. For this eclipse, additional reddening is likely due to scattering from ash lingering in the atmosphere after a large volcanic eruption in the southern Pacific earlier this year. Seen at the right and left, the Earth's shadow is still lighter along its edge though. That faint bluish fringe along the lunar limb is colored by sunlight filtered through Earth's stratospheric ozone layer.",
  hdurl: "https://apod.nasa.gov/apod/image/2211/2022_11_08_TLE_Trio_1500px.png",
  title: "Total Lunar Eclipse"
}
*/

const Nasaa = styled.div`
background-color: #2D6E75;
  color:#B9C7C7;
`;

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error(err))
  }, [])
 
  return (
    <Nasaa className="App">
      { data && <NasaPhoto photo ={data} />}
    </Nasaa>
  );
}



export default App;
//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

/*
date: "2022-11-10"
explanation: "The beginning, middle, and end of a journey through planet Earth's colorful umbral shadow is captured 
in this timelapse composite image of a total lunar eclipse. Taken on November 8 from Kitt Peak National Observatory this eclipse's 1 hour and 25 minute 
long total phase starts on the right and finishes on the left. Reddened sunlight, scattered into the central shadow by Earth's dusty atmosphere produces 
the dramatic dark red hues reflected by the lunar disk. For this eclipse, additional reddening is likely due to scattering from ash lingering in the 
atmosphere after a large volcanic eruption in the southern Pacific earlier this year. Seen at the right and left, the Earth's shadow is still lighter 
along its edge though. That faint bluish fringe along the lunar limb is colored by sunlight filtered through Earth's stratospheric ozone layer."
hdurl: "https://apod.nasa.gov/apod/image/2211/2022_11_08_TLE_Trio_1500px.png"
title: "Total Lunar Eclipse"

 */

/*
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err))
  }, [])

*/