import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('Renders text in button', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Renders button with the clear theme', () => {
    render(<Button variant="clear">TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
