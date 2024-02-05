
import { render, screen } from '@testing-library/react';
import Home from '../components/Home'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

jest.mock('react-router-dom',()=>({
    useNavigate : jest.fn(),
}));

jest.mock('react-redux',()=>({
    useDispatch : jest.fn(),
}));

describe('Home Component',()=>{
    beforeEach(()=>{
        useNavigate.mockClear();
        useDispatch.mockClear();
    });
    test("render header in the document", ()=>{
        render(<Home />);
        const header = screen.getByText(/Welcome to the Trending Git Repos App!/i);
        expect(header).toBeInTheDocument();
    });
})
