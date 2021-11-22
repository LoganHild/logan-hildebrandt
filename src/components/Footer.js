import React from 'react';

//returns footer with social links
export default function Footer() {
    return (
        <div className="footer">
            <h6>Logan Hildebrandt</h6>
            <p className="copyright">Copyright <i className="far fa-copyright"></i> 2021</p>
            <div>
                <a href="https://www.instagram.com/log_hildebrandt/" rel="noreferrer"  target="_blank"><i className="fab fa-instagram fa-2x social"></i></a>
                <a href="https://www.facebook.com/logan.hildebrandt/" rel="noreferrer" target="_blank"><i className="fab fa-facebook fa-2x social"></i></a>
                <a href="https://twitter.com/LogHildebrandt" rel="noreferrer" target="_blank"><i className="fab fa-twitter fa-2x social"></i></a>
                <a href="https://www.linkedin.com/in/logan-hildebrandt-923553210/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin fa-2x social"></i></a>
                <a href="https://github.com/LoganHild" rel="noreferrer" target="_blank"><i className="fab fa-github fa-2x social"></i></a>
            </div>
        </div>
    )
}