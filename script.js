let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("screenshot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 10000);
}

function changeSlide(n) {
    let slides = document.getElementsByClassName("screenshot");
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false
        },
        "size": {
          "value": 3,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          }
        }
      },
      "retina_detect": true
    });
    function addComment() {
      const username = document.getElementById("username").value;
      const comment = document.getElementById("comment").value;
      
      if (username && comment) {
          const commentDiv = document.createElement("div");
          commentDiv.classList.add("comment");
          commentDiv.innerHTML = `<strong>${username}</strong><p>${comment}</p>`;
          
          document.getElementById("comments").appendChild(commentDiv);
          
          // Clear the form
          document.getElementById("username").value = '';
          document.getElementById("comment").value = '';
      } else {
          alert("يرجى ملء جميع الحقول.");
      }
  }
  function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
const themeToggleButton = document.getElementById('themeToggle');

function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    // تغيير نص الزر حسب السمة
    if (document.body.classList.contains('dark-theme')) {
        themeToggleButton.innerText = 'الوضع الفاتح';
    } else {
        themeToggleButton.innerText = 'الوضع الداكن';
    }
}

// تعيين النص بناءً على السمة الافتراضية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('dark-theme')) {
        themeToggleButton.innerText = 'الوضع الفاتح';
    } else {
        themeToggleButton.innerText = 'الوضع الداكن';
    }
});
window.addEventListener('scroll', function() {
  const button = document.getElementById('themeToggle');
  const scrollY = window.scrollY;

  // إذا تم التمرير لأسفل، اجعل الزر يختفي، وإذا تم التمرير لأعلى، اجعله يظهر
  if (scrollY > 100) {
      button.style.transform = 'translateY(100px)'; // اخفاء الزر
  } else {
      button.style.transform = 'translateY(0)'; // إظهار الزر
  }
});
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
const themeButton = document.getElementById('theme-button');
const themeOptions = document.getElementById('theme-options');

themeButton.addEventListener('click', () => {
    themeOptions.style.display = themeOptions.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.theme').forEach(theme => {
    theme.addEventListener('click', () => {
        const selectedTheme = theme.getAttribute('data-theme');
        document.body.className = selectedTheme; // تغيير الثيم حسب اختيار المستخدم
        themeOptions.style.display = 'none'; // إخفاء الخيارات بعد الاختيار
    });
});
