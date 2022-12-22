import React from 'react';

const Video = ({ video }) => {
    console.log(video);
    const { photo, username, like, title, id } = video
    return (
        <>
            <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">{id}</td>
                <td className="border-t-2 border-gray-200 px-4 py-3"><img src={photo} alt="" /></td>
                <td className="border-t-2 border-gray-200 px-4 py-3">{title}</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">{username}</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">{like}</td>
            </tr>
        </>
    );
};

export default Video;