import * as React from 'react';
import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer.js';


const colors = {
    white: "#FFFFFF",
    gray: "#7A7979",
    black: "#000000",
};



export default function Home() {



    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />
            <div style={{ flex: '1 0 auto' }}>






                {/* Footer Section */}
            </div>
            <Footer />
        </div>
    );
}
