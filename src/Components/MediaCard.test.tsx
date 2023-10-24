import React from 'react';
import { render, screen } from '@testing-library/react';
import MediaCard from './MediaCard';

test('renders learn react link', () => {
  render(
    <MediaCard 
        title={"Kabary"} 
        image={"https://i.ytimg.com/vi/nEhLS_XTFMQ/maxresdefault.jpg"}
        shortDesc={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
      />
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
