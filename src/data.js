export const profile = {
  name: 'Arunraja N',
  role: 'Python Developer | AI & Data Science',
  tagline: 'I build practical applications using Python, backend technologies, databases, and AI APIs.',
  summary:
    'B.Tech Artificial Intelligence and Data Science student seeking entry-level Python Developer, Junior Python Developer, and Backend Developer roles. I have built Python web applications with Flask and FastAPI, including TaskFlow, a MySQL-backed task management app, and completed internships in Java, machine learning, and AI data preparation.',
  email: 'arunrajakrishnan12@gmail.com',
  phone: '+91-7305836584',
  github: 'https://github.com/arunraja124-stack',
  linkedin: 'https://www.linkedin.com/in/arunraja-n-54aa142a2',
  resume: '/Arunraja_N_Resume.pdf',
  resumeName: 'Arunraja_N_Resume.pdf',
}

export const education = [
  { title: 'B.Tech, Artificial Intelligence and Data Science', place: 'Ramco Institute of Technology', meta: 'Expected May 2027 · CGPA 7.30' },
  { title: 'Higher Secondary (Class XII)', place: 'St. Michael Matriculation Higher Secondary School, Madurai', meta: '75%' },
]

export const certifications = [
  'Explore Machine Learning using Python – Infosys Springboard (2026)',
  'Data Visualisation: Empowering Business with Effective Insights – Tata (Forage) (2026)',
  'Introduction to Natural Language Processing – Infosys Springboard (2025)',
  'Data Reduction & Exploratory Data Analysis (EDA) – Infosys Springboard (2024)',
]

export const skills = [
  { group: 'Programming Languages', items: ['Python', 'Java', 'SQL'] },
  { group: 'Backend Development', items: ['Flask', 'FastAPI', 'REST APIs'] },
  { group: 'Database', items: ['MySQL', 'SQL Queries', 'CRUD Operations'] },
  { group: 'AI & Generative AI', items: ['Google Gemini API', 'Machine Learning', 'Scikit-learn', 'YOLOv8', 'Object Detection', 'Image Annotation'] },
  { group: 'Web Technologies', items: ['HTML', 'CSS', 'JavaScript'] },
  { group: 'Developer Tools', items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'] },
]

export const projects = [
  {
    title: 'TaskFlow',
    subtitle: 'Task Management Web Application',
    featured: true,
    stack: ['Python', 'Flask', 'MySQL', 'REST API', 'Google Gemini API'],
    github: 'https://github.com/arunraja124-stack/TaskFlow',
    points: [
      'Flask REST API with MySQL for creating, viewing, updating and deleting tasks and changing their status, with input validation.',
      'Registration, login, password hashing, session authentication and CSRF protection; tasks are scoped to each user.',
      'MySQL schema with keys and indexes; CRUD through parameterized mysql-connector-python queries.',
      'Google Gemini API integration for AI task suggestions, plus analytics, Excel/PDF export, attendance tracking and Pytest API tests.',
    ],
  },
  {
    title: 'AI Chatbot System',
    subtitle: 'Web-based chatbot',
    stack: ['Python', 'Flask', 'Google Gemini API'],
    github: 'https://github.com/arunraja124-stack/genai-project',
    points: [
      'Flask backend that receives user queries and returns responses in the application.',
      'Gemini API generates the answers; prompt engineering shapes the replies.',
    ],
  },
  {
    title: 'YOLO Retail Product Detection System',
    subtitle: 'Computer vision with a model-serving API',
    stack: ['Python', 'YOLOv8', 'FastAPI'],
    github: 'https://github.com/arunraja124-stack/retail-yolo-inventory-system',
    points: [
      'YOLOv8 object detection to locate and identify retail products.',
      'FastAPI backend serves model predictions to the application for inference.',
    ],
  },
  {
    title: 'AI-Based Procurement & Supplier Analytics System',
    subtitle: 'Supplier analysis and procurement support',
    stack: ['Python', 'FastAPI', 'Vercel', 'Google Cloud'],
    github: 'https://github.com/arunraja124-stack/v0-saa-s-procurement-analytics',
    points: [
      'FastAPI backend powering a web application for supplier analysis and procurement support.',
      'Dashboards that present supplier and procurement data.',
    ],
  },
]

export const experience = [
  {
    role: 'AI Intern', company: 'KG Genius Labs', place: 'Coimbatore, Tamil Nadu', dates: 'Jan 2026 – Mar 2026',
    points: ['Collected image datasets for object detection and AI model development.', 'Annotated images with bounding boxes to create labeled data.', 'Prepared and organized labeled datasets for YOLO-based computer vision.'],
  },
  {
    role: 'Java Developer Intern', company: 'Elysium Technologies', place: 'Madurai, Tamil Nadu', dates: 'Jun 2025 – Jul 2025',
    points: ['Developed a Java application applying object-oriented programming principles.', 'Connected the application to a MySQL database using JDBC.', 'Built a Library Management System implementing CRUD operations.'],
  },
  {
    role: 'AI/ML Intern', company: 'Elysium Technologies', place: 'Madurai, Tamil Nadu', dates: 'Feb 2025 – Mar 2025',
    points: ['Performed data preprocessing and transformation to prepare datasets for machine learning.', 'Trained and tested machine learning models using Python and Scikit-learn.', 'Evaluated models by comparing predicted results with actual outcomes.'],
  },
]

export const navLinks = [
  ['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'],
  ['Experience', '#experience'], ['Resume', '#resume'], ['Contact', '#contact'],
]
