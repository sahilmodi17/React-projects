import  './VideoItem.css';
import React from "react";

const VideoItem = props =>{

    return (
        <div onClick={ () => props.onVideoSelect(props.video)}  className="video-item item">
            {/* here onVideoSelect is written with callback becuase we want video prop also be called   */}

            <img className="ui image" src={props.video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {props.video.snippet.title}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;