const challenges = [
  { title: "Reverse a String", difficulty: "Beginner", language: "Any", category: "Strings", description: "Return a string with its characters in reverse order." },
  { title: "FizzBuzz+", difficulty: "Beginner", language: "Any", category: "Logic", description: "Build a configurable version of the classic FizzBuzz problem." },
  { title: "Palindrome Checker", difficulty: "Beginner", language: "Any", category: "Strings", description: "Detect palindromes while ignoring spaces and letter case." },
  { title: "Expense Summary", difficulty: "Intermediate", language: "JavaScript", category: "Data", description: "Summarise transactions by category and calculate totals." },
  { title: "Rate Limiter", difficulty: "Intermediate", language: "Any", category: "Backend", description: "Design a simple fixed-window request rate limiter." },
  { title: "Path Finder", difficulty: "Advanced", language: "Any", category: "Algorithms", description: "Find the shortest path through a weighted graph." }
];

const grid = document.querySelector("#challenge-grid");
const count = document.querySelector("#challenge-count");
const buttons = document.querySelectorAll(".filter");
const search = document.querySelector("#challenge-search");
const summary = document.querySelector("#results-summary");

let activeDifficulty = "All";
let searchTerm = "";

function getVisibleChallenges() {
  const normalized = searchTerm.trim().toLowerCase();

  return challenges.filter(challenge => {
    const matchesDifficulty =
      activeDifficulty === "All" || challenge.difficulty === activeDifficulty;

    const haystack = [
      challenge.title,
      challenge.description,
      challenge.category,
      challenge.language,
      challenge.difficulty
    ].join(" ").toLowerCase();

    const matchesSearch = !normalized || haystack.includes(normalized);

    return matchesDifficulty && matchesSearch;
  });
}

function render() {
  const visible = getVisibleChallenges();

  if (!visible.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <strong>No quests found.</strong>
        <p>Try a different search term or difficulty level.</p>
      </div>
    `;
  } else {
    grid.innerHTML = visible.map(challenge => `
      <article class="card">
        <div class="card-top">
          <span class="badge">${challenge.difficulty}</span>
          <span class="category">${challenge.category}</span>
        </div>
        <h3>${challenge.title}</h3>
        <p>${challenge.description}</p>
        <footer>Language: ${challenge.language}</footer>
      </article>
    `).join("");
  }

  count.textContent = challenges.length;
  summary.textContent = `${visible.length} of ${challenges.length} challenges shown`;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    activeDifficulty = button.dataset.filter;
    render();
  });
});

search.addEventListener("input", event => {
  searchTerm = event.target.value;
  render();
});

render();