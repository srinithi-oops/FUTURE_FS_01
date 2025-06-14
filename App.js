import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Vertical Sidebar Navigation */}
      <nav style={{ width: '120px', backgroundColor: 'black', color: '#fff', minHeight: '100vh', padding: '30px 10px', position: 'fixed' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '30px' }}>📊 Dashboard</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><button onClick={() => scrollTo('hero')} style={linkStyle}>🏠 Home</button></li>
          <li><button onClick={() => scrollTo('about')} style={linkStyle}>👤 About</button></li>
          <li><button onClick={() => scrollTo('education')} style={linkStyle}>🎓 Education</button></li>
          <li><button onClick={() => scrollTo('internship')} style={linkStyle}>🛠️ Internship</button></li>
          <li><button onClick={() => scrollTo('projects')} style={linkStyle}>💻 Projects</button></li>
          <li><button onClick={() => scrollTo('skills')} style={linkStyle}>🧠 Skills</button></li>
          
          
          <li><button onClick={() => scrollTo('contact')} style={linkStyle}>📬 Contact</button></li>
        </ul>
      </nav>

      <main className="container" style={{ marginLeft: '140px', textAlign: 'center', backgroundColor: 'white', color: 'blue', width: '100%' }}>
        {/* Hero Section */}
        <section id="hero" className="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={process.env.PUBLIC_URL + '/sri.jpg'}
            alt="My Profile"
            style={{ width: '350px', height: '350px', borderRadius: '50%', objectFit: 'cover', border: '8px solid black' }}
          />
          <h1 style={{ color: 'black', fontSize: '4.2rem', marginTop: '20px' }}>Hi, I'm Srinithi R</h1>
          <p style={{ fontSize: '2.2rem' }}>AI & ML | Full Stack Developer | UI/UX designer</p>
          <div style={{ marginTop: '30px' }}>
            <button onClick={() => scrollTo('about')} style={arrowStyle}>&rarr;</button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ color: 'black', fontSize: '3rem' }}>👤 About Me</h2>
          <p style={{ fontSize: '1.9rem', maxWidth: '800px' }}>
              I am a B.Tech AIML student with good academic performance and practical skills in Software development.I have built my programming skills through internship and projects,showcasing my ability to built an impactful applications.My leadership roles in student organization reflect my commitment towards my teamworks.
          </p>
          <div style={{ marginTop: '30px' }}>
            <button onClick={() => scrollTo('education')} style={arrowStyle}>&rarr;</button>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ color: 'black', fontSize: '3rem' }}>🎓 Education</h2>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.8rem', textAlign: 'left' }}>
            <li><strong>2022–2026</strong><br />B.Tech AI & ML – SNS College of Technology,Coimbatore<br />CGPA: 8.6</li>
            <li style={{ marginTop: '20px' }}><strong>2022</strong><br />HSC – Vivekam Matric Hr. Sec. School,Coimbatore<br />Score: 76%</li>
            <li style={{ marginTop: '20px' }}><strong>2020</strong><br />SSLC – Vivekam Matric Hr. Sec. School,Coimbatore<br />Score: 76%</li>
          </ul>
          <div style={{ marginTop: '30px' }}>
            <button onClick={() => scrollTo('internship')} style={arrowStyle}>&rarr;</button>
          </div>
        </section>

        {/* Internship Section */}
        <section id="internship" className="section" style={{ minHeight: '80vh', padding: '40px 20px' }}>
          <h2 style={{ color: 'black', fontSize: '3rem' }}>🛠️ Internship</h2>
          <ul style={{ listStyle: 'none', fontSize: '1.6rem' }}>
            <li><strong>PRICOL PVT LTD:</strong></li>
            <p>WEB DEVELOPMENT Offline,July 2024-15days</p>
            <p>A project is to develop an AI chatbot using dialogflow for creating an employees on-duty details </p>

            <li style={{ marginTop: '15px' }}><strong>INFOGERM:</strong> </li>
            <p>FULL STACK DEVELOPMENT Offline,June-July 2025-1Month</p>
            <p>A project is to develop an innovative real-time YouTube gesture controller.
            </p>

            <li style={{ marginTop: '15px' }}><strong>COGNIFYZ TECHNOLOGIES:</strong> </li>
            <p>WEB DEVELOPMENT Offline,April-May 2024-1Month</p>
            <p>Completed a Full Stack Web Development internship, building a Personal Finance Tracker and deploying it using Vercel.
            </p>
            <li style={{ marginTop: '15px' }}><strong>FUTURE INTERN:</strong> </li>
            <p>JAVA DEVELOPMENT Offline,June 2025-1Month</p>
            <p>Completed a Java Development internship, building a games like Rock,paper,scissors; Tic Tac Toe and Snake game.
            </p>
            <li style={{ marginTop: '15px' }}><strong>FUTURE INTERNS:</strong> </li>
            <p> FULL STACK WEB DEVELOPMENT Offline,June-July 2025-1Month</p>
            <p>A project is to create an personal portfolio,mini e-commerce storefront,rebrand a famous brands website using AI.
            </p>
            
          </ul>
          <div style={{ marginTop: '30px' }}>
            <button onClick={() => scrollTo('skills')} style={arrowStyle}>&rarr;</button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section" style={{ minHeight: '80vh', padding: '40px 20px' }}>
          <h2 style={{ color: 'black', fontSize: '3rem' }}>🧠 Skills</h2>
          <ul style={{ fontSize: '1.6rem', listStyle: 'none' }}>
            <li><strong>• Frontend</strong> </li>
            <p>HTML, CSS, JavaScript</p>
            <li><strong>• Backend</strong></li>
            <p>Python (Flask/Django),Java</p>
            <li><strong>• Database</strong></li>
            <p>: MySQL</p>
            <li><strong>• Other Tools</strong></li>
            <p> GitHub, VS Code,Figma,Jupyter</p>
          </ul>
          <div style={{ marginTop: '30px' }}>
            <button onClick={() => scrollTo('certifications')} style={arrowStyle}>&rarr;</button>
          </div>
        </section>

        

        {/* Projects Section */}
        <section id="projects" className="section" style={{ minHeight: '100vh', padding: '40px 20px' }}>
          <h2 style={{ color: 'black', fontSize: '3rem' }}>💻 Projects</h2>
          <div className="projects-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '20px' }}>
            <div className="project-card" style={{ border: '2px solid #000', borderRadius: '10px', padding: '20px', width: '320px', backgroundColor: '#f0f0f0' }}>
              <h3 style={{ color: 'black' }}>Lane Line Detection System</h3>
              <p><strong>Tech Stacks :</strong> Python, OpenCV, TensorFlow </p>
              <p>An AI-based lane line detection system leverages computer vision techniques to identify and track the road lane markings,enhancing autonomous driving capabilities.</p>
              <a href="#">View Project</a>
            </div>
            <div className="project-card" style={{ border: '2px solid #000', borderRadius: '10px', padding: '20px', width: '320px', backgroundColor: '#f0f0f0' }}>
              <h3 style={{ color: 'black' }}>Library Management System</h3>
              <p><strong>Tech Stacks :</strong> Python (Django/Flask), HTML/CSS/JavaScript </p>
              <p>A library book management system streamlines book borrowing,returns,and inventory tracking which helps to reduce handwritten manuals,reduce human errors and time complexity.</p>
              <a href="#">View Project</a>
            </div>
            <div className="project-card" style={{ border: '2px solid #000', borderRadius: '10px', padding: '20px', width: '320px', backgroundColor: '#f0f0f0' }}>
              <h3 style={{ color: 'black' }}>EV Charging Pre-Booking System</h3>
              <p><strong>Tech Stacks :</strong> Python(Flask/Django),HTML/CSS/JavaScript</p>
              <p>An EV charging pre-booking system allows users to reserve slots in advance which enhancing the convenience and reducing wait times.</p>
              <a href="#">View Project</a>
            </div>
          </div>
          <div style={{ marginTop: '30px' }}>
            <button onClick={() => scrollTo('contact')} style={arrowStyle}>&rarr;</button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ color: 'black', fontSize: '3rem' }}>📬 Contact</h2>
          <p style={{ fontSize: '1.5rem' }}><strong>Email:</strong> sriniravichandran110@gmail.com</p>
          <p style={{ fontSize: '1.5rem' }}><strong>Phone No:</strong> 6379153001</p>
          <p style={{ fontSize: '1.5rem' }}><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/01srinithi-r">01srinithi-r</a></p>
          <p style={{ fontSize: '1.5rem' }}><strong>GitHub:</strong> <a href="https://github.com/srinithi-oops">srinithi-oops</a></p>
          <div style={{ marginTop: '30px' }}>
            <button onClick={() => scrollTo('hero')} style={arrowStyle}>&uarr; Top</button>
          </div>
        </section>
      </main>
    </div>
  );
}

const arrowStyle = {
  backgroundColor: 'black',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  fontSize: '1rem',
  cursor: 'pointer'
};

const linkStyle = {
  backgroundColor: 'transparent',
  color: 'white',
  fontSize: '1.1rem',
  padding: '10px 0',
  border: 'none',
  textAlign: 'left',
  width: '100%',
  cursor: 'pointer'
};

export default App;
