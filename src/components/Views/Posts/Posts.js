import React, { useEffect, useState} from 'react';
import Instance from '../../Api/Services/Services';

import Header from '../../Global/Header/Header';
import HeroTitle from '../../Global/HeroTitle/HeroTitle';


const Posts = (props) => {

    const [state, setState] = useState({
        items: []
    });

    const classes = {
        heroContainer: 'lg:shadow-lg rounded-2xl mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 w-full lg:py-8 sm:py-6 py-4 lg:flex lg:flex-col h-90 lg:mb-20',
        newPostContainer: 'flex justify-left h-full flex-col',
        titleContainer: 'm-20 mb-8 mt-0 text-blue text-xl',
        btnContainer: 'flex justify-end items-center mt-6',
        postTitle: 'text-color-blue',
        btn: 'bg-blue py-2 px-4 text-sm text-white rounded focus:outline-none hover:bg-blue-light focus:bg-blue-light hover:border-blue-light focus:border-blue-light'
    }

    const getDate = (stringDate) => {
        const timestamp = Date.parse(stringDate);
        const date = new Date(timestamp);

        const days = {
            0: 'Domingo', 
            1: 'Lunes', 
            2: 'Martes', 
            3: 'Miércoles', 
            4: 'Jueves',
            5: 'Viernes',
            6: 'Sábado',
        };

        return `${days[date.getDay()]}, ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    };


    useEffect(() => {
        const headers = {Authorization: localStorage.getItem('mentiaAuthToken')};
        Instance.get(`/posts/${localStorage.getItem('mentiaUsername')}`, {headers: headers})
            .then((response) => {
                const items = [];
                for (const value of response.data) {
                    items.push(
                        <div className='text-left p-5'>
                            <div className='flex flex-col'>
                                <h1 className='text-2xl text-blue-light'>{value.Title}</h1>
                                <span className='text-grey-light'>{getDate(value.CreatedAt)}</span>
                            </div>
                        </div>
                    );
                }
                setState({items: items});
            })
            .catch(() => {
                console.log('Algo salió mal al obtener tus posts');
            })
    }, []);


    return (
        <div>
            <Header/>
            <HeroTitle
                firstMessage={'Mis Posts'}
            />
            <div className={classes.heroContainer}>
                <div className={classes.newPostContainer}>
                    { state.items }
                </div>
                <div className={classes.btnContainer}>
                    <a type='button' className={classes.btn} href="/posts/new">Nuevo post</a>
                </div>
            </div>

        </div>
    );

}

export default Posts;