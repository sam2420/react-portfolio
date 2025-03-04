import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-1.jpg";

export const HERO_CONTENT = `I am a passionate computer science student at PES University with a strong interest in Artificial Intelligence and Machine Learning. Currently interning as an Associate Software Engineer at Sajjalashri Technologies, I am focused on backend development and API integrations. My expertise spans Python, SQL, and JavaScript, and I am particularly interested in computer vision and transformer-based architectures. In my free time, I enjoy playing games and exercising.`;

export const ABOUT_TEXT = `As a dedicated computer science student at PES University, I am enthusiastic about exploring various domains within the field. My primary interests lie in AI, deep learning, and data-driven problem-solving. I have hands-on experience with deep learning frameworks like TensorFlow and PyTorch and have worked on multiple projects involving computer vision, time-series forecasting, and NLP. I thrive in collaborative environments and am always eager to learn new technologies.`;

export const EXPERIENCES = [
  {
    year: "Dec 2024 - Present",
    role: "Associate Software Engineer Intern",
    company: "Sajjalashri Technologies",
    description: `Developing and managing Database Management Systems (DBMS) using PyODBC, ensuring efficient integration with SQL Server. Implementing Azure-based cloud solutions for scalable data management and deployment while collaborating with cross-functional teams for seamless integration.`,
    technologies: ["Python", "SQL", "Azure", "PyODBC"]
  }
];

export const PROJECTS = [
  {
    title: "Custom Language Model Workflow for Medical Recommendations and Alternatives",
    image: project1,
    description:
      "Designed a system incorporating document summarization, recommendations, and alternative exploration using state-of-the-art APIs and embeddings. Built a persistent vector database for querying document embeddings and hosted the workflow on a Streamlit interface for seamless interaction.",
    technologies: ["Python", "Nomic Embeddings", "Streamlit", "Vector Databases"]
  },
  {
    title: "Stock Price Prediction",
    image: project2,
    description:
      "Collected and pre-processed time series data to predict stock prices using SARIMAX and LSTM models. Optimized performance through hyperparameter tuning, achieving a 75% accuracy rate.",
    technologies: ["Python", "SARIMAX", "LSTM", "Pandas", "Matplotlib"]
  },
  {
    title: "Advanced Vision-Based Image Captioning System",
    image: project3,
    description:
      "Engineered a deep learning-powered image captioning model integrating convolutional neural networks (CNN) for feature extraction and sequence models for caption generation. Trained the system on large-scale datasets to enhance contextual understanding and generate highly accurate textual descriptions of images.",
    technologies: ["Python", "TensorFlow", "CNN", "LSTM", "OpenCV"]
  },
  {
    title: "Migration of E-commerce Architecture",
    image: project4,
    description:
      "Led the migration of a large-scale website from a monolithic to a microservices-based architecture, improving scalability and maintainability. Utilized Docker for containerization and deployed services on Kubernetes to enhance deployment efficiency.",
    technologies: ["Docker", "Kubernetes", "Microservices", "Cloud Deployment"]
  },
  {
    title: "Full-Featured E-Commerce Website",
    image: project5,
    description:
      "Designed and developed a comprehensive e-commerce platform with essential functionalities, including product listings, shopping cart, secure payment gateway integration, and user authentication. Implemented features like order tracking, password recovery, and an admin panel for product management.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API"]
  }
];

export const CONTACT = {
  address: "Bangalore, India",
  phoneNo: "+91 9741716323",
  email: "samimaniyar2003@gmail.com",
};
