import React from 'react';
import Nav from './Nav';
function Contact(props) {
    return (
        <>
      <div className="main-bar">
        <div className="header-bar-one">
            <h1 style={{color:"white"}}>MSNBLR</h1>
        </div>
    <div className="header-bar">
        <Nav />
      </div>
    </div>
            <div>
        <h2 style={{color:"red",textDecoration:"underline"}}>Head Office</h2>
        <address>
            <p>800 2nd street</p>
            <p>Richmond Road</p>
            <p>Bangalore 560025</p>
        </address><br/>
        <h2 style={{color:"red",textDecoration:"underline"}}>Branch</h2>
        <address>
            <p>2nd cross</p>
            <p>Mulund Road</p>
            <p>Mumbai 400543</p>
        </address><br/>
        <h2 style={{color:"red",textDecoration:"underline"}}>Branch</h2>
        <address>
            <p>Shivaji Park</p>
            <p>Nasik Road</p>
            <p>PUNA 400678</p>
        </address><br/>
        <h2 style={{color:"red",textDecoration:"underline"}}>Branch</h2>
        <address>
            <p>#200</p>
            <p>345 class</p>
            <p>Kolkatha 200768</p>
        </address><br/>
        </div>
        </>
    
    );
}

export default Contact;