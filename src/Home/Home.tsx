import React from 'react';
import MediaCard from '../Components/MediaCard/MediaCard';

export default function Home() {
  return (
    <React.Fragment key={"1"}>

      <MediaCard 
        title={"Kabary"} 
        image={"https://i.ytimg.com/vi/nEhLS_XTFMQ/maxresdefault.jpg"}
        openUrl={"/kabary"}
        shortDesc={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
      />

      <MediaCard 
        title={"Ohabolana"} 
        image={"https://i.ytimg.com/vi/nEhLS_XTFMQ/maxresdefault.jpg"}
        openUrl={"/ohabolana"}
        shortDesc={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
      />

      <MediaCard 
        title={"Hainteny"} 
        image={"https://i.ytimg.com/vi/nEhLS_XTFMQ/maxresdefault.jpg"}
        openUrl={"/hainteny"}
        shortDesc={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
      />

    </React.Fragment>
  );
}