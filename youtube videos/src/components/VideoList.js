import React from 'react';
import VideoItem from './VideoItems';

const VideoList = (props) =>{
    // can also write as {videos , xyz,.. } instead of props

    const renderedList= props.videos.map( (video) =>{
        return <VideoItem  key={video.id.videoId} onVideoSelect={props.onVideoSelect} video={video}/>
    });

    return (
    <div className="ui relaxed divided list">

        {renderedList}
    </div>
    );
}

export default VideoList;