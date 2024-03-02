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
        </div>
        <div className={styles.across}  >
          <h1>Book an appointment</h1>
          <button className={styles.nav} onClick={() => navigateTo('/contact')}>contact</button>
         
        </div>
        <div className={styles.across} >
          <h1>Contact</h1>
          <p>+353 (0)83 0000000</p>
          <p>Fakeemail@fake.ie</p>
        </div>
        
      </footer>
    </>
  )
}
