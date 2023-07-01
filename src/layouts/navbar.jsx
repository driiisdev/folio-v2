import { links} from '../data/lists';

const Navbar = () => {
  
  return (
    <nav className="nav">
        <div className="nav-container">
            <div className="nav-direction">
                <div className="nav-logo">
                    <a href="#">
                        <span className="iconify" data-icon="fa-solid:laptop-code"></span>
                        <span className="name">Idris</span>
                    </a>
                </div>
                
                <div className="nav-links">
                    <ul className="primary-nav" id="primary-nav">
                      {links.map((link) => {
                        const { id, url, text } = link;
                        return (
                          <li key={id}>
                            <a href={url}>{text}</a>
                          </li>
                          );
                        })}
                    </ul>
                    <button className="toggle-icon" id="toggle-icon">
                        <span className="iconify" data-icon="fa6-solid:align-right"></span>
                    </button>
                </div>
            </div>
            <div id="primary-nav-expand" className="primary-nav-expand">
              <ul className='links' >
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                  );
                })}
              </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;