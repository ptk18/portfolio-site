import Project1 from "../../assets/checkers.png";
import Project2 from "../../assets/blackjack.png";
import Project3 from "../../assets/quiz_generator.png";
import Project4 from "../../assets/myfluffy.png";
import Project5 from "../../assets/safety_app.png";
import Project6 from "../../assets/maintenace_report.png";
import Project7 from "../../assets/music_streaming_app.png";
import Project8 from "../../assets/forum.png";
import Project9 from "../../assets/trex.png";
import Project10 from "../../assets/book_finder.png";
import Project11 from "../../assets/utycc_campus.png";
import Project12 from "../../assets/end_to_end.png";
import Project13 from "../../assets/portfolio_ver1.png";
import Project14 from "../../assets/book_recommendation_sys.jpg";

export const projectsData = [
    {
        id: 1,
        image: Project1,
        title: 'Checkers Game',
        category: 'AI',
        techStack : 'Python, Prolog, Mini-max, Alpha-beta',
        description: "This project is an AI-powered Checkers game that integrates a Python-based desktop interface with Prolog-driven gameplay logic. It features an intelligent AI opponent utilizing the Minimax algorithm with Alpha-Beta pruning for optimal decision-making and efficient performance. The project demonstrates the application of advanced AI techniques to create a challenging and interactive gaming experience.",
        githublink: 'https://github.com/ptk18/Checker',
    },
    {
        id: 2,
        image: Project2,
        title: 'Blackjack 21',
        category: 'AI',
        techStack : 'Python, Prolog, Mini-max, Alpha-beta',
        description: "This project is a desktop Blackjack 21 card game that combines a Python-based interface with Prolog-driven game logic. It incorporates realistic rules and strategies to deliver an engaging and immersive gameplay experience. The project highlights the seamless integration of programming and AI logic for interactive entertainment.",
        githublink: 'https://github.com/ptk18/Blackjack',
    },
    {
        id: 3,
        image: Project3,
        title: 'Quiz Generator',
        category: 'Web',
        techStack : 'Python, FastAPI, Sveltekit, MySQL, Docker',
        description: "This project is a multi-tier, Dockerized web application for dynamic quiz generation, built using SvelteKit, FastAPI, and MySQL. Integrated with Google Generative AI LLM, the app enables personalized quiz creation, offering users an engaging and scalable experience. It demonstrates the effective use of modern web technologies and AI for interactive learning solutions.",
        githublink: 'https://github.com/ptk18/Quiz_Generator',

    },
    {
        id: 4,
        image: Project4,
        title: 'Where Is My Fluffy',
        category: 'App',
        techStack : 'Flutter, Dart',
        description: "This project is a Flutter-based mobile application, Where Is My Fluffy, designed to assist in pet recovery. Built on a Microkernel architecture, it supports plugin-based services for payment and location features, ensuring modularity and flexibility. The app features a Flutter frontend, a FastAPI backend, and a MongoDB database for efficient data management, providing a reliable and user-friendly solution for pet owners.",
        githublink: 'https://github.com/ptk18/WhereIsMyFluffy',

    },
    {
        id: 5,
        image: Project5,
        title: 'AI Safety Assistant App',
        category: 'AI',
        techStack : 'OpenCV, YOLO, LLM, RAG',
        description: 'This project is an AI-powered safety assistant application designed to enhance occupational safety and reduce workplace accidents. It utilizes OpenCV and YOLO for object detection, and integrates Claude 3 Sonnet and amazon.titan-embed-text for generative AI capabilities. The application also incorporates a Retrieval-Augmented Generation (RAG) system to streamline document retrieval and language generation, ensuring accurate and context-aware responses for effective analysis of various safety scenarios.',
        githublink: 'https://github.com/ptk18/AI-Powered-Occupational-Safety-Assistant-App',

    },
    {
        id: 6,
        image: Project6,
        title: 'Maintenance Report System',
        category: 'Web',
        techStack : 'Python, Django, MySQL',
        description: 'This project is an issue reporting website developed using Python, Django, and JavaScript, serving over 100 users. It features real-time dashboards and data visualizations, which reduce manual reporting time by 40% and significantly improve issue resolution efficiency. The application enhances user experience by streamlining the reporting process and providing actionable insights.',
        githublink: 'https://github.com/ptk18/Maintenance-Report-System',

    },
    {
        id: 7,
        image: Project7,
        title: 'Music Streaming Service',
        category: 'App',
        techStack : 'Python, FastAPI, ZODB',
        description: 'This project is a music streaming app developed collaboratively with classmates, utilizing Python, the Qt Framework, and ZODB. The app offers a comprehensive understanding of both server-side web applications and client-side Python development. It features an intuitive user interface, providing users with a seamless and engaging music streaming experience.',
        githublink: 'https://github.com/ptk18/music-streaming-client',

    },
    {
        id: 8,
        image: Project8,
        title: 'Software Engineering Forum Website',
        category: 'Web',
        techStack : 'HTML, JavaScript, CSS',
        description: 'This project is a responsive forum website developed for the Software Engineering program, featuring a frontend built with HTML, CSS, and JavaScript. The backend is powered by Python and the FastAPI framework, enabling efficient CRUD operations. The website facilitates real-time discussions and user assistance through its interactive forum section, providing a platform for collaborative problem-solving and knowledge sharing.',
        githublink: 'https://github.com/ptk18/SE_kmitl',

    },
    {
        id: 9,
        image: Project9,
        title: 'T-Rex with ARM Assembly & C',
        category: 'App',
        techStack : 'C, Assembly, Raspberry PI',
        description: 'This project involves recreating the classic T-Rex game on a Raspberry Pi using the ARM ISA and C programming language. The game logic, including score counting and object collisions, is implemented in assembly language for optimal performance. A graphical interface is incorporated using the SDL C library, providing an efficient and immersive gaming experience on the Raspberry Pi platform.',
        githublink: 'https://github.com/ptk18/TRex_Dinosaur-Game',

    },
    {
        id: 10,
        image: Project10,
        title: 'Book Finder Application',
        category: 'App',
        techStack : 'C++, Qt, Google Book API',
        description: 'This project is a C++ application that leverages the Google Book API to provide access to a vast library of over a million books. The application features a user-friendly graphical interface designed with the Qt framework, enhancing the overall user experience by enabling easy navigation and efficient book search capabilities.',
        githublink: 'https://github.com/ptk18/BookFinderApp',

    },
    {
        id: 11,
        image: Project11,
        title: 'Campus Guide Website About UTYCC',
        category: 'Web',
        techStack : 'HTML, CSS, JavaScript, Bootstrap',
        description: 'This project involved collaborating with a diverse team of 8 students to create a responsive university campus guide website, built using HTML, CSS, JavaScript, and Bootstrap. The data-driven platform provides an intuitive user experience and helps streamline the workload for 5 faculties and 9 departments within the university, offering easy access to important campus information and resources.',
        githublink: 'https://github.com/ptk18/UTYCC-Campus-Website',

    },
    {
        id: 12,
        image: Project12,
        title: 'Message Encrytion & Decryption Tool',
        category: 'App',
        techStack : 'Python, Tkinker, Pybase64',
        description: 'This project is a Python application that utilizes Pybase64 for text encryption and decryption, featuring a Tkinter-based graphical user interface (GUI). In addition to encryption, the app supports several other modes, including converting binary to hexadecimal, hexadecimal to binary, and text to Morse code, providing a versatile tool for various encoding and decoding tasks.',
        githublink: 'https://github.com/ptk18/end_to_end_encryption',

    },
    {
        id: 13,
        image: Project13,
        title: 'Portfolio Website Version1',
        category: 'Web',
        techStack : 'HTML, CSS, JavaScript',
        description: 'This project is a responsive website created using HTML, CSS, and JavaScript, showcasing my expertise in front-end UI design with smooth and intuitive animations. The site provides comprehensive information about me, effectively highlighting my skills, projects, and achievements to create a professional online presence.',
        githublink: 'https://github.com/ptk18/Portfolio',

    },
    {
        id: 14,
        image: Project14,
        title: 'Book Recommendation System',
        category: 'DS',
        techStack : 'Naive Bayes, Classification, Confusion Matrix',
        description: 'This project’s objectives include exploring the relationship between demographic factors and reading preferences, assessing the effectiveness of demographic-based recommendations, and providing an alternative approach to conventional recommendation systems. We hope that our findings will not only support a more personalized reading experience but also contribute to advancing methods in recommendation systems by showcasing the potential of demographic-based personalization.',
        githublink: 'https://github.com/ptk18/Book-Recommendation-DS-Project-/tree/main',
    },


];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'app',
    },
    {
        name: 'AI',
    },
    {
        name: 'DS',
    },
];