import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

// describe('Counter Component', () => {
//     it('should render with initial count', () => {
//         render(<Counter initCount={5} />);
//         expect(screen.getByText('Count: 5')).toBeInTheDocument();
//     }

describe('Counter Component', () => {
  beforeEach(() => {
    render(<Counter initCount={5} />);
  });

  it('should render with initial count', () => {
    expect(screen.getByText('Count: 5')).toBeInTheDocument();
  });

  it('should increment count when ++ button is clicked', async () => {
    const incrementBtn = screen.getByRole('button', { name: '++' });
    fireEvent.click(incrementBtn);
    expect(screen.getByText('Count: 6')).toBeInTheDocument();
  });

  it('should decrement count when -- button is clicked', async () => {
    const decrementBtn = screen.getByRole('button', { name: '--' });
    fireEvent.click(decrementBtn);
    expect(screen.getByText('Count: 4')).toBeInTheDocument();
  });

  it('should update count from input field', async () => {
    const input = screen.getByPlaceholderText('Count') as HTMLInputElement;
    await userEvent.clear(input);
    await userEvent.type(input, '10');
    expect(input.value).toBe('10');
    expect(screen.getByText('Count: 10')).toBeInTheDocument();
  });

  it('should increment multiple times', async () => {
    const incrementBtn = screen.getByRole('button', { name: '++' });
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(screen.getByText('Count: 8')).toBeInTheDocument();
  });

 
});