import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useBookingsApi = () => {
    const axiosSecure = useAxiosSecure();

    const bookingsCreatedByPromise = email =>{
        return axiosSecure.get(`/bookings?email=${email}`).then(res => res.data);
    }

    return {
        bookingsCreatedByPromise
    };
};

export default useBookingsApi;