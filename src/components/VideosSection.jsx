import React from 'react';
import { useEffect } from 'react';

const VideosSection = () => {

    const [videos, setVideos] = React.useState([]);

    const getVideos = async page => {
        const res = await fetch(`https://reacttask.mkdlabs.com/v1/api/rest/video/PAGINATE`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-project": "cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw==",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({
                payload: {},
                page: 1,
                limit: 10,
            }),
        })
        const data = await res.json();
        setVideos(data)
    };

    useEffect(() => {
        getVideos();
    }, [getVideos])

    return (
        <div>
            
        </div>
    );
};

export default VideosSection;