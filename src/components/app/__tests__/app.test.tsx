import { render, screen } from '@testing-library/react';
import { App } from 'components/app/app';

describe('App', () => {
    test('renders the application title', () => {
        render(<App />);

        expect(screen.getByRole('heading', { name: 'Gradient Playground' })).toBeInTheDocument();
    });
});
