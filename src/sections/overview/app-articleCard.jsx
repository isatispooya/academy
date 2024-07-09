/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

const ArticleCard = ({ title, description, date, author }) => (
        <div className="bg-white rounded-lg shadow-md p-6 m-4 w-80">
            <div className="flex justify-center mb-4">
                <div className="bg-gray-200 h-20 w-20 rounded-full" />
            </div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="text-gray-500 text-sm">
                <p>{author}</p>
                <p>{date}</p>
            </div>
            <button className="mt-4 text-blue-500">مطالعه مقاله</button>
        </div>
    );

export default ArticleCard;
