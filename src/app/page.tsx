import Image from "next/image";

const coursework = [
  "Statistical Computing",
  "Data Mining",
  "Intro Artificial Intelligence",
  "Computer Vision",
  "Intro Machine Learning",
  "Applied Regression",
  "Database Management Systems",
  "Data Structures and Algorithms",
];

const experiences = [
  {
    title: "Data Analyst",
    company: "Deloitte",
    dates: "Apr. 2026 - Present",
    location: "Lansing, Michigan",
    bullets: [
      "Engineered data pipelines and SQL transformations across Oracle and Databricks environments supporting analysis of 20+ eligibility indicators and large-scale reporting for the Michigan Bridges social services platform and policy evaluation",
      "Created advanced Power BI dashboards featuring dynamic filtering, parameter-driven visualizations, DAX measures, and statistical analyses to surface eligibility and resource allocation insights through 10+ interactive dashboards for stakeholders",
      "Implemented Logistic and LASSO regression models in Databricks to identify predictive eligibility indicators, perform feature selection, and improve model explainability across high-dimensional datasets, reducing feature space by 30%",
      "Utilized Jira, Bitbucket, and Git Bash development practices to manage project workflows, maintain version-controlled analytics codebases, and coordinate deliverables across technical teams supporting 10+ concurrent analytics initiatives",
    ],
  },
  {
    title: "Project Lead, AI Simulation Systems",
    company: "Riot (Independent AI Simulation Venture)",
    dates: "Jan. 2026 - Apr. 2026",
    location: "Ann Arbor, Michigan",
    bullets: [
      "Founded and architected a multi-agent fantasy simulation platform supporting 50+ concurrent autonomous agents with vectorized state-update pipelines, reducing processing latency by 35% while improving system scalability and performance",
      "Engineered utility-based and reinforcement learning decision frameworks across 20+ dynamic affordances, increasing behavioral divergence by 40% and improving long-term simulation realism across agent populations",
      "Implemented a multi-agent communication layer enabling NPCs to share context and influence decisions, increasing emergent interaction complexity, narrative consistency, and overall world cohesion among autonomous agent populations",
      "Built a simulation analytics pipeline tracking action entropy, reward convergence, and interaction frequency while optimizing LLM routing and fallback logic, reducing blocking latency by 30% across complex multi-agent simulation workloads",
    ],
  },
  {
    title: "Data Engineer Intern",
    company: "Homestream",
    dates: "May 2025 - Aug. 2025",
    location: "Ann Arbor, Michigan",
    bullets: [
      "Engineered a real estate chatbot leveraging the ATTOM property data API and GPT-4 NLP models, automating user query workflows, reducing manual intervention, and improving scalability across multiple real estate market segments",
      "Built AWS cloud infrastructure (DynamoDB, S3) to securely store and retrieve over 10,000 user documents, ensuring 99.99% uptime and compliance with data security standards, while reducing data access latency by 60% on average",
      "Designed a backend using Flask that classifies user queries into categories, providing responses from the API or OpenAI, cutting query handling time by 25%, integrated with React/TypeScript frontend to create a user-friendly interface",
    ],
  },
  {
    title: "Data Research Assistant",
    company: "University of Michigan, Natural Products Discovery Core",
    dates: "June 2025 - Aug. 2025",
    location: "Ann Arbor, Michigan",
    bullets: [
      "Designed learning models to predict electronic circular dichroism (ECD) spectra from molecular structure data and physicochemical features, increasing prediction accuracy and bridging data gaps in current natural product research",
      "Built scalable data ingestion pipelines to process 100+ molecular datasets from published literature and internal experiments, reducing preprocessing time by 40% and streamlining model training across various compound classes",
      "Optimized ECD prediction models by systematically tuning hyperparameters such as learning rate and number of estimators, effectively reducing mean squared error on validation data by approximately 15%",
    ],
  },
  {
    title: "AI Data Analyst Intern",
    company: "ThinkDigits",
    dates: "May 2024 - Aug. 2024",
    location: "Farmington Hills, Michigan",
    bullets: [
      "Contributed to the development of a tailored chatbot solution for vehicle manufacturers to improve diagnostic accuracy in manufacturing workflows, minimizing manual intervention and improving response time and accuracy by 25%",
      "Leveraged AWS Forecast to analyze 50,000+ transactions, identifying demand-driven trends that enhanced retail decision-making, optimized supply chain planning, and boosted operational efficiency by 15% quarter-over-quarter",
      "Engineered and versioned 30+ domain-specific datasets to simulate diverse user intents, improve training coverage and model generalization, and enhance chatbot response quality across complex manufacturing and supply chain scenarios",
    ],
  },
];

const projects = [
  {
    title: "Fakebook Data Pipeline",
    tech: ["JavaScript", "MongoDB", "Oracle"],
    dates: "Jan. 2025 - Feb. 2025",
    bullets: [
      "Developed a full-scale data migration pipeline that extracted data from an Oracle database, importing over 1,000 user records into MongoDB, streamlining data integration and real-time analytics, ensuring data integrity across systems",
      "Engineered advanced MongoDB aggregation pipelines to perform complex queries on large datasets, reducing execution times by up to 40% and generating actionable insights into user activity patterns and behavioral trends",
      "Collaborated with a cross-functional team to design and integrate scalable database models, implementing modular schema strategies that enhanced system performance and improved retrieval speeds for downstream applications",
    ],
  },
];

const skills = [
  {
    category: "Languages",
    items: ["C++", "Python", "Java", "SQL", "R", "TypeScript", "JavaScript"],
  },
  {
    category: "Frameworks",
    items: ["Flask", "React", "TensorFlow", "Pandas", "NumPy"],
  },
  {
    category: "Developer Tools",
    items: [
      "AWS",
      "Databricks",
      "Power Bi",
      "Jira",
      "Bitbucket",
      "Git Bash",
      "VS Code",
      "Xcode"
    ],
  },
  {
    category: "Databases",
    items: ["Oracle", "MongoDB", "DB2", "DynamoDB"],
  },
];

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
            <div className="flex flex-wrap gap-4 md:gap-8 text-gray-400 justify-center mt-4">
              <span>248-962-6380</span>
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
              <div className="space-y-6" style={{ color: "#ffffff" }}>
                <p className="text-xl md:text-2xl leading-relaxed">
                  My name is Krishanth, and I love data, coding, and problem-solving.
                </p>
                <p className="text-xl md:text-2xl leading-relaxed">
                  I am a senior at the University of Michigan studying data science and
                  economics. I&apos;m passionate about leveraging new technologies, data
                  analysis, and machine learning to create innovative solutions to real-world
                  problems.
                </p>
                <p className="text-xl md:text-2xl leading-relaxed">
                  When I&apos;m not coding, I enjoy watching movies, reading books, and eating
                  Sour Patch Kids. I also love dancing, having taken part in dance teams and
                  competing nationally.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="min-h-screen py-12 md:py-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 tracking-tight">
            Education
          </h2>
          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm education-card">
            <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-6">
              <h3 className="text-3xl font-semibold tracking-tight">
                University of Michigan
              </h3>
              <span className="text-lg text-gray-400 font-medium">Ann Arbor, MI</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-6">
              <p className="text-xl font-medium">
                Bachelor of Science in Data Science
              </p>
              <span className="text-lg text-gray-600 dark:text-gray-400">
                Expected Graduation Date: May 2027
              </span>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3" style={{ color: "#ffffff" }}>
                Relevant Coursework
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coursework.map((course) => (
                  <div key={course} className="flex items-center space-x-2 course-item">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    <span style={{ color: "#ffffff" }}>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experiences" className="min-h-screen py-12 md:py-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 tracking-tight">
            Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience) => (
              <div
                key={`${experience.title}-${experience.company}`}
                className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm experience-card"
              >
                <div className="mb-2">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="text-2xl font-semibold">{experience.title}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {experience.dates}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <p className="text-base italic">{experience.company}</p>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {experience.location}
                    </span>
                  </div>
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-gray-400 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="min-h-screen py-12 md:py-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 tracking-tight">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm project-card"
              >
                <div className="mb-4">
                  <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
                    <h3 className="text-2xl md:text-3xl font-semibold">{project.title}</h3>
                    <span className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                      {project.dates}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 bg-black/30 border border-gray-700/50 rounded-xl mr-2 mb-2 inline-block"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="mt-6 space-y-4 text-base">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="text-gray-400 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="min-h-screen py-12 md:py-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 tracking-tight">
            Skills
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm skill-card"
              >
                <h3 className="text-3xl font-semibold mb-6">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-base px-4 py-2 bg-black/30 border border-gray-700/50 rounded-xl mr-3 mb-3"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="min-h-screen py-12 md:py-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 tracking-tight">
            Contact
          </h2>
          <div className="bg-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm max-w-2xl mx-auto contact-card">
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-wrap items-center gap-4 md:gap-6 p-3 md:p-4 bg-gray-200/10 rounded-xl transition-all hover:bg-gray-200/20 contact-item">
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
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <span className="text-gray-600 dark:text-gray-400">248-962-6380</span>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 bg-gray-200/10 rounded-xl transition-all hover:bg-gray-200/20 contact-item">
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
                <div>
                  <h3 className="text-lg font-semibold mb-1">Github</h3>
                  <a
                    href="https://github.com/krishven05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    github.com/krishven05
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
