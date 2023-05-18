import './card.css'
function Card() {
    return ( 
        <div className="cards">
            <div className="cardOne card">
                <div className="wrapper">
                    <a href="#">
                        <img className='cardIcon' src="https://okul.com.tr/assets/images/frontend/school_types/1.png" alt="" />
                    </a>
                    <div className="caption">
                        <p className='title'>Kreş ve Anaokulu</p>
                        <p className='desc'>Bölgenizdeki anaokullarına dair tüm bilgileri inceleyin.</p>
                        <button className='button'>İNCELE</button>
                    </div>
                </div>
            </div>
            <div className="cardTwo card">
                <div className="wrapper">
                <a href="#">
                        <img className='cardIcon' src="https://okul.com.tr/assets/images/frontend/school_types/2.png" alt="" />
                    </a>
                    <div className="caption">
                        <p className='title'>Kreş ve Anaokulu</p>
                        <p className='desc'>Bölgenizdeki anaokullarına dair tüm bilgileri inceleyin.</p>
                        <button className='button'>İNCELE</button>
                    </div>
                </div>
            </div>
            <div className="cardThree card">
                <div className="wrapper">
                <a href="#">
                        <img className='cardIcon' src="https://okul.com.tr/assets/images/frontend/school_types/3.png" alt="" />
                    </a>
                    <div className="caption">
                        <p className='title'>Kreş ve Anaokulu</p>
                        <p className='desc'>Bölgenizdeki anaokullarına dair tüm bilgileri inceleyin.</p>
                        <button className='button'>İNCELE</button>
                    </div>
                </div>
            </div>
            <div className="cardFour card">
                <div className="wrapper">
                <a href="#">
                        <img className='cardIcon' src="https://okul.com.tr/assets/images/frontend/school_types/4.png" alt="" />
                    </a>
                    <div className="caption">
                        <p className='title'>Kreş ve Anaokulu</p>
                        <p className='desc'>Bölgenizdeki anaokullarına dair tüm bilgileri inceleyin.</p>
                        <button className='button'>İNCELE</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Card;