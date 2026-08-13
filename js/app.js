import { topics } from "./data.js";
import "./components.js";

const storageKey = "algopath-completed-topics";

const topicGrid = document.querySelector("#topic-grid");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#topic-search");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const progressPanel = document.querySelector("progress-panel");
const completedCount = document.querySelector("#completed-count");
const continueButton = document.querySelector("#continue-button");
const dialog = document.querySelector("#topic-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogClose = document.querySelector("#dialog-close");
const toast = document.querySelector("#toast");
const menuButton = document.querySelector("#menu-button");
const siteNav = document.querySelector("#site-nav");

let activeFilter = "all";
let searchTerm = "";
let completed = readProgress();
let toastTimer;

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!Array.isArray(saved)) return new Set();

    const validIds = new Set(topics.map((topic) => topic.id));
    return new Set(saved.filter((id) => validIds.has(id)));
  } catch {
    return new Set();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify([...completed]));
  } catch {
    showToast("Progress could not be saved in this browser.");
  }
}

function getTopic(id) {
  return topics.find((topic) => topic.id === id);
}

function getVisibleTopics() {
  return topics.filter((topic) => {
    const matchesFilter = activeFilter === "all" || topic.difficulty === activeFilter;
    const searchableText = `${topic.title} ${topic.description} ${topic.levelName}`.toLowerCase();
    const matchesSearch = searchableText.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });
}

function renderTopics() {
  const visibleTopics = getVisibleTopics();
  topicGrid.replaceChildren();

  visibleTopics.forEach((topic) => {
    const card = document.createElement("topic-card");
    topicGrid.append(card);
    card.data = topic;
    card.completed = completed.has(topic.id);
  });

  emptyState.hidden = visibleTopics.length > 0;
}

function renderProgress() {
  completedCount.textContent = completed.size;
  progressPanel.data = {
    topics,
    completed: [...completed]
  };
}

function renderAll() {
  renderTopics();
  renderProgress();
}

function toggleTopic(id) {
  const topic = getTopic(id);
  if (!topic) return;

  if (completed.has(id)) {
    completed.delete(id);
    showToast(`${topic.title} moved back to your learning list.`);
  } else {
    completed.add(id);
    showToast(`${topic.title} completed. Nice work!`);
  }

  saveProgress();
  renderAll();

  if (dialog.open && dialog.dataset.topicId === id) {
    openTopic(id);
  }
}

function resetProgress() {
  const shouldReset = window.confirm("Reset all completed topics? This cannot be undone.");
  if (!shouldReset) return;

  completed.clear();
  saveProgress();
  renderAll();
  showToast("Your progress has been reset.");
}

function openTopic(id) {
  const topic = getTopic(id);
  if (!topic) return;

  const isCompleted = completed.has(id);
  dialog.dataset.topicId = id;
  dialogContent.innerHTML = `
    <span class="dialog-label">Level ${topic.level} · ${topic.levelName}</span>
    <div class="dialog-title-row">
      <h2 id="dialog-title">${topic.title}</h2>
    </div>
    <p class="dialog-description">${topic.why}</p>

    <div class="dialog-info-grid">
      <div>
        <small>Difficulty</small>
        <strong>${capitalize(topic.difficulty)}</strong>
      </div>
      <div>
        <small>Suggested rating</small>
        <strong>${topic.rating}</strong>
      </div>
      <div>
        <small>Practice goal</small>
        <strong>${topic.practiceCount} problems</strong>
      </div>
    </div>

    <div class="learn-block">
      <h3>What to learn</h3>
      <ul>${topic.learn.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div class="dialog-actions">
      <button class="button button-primary" id="dialog-complete-button" type="button">
        ${isCompleted ? "Mark as not completed" : "Mark topic as completed"}
      </button>
      <a class="button button-secondary" href="https://codeforces.com/problemset" target="_blank" rel="noreferrer">
        Find practice problems ↗
      </a>
    </div>
  `;

  dialogContent.querySelector("#dialog-complete-button").addEventListener("click", () => {
    toggleTopic(id);
  });

  if (!dialog.open) dialog.showModal();
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2800);
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function openNextTopic() {
  const nextTopic = topics.find((topic) => !completed.has(topic.id));
  openTopic(nextTopic ? nextTopic.id : topics[0].id);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    renderTopics();
  });
});

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLowerCase();
  renderTopics();
});

document.addEventListener("topic-toggle", (event) => toggleTopic(event.detail.id));
document.addEventListener("topic-open", (event) => openTopic(event.detail.id));
document.addEventListener("progress-reset", resetProgress);

continueButton.addEventListener("click", openNextTopic);
dialogClose.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

menuButton.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    siteNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

renderAll();
