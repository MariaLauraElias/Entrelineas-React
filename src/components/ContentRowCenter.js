import React from 'react';
import LastBookInDb from './LastBookInDb';
import TopicsInDb from './TopicsInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            <LastBookInDb />
            <TopicsInDb />
        </div>
    )
}

export default ContentRowCenter;