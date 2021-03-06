import React from "react";
import WelcomeMessage from "../../Global/WelcomeMessage/WelcomeMessage";
import HeaderMenu from "../../Global/HeaderMenu/HeaderMenu";

const Header = (props) => {
    
    const classes = {
        container: 'flex flex-col w-full pl-0 md:p-4 md:space-y-4',
        header: 'w-full lg:shadow-lg md:shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40',
        headerContainer: 'relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center',
        profileContainer: 'relative items-center justify-between pl-1 flex w-full lg:max-w-68 sm:pr-2 ',
        profileMenu: 'relative p-1 flex items-center justify-end w-1/4 ml-5 sm:right-auto',
        profileButton: 'block relative',
        imageContainer: 'mx-auto object-cover rounded-full h-10 w-10 '
    }
    
    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <div className={classes.headerContainer}>
                    <div className={classes.profileContainer}>
                        <WelcomeMessage/>
                        <div className={classes.profileMenu}>
                            <HeaderMenu/>
                            <div className={classes.profileButton}>
                                <img alt="profile" src="https://picsum.photos/50" className={classes.imageContainer}/>
                            </div>       
                        </div>
                    </div>
                </div>
            </header>

        </div>
    );
}

export default Header;
