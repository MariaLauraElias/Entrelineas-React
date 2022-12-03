import React from 'react';
import LastBookInDb from './LastBookInDb';
import TopicsInDb from './TopicsInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastBookInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <TopicsInDb />

        </div>
    )
}

export default ContentRowCenter;