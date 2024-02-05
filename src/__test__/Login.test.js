import { fireEvent, render, screen } from '@testing-library/react';
import Login from '../components/Login';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../components/A&R/reducers/authSlice';


jest.mock('react-router', () => ({
    useNavigate: jest.fn(),
}));

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

describe('Login Component', () => {
    beforeEach(() => {
        useNavigate.mockClear();
        useDispatch.mockClear();
    });
    test("render login button", () => {
        render(<Login />);
        const login = screen.getByText('Login with Github');
        expect(login).toBeInTheDocument();
    });
    test("It should redirect to github log in page when clicked on 'Login with Github' button", () => {
        const replaceMock = jest.spyOn(window.location, 'replace').mockImplementation(() => { });
        render(<Login />);
        fireEvent.click(screen.getByText('Login with Github'));
        expect(replaceMock).toHaveBeenCalledWith('https://github.com/login/oauth/authorize?client_id=16386e238106fb1a47d4&redirect_uri=http://localhost:3000/');
        replaceMock.mockRestore();
    });
    test("should dispatch the access token and navigate to '/repos' when a valid access token is received", () => {
        const mockGet = jest.fn().mockReturnValueOnce('validAccessToken');
        URLSearchParams.prototype.get = mockGet;

        const dispatchMock = jest.fn();
        const navigateMock = jest.fn();

        useDispatch.mockReturnValue(dispatchMock);
        useNavigate.mockReturnValue(navigateMock);

        render(<Login />);

        expect(dispatchMock).toHaveBeenCalledWith(setAccessToken('validAccessToken'));
        expect(navigateMock).toHaveBeenCalledWith('/repos', { replace: true });

        jest.clearAllMocks();
    });
})
