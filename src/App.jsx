
// import Footer from './layouts/footer';
// import ToTop from './components/toTop';

import { Icon } from '@iconify/react';

function App() {

  return (
    <>
      
      <section className="main-direction">
        <aside className="left-bar">
          <div className="container">
            <article>
              <div>
                <h2>Idris Yakub</h2>
                <h3>Software (Frontend) Engineer</h3>
                <p>I am an architect of digital dreams. I build seamless software solutions, pushing the boundaries of technology, and crafting elegant code that defies limits. From designing captivating user interfaces to optimizing intricate systems.</p>
              </div>
              <ul>
                <li>
                  <span><Icon icon="ph:square-fill" /></span> About
                </li>
                <li>
                  <span><Icon icon="ph:square-fill"/></span> Experience
                </li>
                <li>
                <span><Icon icon="ph:square-fill"/></span> Projects
                </li>
              </ul>
            </article>
            <section>
              <h2>Get In Touch</h2>
              <p>I’m currently open to new opportunities / collaborations, my inbox is always open. Whether you have a question, proposal, project or just want to say hi</p>
              <ul>
                <li>
                <span><Icon icon="bxs:file" /></span>
                </li>
                <li>
                <span><Icon icon="mdi:linkedin" /></span>
                </li>
                <li>
                  <span><Icon icon="mdi:twitter" /></span>
                </li>
                <li>
                  <span><Icon icon="mdi:github" /></span>
                </li>
                <li>
                  <span><Icon icon="mdi:stackoverflow" /></span>
                </li>
              </ul>
            </section>
          </div>
        </aside>

        <aside className="right-bar">
          <section className='description'>

          </section>
          <section className='experience'>

          </section>
          
        </aside>
      </section>
    </>
  )
}

export default App;
