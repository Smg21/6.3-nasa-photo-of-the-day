import React from 'react';
/*
const dummyData = {
    date: "2022-11-10",
explanation: "The beginning, middle, and end of a journey through planet Earth's colorful umbral shadow is captured in this timelapse composite image of a total lunar eclipse. Taken on November 8 from Kitt Peak National Observatory this eclipse's 1 hour and 25 minute long total phase starts on the right and finishes on the left. Reddened sunlight, scattered into the central shadow by Earth's dusty atmosphere produces the dramatic dark red hues reflected by the lunar disk. For this eclipse, additional reddening is likely due to scattering from ash lingering in the atmosphere after a large volcanic eruption in the southern Pacific earlier this year. Seen at the right and left, the Earth's shadow is still lighter along its edge though. That faint bluish fringe along the lunar limb is colored by sunlight filtered through Earth's stratospheric ozone layer.",
hdurl: "https://apod.nasa.gov/apod/image/2211/2022_11_08_TLE_Trio_1500px.png",
title: "Total Lunar Eclipse"
}
*/

const NasaPhoto = (props) => {
    return (
    <div className="nasa-photo-wrapper"> 
    <h3>{props.photo.title}</h3>
        <p >{props.photo.date}</p>
        <img src = {props.photo.hdurl} alt = "phopt" />
        <p className = "explanation">{props.photo.explanation}</p>
    </div> 
    )
}

export default NasaPhoto;