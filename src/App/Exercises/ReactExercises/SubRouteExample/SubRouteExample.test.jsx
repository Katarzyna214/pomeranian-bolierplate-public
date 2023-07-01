import { render, screen } from '@testing-library/react';

import { SubRouteExample } from './SubRouteExample'; //testowanie komponentów reactowych a w "jest" bylo testowanie funkcjonalności javascript

test('We get information from subrouteexample in paragraph', () => {
  // ARRAGE
  render(<SubRouteExample />);

  // ASSERT
  expect(screen.getByText('Jestem przykładowym routem')).toBeInTheDocument();
});

describe('SubRouteExample', () => {
  it('We get information from subrouteexample in paragraph', () => {
    render(<SubRouteExample />);
    // ASSERT
    expect(screen.getByText('Jestem przykładowym routem')).toBeInTheDocument();
  });

  it('Get placeholder text from input', () => {
    render(<SubRouteExample />);
    // ASSERT
    expect(screen.getByPlaceholderText('wpisz text'));
  });

  it('Rendered text in value of input', () => {
    render(<SubRouteExample text="jakiś tekst" />);
    // ASSERT

    const input = screen.getByTestId('textInput');
    expect(input.defaultValue).toBe('jakiś tekst');
  });
});
