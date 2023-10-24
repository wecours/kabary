import React from 'react';
import { render, screen } from '@testing-library/react';
import SpeedDialWCB from './SpeedDial';

test('renders learn react link', () => {
  render(
    <SpeedDialWCB
      />
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
