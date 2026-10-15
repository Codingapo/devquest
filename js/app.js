const challenges = [
  { title: "Reverse a String", difficulty: "Beginner", language: "Any", description: "Return a string with its characters in reverse order." },
  { title: "FizzBuzz+", difficulty: "Beginner", language: "Any", description: "Build a configurable version of the classic FizzBuzz problem." },
  { title: "Palindrome Checker", difficulty: "Beginner", language: "Any", description: "Detect palindromes while ignoring spaces and letter case." },
  { title: "Expense Summary", difficulty: "Intermediate", language: "JavaScript", description: "Summarise transactions by category and calculate totals." },
  { title: "Rate Limiter", difficulty: "Intermediate", language: "Any", description: "Design a simple fixed-window request rate limiter." },
  { title: "Path Finder", difficulty: "Advanced", language: "Any", description: "Find the shortest path through a weighted graph." }
];

const grid = document.querySelector("#challenge-grid");
const count = document.querySelector("#challenge-count");
const buttons = document.querySelectorAll(".filter");

function render(filter = "All") {
  const visible = filter === "All"
    ? challenges
    : challenges.filter(challenge => challenge.difficulty === filter);

  grid.innerHTML = visible.map(challenge => `
    <article class="card">
      <span class="badge">${challenge.difficulty}</span>
      <h3>${challenge.title}</h3>
      <p>${challenge.description}</p>
      <footer>Language: ${challenge.language}</footer>
    </article>
  `).join("");

  count.textContent = challenges.length;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    render(button.dataset.filter);
  });
});

render();