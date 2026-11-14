import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UI Garden heading', () => {
  render(<App />);

  const heading = screen.getByRole('heading', {
    name: /🌸 UI Garden/i,
    level: 1,
  });

  expect(heading).toBeInTheDocument();
});

test('renders all nine reusable component sections', () => {
  render(<App />);

  expect(screen.getByText('01. Button')).toBeInTheDocument();
  expect(screen.getByText('02. Label')).toBeInTheDocument();
  expect(screen.getByText('03. Text')).toBeInTheDocument();
  expect(screen.getByText('04. Dropdown')).toBeInTheDocument();
  expect(screen.getByText('05. Radio Button')).toBeInTheDocument();
  expect(screen.getByText('06. Table')).toBeInTheDocument();
  expect(screen.getByText('07. Image')).toBeInTheDocument();
  expect(screen.getByText('08. Hero Image')).toBeInTheDocument();
  expect(screen.getByText('09. Card')).toBeInTheDocument();
});
