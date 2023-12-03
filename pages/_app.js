// pages/_app.js
import '../styles/globals.css';
import FixedHeader from '@components/FixedHeader'
import ScrollableHeader from '@components/ScrollableHeader';

function Application({ Component, pageProps }) {
  return (
    <div>
      <ScrollableHeader title="Scrollable Header Title" />
      <FixedHeader title="Fixed Header Title" />
      <div className="content">
        <Component {...pageProps} />
      </div>
      
    </div>
  );
}

export default Application;
