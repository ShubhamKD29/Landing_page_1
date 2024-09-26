import React from 'react'
import arrow from '../../assets/arrow.png'
import './Mainpage.css'
import play_button from '../../assets/play_button.png'
import pause_button from '../../assets/pause_button.png'
function Mainpage({changeText, landingpageCount, setLandingpageCount, playstatus, setPlayStatus}) {

    return (
        <div>
            <div className={landingpageCount === 1 ? "list-right" : "main-container "}>
                <div className="text">
                    <p>{changeText.text1}</p>
                    <p>{changeText.text2}</p>
                </div>
                <div className={landingpageCount === 1 ? "left-explore" : "explore"}>
                    <p>Explore more</p>
                    <img className="arrow" src={arrow} alt="..." />
                </div>
                <div className={landingpageCount === 1 ?'left-lists-container':'lists-container'}>
                    <ul className={landingpageCount === 1 ?'left-lists':'lists'}>
                        <li onClick={() => setLandingpageCount(0)} className={landingpageCount === 0 ?"list red" : "list"}></li>
                        <li onClick={() => setLandingpageCount(1)} className={landingpageCount === 1 ?"list red" : "list"}></li>
                        <li onClick={() => setLandingpageCount(2)} className={landingpageCount === 2 ?"list red" : "list"}></li>
                    </ul>
                </div>

                <img className='play_button'onClick={() => setPlayStatus(!playstatus)} src={playstatus ? pause_button : play_button} />
                {playstatus ? <p className="play_text">Pause Video</p> : <p className="play_text">Play Video</p>}
            </div>
        </div>
    )
}

export default Mainpage
