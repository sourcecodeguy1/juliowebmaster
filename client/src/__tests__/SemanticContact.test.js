import { render, screen, fireEvent } from '@testing-library/react';
import SemanticContact from '../components/ContactComponent/SemanticContact';
import axios from 'axios';
jest.mock('axios');
const fill = (message = 'Please help build my website.') => {
  fireEvent.change(screen.getByLabelText('First Name'), { target: { value: '李 O’Neil' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'odd+tag@example.com' } });
  fireEvent.change(screen.getByLabelText('Message'), { target: { value: message } });
};
afterEach(() => jest.resetAllMocks());
test('accessible fields and non-word message feedback', () => {
  render(<SemanticContact />); fill('123 !!!');
  expect(screen.getByRole('button', { name: 'Send Message' })).toBeDisabled();
  expect(screen.getByText(/describe your project using words/)).toBeInTheDocument();
  expect(axios.post).not.toHaveBeenCalled();
});
test('only backend acceptance shows success and clears inputs', async () => {
  axios.post.mockResolvedValue({ data: { success: 'OK' } });
  render(<SemanticContact />); fill();
  fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));
  expect(await screen.findByRole('status')).toHaveTextContent('accepted for sending');
  expect(screen.getByLabelText('Message')).toHaveValue('');
  expect(axios.post).toHaveBeenCalledWith('/api/send-email', {firstName:'李 O’Neil',email:'odd+tag@example.com',message:'Please help build my website.',website:''});
});
test.each([
  { response: { data: { error: 'Too many attempts. Please wait.' } } },
  { response: { data: { error: 'Verification failed. Please try again.' } } },
  new Error('network failure'),
])('failure preserves all entered text and allows retry', async (error) => {
  axios.post.mockRejectedValue(error);
  render(<SemanticContact />); fill();
  fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));
  expect(await screen.findByRole('alert')).toBeInTheDocument();
  expect(screen.getByLabelText('First Name')).toHaveValue('李 O’Neil');
  expect(screen.getByLabelText('Email')).toHaveValue('odd+tag@example.com');
  expect(screen.getByLabelText('Message')).toHaveValue('Please help build my website.');
  expect(screen.queryByRole('status')).not.toBeInTheDocument();
  expect(screen.getByRole('button', {name:'Send Message'})).toBeEnabled();
});
test('unexpected response never shows success or clears message', async () => {
  axios.post.mockResolvedValue({data:{}});
  render(<SemanticContact />);fill();fireEvent.click(screen.getByRole('button',{name:'Send Message'}));
  expect(await screen.findByRole('alert')).toHaveTextContent('text is still here');
  expect(screen.getByLabelText('Message')).toHaveValue('Please help build my website.');
});
