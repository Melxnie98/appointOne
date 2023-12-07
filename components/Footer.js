import styles from './Footer.module.css'
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  }
  return (
    <>
      <footer className={styles.footer}>
        <div className="Container" >
          <img src="/HeadImg.png" alt="Appoint One Logo" className={styles.logo} />
          <p>At Appoint One, we’re your partners in personal and professional growth. With compassion, integrity, and empathy as our cornerstones, we guide you through career complexities, resolve challenges, and optimize HR strategies, all with expertise and care.</p>
        </div>
        <div className="Container" >
          <h1>Quick Links</h1>
          <div onClick={() => navigateTo('/index')}>Home</div>
          <div onClick={() => navigateTo('/services')}>Services</div>
          <div onClick={() => navigateTo('/about')}>About Us</div>
          <div onClick={() => navigateTo('/pricing')}>Pricing</div>
          <div onClick={() => navigateTo('/contact')}>Contact Us</div>
        </div>
        <div className="Container" >
          <h1>Contact us</h1>
        </div>
        
      </footer>
    </>
  )
}
