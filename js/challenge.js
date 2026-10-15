const STORAGE_KEY = "devquest-completed";
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const challenge = window.DEVQUEST_CHALLENGES.find(item => item.id === id);
const container = document.querySelector("#challenge-detail");
let completed = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));

function render() {
  if (!challenge) {
    document.title = "Challenge not found · DevQuest";
    container.innerHTML = `
      <div class="empty-state">
        <strong>Challenge not found.</strong>
        <p>The quest you requested does not exist.</p>
        <a class="button secondary" href="index.html#challenges">Return to challenges</a>
      </div>
    `;
    return;
  }

  const isDone = completed.has(challenge.id);
  document.title = `${challenge.title} · DevQuest`;

  container.innerHTML = `
    <div class="detail-meta">
      <span class="badge">${challenge.difficulty}</span>
      <span class="category">${challenge.category}</span>
      <span class="detail-language">${challenge.language}</span>
    </div>

    <h1>${challenge.title}</h1>
    <p class="detail-lead">${challenge.description}</p>

    <section class="detail-panel">
      <h2>Problem</h2>
      <p>${challenge.problem}</p>
    </section>

    <section class="detail-grid">
      <div class="detail-panel">
        <h2>Example input</h2>
        <pre><code>${challenge.exampleInput}</code></pre>
      </div>
      <div class="detail-panel">
        <h2>Expected output</h2>
        <pre><code>${challenge.exampleOutput}</code></pre>
      </div>
    </section>

    <section class="detail-panel">
      <h2>Starter hint</h2>
      <p>${challenge.hint}</p>
    </section>

    <button id="detail-complete" class="complete-btn ${isDone ? "done" : ""}" aria-pressed="${isDone}">
      ${isDone ? "Completed ✓" : "Mark quest complete"}
    </button>
  `;

  document.querySelector("#detail-complete").addEventListener("click", () => {
    if (completed.has(challenge.id)) completed.delete(challenge.id);
    else completed.add(challenge.id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
    render();
  });
}

render();