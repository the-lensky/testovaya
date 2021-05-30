const Header = () => {
    return (
        <nav className='grey darken-4 header nav-wraper'>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Image Finder</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/the-lensky/flickr-search" rel="noreferrer" target="_blank">
                            <i className="large material-icons">account_circle</i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
