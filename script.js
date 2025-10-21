// ==========================
// TRAINERS DATA
// ==========================
const trainers = [
  {
    name: "Ahmed Samir",
    experience: 8,
    clientsWorked: 250,
    clientsSucceeded: 200,
    img: "https://images.pexels.com/photos/3912516/pexels-photo-3912516.jpeg"
  },
  {
    name: "Mohamed Ali",
    experience: 6,
    clientsWorked: 180,
    clientsSucceeded: 150,
    img: "https://images.pexels.com/photos/17898148/pexels-photo-17898148.jpeg"
  },
  {
    name: "Yasser Aly",
    experience: 5,
    clientsWorked: 200,
    clientsSucceeded: 170,
    img: "https://images.pexels.com/photos/9283300/pexels-photo-9283300.jpeg"
  },
  {
    name: "Laila Tarek",
    experience: 7,
    clientsWorked: 220,
    clientsSucceeded: 190,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Omar Khaled",
    experience: 10,
    clientsWorked: 300,
    clientsSucceeded: 260,
    img: "https://images.pexels.com/photos/3912953/pexels-photo-3912953.jpeg"
  }
];

let currentTrainer = 0;
const trainerCard = document.getElementById("trainerCard");

// Render Trainer
function renderTrainer() {
  const t = trainers[currentTrainer];
  trainerCard.classList.add("fade");

  setTimeout(() => {
    trainerCard.innerHTML = `
      <img src="${t.img}" alt="${t.name}">
      <h4 class="fw-bold">${t.name}</h4>
      <p> Experience: <strong>${t.experience} years</strong></p>
      <p> Clients Worked With: <strong>${t.clientsWorked}</strong></p>
      <p> Successful Transformations: <strong>${t.clientsSucceeded}</strong></p>
    `;
    trainerCard.classList.remove("fade");
  }, 500);
}

// Auto Switch Trainers
renderTrainer();
setInterval(() => {
  currentTrainer = (currentTrainer + 1) % trainers.length;
  renderTrainer();
}, 7000);


// ==========================
// PLAN DATA (Updated Types)
// ==========================
const plans = [
  { title: "Weight Loss Program", price: "EGP/850 / month", description: "Special workouts & nutrition plans to help you lose weight effectively." },
  { title: "Muscle Building Program", price: "EGP/1000 / month", description: "Focused on strength & hypertrophy for maximum muscle growth." },
  { title: "General Fitness Program", price: "EGP/500/ month", description: "Perfect for staying active, improving endurance, and overall health." },
  { title: "Ladies Program", price: "EGP/1000 / month", description: "Customized workouts designed for women’s fitness goals." },
  { title: "Youth Program", price: "EGP/600 / month", description: "Fun and safe workouts tailored for teens and young adults." },
  { title: "Pro Athlete Program", price: "EGP/2500 / month", description: "Intense, professional-level training for serious athletes (Recommended for athletes)." },
  { title: "Nutrition + Training Plan", price: "EGP/2000 / month", description: "Get a personal meal plan with training for faster results." },
  { title: "VIP Personal Program", price: "EGP/3000 / month", description: "1-on-1 coaching, private sessions, and exclusive facilities." },
  { title: "Annual All-Inclusive", price: "EGP/7000/ year", description: "Unlimited access + save 20% with our annual plan." },
  { title: "Basic Physiotherapy Plan", price: "EGP/900/ month", description: "Includes consultation and 1 weekly session." },
  { title: "Advanced Physiotherapy Plan", price: "EGP/1500 / month", description: "Covers personalized recovery programs and 2 weekly sessions." },
  { title: "Premium Physiotherapy Plan", price: "EGP/2000 / month", description: "Full rehabilitation support with unlimited sessions." },
];

// Sort by price ascending
plans.sort((a, b) => {
  const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
  const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
  return priceA - priceB;
});

let currentIndex = 0;
const planContainer = document.getElementById("planContainer");
const plansPerView = 3;

// Render Function
function renderPlans() {
  planContainer.innerHTML = "";

  for (let i = 0; i < plansPerView; i++) {
    const planIndex = (currentIndex + i) % plans.length;
    const plan = plans[planIndex];

    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div id="transition" class="plan-item p-4 shadow h-100">
        <h2 class="fw-bold mb-2">${plan.title}</h2>
        <h4 class="pricePlan mb-3">${plan.price}</h4>
        <p class="text-white flex-grow-1">${plan.description}</p>
        <a href="plans.html?id=${planIndex}" class="btn btn-warning mt-3 btn-gold fw-bold">Join Now</a>
      </div>
    `;
    planContainer.appendChild(col);
  }
}

// Initial render
renderPlans();


// Event Listeners
document.getElementById("prevPlan").addEventListener("click", () => {
  currentIndex = (currentIndex - plansPerView + plans.length) % plans.length;
  renderPlans();
});

document.getElementById("nextPlan").addEventListener("click", () => {
  currentIndex = (currentIndex + plansPerView) % plans.length;
  renderPlans();
});

// Initial Render
renderPlans();

// Counter Animation
  const counters = document.querySelectorAll('.counter');
  const speed = 50;
  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const updateCount = () => {
        const current = +counter.innerText;
        const increment = Math.ceil(target/speed);

        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  let started = false;
  window.addEventListener('scroll', () => {
    const section = document.getElementById('achievements');
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;
    if (sectionTop < triggerPoint && !started) {
      animateCounters();
      started = true;
    }
  });
  const sliderImages = [
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=6"
];

let currentImageIndex = 0;
const sliderImage = document.getElementById("sliderImage");

function changeImage() {
  // Fade out
  sliderImage.style.opacity = 0;

  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    sliderImage.src = sliderImages[currentImageIndex];

    // Fade in
    sliderImage.style.opacity = 1;
  }, 1000); // نفس زمن transition
}

// يغير الصورة كل 5 ثواني
setInterval(changeImage, 5000);

    // Hide The Button
     const backToTopBtn = document.getElementById("backToTopBtn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) { 
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
  // --- ضع هنا روابط الصور (استبدلها بروابطك المحلية أو مستضافة) ---
const galleryImages = [
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=6"
];

let galleryIndex = 0;
const galleryImg = document.getElementById("galleryImage");

function changeGalleryImage() {
  galleryImg.src = galleryImages[galleryIndex];
  galleryIndex = (galleryIndex + 1) % galleryImages.length;
}
changeGalleryImage();
setInterval(changeGalleryImage, 5000);
function changeImage() {
  // Fade out
  sliderImage.style.opacity = 0;

  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    sliderImage.src = sliderImages[currentImageIndex];

    // Fade in
    sliderImage.style.opacity = 1;
  }, 1000); // نفس زمن transition
}

// يغير الصورة كل 5 ثواني
setInterval(changeImage, 5000);

});