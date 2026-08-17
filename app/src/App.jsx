import { useEffect, useState } from "react";
import TopicCard from "./components/TopicCard.jsx";
import { topics } from "./data/topics.js";

const storageKey = "algopath-progress";
const filters = ["all", "beginner", "intermediate"];

function loadProgress() {
  try {
    const savedProgress = JSON.parse(localStorage.getItem(storageKey));

    if (!Array.isArray(savedProgress)) {
      return [];
    }

    const topicIds = topics.map((topic) => topic.id);
    return savedProgress.filter((id) => topicIds.includes(id));
  } catch {
    return [];
  }
}

function Header() {
  return (
    <header className="site-header">
      <div className="page-width header-row">
        <a className="logo" href="#top" aria-label="AlgoPath home">
          <span className="logo-box">AP</span>
          <span>
            <strong>AlgoPath</strong>
            <small>student roadmap</small>
          </span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#roadmap">Roadmap</a>
          <a href="#progress">Progress</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="page-width hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">A simple plan for competitive programming</p>
          <h1>
            Learn one topic.<br />
            Solve a few problems.<br />
            Move forward.
          </h1>
          <p className="hero-text">
            I made AlgoPath because random problem solving was not helping me
            improve. This roadmap keeps the next step clear and saves the topics
            I finish.
          </p>
          <a className="primary-link" href="#roadmap">
            Choose a topic
          </a>
        </div>

        <aside className="study-note" aria-label="A study reminder">
          <span className="tape" aria-hidden="true"></span>
          <p className="note-label">A note to myself</p>
          <p className="note-text">
            Do not collect tutorials. Learn the idea, solve five problems, and
            write down the mistake that cost the most time.
          </p>
          <span className="note-signature">— keep practising</span>
        </aside>
      </div>
    </section>
  );
}

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [completedTopics, setCompletedTopics] = useState(loadProgress);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(completedTopics));
  }, [completedTopics]);

  const visibleTopics = topics.filter((topic) => {
    const matchesDifficulty =
      selectedDifficulty === "all" ||
      topic.difficulty === selectedDifficulty;
    const topicText = `${topic.title} ${topic.description}`.toLowerCase();
    const matchesSearch = topicText.includes(searchText.trim().toLowerCase());

    return matchesDifficulty && matchesSearch;
  });

  const completedCount = completedTopics.length;
  const progressPercentage = Math.round(
    (completedCount / topics.length) * 100
  );

  let progressMessage = "Start with one small topic today.";
  if (completedCount > 0 && completedCount < topics.length / 2) {
    progressMessage = "Good start. Keep the routine small and regular.";
  } else if (
    completedCount >= topics.length / 2 &&
    completedCount < topics.length
  ) {
    progressMessage = "More than halfway there. Review old mistakes too.";
  } else if (completedCount === topics.length) {
    progressMessage = "Roadmap complete. Now mix the topics in contests.";
  }

  function toggleTopic(topicId) {
    setCompletedTopics((currentTopics) => {
      if (currentTopics.includes(topicId)) {
        return currentTopics.filter((id) => id !== topicId);
      }

      return [...currentTopics, topicId];
    });
  }

  function resetProgress() {
    if (window.confirm("Reset all completed topics?")) {
      setCompletedTopics([]);
    }
  }

  return (
    <>
      <Header />

      <main id="top">
        <Hero />

        <section className="roadmap-section" id="roadmap">
          <div className="page-width">
            <div className="section-heading">
              <p className="section-number">01</p>
              <div>
                <h2>Problem-solving roadmap</h2>
                <p>Pick the topic that matches what you are practising this week.</p>
              </div>
            </div>

            <div className="roadmap-controls">
              <label className="search-field">
                <span>Search topics</span>
                <input
                  type="search"
                  value={searchText}
                  placeholder="Try: binary search"
                  autoComplete="off"
                  onChange={(event) => setSearchText(event.target.value)}
                />
              </label>

              <div className="filter-wrap">
                <span>Difficulty</span>
                <div
                  className="filter-buttons"
                  aria-label="Filter topics by difficulty"
                >
                  {filters.map((filter) => (
                    <button
                      className={
                        selectedDifficulty === filter
                          ? "filter-button active"
                          : "filter-button"
                      }
                      type="button"
                      aria-pressed={selectedDifficulty === filter}
                      key={filter}
                      onClick={() => setSelectedDifficulty(filter)}
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <p className="results-line" aria-live="polite">
              {visibleTopics.length}{" "}
              {visibleTopics.length === 1 ? "topic" : "topics"} shown
            </p>

            {visibleTopics.length > 0 ? (
              <div className="topic-grid">
                {visibleTopics.map((topic) => (
                  <TopicCard
                    topic={topic}
                    completed={completedTopics.includes(topic.id)}
                    onToggle={toggleTopic}
                    key={topic.id}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-message">
                <strong>No matching topic.</strong>
                <span>Try a shorter search or choose another difficulty.</span>
              </div>
            )}
          </div>
        </section>

        <section className="progress-section" id="progress">
          <div className="page-width">
            <div className="section-heading">
              <p className="section-number">02</p>
              <div>
                <h2>Your progress</h2>
                <p>Progress is stored only in this browser.</p>
              </div>
            </div>

            <div className="progress-card">
              <div className="progress-copy">
                <strong>
                  {completedCount} of {topics.length} topics completed
                </strong>
                <span>{progressMessage}</span>
              </div>

              <div
                className="progress-track"
                role="progressbar"
                aria-label="Roadmap completion"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={progressPercentage}
              >
                <span style={{ width: `${progressPercentage}%` }}></span>
              </div>

              <button
                className="reset-button"
                type="button"
                disabled={completedCount === 0}
                onClick={resetProgress}
              >
                Reset progress
              </button>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="page-width about-layout">
            <div className="section-heading">
              <p className="section-number">03</p>
              <div>
                <h2>Why this project exists</h2>
              </div>
            </div>

            <div className="about-copy">
              <p>
                Competitive programming has many roadmaps, but most of them feel
                too large when you are still learning. AlgoPath focuses on a short
                list that can be finished one step at a time.
              </p>
              <ul>
                <li>Learn the basic idea before memorising code.</li>
                <li>Practise several problems with the same pattern.</li>
                <li>Return to mistakes instead of hiding them.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="page-width footer-row">
          <span>AlgoPath</span>
          <span>
            Built by students who enjoy problem solving · {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
