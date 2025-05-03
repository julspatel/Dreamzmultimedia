var navLinks= document.getElementById("navLinks");

function showmenu(){
    navLinks.style.right="0";
}   
function hidemenu(){
    navLinks.style.right="-200px";
}

// document.addEventListener('contextmenu', event => event.preventDefault());
const reviews = [
    { name: "Prakash Umardiya", img: "image/student1.jpg", text: "Amazing institute! Highly recommended!", rating: 5 },
    { name: "Zankhana Mistri", img: "image/student2.jpg", text: "Great environment and support!", rating: 5 },
    { name: "Rajvi Udhan", img: "image/student3.jpg", text: "Helped me get a great job!", rating: 5 },
    { name: "Nivedita Gajipara", img: "image/student4.jpg", text: "Fantastic learning experience!", rating: 5 },
    { name: "Rushil Patel", img: "image/student5.jpg", text: "Super friendly teachers!", rating: 5 },
    { name: "Shruti Vaghasiya ", img: "image/student6.jpg", text: "Loved the real-world projects!", rating: 5 },
    { name: "Prachi Satani", img: "image/student7.jpg", text: "Built my portfolio here!", rating: 5 },
    { name: "Mazz Sindha", img: "image/student8.jpg", text: "Fun and engaging environment!", rating: 5 },
    { name: "Foram Vasoya", img: "image/student9.jpg", text: "Perfect for career growth!", rating: 5 },
    { name: "Veena Prajapati", img: "image/student10.jpg", text: "Best teachers ever!", rating: 5 },
    { name: "Uzair Aagwan", img: "image/student11.jpg", text: "Great practical exposure!", rating: 5 },
    { name: "Janika Chudhari", img: "image/student12.jpg", text: "Highly recommend this place!", rating: 5 },
    { name: "Kinjal Khodifad", img: "image/student13.jpg", text: "Helped me improve a lot!", rating: 5 },
    { name: "Sandip Dedaniya", img: "image/student14.jpg", text: "Amazing experience!", rating: 5 },
    { name: "Vidashi Patel", img: "image/student15.jpg", text: "Best institute ever!", rating: 5 }
];

let currentPage = 1;
const reviewsPerPage = 3;

function displayReviews() {
    const container = document.getElementById("review-container");
    container.innerHTML = ""; 
    const start = (currentPage - 1) * reviewsPerPage;
    const end = start + reviewsPerPage;
    const currentReviews = reviews.slice(start, end);

    currentReviews.forEach(review => {
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");

        reviewCard.innerHTML = `
            <img src="${review.img}" class="review-img" alt="${review.name}">
            <h3>${review.name}</h3>
            <p>"${review.text}"</p>
            <div class="stars">${"⭐".repeat(review.rating)}</div>
        `;
        container.appendChild(reviewCard);
    });

    document.getElementById("page-number").innerText = currentPage;
}

function changePage(direction) {
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    currentPage += direction;

    if (currentPage < 1) currentPage = totalPages;
    if (currentPage > totalPages) currentPage = 1;

    displayReviews();
}

document.addEventListener("DOMContentLoaded", displayReviews);

const courseData = {
    fullstack: {
      title: "Full Stack Development",
      languages: "HTML, CSS, JavaScript, React, Node.js, MongoDB",
      duration: "18 Months",
      description: "Learn both front-end and back-end technologies. Build complete web applications from scratch with hands-on projects."
    },
    appdev: {
      title: "Application Development",
      languages: "Java, Kotlin, Flutter, Android Studio",
      duration: "12 Months",
      description: "Build mobile and desktop applications. Learn cross-platform development, database integration, and UI design."
    },
    uiux: {
      title: "UI/UX Design",
      languages: "Figma, Adobe XD, Photoshop",
      duration: "6 Months",
      description: "Design stunning user interfaces and intuitive user experiences. Learn wireframing, prototyping, and user testing."
    },
    graphic: {
      title: "Graphic Design",
      languages: "Photoshop, Illustrator, CorelDRAW",
      duration: "6 Months",
      description: "Master design principles, branding, logo creation, brochure, and social media post designing with industry tools."
    },
    digital: {
      title: "Digital Marketing",
      languages: "Google Ads, SEO Tools, Canva",
      duration: "3 Months",
      description: "Learn SEO, SEM, SMM, email marketing, content strategy, and campaign analytics to grow businesses online."
    },
    ccc: {
      title: "CCC Course",
      languages: "MS Office, Internet Basics, Windows OS",
      duration: "3 Months",
      description: "Basic computer training for beginners. Includes file management, Word, Excel, PowerPoint, and web browsing."
    },
    spoken: {
      title: "Spoken English",
      languages: "English Communication",
      duration: "2 Months",
      description: "Enhance your spoken English, fluency, pronunciation, and public speaking with regular practice sessions."
    },
    web: {
      title: "Web Designing",
      languages: "HTML, CSS, JavaScript, Bootstrap",
      duration: "12 Months",
      description: "Learn to create responsive and beautiful websites. Includes HTML structuring, CSS styling, and layout techniques."
    },
    python: {
      title: "Python Programming",
      languages: "Python, Flask/Django",
      duration: "3 Months",
      description: "Start from basics and go advanced in Python. Covers syntax, OOP, file handling, and web development."
    },
    cyber: {
      title: "Cyber Security",
      languages: "Wireshark, Kali Linux, Python",
      duration: "5 Months",
      description: "Learn ethical hacking, network security, phishing, firewall, and protecting systems from cyber attacks."
    }
  };

  function showCourseDetail(courseKey) {
    const course = courseData[courseKey];
    const box = document.getElementById("courseDetailBox");
    const section = document.getElementById("courseDetailSection");

    box.innerHTML = `
      <h2>${course.title}</h2>
      <div class="detail-row"><strong>Languages/Tools:</strong> ${course.languages}</div>
      <div class="detail-row"><strong>Duration:</strong> ${course.duration}</div>
      <div class="detail-row"><strong>Description:</strong> <p>${course.description}</p></div>
    `;
    section.style.display = "block";
    section.scrollIntoView({ behavior: "smooth" });
  }
  