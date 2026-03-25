import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

test('renders Hitdesigns branding', () => {
  render(
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
  expect(screen.getByAltText(/Hitdesigns — Branding & Advertising/)).toBeInTheDocument();
});
