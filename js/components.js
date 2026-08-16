class TopicCard extends HTMLElement {
  constructor() {
    super();
    this.topicData = null;
    this.isCompleted = false;
  }

  set topic(value) {
    this.topicData = value;
    this.render();
  }

  set completed(value) {
    this.isCompleted = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.topicData || !this.isConnected) {
      return;
    }

    const topic = this.topicData;
    const cardClass = this.isCompleted ? "topic-card completed" : "topic-card";
    const buttonText = this.isCompleted ? "Completed ✓" : "Mark complete";

    this.innerHTML =
      '<article class="' +
      cardClass +
      '">' +
      '<div class="card-top">' +
      '<span class="difficulty ' +
      topic.difficulty +
      '">' +
      topic.difficulty +
      "</span>" +
      '<span class="rating">' +
      topic.rating +
      "</span>" +
      "</div>" +
      "<h3>" +
      topic.title +
      "</h3>" +
      "<p>" +
      topic.description +
      "</p>" +
      '<div class="card-bottom">' +
      '<span class="practice-goal">Goal: ' +
      topic.practiceGoal +
      " problems</span>" +
      '<button class="complete-button" type="button">' +
      buttonText +
      "</button>" +
      "</div>" +
      "</article>";

    this.querySelector(".complete-button").addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("topic-toggle", {
          bubbles: true,
          detail: { id: topic.id }
        })
      );
    });
  }
}

customElements.define("topic-card", TopicCard);
