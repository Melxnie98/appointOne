// pages/_app.js
import '../styles/globals.css';
import FixedHeader from '@components/FixedHeader'
import ScrollableHeader from '@components/ScrollableHeader';
import Footer from '@components/Footer'

function Application({ Component, pageProps }) {
  return (
   
    <div className="content">
      
    
      <Component {...pageProps} />
      <FixedHeader title="+353 (0)83 4400999" />
      <ScrollableHeader />
      <Footer />
    </div>
      
      
  
    
  );
}

export default Application;
