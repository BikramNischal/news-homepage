import "../styles/NavbarStyles.css";


export default function Navbar() {
    return (
        <div className="nav-bar">
            <img className="navbar-logo" src="/assets/images/logo.svg"  width="50px" alt="company logo" />
            <ul className="nav-list">
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </div>
    );
}
