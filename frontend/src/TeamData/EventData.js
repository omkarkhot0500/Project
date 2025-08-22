import dineshImg from "../assets/Event/dinesh.png";
import mindMazeImg from "../assets/Event/MindMaze.png";
import vapImg from "../assets/Event/VAP.png";
import venkatImg from "../assets/Event/venkataraman.png";
import sharadaImg from "../assets/Event/sharada.png";
import skillDevImg from "../assets/Event/skilldevelopment.png";
import powerBiImg from "../assets/Event/powerbi.png";
import shyam from "../assets/Event/shyam.png";
import image1 from "../assets/Event/skillsimage.jpg";

export const current = [];

export const previous = [
  {
    type: "Technical Talk",
    name: "Entrepreneurship with Mr. Dinesh M",
    date: "2024",
    desc: "A thought-provoking talk on entrepreneurship by Mr. Dinesh M, sharing his journey and insights on building a successful business.",
    img: dineshImg, // Use imported image
  },
  {
    type: "Technical Event",
    name: "MindMaze",
    date: "February 26, 2024",
    desc: "A technical event organized by the Anveshan Club featuring three dynamic rounds: Aptitude Round, Treasure Hunt, and Mystery Murder Puzzle.",
    img: mindMazeImg, // Use imported image
  },
  {
    type: "Value Added Program",
    name: "Generative AI and LLM",
    date: "April 26, 2024",
    desc: "A 4-day immersive program led by Vamshi covering CNNs, Autoencoders, and practical tools like LangChain and Gradio for building AI applications.",
    img: vapImg, // Use imported image
  },
  {
    type: "Value Added Program",
    name: "Full Stack Web Development",
    date: "June 24–28, 2024",
    desc: "A 5-day hands-on program led by Prof. Shyam Sundar Bhushan, covering front-end, back-end, databases, and deployment of full-stack apps.",
    img: shyam, // External URL works fine
  },
  {
    type: "Technical Talk",
    name: "Talk by Venkataraman Umakanth",
    date: "June 26, 2024",
    desc: "A session by Mr. Umakanth encouraging constructive communication and personal growth through meaningful questions.",
    img: venkatImg, // Use imported image
  },
  {
    type: "Technical Talk",
    name: "Web Technologies by Sharada Veeraraghavan",
    date: "June 28, 2024",
    desc: "Focused on emerging trends and benefits of web technologies, emphasizing continuous learning and industry readiness.",
    img: sharadaImg, // Use imported image
  },
  {
    type: "Technical Event",
    name: "Technical Maze",
    date: "September 27, 2024",
    desc: "An event featuring two engaging rounds that challenged students on problem-solving and technical skills.",
    img: image1, // External URL works fine
  },
  {
    type: "Skill Development Program",
    name: "AI & Image Segmentation",
    date: "January 9, 2025",
    desc: "A session led by Mr. Sateesh Kumar Ambesange, covering deep learning techniques like CNNs, U-Net, and Mask R-CNN with real-world applications.",
    img: skillDevImg, // Use imported image
  },
  {
    type: "Skill Development Program",
    name: "Data Visualization using Power BI",
    date: "February 5, 2025",
    desc: "Conducted by Mr. Mahadeva Prasad L, this session covered Power BI tools, data modeling with DAX, and integration with Python, R, and cloud platforms.",
    img: powerBiImg, // Use imported image
  },
];
