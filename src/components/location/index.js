import React from 'react';
const Location = () => {
    return(
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35956.18236875029!2d37.38220874666643!3d55.719209307967915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ef45acd110f%3A0xf1e659dcb413c37!2z0JzQsNC60LTQvtC90LDQu9C00YE!5e0!3m2!1sru!2sru!4v1538775543760"
                    width="100%"
                    height="500px"
                    frameBorder="0"
                    allowFullScreen
            ></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;