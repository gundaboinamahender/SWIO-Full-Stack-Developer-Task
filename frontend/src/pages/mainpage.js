import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './mainpage.css';
import themeBackground from '../assets/theme background.png';
import themesBackground from '../assets/themesbackground.png';
import icon1 from '../assets/icon1.png';
import Icon2 from '../assets/Icon2.png';
import Icon3 from '../assets/Icon3.png';
import Icon4 from '../assets/Icon4.png';
import Icon5 from '../assets/Icon5.png';
import Icon6 from '../assets/Icon6.png';
import Icon7 from '../assets/Icon7.png';
import Icon8 from '../assets/Icon8.png';
import Icon9 from '../assets/Icon9.png';

function Main() {
    const navigate = useNavigate();

    const handleBuyDirectly = () => {
        navigate('/payment', { state: { name: 'Sleeve', amount: 500 } });
    };

    return (
        <div className="App-header">
            <h1><span className="gradient-text">Sleeve</span> <span className="number">2</span></h1>
            <h2>The ultimate music accessory for your Mac.</h2>
            <h4>Sleeve sits on the desktop, displaying and controlling the music you’re 
                currently playing in <span><i className="fab fa-itunes-note fa-sm icon"></i> Apple Music</span>, 
                <span><i className="fab fa-spotify fa-sm icon"></i> Spotify</span>, 
                and 
                <span><i className="fas fa-broadcast-tower fa-sm icon"></i> Doppler</span>.
            </h4>
            
            <div className="button-container">
                <button className='mac mr-2'>
                    <i className="fab fa-apple fa-2x icon"></i>
                    <span className="text">Mac App Store</span>
                </button>
                <button className='buy' onClick={handleBuyDirectly}>
                    Buy Directly <span className="price">₹500.00</span>
                </button>
            </div>
            <div className="info-text">
                No subscriptions. No in-app purchases. Requires macOS 11 Big Sur or later.
            </div>
            <div className='info'>
                <span className='whatsnew'>Now with <b className='bold'>shelves and a progress bar</b>. 
                See what's new in Sleeve 2.3 <i className="fas fa-arrow-right"></i></span>
            </div>
            <div className='new'>NEW IN <span className='two'>2.0</span></div>
            <div className='themes'>Themes. Unlimited themes.</div>
            <div className='theme'>Themes in Sleeve make creating and switching between customizations easy. Share your own 
            creations with friends and install as many themes as you like with just a double-click.</div>
            <div class="image-container">
            <img src={themeBackground} alt="Theme Background" />    
            </div>
            <div class="image-container1">
            <img src={themesBackground} alt="Theme Background" />    
            </div>
            <div className='custom'>CUSTOMIZATION</div>
            <div className='themes'>Countless ways to customize.</div>
            <div className='Theme'>Customization is at the core of the Sleeve experience — choose from any combination of design choices, 
            behaviors and settings to make Sleeve at home on your desktop.</div>
            <div className="app-icon-container">
            <img src={icon1} className="app-icon1" alt="Icon 1" />
            <img src={Icon2} className="app-icon2" alt="Icon 2" />
            <img src={Icon3} className="app-icon3" alt="Icon 3" />
            <img src={Icon4} className="app-icon4" alt="Icon 4" />
            <img src={Icon5} className="app-icon5" alt="Icon 5" />
            <img src={Icon6} className="app-icon4" alt="Icon 6" />
            <img src={Icon7} className="app-icon3" alt="Icon 7" />
            <img src={Icon8} className="app-icon2" alt="Icon 8" />
            <img src={Icon9} className="app-icon1" alt="Icon 9" />
            </div>
        <div className='custom1'>INTEGRATIONS</div>
        <div className='themes'>Like, Scrobble.</div>
        </div>
    );
}

export default Main;


