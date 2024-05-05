function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
        }
    });
}, { threshold: 0.5 });

const sectionElements = document.querySelectorAll('section');
sectionElements.forEach((el) => {
    el.classList.add('section-hidden');
    observer.observe(el);
});


// Function to handle arrow click and trigger animation
function handleArrowClick(targetSectionId) {
    const targetSection = document.getElementById(targetSectionId);
    targetSection.classList.remove('section-hidden');
    targetSection.classList.add('slide-in');
  }
  
  const arrowProfileToAbout = document.getElementById('arrow-profile-to-about');
  arrowProfileToAbout.addEventListener('click', function() {
    handleArrowClick('about');
  });
  
  const arrowAboutToSkills = document.getElementById('arrow-about-to-skills');
  arrowAboutToSkills.addEventListener('click', function() {
    handleArrowClick('skills');
  });
  
  const arrowSkillsToProjects = document.getElementById('arrow-skills-to-projects');
  arrowSkillsToProjects.addEventListener('click', function() {
    handleArrowClick('projects');
  });
  
  const arrowProjectsToContact = document.getElementById('arrow-projects-to-contact');
  arrowProjectsToContact.addEventListener('click', function() {
    handleArrowClick('contact');
  });


const texts = ['Emmanuel Ogunnowo', 'A Frontend Developer'];
let currentIndex = 0;

// Function to toggle between texts
function toggleText() {
  const profileTitle = document.getElementById('profile-title');
  profileTitle.textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
}

toggleText();

setInterval(toggleText, 3000);



  




