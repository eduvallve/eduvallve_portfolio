import logo from "../../static/images/evp-logo-white.svg";

const Tree = () => {
    return (
        <main className="tree">
            <img src={logo} alt="eduvallve logo" width={50} height={50}></img>
            <nav>
                <ul>
                    <li>
                        🧑🏻‍💻 Portfolio: <b><a target="_blank" rel="noreferrer" href="https://eduvallve.com">eduvallve.com</a></b>
                    </li>
                </ul>
                <ul className="social-tech">
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/eduvallve/"><i className="icon social__icon social__icon-linkedin"></i> LinkedIn</a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://github.com/eduvallve"><i className="icon social__icon social__icon-github"></i> Github</a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.behance.net/eduvallve"><i className="icon social__icon social__icon-behance"></i> Behance</a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://vimeo.com/eduvallve"><i className="icon social__icon social__icon-vimeo"></i> Vimeo</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        ✈️ Travel Instagram: <b><a target="_blank" rel="noreferrer" href="https://www.instagram.com/eduvallve/">@eduvallve</a></b>
                    </li>
                    <li>
                        📷 Threads: <b><a target="_blank" rel="noreferrer" href="https://www.threads.com/@eduvallve">@eduvallve</a></b>
                    </li>
                </ul>
            </nav>
        </main>
    );
}

export default Tree;