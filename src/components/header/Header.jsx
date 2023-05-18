import './header.css'
function Header() {
    return ( 
        <header className='headerContainer'>
            <div className="headerLeft">
                <a className='nav-logo' href="https://okul.com.tr"><img src="https://cdn.okul.com.tr/assets/images/frontend/logo.png" alt="" /></a>
            </div>
            <div className="headerCenter">
                <ul className='navLinks-left'>
    <               li><a href="">Anaokulu&Kreşler</a></li>
<                   li><a href="">•</a></li>
                    <li><a href="">İlkokul</a></li>
                    <li><a href="">•</a></li>
                    <li><a href="">Ortaokul</a></li>
                    <li><a href="">•</a></li>
                    <li><a href="">Lise</a></li>
                </ul>
                <ul className='navLinks-right'>
                    <li>
                        <a className='links-kolej' href="#">Kolejler</a>
                    </li>
                    <li>|</li>
                    <li><a href="#">İndirimler</a></li>
                    <li>
                        <img className='nav-person-img' src="https://cdn.okul.com.tr/assets/images/new_design/lp-image-173x193.png" alt="" />
                        <a className='person-desc' href="">Eğitim <br /> Danışmanı</a>
                    </li>
                </ul>
            </div>
            <div className="headerRight">
                <button className='login-btn'>Giriş Yap / Üye Ol</button>
            </div>
        </header>
     );
}

export default Header;