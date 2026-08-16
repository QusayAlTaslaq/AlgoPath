import { topics } from "./data.js";
import "./components.js";

const storageKey = "algopath-progress";

const topicGrid = document.querySelector("#topic-grid");
const searchInput = document.querySelector("#topic-search");
const filterButtons = document.querySelectorAll(".filter-button");
const resultsLine = document.querySelector("#results-line");
const emptyMessage = document.querySelector("#empty-message");
const progressCount = document.querySelector("#progress-count");
const progressMessage = document.querySelector("#progress-message");
const progressTrack = document.querySelector("#progress-track");
const progressBar = document.querySelector("#progress-bar");
const resetButton = document.querySelector("#reset-button");

let selectedDifficulty = "all";
let searchText = "";
let completedTopics = loadProgress();

function loadProgress() {
  try {
    const savedProgress = JSON.parse(localStorage.getItem(storageKey));

    if (!Array.isArray(savedProgress)) {
      return new Set();
    }

    const validTopicIds = topics.map((topic) => topic.id);
    const validProgress = savedProgress.filter((id) => validTopicIds.includes(id));
    return new Set(validProgress);
  } catch (error) {
    return new Set();
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify([...completedTopics]));
}

function getVisibleTopics() {
  return topics.filter((topic) => {
    const matchesDifficulty =
      selectedDifficulty === "all" || topic.difficulty === selectedDifficulty;

    const topicText = (topic.title + " " + topic.description).toLowerCase();
    const matchesSearch = topicText.includes(searchText);

    return matchesDifficulty && matchesSearch;
  });
}

function renderTopics() {
  const visibleTopics = getVisibleTopics();
  topicGrid.replaceChildren();

  visibleTopics.forEach((topic) => {
    const card = document.createElement("topic-card");
    topicGrid.append(card);
    card.topic = topic;
    card.completed = completedTopics.has(topic.id);
  });

  const topicWord = visibleTopics.length === 1 ? "topic" : "topics";
  resultsLine.textContent = visibleTopics.length + " " + topicWord + " shown";
  emptyMessage.hidden = visibleTopics.length !== 0;
}

function renderProgress() {
  const completedCount = completedTopics.size;
  const totalTopics = topics.length;
  const percentage = Math.round((completedCount / totalTopics) * 100);

  progressCount.textContent =
    completedCount + " of " + totalTopics + " topics completed";
  progressBar.style.width = percentage + "%";
  progressTrack.setAttribute("aria-valuenow", percentage);
  resetButton.disabled = completedCount === 0;

  if (completedCount === 0) {
    progressMessage.textContent = "Start with one small topic today.";
  } else if (completedCount < totalTopics / 2) {
    progressMessage.textContent = "Good start. Keep the routine small and regular.";
  } else if (completedCount < totalTopics) {
    progressMessage.textContent = "More than halfway there. Review old mistakes too.";
  } else {
    progressMessage.textContent = "Roadmap complete. Now mix the topics in contests.";
  }
}

function renderPage() {
  renderTopics();
  renderProgress();
}

function toggleTopic(topicId) {
  if (completedTopics.has(topicId)) {
    completedTopics.delete(topicId);
  } else {
    completedTopics.add(topicId);
  }

  saveProgress();
  renderPage();
}

searchInput.addEventListener("input", () => {
  searchText = searchInput.value.trim().toLowerCase();
  renderTopics();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedDifficulty = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.classList.toggle("active", isSelected);
      filterButton.setAttribute("aria-pressed", isSelected);
    });

    renderTopics();
  });
});

document.addEventListener("topic-toggle", (event) => {
  toggleTopic(event.detail.id);
});

resetButton.addEventListener("click", () => {
  const shouldReset = window.confirm("Reset all completed topics?");

  if (shouldReset) {
    completedTopics.clear();
    saveProgress();
    renderPage();
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

renderPage();
