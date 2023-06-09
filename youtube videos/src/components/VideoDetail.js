import React from 'react';

const VideoDetail = ({video}) =>{
    //  we can also destructure props like this to video , ....

    if(!video){
        return <div>Loading...</div>;
    }

    // const videoSrc = 'https://www.youtube.com/embed/'+'${video.id.videoId}';
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(videoSrc);

    return (
        <div >
            <div className="ui embed">
                <iframe className="frame" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}


export default VideoDetail; 