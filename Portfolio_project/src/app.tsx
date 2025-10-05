import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b-4 border-gradient-to-r from-orange-400 to-pink-500">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Portfolio</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">About</a>
              <a href="#skills" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Projects</a>
              <a href="#education" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Education</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">Smruthi Y Rao</h2>
          <p className="text-2xl text-gray-700 mb-2 font-semibold">Full-Stack Developer & AI Enthusiast</p>
          <p className="text-lg text-gray-600">Mysuru, India</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-8 text-center">About Me</h3>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 bg-gradient-to-br from-orange-400 via-pink-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl">
                <span className="text-6xl font-bold text-white">S</span>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Results-driven Computer Science Engineering student with expertise in full-stack web development and AI-powered applications. Skilled in React, Node.js, Express.js, MongoDB, and RESTful APIs, with hands-on experience building scalable, user-focused platforms.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Strong foundation in Data Structures, Algorithms, Operating Systems, and Computer Networks. Passionate about solving real-world problems and seeking opportunities as a Software Engineer / Full-Stack Developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-12 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-t-4 border-orange-400 hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-semibold text-orange-700 mb-4">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {['C', 'C++', 'Python', 'Java', 'JavaScript'].map(skill => (
                    <span key={skill} className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium hover:from-orange-200 hover:to-orange-300 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-t-4 border-pink-400 hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-semibold text-pink-700 mb-4">Web Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Node.js', 'Express.js', 'TailwindCSS', 'Firebase'].map(skill => (
                    <span key={skill} className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 px-4 py-2 rounded-full text-sm font-medium hover:from-pink-200 hover:to-pink-300 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-t-4 border-blue-400 hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-semibold text-blue-700 mb-4">Databases</h4>
                <div className="flex flex-wrap gap-2">
                  {['MongoDB', 'MySQL', 'SQL'].map(skill => (
                    <span key={skill} className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-200 hover:to-blue-300 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-t-4 border-teal-400 hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-semibold text-teal-700 mb-4">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'Postman', 'VS Code', 'Cloudinary', 'ImageKit'].map(skill => (
                    <span key={skill} className="bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 px-4 py-2 rounded-full text-sm font-medium hover:from-teal-200 hover:to-teal-300 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-t-4 border-green-400 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-semibold text-green-700 mb-4">Core Concepts</h4>
              <div className="flex flex-wrap gap-2">
                {['Data Structures & Algorithms', 'Operating Systems', 'Computer Networks', 'OOPS', 'DBMS'].map(skill => (
                  <span key={skill} className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:from-green-200 hover:to-green-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-12 text-center">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Brain Buddy Project */}
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-l-8 border-orange-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Brain Buddy</h4>
                  <ExternalLink className="text-orange-600" size={20} />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React.js', 'Node.js', 'MongoDB', 'Gemini AI'].map(tech => (
                    <span key={tech} className="bg-gradient-to-r from-orange-200 to-pink-200 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  An AI-powered full-stack web application enabling intelligent PDF interaction with advanced features including content-based Q&A, podcast summaries, and auto-generated aptitude tests.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Integrated Gemini AI for natural language processing and context-aware responses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Utilized Cloudinary and ImageKit for media optimization and delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Designed scalable architecture with RESTful APIs</span>
                  </li>
                </ul>
              </div>

              {/* AI Resume Builder Project */}
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-l-8 border-blue-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">AI Resume Builder</h4>
                  <ExternalLink className="text-blue-600" size={20} />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React.js', 'TailwindCSS', 'Gemini AI', 'Clerk'].map(tech => (
                    <span key={tech} className="bg-gradient-to-r from-blue-200 to-teal-200 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A resume generation platform tailored for JSS STU students, ensuring ATS-compliant resumes with AI-powered content generation and optimization.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Leveraged Gemini AI for automated content generation and keyword optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Integrated Clerk authentication for secure user access management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Designed responsive UI with TailwindCSS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-12 text-center">Education</h3>
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-8 border-orange-500 hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold text-orange-700 mb-2">JSS Science and Technology University, Mysuru</h4>
                <p className="text-gray-700 font-medium mb-1">Bachelor of Engineering in Computer Science</p>
                <p className="text-gray-600">CGPA: 9.14</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-8 border-pink-500 hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold text-pink-700 mb-2">Base PU College, Mysuru</h4>
                <p className="text-gray-700 font-medium mb-1">PCMB</p>
                <p className="text-gray-600">Percentage: 94%</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-8 border-blue-500 hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold text-blue-700 mb-2">National Public School, Mysore</h4>
                <p className="text-gray-700 font-medium mb-1">CBSE Board</p>
                <p className="text-gray-600">Percentage: 91%</p>
              </div>
            </div>
            <div className="mt-12">
              <h4 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6 text-center">Certifications</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-teal-400 to-cyan-400 p-6 rounded-xl shadow-lg text-center text-white hover:shadow-xl transition-shadow transform hover:scale-105">
                  <p className="text-white font-bold text-lg">Ethical Hacking</p>
                  <p className="text-teal-50 text-sm mt-1">Infosys</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-400 to-blue-400 p-6 rounded-xl shadow-lg text-center text-white hover:shadow-xl transition-shadow transform hover:scale-105">
                  <p className="text-white font-bold text-lg">Introduction to Cyber Security</p>
                  <p className="text-cyan-50 text-sm mt-1">Infosys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-orange-50 to-pink-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-8">Get In Touch</h3>
            <p className="text-lg text-gray-700 mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="mailto:madanayyanavara@gmail.com" className="flex items-center justify-center space-x-3 bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-xl hover:from-orange-200 hover:to-orange-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                <Mail className="text-orange-600" size={24} />
                <div className="text-left">
                  <p className="text-sm text-orange-700 font-semibold">Email</p>
                  <p className="text-orange-900 font-medium">yraosmruthi@gmail.com</p>
                </div>
              </a>
              <a href="tel:+919353480249" className="flex items-center justify-center space-x-3 bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-xl hover:from-pink-200 hover:to-pink-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                <Phone className="text-pink-600" size={24} />
                <div className="text-left">
                  <p className="text-sm text-pink-700 font-semibold">Phone</p>
                  <p className="text-pink-900 font-medium">+91-9591664310</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/smruthiyrao" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl hover:from-blue-200 hover:to-blue-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                <Linkedin className="text-blue-600" size={24} />
                <div className="text-left">
                  <p className="text-sm text-blue-700 font-semibold">LinkedIn</p>
                  <p className="text-blue-900 font-medium">Smruthi Y Rao</p>
                </div>
              </a>
              <a href="https://github.com/yraosmruthi" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 bg-gradient-to-br from-teal-100 to-teal-200 p-6 rounded-xl hover:from-teal-200 hover:to-teal-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                <Github className="text-teal-600" size={24} />
                <div className="text-left">
                  <p className="text-sm text-teal-700 font-semibold">GitHub</p>
                  <p className="text-teal-900 font-medium">Smruthi Y Rao</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300">© 2025 Smruthi Y Rao. All rights reserved.</p>
          <p className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent text-sm mt-2 font-medium">Built with React & TailwindCSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
