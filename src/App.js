import React, { useState } from 'react'

export default function App() {

    const url = 'https://passwordinator.herokuapp.com/generate?num=true&caps=true&len=10'

    const [passW, setPassW] = useState([{}]);

    const fetchURes = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setPassW(data);
            })
    }


    return (
        <div>
             <button onClick={fetchURes} type="submit" className=" ml-32 mt-16 mb-16 md:flex-row md:justify-between md:mb-12 items-center p-2 pl-5 pr-5 bg-transparent border-2 border-indigo-700 text-blue-900 text-lg rounded-lg transition-colors duration-700 transform hover:bg-green-800 hover:text-gray-100 focus:border-4 focus:border-indigo-300">Generate</button>
            {typeof passW === "undefined" ? (
                <p>Loading...</p>
            ) : (
                <p className=" ml-32 mt-16 mb-16 p-2 pl-5 pr-5 text-blue-900 text-lg  transition-colors duration-700 hover:text-pink-700">{passW.data}</p>
            )}
        </div>
    );
};
