import React from 'react';

import Header from '../../Global/Header/Header';
import HeroTitle from '../../Global/HeroTitle/HeroTitle';


const CreatePost = (props) => {

    return (
        <div>
            <Header/>
            <HeroTitle
                firstMessage={'Tus Posts'}
            />
        </div>
    );

}

export default CreatePost;