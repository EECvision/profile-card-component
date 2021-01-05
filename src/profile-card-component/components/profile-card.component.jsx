import React from 'react';

import BgBottom from '../images/bg-pattern-bottom.svg';
import BgTop from '../images/bg-pattern-top.svg';
import BgCard from '../images/bg-pattern-card.svg';
import AuthorImage from '../images/image-victor.jpg'

const ProfileCard =()=>{
    return (
        <div className="flex justify-center items-center h-screen w-full bg-teal-500 overflow-hidden relative">
            <img src={BgTop} alt="background-top" className="absolute transform -translate-y-1/2 -translate-x-1/2"/>
            <div className="absolute z-10 w-3/4 max-w-md">
                <div className="w-full relative flex justify-center items-end" >
                    <img src={BgCard} alt="background-card" className="w-full rounded-t-lg" />
                    <div className="flex items-center justify-center absolute w-1/3 h-1/3 p-1 bg-white lg:w-24 lg:h-24 rounded-full transform translate-y-1/2">
                        <img src={AuthorImage} alt="Author" className="rounded-full w-full"/>
                    </div>
                </div>
                <div className="bg-white w-full h-64 rounded-b-lg flex justify-center items-end">
                    <div className="body w-3/4 mb-6 flex flex-col items-center justify-center text-gray-700">
                        <div className="info flex flex-col justify-center items-center">
                            <h3 className="font-bold text-lg">Victor Crest<span className="font-thin"> 26</span></h3>
                            <p>London</p>
                        </div>
                        <div className="social-media w-full flex justify-around items-center mt-12">
                            <div className="flex flex-col justify-around items-center">
                                <h3 className="font-bold text-lg">80k</h3>
                                <span>Followers</span>
                            </div>
                            <div className="flex flex-col justify-around items-center">
                                <h3 className="font-bold text-lg">803k</h3>
                                <span>Likes</span>
                            </div>
                            <div className="flex flex-col justify-around items-center">
                                <h3 className="font-bold text-lg">1.4k</h3>
                                <span>Photos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img src={BgBottom} alt="background-bottom" className="absolute transform translate-y-1/2 translate-x-1/2"/>
        </div>
    )
}

export default ProfileCard;