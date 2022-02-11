import { render, screen } from '@testing-library/react';
import AddVenue from './addVenuePage';

test('renders learn react link', () => {
  render(<AddVenue />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
