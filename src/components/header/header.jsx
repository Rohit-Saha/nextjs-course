import Image from "next/image";
import Link from "next/link";

const Header = ({ title }) => {
  return (
    <header className="header">
      <nav>
        <Image
          src={"/images/Events Jam-logos_black.png"}
          width={100}
          height={100}
          alt="logo"
        />
        <div className="link-block">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about-us">About Us</Link>
        </div>
      </nav>
      <h1 className="text">{title}</h1>
    </header>
  );
};

export default Header;
