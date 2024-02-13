import styles from './page.module.css';
import LaunchImage from '../../public/launch.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.text}>
            <h2>MicroFox Technologies</h2>
            <h3>Stay tuned</h3>
            <h4>We are launching soon...</h4>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src={LaunchImage}
            className={styles.launchImage}
            alt='MicroFox Technologies'
          />
        </div>
      </div>
      <div className={styles.footer}>
        &copy; {new Date().getFullYear()} - MicroFox Technologies
      </div>
    </main>
  );
}
