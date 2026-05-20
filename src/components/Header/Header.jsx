import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";
import logo from "../../assets/image/logo.png"; // Fixed double slash in path

function Header() {

  const [isSearchOpen,setIsSearchOpen] = useState(false)
  const [isProfileOpen, setisProfileOpen] = useState(false);
// for blur
  const [isScrolled ,setIsScrolled] = useState(false)
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY > 50){
        setIsScrolled(true)}
        else{
          setIsScrolled(false)
        }
      }
      window.addEventListener('scroll',handleScroll)
      return () => window.removeEventListener("scroll", handleScroll);
    },[]
  )


  return (
    <header className={`${styles.header}${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* logo */}
        <img className={styles.logo} src={logo} alt="logo-img" />
        {/* navigation links */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="">
            Home
          </Link>
          <Link className={styles.navLink} to="">
            Tv Shows
          </Link>
          <Link className={styles.navLink} to="">
            Movies
          </Link>
          <Link className={styles.navLink} to="">
            My List
          </Link>
          <Link className={styles.navLink} to="">
            New & Popular
          </Link>
          <Link className={styles.navLink} to="">
            Browse by Language
          </Link>
        </nav>
        {/* right side section */}
        <div className={styles.rightSection}>
          {/* search */}

          <div className={styles.searchCointainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              {/* search button */}

              <Search size={20} />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie-title"
                className={styles.searchInput}
              />
            )}
          </div>
          {/* notification */}
          <button className={styles.iconButton}>
            {/* notification icon */}
            <Bell size={20} />
            <span className={styles.notificationiconBadge}>4</span>
          </button>

          {/* profile */}

          <div className={styles.profileCointainer}>
            <button
              // onClick={() => isProfileOpen(!setisProfileOpen)}
              onClick={() => setisProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              {/* user icon */}
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>
              <ChevronDown size={20} />
              {/* dropdown icon */}
            </button>

            {/* dropdoem icon */}
          
            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link className={styles.profileMenuItem}>Account</Link>
                <Link className={styles.profileMenuItem}>Help Center</Link>
                <hr />
                <button className={styles.profileMenuItem}>Sign out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
