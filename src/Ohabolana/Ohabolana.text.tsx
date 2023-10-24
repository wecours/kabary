import React from 'react';
import { render, screen } from '@testing-library/react';
import Ohabolana from './Ohabolana';

test('renders learn react link', () => {
  render(<Ohabolana />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
