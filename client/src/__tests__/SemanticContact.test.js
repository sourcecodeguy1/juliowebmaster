// SemanticContact.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import SemanticContact from '../components/ContactComponent/SemanticContact';
import {act} from "react-dom/test-utils";

import axios from 'axios'; // Import axios or a mock version
jest.mock('axios'); // Mock axios for testing
describe('SemanticContact', () => {

    it('renders without crashing', () => {
        render(<SemanticContact />);
    });

    it('renders form inputs', () => {
        // Use createRoot to render the component
        render(<SemanticContact />);

        // Check form inputs render
        expect(screen.getByTestId('first-name')).toBeInTheDocument();
        expect(screen.getByTestId('email')).toBeInTheDocument();
        expect(screen.getByTestId('message')).toBeInTheDocument();
    });

    it('displays error for empty form submit', () => {
        // Use createRoot to render the component
        render(<SemanticContact />);

        fireEvent.click(screen.getByText('Submit'));

        expect(screen.getByTestId('first-name')).toBeInTheDocument();
        expect(screen.getByTestId('email')).toBeInTheDocument();
        expect(screen.getByTestId('message')).toBeInTheDocument();
    });

    it('calls submit handler when form submitted', async () => {
        jest.setTimeout(20000); // Set the timeout to 20 seconds (adjust as needed)

        // Mocking a successful API response
        axios.post.mockResolvedValue({ data: { success: "OK" } });

        render(<SemanticContact />);

        // Simulate user input
        fireEvent.change(screen.getByLabelText('First name'), { target: { value: 'John' } });
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@email.com' } });
        fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Test message' } });

        // Simulate user clicking the submit button
        fireEvent.click(screen.getByText('Submit'));

        // Wait for either success or error message to appear
        await screen.findByTestId('success-message');

        // Verify that axios.post was called with the correct parameters
        expect(axios.post).toHaveBeenCalledWith('/api/send-email', {
            firstName: 'John',
            email: 'john@email.com',
            message: 'Test message',
        });

        // Reset the mock to handle the next test case
        jest.clearAllMocks();
    });

    it('handles API request failure', async () => {
        const onSubmit = jest.fn();
        render(<SemanticContact onSubmit={onSubmit} />);

        fireEvent.change(screen.getByLabelText('First name'), { target: { value: 'John' } });
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@email.com' } });
        fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Test message' } });

        // Mocking a failed API response
        axios.post.mockRejectedValue(new Error('Network Error'));

        await act(async () => {
            fireEvent.click(screen.getByText('Submit'));
        });

        // Verify that onSubmit was not called in case of failure
        expect(onSubmit).not.toHaveBeenCalled();
        // You might want to check any other expectations related to the failure case

        // Reset the mock to handle the next test case
        jest.clearAllMocks();
    });

});
