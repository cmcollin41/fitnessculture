import React from "react"

const YouTube = ({ youtubeId }) => {
  return (
    <iframe
      className="w-full"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${youtubeId}`}
      title={youtubeId}
      frameBorder="0"
    />
  );
};

export default YouTube;