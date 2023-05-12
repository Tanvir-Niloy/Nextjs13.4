import styles from '@/app/styles/navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';

function Header() {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
              <Link href='/'>
                <Image
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                width={150}
                height={40}
                alt='netflix'
                 />
              </Link>  
            </div>
            <Nav/>
        </header>
    )
}

export default Header
