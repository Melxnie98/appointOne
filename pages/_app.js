// pages/_app.js
import '../styles/globals.css';
import FixedHeader from '@components/FixedHeader'
import ScrollableHeader from '@components/ScrollableHeader';

function Application({ Component, pageProps }) {
  return (
    <div>
      <div>
      <ScrollableHeader title="+353 (0)83 4400999" />
      </div>
      <FixedHeader title="Fixed Header Title" />
      

      <div className="content">
        <Component {...pageProps} />
      </div>
      
    </div>
  );
}

export default Application;
