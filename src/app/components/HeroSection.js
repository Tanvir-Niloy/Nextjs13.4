import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";

import { Mulish } from 'next/font/google'

const mulish = Mulish({ subsets: ['latin'] })

function HeroSection() {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
          <h1>Lets Watch Movie</h1>
                        <p> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                            our
                            selection of the latest and greatest movies, and find your new favorite today.
                        </p>
                        <Link href="/movie">
                            <button className={mulish.className}>
                                Explore Movies
                            </button>
                        </Link>
          </div>
          <div className={heroStyles.hero_image}>

          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
