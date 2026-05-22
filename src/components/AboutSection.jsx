import './AboutSection.css';

function AboutSection() {
    return (
        <section id="about" className="about-section">

            <div className="about-container">

                <div className="about-left">

                    <span className="tag">ABOUT US</span>

                    <h2>Trusted Local Service Platform</h2>

                    <p>
                        Marwar Services connects you with verified local professionals.
                    </p>

                    <p>
                        Plumber, electrician, AC repair, cleaning — everything in one place.
                    </p>

                    <div className="stats">

                        <div>
                            <h3>24/7</h3>
                            <p>Support Available</p>
                        </div>

                        <div>
                            <h3>Fast</h3>
                            <p>Response Time</p>
                        </div>

                        <div>
                            <h3>100%</h3>
                            <p>Verified Providers</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default AboutSection;