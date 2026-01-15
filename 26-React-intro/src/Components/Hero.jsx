import "../Components/css/Hero.css";
const Hero = () => {
    return (
        <header className="hero">
            <div className="hero-container">
                <h1 className="logo">PTP-101</h1>
                <ul className="nav-menu">
                    <li className="nav-item">HOME</li>
                    <li className="nav-item">ABOUT</li>
                    <li className="nav-item">SERVICES</li>
                    <li className="nav-item">CONTACT</li>
                </ul>
            </div>
        </header>
    );
};

export default Hero