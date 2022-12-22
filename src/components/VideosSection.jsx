import React from 'react';
import { useEffect } from 'react';
import Video from './Video';

const VideosSection = () => {

    const [videos, setVideos] = React.useState([]);
    const [pagnination, setPagination] = React.useState(1)

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
                page: pagnination,
                limit: 10,
            }),
        })
        const data = await res.json();
        setVideos(data.list)
        setPagination(data.page)
        console.log(data)
    };
    console.log(videos);

    useEffect(() => {
        getVideos();
    }, [pagnination])

    return (
        <div className=''>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">#</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Photo</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Title</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Author</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Liked</th>
                                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                                </tr>
                            </thead>
                            <tbody>
                                

                                {
                                    videos.length && videos.map((video, index) => <Video key={index} video={video} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


            {
                videos.length && 
                <div className='flex justify-center items-center'>
                    <span onClick={() => {
                        if(pagnination > 0) {
                            setPagination(pagnination - 1)
                        }
                        return
                    }} className='py-3 text-3xl px-2 border mb-4 cursor-pointer'>👈</span>
                    <span className='py-3 text-3xl px-2 border mb-4 cursor-pointer'>{pagnination}</span>
                    <span onClick={() => {
                        if(pagnination < 13) {
                            setPagination(pagnination + 1)
                        }
                        return
                    }} className='py-3 text-3xl px-2 border mb-4 cursor-pointer'>👉</span>
                </div>
            }

            

        </div>
    );
};

export default VideosSection;