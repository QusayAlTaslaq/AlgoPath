function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

class TopicCard extends HTMLElement {
  constructor() {
    super();
    this.topicData = null;
    this.isCompleted = false;
  }

  set data(value) {
    this.topicData = value;
    this.render();
  }

  set completed(value) {
    this.isCompleted = Boolean(value);
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  emit(name) {
    this.dispatchEvent(
      new CustomEvent(name, {
        bubbles: true,
        composed: true,
        detail: { id: this.topicData.id }
      })
    );
  }

  render() {
    if (!this.topicData || !this.isConnected) return;

    const topic = this.topicData;
    const completeText = this.isCompleted ? "Mark as not completed" : "Mark as completed";

    this.innerHTML = `
      <article class="topic-card ${this.isCompleted ? "is-complete" : ""}" data-number="${String(topic.level).padStart(2, "0")}">
        <div class="topic-card-top">
          <span class="topic-level">LEVEL ${escapeHTML(topic.level)} · ${escapeHTML(topic.levelName)}</span>
          <button
            class="complete-button"
            type="button"
            aria-label="${completeText}: ${escapeHTML(topic.title)}"
            aria-pressed="${this.isCompleted}"
            title="${completeText}"
          >✓</button>
        </div>

        <span class="difficulty-tag ${escapeHTML(topic.difficulty)}">${escapeHTML(topic.difficulty)}</span>
        <h3>${escapeHTML(topic.title)}</h3>
        <p>${escapeHTML(topic.description)}</p>

        <div class="topic-meta">
          <span>${escapeHTML(topic.rating)}</span>
          <span>${escapeHTML(topic.practiceCount)} problems</span>
        </div>

        <div class="topic-card-actions">
          <button class="explore-button" type="button">Explore topic →</button>
        </div>
      </article>
    `;

    this.querySelector(".complete-button").addEventListener("click", () => {
      this.emit("topic-toggle");
    });

    this.querySelector(".explore-button").addEventListener("click", () => {
      this.emit("topic-open");
    });
  }
}

class ProgressPanel extends HTMLElement {
  constructor() {
    super();
    this.topics = [];
    this.completedIds = new Set();
  }

  set data(value) {
    this.topics = value.topics || [];
    this.completedIds = new Set(value.completed || []);
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  emit(name, id = null) {
    this.dispatchEvent(
      new CustomEvent(name, {
        bubbles: true,
        composed: true,
        detail: id ? { id } : {}
      })
    );
  }

  render() {
    if (!this.isConnected || this.topics.length === 0) return;

    const completed = this.completedIds.size;
    const total = this.topics.length;
    const percent = Math.round((completed / total) * 100);
    const degrees = Math.round((completed / total) * 360);

    let message = "Start with Arrays and build your first streak.";
    if (completed > 0 && completed < total / 2) {
      message = "Good start. Keep the next session focused on one topic.";
    } else if (completed >= total / 2 && completed < total) {
      message = "You are past the halfway point. The harder patterns are next.";
    } else if (completed === total) {
      message = "Roadmap complete. Keep improving by solving mixed problems.";
    }

    const topicItems = this.topics
      .map((topic) => {
        const done = this.completedIds.has(topic.id);
        return `
          <div class="progress-item ${done ? "is-complete" : ""}">
            <button
              class="progress-item-check"
              type="button"
              data-toggle="${escapeHTML(topic.id)}"
              aria-label="${done ? "Mark as not completed" : "Mark as completed"}: ${escapeHTML(topic.title)}"
              aria-pressed="${done}"
            >✓</button>
            <strong>${escapeHTML(topic.title)}</strong>
            <button type="button" data-open="${escapeHTML(topic.id)}">View</button>
          </div>
        `;
      })
      .join("");

    this.innerHTML = `
      <div class="progress-shell">
        <article class="progress-summary">
          <div class="progress-ring" style="--progress: ${degrees}deg" role="img" aria-label="${percent}% complete">
            <div class="progress-ring-text">
              <strong>${percent}%</strong>
              <span>${completed} of ${total} topics</span>
            </div>
          </div>
          <h3>${completed === total ? "Roadmap complete" : "Keep moving forward"}</h3>
          <p>${message}</p>
          <button class="reset-button" type="button" ${completed === 0 ? "disabled" : ""}>Reset progress</button>
        </article>

        <article class="progress-list-card">
          <div class="progress-list-head">
            <h3>Topic checklist</h3>
            <span>${completed} completed</span>
          </div>
          <div class="progress-list">${topicItems}</div>
        </article>
      </div>
    `;

    this.querySelectorAll("[data-toggle]").forEach((button) => {
      button.addEventListener("click", () => this.emit("topic-toggle", button.dataset.toggle));
    });

    this.querySelectorAll("[data-open]").forEach((button) => {
      button.addEventListener("click", () => this.emit("topic-open", button.dataset.open));
    });

    this.querySelector(".reset-button").addEventListener("click", () => {
      if (completed > 0) this.emit("progress-reset");
    });
  }
}

if (!customElements.get("topic-card")) {
  customElements.define("topic-card", TopicCard);
}

if (!customElements.get("progress-panel")) {
  customElements.define("progress-panel", ProgressPanel);
}
