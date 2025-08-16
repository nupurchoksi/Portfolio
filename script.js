document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    const main = document.querySelector('main');

    // About Me
    const homeContainer = document.createElement("div");
    homeContainer.innerHTML = `
        <div style="background-color: #26589aff; color: #f8f5f5ff; padding: 20px; border-radius: 10px; max-width: 500px; margin: 20px auto;">
            <h2>Home</h2>
            <p><strong>Name:</strong> Nupur Choksi</p>
            <p><strong>College :</strong> Dwarkadas J Sanghvi College of Engineering (2nd Year)</p>
            <p><strong>Interests:</strong> Web Development, Problem Solving</p>
            <p><strong>Career Goals:</strong> To become a skilled Full Stack Developer and create impactful, user-friendly models.</p>
        </div>
    `;
    homeContainer.style.display = "none";
    main.insertBefore(homeContainer, main.firstChild);

    // Soft Skills
    const skillsContainer = document.createElement("div");
    skillsContainer.innerHTML = `
        <div style="background-color: #26589aff; color: #f8f5f5ff; padding: 20px; border-radius: 10px; max-width: 500px; margin: 20px auto;">
            <h2>Non-Tech Skills</h2>
            <ul>
                <li>Creativity</li>
                <li>Problem-Solving</li>
                <li>Teamwork</li>
                <li>Time Management</li>
                <li>Adaptability</li>
            </ul>
        </div>
    `;
    skillsContainer.style.display = "none";
    main.insertBefore(skillsContainer, main.firstChild);

    // Education
    const educationContainer = document.createElement("div");
    educationContainer.innerHTML = `
        <div style="background-color: #26589aff; color: #f8f5f5ff; padding: 20px; border-radius: 10px; max-width: 500px; margin: 20px auto;">
            <h2>Education</h2>
            <p><strong>School:</strong> Kapol Vidyanidhi International School</p>
            <p><strong>Junior College:</strong> M.J. Junior College Of Science</p>
            <p><strong>Engineering College:</strong> Dwarkadas J. Sanghvi College of Engineering</p>
        </div>
    `;
    educationContainer.style.display = "none";
    main.insertBefore(educationContainer, main.firstChild);

    
    // Handle nav clicks
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const text = link.textContent.trim().toLowerCase();

            // Hide all sections first
            homeContainer.style.display = "none";
            skillsContainer.style.display = "none";
            educationContainer.style.display = "none";
            

            // Show selected
            if (text === "home") {
                homeContainer.style.display = "block";
            }
            else if (text === "skills") {
                skillsContainer.style.display = "block";
            }
            else if (text === "education") { 
                educationContainer.style.display = "block";
            }
        });
    });
});
// Scroll animation
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  faders.forEach(fader => {
    const rect = fader.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fader.classList.add('show');
    }
  });
});
