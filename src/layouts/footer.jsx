
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
          <div className="footer-direction">
              <div className="footer-copy">
                  <p>Idris Yakub © Copyright 2021. Design by <a rel="noopener noreferrer" to="https://driiis.com" target="_blank">driiis</a></p>
              </div>
              
              <div className="footer-socials">
                  <ul>
                      <li className="github">
                        <a rel="noopener noreferrer" to="https://github.com/driiisdev" target="_blank">
                          <span className="iconify" data-icon="akar-icons:github-fill"></span>
                        </a>
                        </li>
                      <li className="behance"><a rel="noopener noreferrer" to="https://www.behance.net/driiisdesign" target="_blank">
                          <span className="iconify" data-icon="fa-brands:behance-square"></span>
                      </a></li>
                      <li className="linkedin"><a rel="noopener noreferrer" to="https://www.linkedin.com/in/idris-yakub/" target="_blank">
                          <span className="iconify" data-icon="akar-icons:linkedin-box-fill"></span>
                      </a></li>
                      <li className="twitter"><a rel="noopener noreferrer" to="https://twitter.com/driiis_" target="_blank">
                          <span className="iconify" data-icon="akar-icons:twitter-fill"></span>
                      </a></li>
                  </ul>
              </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer;
