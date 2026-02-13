// ===== LOGIN MODAL =====
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginSubmit = document.getElementById('loginSubmit');

// Open modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    loginModal.classList.add('fade-in');
});

// Close modal
closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if(e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Login action
loginSubmit.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username && password) {
        alert(`Welcome, ${username}!`);
        loginModal.style.display = 'none';
    } else {
        alert('Please enter username and password!');
    }
});

// ===== ACTIVE NAV LINK ON SCROLL (optional) =====
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});
