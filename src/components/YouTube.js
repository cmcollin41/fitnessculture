import React from "react"

const YouTube = ({ youtubeId }) => {
  return (
    <div className="videoWrapper">
      <iframe
        className="w-full"
        width="560" 
        height="349"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={youtubeId}
        frameBorder="0"
      />
    </div>
  );
};

export default YouTube;