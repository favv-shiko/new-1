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
// حفظ الوضع الحالي في localStorage
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// تعيين السمة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme') || 'light';
  if (theme === 'dark') {
      document.body.classList.add('dark-theme');
  }
});
AOS.init();
const toggleTheme = () => {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
};

document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
      document.body.classList.add('dark-theme');
  }
});
AOS.init({
  duration: 1200,
});
function navigateTo(page) {
  const fadeElement = document.querySelector('.fade');
  fadeElement.classList.remove('show');
  setTimeout(() => {
      window.location.href = page;
  }, 500);
}
gsap.from(".element", { duration: 1, y: -100, opacity: 0, stagger: 0.2 });
function initMap() {
  var location = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: location
  });
  var marker = new google.maps.Marker({
      position: location,
      map: map
  });
}
<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>
 particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});
window.onscroll = function() {
  const navbar = document.querySelector('.navbar');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
};
Swal.fire({
  title: 'مرحبًا بك في موقعنا!',
  text: 'استمتع بتجربتك!',
  icon: 'success',
  confirmButtonText: 'شكرًا!'
});
<svg width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="#f12711" />
</svg>
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
// 6. مؤثرات تصاعدية عند التحميل
window.onload = function() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
      el.classList.add('visible');
  });
};
// 8. صوتيات تفاعلية
const button = document.getElementById('sound-button');
button.addEventListener('click', () => {
    const audio = new Audio('path/to/sound.mp3');
    audio.play();
});
// 9. زخارف متحركة في الخلفية
function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  document.body.appendChild(bubble);
}
setInterval(createBubble, 1000);
// 16. إضافة فقاعات تتحرك
function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  document.body.appendChild(bubble);
  setTimeout(() => {
      bubble.remove();
  }, 3000);
}
setInterval(createBubble, 1000);
// 17. شجرة تتفتح
const tree = document.getElementById('tree');
tree.classList.add('bloom');
// 19. عرض الرسائل العائمة
function showMessage(message) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'floating-message';
  msgDiv.innerText = message;
  document.body.appendChild(msgDiv);
  setTimeout(() => {
      msgDiv.remove();
  }, 3000);
}
// 20. خلفية تتفاعل مع الماوس
document.addEventListener('mousemove', (e) => {
  const bg = document.getElementById('background');
  bg.style.transform = `translate(${e.clientX / 50}px, ${e.clientY / 50}px)`;
});
// 21. عناصر تفاعلية متحركة
const interactiveElement = document.getElementById('interactive');
interactiveElement.addEventListener('mouseover', () => {
    interactiveElement.classList.add('animate');
});
interactiveElement.addEventListener('mouseout', () => {
    interactiveElement.classList.remove('animate');
});
// 22. تغيير حجم النصوص بشكل ديناميكي
const textElement = document.getElementById('text');
textElement.addEventListener('click', () => {
    textElement.style.fontSize = '2em';
});
// 23. إشعارات تفاعلية
function showAlert(message) {
  alert(message);
}
// 24. تأثيرات السقوط
const fallingElement = document.getElementById('falling');
fallingElement.style.animation = 'fall 2s forwards';
// 25. تأثيرات اهتزاز عند الخطأ
const errorInput = document.getElementById('error-input');
errorInput.classList.add('shake-effect');
// 29. إضافة شخصيات متحركة تفاعل مع المحتوى
const character = document.getElementById('character');
character.addEventListener('click', () => {
    character.classList.add('wave-animation');
});
// 31. تفعيل وضع مظلم مخصص
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
// 37. تأثيرات تحريك عند التحميل
window.onload = () => {
  const elements = document.querySelectorAll('.animate-on-load');
  elements.forEach((el) => {
      el.classList.add('animate');
  });
};
// 38. عرض عداد الزوار
let visitorCount = 0; // يجب أن يتم تحديثه من الخادم
document.getElementById('visitorCount').innerText = `عدد الزوار: ${visitorCount}`;
// 40. إضافة شريط تقدم
const progressBar = document.getElementById('progressBar');
let progress = 0;
setInterval(() => {
    if (progress < 100) {
        progress += 10; // زيادة القيمة
        progressBar.value = progress;
    }
}, 1000);
// 51. خلفية متغيرة عند الضغط
document.body.addEventListener('click', () => {
  document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});
// 54. تأثيرات تحريك العناصر على الصفحة
const moveElement = document.getElementById('move-element');
moveElement.style.transform = 'translateY(50px)';
// 60. عناصر تحريك فورية
document.querySelectorAll('.animate-on-scroll').forEach(element => {
  element.classList.add('fade-in');
});
// 71. تأثيرات التلاشي التلقائي
setTimeout(() => {
  const fadeElement = document.getElementById('fade');
  fadeElement.classList.add('fade-out');
}, 2000);
// 77. تأثيرات الألوان المتغيرة
document.querySelectorAll('.color-change').forEach(element => {
  element.addEventListener('click', () => {
      element.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  });
});
