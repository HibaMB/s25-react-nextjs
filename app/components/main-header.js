import logoImg from "@/assets/logo.png";
import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";

export default function MainHeader() {
  return (
    <>
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          {/* Image element has lazy loading and provide optimized images like its converted to webp in chrome, width and height are set */}
          <Image src={logoImg} alt="A plate with food on it" priority></Image>
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
