import './content.css'

function Content() {
    return ( 
        <div className="contentArea">
            <div className="contentLeft">
                    <h1 className='contentTitle'>Aradığınız okulu
                        <br />
                        vakit kaybetmeden bulun!
                    </h1>
                <p className='contentText'>Türkiye’nin en büyük okul platformu!</p>
                <input className='contentInput' type="text" placeholder='Okul veya bölge adını yazarak arayabilirsiniz.' />
                <button className='contentButton'>Hemen Okul Ara</button>
            </div>
            <div className="contentRight">
                <img className='img1' src="https://cdn.okul.com.tr/assets/images/new_design/cover/cover-1.png" alt="" />
            </div>
        </div>
     );
}

export default Content;