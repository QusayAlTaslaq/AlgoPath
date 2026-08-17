export default function TopicCard({ topic, completed, onToggle }) {
  return (
    <article className={completed ? "topic-card completed" : "topic-card"}>
      <div className="card-top">
        <span className={`difficulty ${topic.difficulty}`}>
          {topic.difficulty}
        </span>
        <span className="rating">{topic.rating}</span>
      </div>

      <h3>{topic.title}</h3>
      <p>{topic.description}</p>

      <div className="card-bottom">
        <span className="practice-goal">
          Goal: {topic.practiceGoal} problems
        </span>
        <button
          className="complete-button"
          type="button"
          aria-pressed={completed}
          aria-label={`${completed ? "Mark as not completed" : "Mark as completed"}: ${topic.title}`}
          onClick={() => onToggle(topic.id)}
        >
          {completed ? "Completed ✓" : "Mark complete"}
        </button>
      </div>
    </article>
  );
}
