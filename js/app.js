const challenges = window.DEVQUEST_CHALLENGES;

const STORAGE_KEY = "devquest-completed";
const grid = document.querySelector("#challenge-grid");
const count = document.querySelector("#challenge-count");
const completedCount = document.querySelector("#completed-count");
const buttons = document.querySelectorAll(".filter");
const search = document.querySelector("#challenge-search");
const summary = document.querySelector("#results-summary");

let activeDifficulty = "All";
let searchTerm = "";
let completed = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
}

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
    grid.innerHTML = visible.map(challenge => {
      const isDone = completed.has(challenge.id);
      return `
        <article class="card ${isDone ? "completed" : ""}">
          <div class="card-top">
            <span class="badge">${challenge.difficulty}</span>
            <span class="category">${challenge.category}</span>
          </div>
          <h3><a class="challenge-link" href="challenge.html?id=${challenge.id}">${challenge.title}</a></h3>
          <p>${challenge.description}</p>
          <div class="quest-actions">
            <footer>Language: ${challenge.language}</footer>
            <button class="complete-btn ${isDone ? "done" : ""}" data-id="${challenge.id}" aria-pressed="${isDone}">
              ${isDone ? "Completed ✓" : "Mark complete"}
            </button>
          </div>
        </article>
      `;
    }).join("");
  }

  count.textContent = challenges.length;
  completedCount.textContent = completed.size;
  summary.textContent = `${visible.length} of ${challenges.length} challenges shown · ${completed.size} completed`;
}

grid.addEventListener("click", event => {
  const button = event.target.closest(".complete-btn");
  if (!button) return;

  const id = button.dataset.id;
  if (completed.has(id)) completed.delete(id);
  else completed.add(id);

  saveProgress();
  render();
});

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