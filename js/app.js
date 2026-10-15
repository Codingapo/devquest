const challenges = window.DEVQUEST_CHALLENGES;

const STORAGE_KEY = "devquest-completed";
const FAVORITES_KEY = "devquest-favorites";
const grid = document.querySelector("#challenge-grid");
const count = document.querySelector("#challenge-count");
const completedCount = document.querySelector("#completed-count");
const favoritesCount = document.querySelector("#favorites-count");
const buttons = document.querySelectorAll(".filter");
const search = document.querySelector("#challenge-search");
const sort = document.querySelector("#challenge-sort");
const summary = document.querySelector("#results-summary");
const randomQuestButton = document.querySelector("#random-quest");
const progressPercent = document.querySelector("#progress-percent");
const progressCompleted = document.querySelector("#progress-completed");
const progressRemaining = document.querySelector("#progress-remaining");
const progressFill = document.querySelector("#progress-fill");
const progressTrack = document.querySelector(".progress-track");

let activeDifficulty = "All";
let searchTerm = "";
let sortMode = "default";
let completed = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
let favorites = new Set(JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]"));

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
}

function saveFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
}

function difficultyRank(level) {
  return { Beginner: 1, Intermediate: 2, Advanced: 3 }[level] || 99;
}

function getVisibleChallenges() {
  const normalized = searchTerm.trim().toLowerCase();

  const filtered = challenges.filter(challenge => {
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

  return [...filtered].sort((a, b) => {
    if (sortMode === "title-asc") return a.title.localeCompare(b.title);
    if (sortMode === "title-desc") return b.title.localeCompare(a.title);
    if (sortMode === "difficulty-asc") return difficultyRank(a.difficulty) - difficultyRank(b.difficulty);
    if (sortMode === "difficulty-desc") return difficultyRank(b.difficulty) - difficultyRank(a.difficulty);
    return 0;
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
      const isFavorite = favorites.has(challenge.id);

      return `
        <article class="card ${isDone ? "completed" : ""}">
          <div class="card-top">
            <span class="badge">${challenge.difficulty}</span>
            <span class="category">${challenge.category}</span>
            <button class="favorite-btn ${isFavorite ? "active" : ""}" data-favorite-id="${challenge.id}" aria-pressed="${isFavorite}" aria-label="${isFavorite ? "Remove from favorites" : "Add to favorites"}">
              ${isFavorite ? "★" : "☆"}
            </button>
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

  const completedTotal = completed.size;
  const remaining = Math.max(challenges.length - completedTotal, 0);
  const percentage = challenges.length ? Math.round((completedTotal / challenges.length) * 100) : 0;

  count.textContent = challenges.length;
  completedCount.textContent = completedTotal;
  favoritesCount.textContent = favorites.size;
  progressPercent.textContent = `${percentage}%`;
  progressCompleted.textContent = completedTotal;
  progressRemaining.textContent = remaining;
  progressFill.style.width = `${percentage}%`;
  progressTrack.setAttribute("aria-valuenow", String(percentage));
  summary.textContent = `${visible.length} of ${challenges.length} challenges shown · ${completedTotal} completed · ${favorites.size} favorites`;
}

grid.addEventListener("click", event => {
  const favoriteButton = event.target.closest(".favorite-btn");
  if (favoriteButton) {
    const id = favoriteButton.dataset.favoriteId;
    if (favorites.has(id)) favorites.delete(id);
    else favorites.add(id);
    saveFavorites();
    render();
    return;
  }

  const completeButton = event.target.closest(".complete-btn");
  if (!completeButton) return;

  const id = completeButton.dataset.id;
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

sort.addEventListener("change", event => {
  sortMode = event.target.value;
  render();
});

randomQuestButton.addEventListener("click", () => {
  const visible = getVisibleChallenges();
  const pool = visible.length ? visible : challenges;
  const selected = pool[Math.floor(Math.random() * pool.length)];
  window.location.href = `challenge.html?id=${selected.id}`;
});

render();