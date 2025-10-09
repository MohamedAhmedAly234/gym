// ==========================
// PLAN DATA (Updated Types)
// ==========================
const plans = [
  { title: "Weight Loss Program", price: "$10 / month", description: "Special workouts & nutrition plans to help you lose weight effectively." },
  { title: "Muscle Building Program", price: "$15 / month", description: "Focused on strength & hypertrophy for maximum muscle growth." },
  { title: "General Fitness Program", price: "$18 / month", description: "Perfect for staying active, improving endurance, and overall health." },
  { title: "Ladies Program", price: "$20 / month", description: "Customized workouts designed for women’s fitness goals." },
  { title: "Youth Program", price: "$5 / month", description: "Fun and safe workouts tailored for teens and young adults." },
  { title: "Pro Athlete Program", price: "$35 / month", description: "Intense, professional-level training for serious athletes." },
  { title: "Nutrition + Training Plan", price: "$45 / month", description: "Get a personal meal plan with training for faster results." },
  { title: "VIP Personal Program", price: "$60 / month", description: "1-on-1 coaching, private sessions, and exclusive facilities." },
  { title: "Annual All-Inclusive", price: "$250 / year", description: "Unlimited access + save 20% with our annual plan." }
];

plans.sort((a, b) => {
  const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
  const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
  return priceA - priceB;
});

plans.forEach(plan => {
  plan.priceEGP = plan.price * 50;
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
      <div class="p-4 bg-white rounded shadow h-100 d-flex flex-column">
        <h3 class="fw-bold mb-2">${plan.title}</h3>
        <h4 class="text-primary mb-3">${plan.price}</h4>
        <p class="text-muted flex-grow-1">${plan.description}</p>
        <button class="btn btn-primary mt-3">Join Now</button>
      </div>
    `;
    planContainer.appendChild(col);
  }
}

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