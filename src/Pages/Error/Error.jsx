



import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPages = () => {
    const navigate = useNavigate();

    const handleError = () => {
        navigate('/')
    }
    return (
        <div className='w-11/12 mx-auto flex flex-col justify-center items-center mt-10'>
            <img src="/Error.png" alt="" />

            <h1 className='text-3xl font-semibold'>Oops, page not found!</h1>
            <p className='text-gray-500'>The page you are looking for is not available.</p>

            <button onClick={handleError} className='btn bg-gradient-to-r from-purple-600 to-purple-500 text-white mt-3 cursor-pointer p-3 hover:from-pink-600 hover:to-pink-400'>Go back!</button >

        </div>
    );
};

export default ErrorPages;