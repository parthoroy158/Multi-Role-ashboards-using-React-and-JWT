import axios from 'axios';
import React from 'react';


const AxiosPublic = axios.create({
    baseURL: 'http://localhost:5000'
})
const UseAxiosPublic = () => {

    return AxiosPublic
};

export default UseAxiosPublic;