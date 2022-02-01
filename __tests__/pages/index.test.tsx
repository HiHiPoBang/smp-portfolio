import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';

describe('Home', () => {
  render(<Home />);
  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: /Iris Pai/,
    });

    expect(heading).toBeInTheDocument();
  });
});
