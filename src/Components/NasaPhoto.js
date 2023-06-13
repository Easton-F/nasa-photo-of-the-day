import React from 'react';

const dummyData = {
    date: "2023-06-12",
    explanation: "What’s that near the Moon? It’s the International Space Station (ISS). Although the ISS may appear to be physically near the Moon, it is not — it is physically near the Earth. In low Earth orbit and circulating around our big blue marble about every 90 minutes, the ISS was captured photographically as it crossed nearly in front of the Moon. The Moon, itself in a month-long orbit around the Earth, shows a crescent phase as only a curving sliver of its Sun-illuminated half is visible from the Earth. The featured image was taken in late March from Shanghai, China and shows not only details of Earth's largest human-made satellite, but details of the cratered and barren surface of Earth's largest natural satellite. Over the next few years, humanity is planning to send more people and machines to the Moon than ever before.",
    hdurl: "https://apod.nasa.gov/apod/image/2306/IssMoon_Yang_2599.jpg",
    title: "The Largest Satellites of Earth"
  };

const NasaPhoto = (props) => {
    return (
        <div className='nasa-photo-wrapper'>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;