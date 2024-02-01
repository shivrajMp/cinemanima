import React from 'react';

function TrailerEmbed({ embedUrl }){
  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
      <iframe
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        src={embedUrl}
        title="Embedded YouTube video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrailerEmbed;