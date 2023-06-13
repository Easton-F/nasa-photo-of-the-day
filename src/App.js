import React, { useState, useEffect } from "react";
import axios from 'axios';
import NasaPhoto from "./Components/NasaPhoto";
import "./App.css";

const dummyData = {
  date: "2023-06-12",
  explanation: "What’s that near the Moon? It’s the International Space Station (ISS). Although the ISS may appear to be physically near the Moon, it is not — it is physically near the Earth. In low Earth orbit and circulating around our big blue marble about every 90 minutes, the ISS was captured photographically as it crossed nearly in front of the Moon. The Moon, itself in a month-long orbit around the Earth, shows a crescent phase as only a curving sliver of its Sun-illuminated half is visible from the Earth. The featured image was taken in late March from Shanghai, China and shows not only details of Earth's largest human-made satellite, but details of the cratered and barren surface of Earth's largest natural satellite. Over the next few years, humanity is planning to send more people and machines to the Moon than ever before.",
  hdurl: "https://apod.nasa.gov/apod/image/2306/IssMoon_Yang_2599.jpg",
  title: "The Largest Satellites of Earth"
};

function App() {
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
        console.log('Response', res);
    })
    .catch(err => console.error(err));
  }, [])

  return (
    <div className="App">
     <NasaPhoto photo={data} />
    </div>
  );
}

export default App;

/*
date: "2023-06-12",
explanation: "What’s that near the Moon? It’s the International Space Station (ISS). Although the ISS may appear to be physically near the Moon, it is not — it is physically near the Earth. In low Earth orbit and circulating around our big blue marble about every 90 minutes, the ISS was captured photographically as it crossed nearly in front of the Moon. The Moon, itself in a month-long orbit around the Earth, shows a crescent phase as only a curving sliver of its Sun-illuminated half is visible from the Earth. The featured image was taken in late March from Shanghai, China and shows not only details of Earth's largest human-made satellite, but details of the cratered and barren surface of Earth's largest natural satellite. Over the next few years, humanity is planning to send more people and machines to the Moon than ever before.",
hdurl: "https://apod.nasa.gov/apod/image/2306/IssMoon_Yang_2599.jpg",
title: "The Largest Satellites of Earth"
*/