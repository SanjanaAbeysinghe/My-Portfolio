import "../styles.css";
import myimage from '/src/components/image/picofme (2).png'

const Home = () => {
  return(<>
  <section>
        <div className='image-wrapper'>
            <img src={myimage} alt="My Image"/>
          </div>
        </section>
       <section className="hero">
        <div className="hero-content">
          <h1>
            SANJANA <br />
            <span>ABEYSINGHE</span>
          </h1>
              <div className="passion">
                [FULL STACK SOFTWARE ENGINEER & WE DEVELOPER]
                </div> 
                </div>
      </section>         
          <div className="XX">
            Premium web design, development, and SEO services
            to help your business stand out.
          <br />
          <button className="btn-secondary">My Services</button>
          </div>

     <section className="services">
      <div className="service-card">
        <h4>Web Design</h4>
        <p>Modern and clean website design solutions.</p>
      </div>

      <div className="service-card">
        <h4>Development</h4>
        <p>High performance web applications.</p>
      </div>

      <div className="service-card">
        <h4>Content & SEO</h4>
        <p>Optimized content to grow your business.</p>
      </div>
    </section>

    <section className="work">
      <h2>...</h2>

      <div className="work-grid">
        <div className="work-card">
          <div className="x">
          <h3>Services</h3>
          </div>
          <div className="y">
          <ul>
            <li>Web Development(React, Spring Boot, HtML, CSS, JavaScript)</li>
            <li>AL/ML intergration(LLMs)</li>
            <li>Cloud Services</li>
            <li>E-commerce Solution</li>
            <li>Database Management</li>
            <li>Web Scraping and Automation</li>
            <li>UI/UX Consulting</li>
          </ul>
          </div>
        </div>
        <div className="work-card">
          <div className="x">
          <h3>Skills</h3>
          </div>
          <div className="y">
          <ul>
            <li>Programming Language(Java, Python, JavaScript, PHP, SQL)
            </li>
            <li>Framework & Libraries(React, Spring Boot, HTML/CSS)
            </li>
            <li>Currently Learning(AL/ML, Node.js)
            </li>
            <li>Cloud Computing - AWS
            </li>
          </ul>
          </div>
        </div>
        <div className="work-card">
          <div className="x">
          <h3>Projects</h3>
          </div>
          <div className="y">
          <ul>
            <li>Student Management System(Backend, Frontend)</li>
            <li>Weather App</li>
            <li>Task Manager | Todo Apps</li>
            <li>Mini Python Projects (For Maths Calculations)</li>
          </ul>
          </div>
        </div>
        <div className="work-card">
          <div className="x">
          <h3>Education</h3>
          </div>
          <div className="y">
          <ul>
            <li>Bachelor of ICT (BICT) – Faculty Of Technology | University Of Jayewardenepura</li>
            <li>CMJD - Institute Of Software Engineering</li>
            <li>Advance Level (AAB) Of Technology Stream</li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  </>
)
};

export default Home;
