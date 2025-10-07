import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <section id="home" className="min-h-screen relative overflow-hidden">
        <div className="intro-gradient" />
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
          <div className="text-center space-y-4 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold">Krishanth Venkatachalam</h1>
            <h2 className="text-xl md:text-2xl text-gray-400">
              Data Analyst | Software Engineer
            </h2>
            <div className="flex gap-6 md:gap-8 text-gray-400 justify-center mt-4">
              <span>
                248-962-6380
              </span>
              <span>|</span>
              <a href="mailto:krish.ven21@gmail.com" className="hover:text-gray-100">
                krish.ven21@gmail.com
              </a>
              <span>|</span>
              <a
                href="https://www.linkedin.com/in/krishanth-venkatachalam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100"
              >
                LinkedIn
              </a>
              <span>|</span>
              <a
                href="https://github.com/krishven05"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <section id="about" className="min-h-screen py-12 md:py-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 tracking-tight">About</h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="w-full md:w-2/5 slide-in-left">
              <Image 
                src="/Portrait.jpg" 
                alt="Krishanth Venkatachalam" 
                className="rounded-2xl shadow-lg w-full h-auto"
                width={500}
                height={600}
                priority
              />
            </div>
            <div className="w-full md:w-3/5 slide-in-right">
              <div className="space-y-6" style={{color: '#ffffff'}}>
                <p className="text-xl md:text-2xl leading-relaxed">
                  My name is Krishanth, and I love data, coding, and problem-solving.
                </p>
                <p className="text-xl md:text-2xl leading-relaxed">
                  I am a third-year student at the University of Michigan studying data science and economics. I&apos;m passionate about leveraging new technologies, data analysis, and machine learning to create innovative solutions to complex problems.
                </p>
                <p className="text-xl md:text-2xl leading-relaxed">
                  When I&apos;m not coding, I enjoy watching movies, reading books, and eating sour patch kids. I also love dancing, having taken part in dance teams and travelling to competitions nationally.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="education" className="min-h-screen py-12 md:py-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 tracking-tight">Education</h2>
          <div className="space-y-8">
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm education-card">
              <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-6">
                <h3 className="text-3xl font-semibold tracking-tight">
                  University of Michigan, Ann Arbor
                </h3>
                <span className="text-lg text-gray-400 font-medium">
                  Ann Arbor, MI
                </span>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-6">
                <p className="text-xl font-medium">
                  Bachelor of Science in Data Science and Economics
                </p>
                <span className="text-lg text-gray-600 dark:text-gray-400">
                  Expected May 2027
                </span>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3" style={{color: '#ffffff'}}>Relevant Coursework</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 course-item">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span style={{color: '#ffffff'}}>Intro to Machine Learning</span>
                  </div>
                  <div className="flex items-center space-x-2 course-item">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span style={{color: '#ffffff'}}>Applied Regression</span>
                  </div>
                  <div className="flex items-center space-x-2 course-item">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span style={{color: '#ffffff'}}>Database Management Systems</span>
                  </div>
                  <div className="flex items-center space-x-2 course-item">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span style={{color: '#ffffff'}}>Data Structures and Algorithms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experiences" className="min-h-screen py-12 md:py-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 tracking-tight">Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm experience-card">
              <div className="mb-2">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="text-2xl font-semibold">Software Engineer Intern</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    May 2025 - Aug. 2025
                  </span>
                </div>
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <p className="text-base italic">Homestream</p>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Ann Arbor, MI
                  </span>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Engineered a real estate chatbot leveraging the ATTOM property data API and GPT-4 NLP models, automating user query workflows, reducing manual intervention, and improving scalability across multiple real estate market segments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Built AWS cloud infrastructure (DynamoDB, S3) to securely store and retrieve over 10,000 user documents, ensuring 99.99% uptime and compliance with data security standards, while reducing data access latency by 60% on average</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Designed a backend using Flask that classifies user queries into categories, providing responses from the API or OpenAI, cutting query handling time by 25%, integrated with React/TypeScript frontend to create a user-friendly interface</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Containerized backend services using Docker, enabling consistent setups and streamlining deployment workflows across the CI/CD pipeline, reducing deployment time by 40% and minimizing integration bugs through reproducible builds</span>
                </li>
              </ul>
            </div>


            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm experience-card">
              <div className="mb-2">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="text-2xl font-semibold">Data Research Assistant</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    June 2025 - Aug. 2025
                  </span>
                </div>
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <p className="text-base italic">
                    University of Michigan, Natural Products Discovery Core
                  </p>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Ann Arbor, MI
                  </span>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Designed learning models to predict electronic circular dichroism (ECD) spectra from molecular structure data and physicochemical features, increasing prediction accuracy and bridging data gaps in current natural product research</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Built scalable data ingestion pipelines to process 100+ molecular datasets from published literature and internal experiments, reducing preprocessing time by 40% and streamlining model training across various compound classes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Optimized ECD prediction models by systematically tuning hyperparameters (learning-rate, n-estimators, etc.) and selecting key physicochemical features, effectively reducing mean squared error on validation data by approximately 15%</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm experience-card">
              <div className="mb-2">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="text-2xl font-semibold">AI Data Analyst Intern</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    May 2024 - Aug. 2024
                  </span>
                </div>
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <p className="text-base italic">ThinkDigits</p>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Farmington Hills, MI
                  </span>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Contributed to the development of a tailored chatbot solution for vehicle manufacturers to improve diagnostic accuracy in manufacturing workflows, minimizing manual intervention and improving response time and accuracy by 25%</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Leveraged AWS Forecast to analyze 50,000+ transactions, identifying demand-driven trends that enhanced retail decision-making, optimized supply chain planning, and boosted operational efficiency by 15% quarter-over-quarter</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Engineered and versioned 30+ domain-specific datasets to simulate diverse user intents, improve training coverage and model generalization, and enhance chatbot response quality across complex manufacturing and supply chain scenarios</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm experience-card">
              <div className="mb-2">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="text-2xl font-semibold">Business Analyst Assistant</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    May 2023 - Jul. 2023
                  </span>
                </div>
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <p className="text-base italic">Oakland University</p>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Rochester, MI
                  </span>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Conducted quantitative analysis of macroeconomic indicators (GDP trends, inflation rates) across 10+ countries using R and Excel, identifying key growth opportunities that directly informed strategic initiatives for global expansion</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Partnered closely with business administrators to implement targeted economic strategies, addressing both short- and long-term institutional goals, and promoting sustained development and innovation across 100+ industries</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen py-12 md:py-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 tracking-tight">Projects</h2>
          <div className="grid grid-cols-1 gap-8">
<div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm project-card">
              <div className="mb-4">
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
                  <h3 className="text-2xl md:text-3xl font-semibold">Factor Alpha</h3>
                  <span className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                    Jul. 2025 - Aug. 2025
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Python", "pandas", "NumPy"].map((tech) => (
                    <span key={tech} className="text-sm px-3 py-1 bg-black/30 border border-gray-700/50 rounded-xl mr-2 mb-2 inline-block">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="mt-6 space-y-4 text-base">
                <li className="flex gap-3">
                  <span className="text-gray-400 flex-shrink-0">•</span>
                  <span>Built a multi-factor backtesting toolkit (momentum, value, quality) on the S&P 500, incorporating monthly data, automated caching, and performance metrics (CAGR, Sharpe, Max Drawdown), enabling robust portfolio analysis at scale</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400 flex-shrink-0">•</span>
                  <span>Implemented a metrics pipeline with excess-return reporting, generating publication-ready plots within 2.8 seconds, significantly reducing reporting time for quantitative research and improving reproducibility across backtests</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400 flex-shrink-0">•</span>
                  <span>Engineered a modular, CLI-driven architecture with automated CI (Ruff, Mypy, Pytest), allowing seamless integration of new factors (volatility, growth, earnings, etc.) and reproducible one-command reruns across environments</span>
                </li>
              </ul>
            </div>
                        <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm project-card">
              <div className="mb-4">
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
                  <h3 className="text-2xl md:text-3xl font-semibold">Fakebook Data Pipeline</h3>
                  <span className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                    Jan. 2025 - Feb. 2025
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["JavaScript", "MongoDB", "Oracle", "Data Migration"].map((tech) => (
                    <span key={tech} className="text-sm px-3 py-1 bg-black/30 border border-gray-700/50 rounded-xl mr-2 mb-2 inline-block">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="mt-6 space-y-4 text-base">
                <li className="flex gap-3">
                  <span className="text-gray-400 flex-shrink-0">•</span>
                  <span>Developed a full-scale data migration pipeline that extracted data from an Oracle database, importing over 1000 user records into MongoDB, streamlining data integration and real-time analytics, ensuring data integrity across systems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400 flex-shrink-0">•</span>
                  <span>Engineered advanced MongoDB aggregation pipelines to perform complex queries on large datasets, reducing execution times by up to 40% and generating actionable insights into user activity patterns and behavioral trends</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400 flex-shrink-0">•</span>
                  <span>Collaborated with a cross-functional team to design and integrate scalable database models, implementing modular schema strategies that enhanced system performance and improved retrieval speeds for downstream applications</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm project-card">
              <div className="mb-4">
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
                  <h3 className="text-3xl font-semibold">Facial Recognition App</h3>
                  <span className="text-base text-gray-600 dark:text-gray-400">
                    Sep. 2024 - Nov. 2024
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Python", "Siamese Neural Networks", "TensorFlow", "Kivy"].map((tech) => (
                    <span key={tech} className="text-sm px-3 py-1 bg-black/30 border border-gray-700/50 rounded-xl mr-2 mb-2 inline-block">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="mt-6 space-y-4 text-base">
                <li className="flex gap-3">
                  <span className="text-gray-400 flex-shrink-0">•</span>
                  <span>Used Siamese Neural Networks to input data from over 1200 pictures and find similarities through Siamese NNs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400 flex-shrink-0">•</span>
                  <span>Integrated TensorFlow to implement the data preprocessing, achieving 85% accuracy in facial recognition tasks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400 flex-shrink-0">•</span>
                  <span>Made use of Kivy to build the app, integrating the trained model to enable real-time facial recognition</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="min-h-screen py-12 md:py-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 tracking-tight">Skills</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm skill-card">
              <h3 className="text-3xl font-semibold mb-6">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {["C++", "Python", "JavaScript", "SQL", "R"].map((skill) => (
                  <span key={skill} className="text-base px-4 py-2 bg-black/30 border border-gray-700/50 rounded-xl mr-3 mb-3">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm skill-card">
              <h3 className="text-3xl font-semibold mb-6">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-3">
                {["Flask", "React","TypeScript", "TensorFlow", "pandas", "NumPy"].map((skill) => (
                  <span key={skill} className="text-base px-4 py-2 bg-black/30 border border-gray-700/50 rounded-xl mr-3 mb-3">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm skill-card">
              <h3 className="text-3xl font-semibold mb-6">Developer Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {["AWS", "Git", "Docker", "MongoDB", "VS Code", "XCode"].map((skill) => (
                  <span key={skill} className="text-base px-4 py-2 bg-black/30 border border-gray-700/50 rounded-xl mr-3 mb-3">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen py-12 md:py-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 tracking-tight">Contact</h2>
          <div className="bg-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm max-w-2xl mx-auto contact-card">
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-wrap items-center gap-4 md:gap-6 p-3 md:p-4 bg-gray-200/10 rounded-xl transition-all hover:bg-gray-200/20 contact-item">
                <div className="p-2 md:p-3 bg-black/30 border border-gray-700/50 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:krish.ven21@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    krish.ven21@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 bg-gray-200/10 rounded-xl transition-all hover:bg-gray-200/20 contact-item">
                <div className="p-3 bg-black/30 border border-gray-700/50 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <span
                    className="text-gray-600 dark:text-gray-400"
                  >
                    248-962-6380
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 bg-gray-200/10 rounded-xl transition-all hover:bg-gray-200/20 contact-item">
                <div className="p-3 bg-black/30 border border-gray-700/50 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/krishanth-venkatachalam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    linkedin.com/in/krishanth-venkatachalam
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 bg-gray-200/10 rounded-xl transition-all hover:bg-gray-200/20 contact-item">
                <div className="p-3 bg-black/30 border border-gray-700/50 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Github</h3>
                  <a
                    href="https://github.com/krishven05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    https://github.com/krishven05
                  </a>
                </div>
              </div>

              <div className="text-center mt-8 text-gray-600 dark:text-gray-400">
                <p>Feel free to reach out for collaborations or opportunities!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
