// Configuration file
// Personal information

export const PERSONAL_INFO = {
  name: 'Jacek Dlugosz',
  job: 'Embedded Software Engineer at Electric Boat.',
  bio: '',
}

// About section information
export const ABOUT_INFO = {
  skills: [
    'C/C++',
    'Python',
    'JavaScript/TypeScript',
    'React',
    'Embedded Systems',
    'Linux',
    'Git',
    'Virtual Machine Manager',
    'Java'
    // Add more skills as needed
  ],
  description: [
    'Hello! My name is Jacek. Since graduating from the University of Michigan in 2023, I\'ve been a software engineer at Electric Boat who works on embedded systems. I\'m just finishing up a personal project to help photographers have a place to show off their artwork and am brainstorming ideas for a new exciting project to build!',
    'Outside of work I love to stay active and be out in nature whether that be skiing, hiking, going to the gym, golfing, or playing soccer. When it\'s raining, you can find me playing videogames with friends.',
  ],
}

// Contact information
// Add your contact details here. Leave fields empty if you don't want to display them.
export const CONTACT_INFO = {
  email: '', // e.g., 'your.email@example.com'
  github: 'https://github.com/dlugoszj', // e.g., 'https://github.com/yourusername'
  linkedin: 'https://www.linkedin.com/in/jacek-dlugosz-171bbba9/', // e.g., 'https://linkedin.com/in/yourusername'
}

// Manual project list
// Add your projects here with custom descriptions
export const PROJECTS = [
  {
    name: 'Crank',
    description: 'A modular C++ library for creating and training neural networks. \
    This library achieved a 90% accuracy rate on predicting handwritten digits \
    from the MNIST data set.',
    url: 'https://github.com/dlugoszj/Crank',
    language: 'C++', // Optional: Primary language
    topics: ['Neural Networks', 'Machine Learning'], // Optional: Technologies/topics
  },
  {
    name: 'Photography Portfolio Gallery',
    description: 'A web application where a user can add, edit, and delete \
    albums and photos inside their portfolio.',
    url: 'https://github.com/dlugoszj/Photography-Portfolio-Gallery',
    language: 'TypeScript', // Optional: Primary language
    topics: ['TypeScript', 'Firebase', 'React'], // Optional: Technologies/topics
  },
  {
    name: 'NYUv2 Semantic Segmentation',
    description: 'A project to test the effects of adding depth information to the NYUv2 dataset images. \
    Two network models were tested, U-Net and E-Net.',
    url: 'https://github.com/dlugoszj/NYUv2-Semantic-Segmentation',
    language: 'Python', // Optional: Primary language
    topics: ['Semantic Segmentation', 'Machine Learning'], // Optional: Technologies/topics
  },
  // Add more projects as needed https://github.com/dlugoszj/chat-app
  {
    name: 'WebRTC Chat App',
    description: 'A WebRTC chat application to allow text and video communication between two users.',
    url: 'https://github.com/dlugoszj/chat-app',
    language: 'JavaScript', // Optional: Primary language
    topics: ['React', 'Node.js', "WebRTC"], // Optional: Technologies/topics
  },
]

