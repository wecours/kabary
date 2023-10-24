import React from 'react';
import { render, screen } from '@testing-library/react';
import MediaCard from './MediaCard';

test('renders learn react link', () => {
  render(<MediaCard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
