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

        <div className={styles.across} >
          <img src="/images/HeadImg.png" alt="Appoint One Logo" className={styles.logo} />
          <p>At Appoint One, we’re your partners in personal and professional growth. With compassion, integrity, and empathy as our cornerstones, we guide you through career complexities, resolve challenges, and optimize HR strategies, all with expertise and care.</p>
        </div>
        <div className={styles.across}  >
          <h1>Book an appointment</h1>
          <div className={styles.nav} onClick={() => navigateTo('/contact')}>contact</div>
         
        </div>
        <div className={styles.across} >
          <h1>Contact</h1>
          <p>1 UPPER EAST HILL COBH, CO.CORK P24 XA61</p>
          <p>+353 (0)83 4400999</p>
          <p>claire@appointone.ie</p>
        </div>
        
      </footer>
    </>
  )
}
