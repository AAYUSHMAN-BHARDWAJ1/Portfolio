// paralax effect

<script>
  // Parallax effect for background video
  const video = document.querySelector('.parallax-video');

  if (video) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      video.style.transform = `translateY(${scrollY * 0.3}px)`;
    });
  }
</script>


// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-progress');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const fullWidth = target.getAttribute('data-width'); // 👈 Read target percentage
      target.style.width = '0%'; // Start from 0
      setTimeout(() => {
        target.style.width = fullWidth; // Animate to target width
      }, 100);
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% visible

// Attach observer to all bars
skillBars.forEach(bar => {
  observer.observe(bar);
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


<script>
  const form = document.querySelector('.contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.textContent = "Thank you! Your message has been sent.";
      form.reset();
    } else {
      status.textContent = "Oops! Something went wrong.";
    }
  });
</script>

