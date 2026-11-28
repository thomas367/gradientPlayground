import { fireEvent, render, screen } from '@testing-library/react';
import { ColorPicker } from 'components/common/colorPicker/colorPicker';

jest.mock('react-color', () => ({
    ChromePicker: () => <div data-testid="chrome-picker" />,
}));

describe('ColorPicker', () => {
    test('opens the picker when the color sample is clicked', () => {
        render(<ColorPicker color="#ff0000" onChange={jest.fn()} />);

        fireEvent.click(screen.getByRole('button', { name: /choose color/i }));

        expect(screen.getByRole('dialog', { name: 'Color picker' })).toBeInTheDocument();
        expect(screen.getByTestId('chrome-picker')).toBeInTheDocument();
    });
});
