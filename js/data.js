export const topics = [
  {
    id: "arrays",
    title: "Arrays",
    level: 1,
    levelName: "Programming basics",
    difficulty: "beginner",
    rating: "800 to 900",
    practiceCount: 5,
    description: "Store related values in one place and learn how to visit, update, and compare them.",
    why: "Arrays appear in almost every competitive programming contest. They are the base for many later techniques.",
    learn: [
      "Access values by index",
      "Loop through an array safely",
      "Find a minimum, maximum, and total",
      "Understand basic time complexity"
    ]
  },
  {
    id: "strings",
    title: "Strings",
    level: 1,
    levelName: "Programming basics",
    difficulty: "beginner",
    rating: "800 to 900",
    practiceCount: 5,
    description: "Work with text as a sequence of characters and recognise common string patterns.",
    why: "Many beginner problems use names, words, binary strings, or character counting.",
    learn: [
      "Read and compare characters",
      "Reverse and build strings",
      "Count character frequency",
      "Check simple palindromes"
    ]
  },
  {
    id: "loops",
    title: "Loops",
    level: 1,
    levelName: "Programming basics",
    difficulty: "beginner",
    rating: "800",
    practiceCount: 4,
    description: "Repeat work without repeating code and choose the right stopping condition.",
    why: "Loops are needed to process input, test possibilities, and work with arrays and strings.",
    learn: [
      "Use for and while loops",
      "Choose a correct loop boundary",
      "Avoid infinite loops",
      "Trace a loop by hand"
    ]
  },
  {
    id: "functions",
    title: "Functions",
    level: 1,
    levelName: "Programming basics",
    difficulty: "beginner",
    rating: "800 to 900",
    practiceCount: 4,
    description: "Break a solution into small reusable steps with clear inputs and outputs.",
    why: "Functions make solutions easier to test, explain, and change during a contest.",
    learn: [
      "Pass values into a function",
      "Return a result",
      "Separate repeated logic",
      "Use helpful function names"
    ]
  },
  {
    id: "sorting",
    title: "Sorting",
    level: 2,
    levelName: "Problem solving",
    difficulty: "beginner",
    rating: "900 to 1100",
    practiceCount: 5,
    description: "Put data in a useful order so comparisons and patterns become easier to see.",
    why: "A difficult looking problem often becomes much simpler after sorting its input.",
    learn: [
      "Sort numbers and pairs",
      "Choose ascending or descending order",
      "Use a custom comparison rule",
      "Recognise when sorting helps"
    ]
  },
  {
    id: "maps-and-sets",
    title: "Maps and Sets",
    level: 2,
    levelName: "Problem solving",
    difficulty: "intermediate",
    rating: "1000 to 1200",
    practiceCount: 5,
    description: "Count values, remove duplicates, and find whether an item has appeared before.",
    why: "Maps and sets replace slow repeated searches with clear counting and lookup logic.",
    learn: [
      "Store unique values in a set",
      "Count frequency with a map",
      "Check whether a key exists",
      "Compare ordered and unordered structures"
    ]
  },
  {
    id: "prefix-sums",
    title: "Prefix Sums",
    level: 2,
    levelName: "Problem solving",
    difficulty: "intermediate",
    rating: "1100 to 1300",
    practiceCount: 5,
    description: "Precompute running totals to answer many range sum questions quickly.",
    why: "Prefix sums turn repeated range work into a small calculation after one simple setup step.",
    learn: [
      "Build a one dimensional prefix array",
      "Answer a range sum query",
      "Handle zero based indices",
      "Compare brute force with precomputation"
    ]
  },
  {
    id: "two-pointers",
    title: "Two Pointers",
    level: 2,
    levelName: "Problem solving",
    difficulty: "intermediate",
    rating: "1100 to 1400",
    practiceCount: 6,
    description: "Process an array efficiently by moving two indices instead of testing every pair.",
    why: "Two pointers is one of the most useful patterns for sorted arrays, pairs, and subarrays.",
    learn: [
      "Move pointers from opposite ends",
      "Move two pointers in one direction",
      "Use sorted input correctly",
      "Prove that no answer is skipped"
    ]
  },
  {
    id: "binary-search",
    title: "Binary Search",
    level: 3,
    levelName: "Intermediate tools",
    difficulty: "intermediate",
    rating: "1200 to 1500",
    practiceCount: 6,
    description: "Cut the search space in half when the answer follows a sorted or monotonic rule.",
    why: "Binary search is useful for finding values and for searching for the smallest valid answer.",
    learn: [
      "Search inside a sorted array",
      "Write safe low and high boundaries",
      "Recognise a monotonic condition",
      "Binary search on an answer"
    ]
  },
  {
    id: "sliding-window",
    title: "Sliding Window",
    level: 3,
    levelName: "Intermediate tools",
    difficulty: "intermediate",
    rating: "1200 to 1500",
    practiceCount: 5,
    description: "Maintain information about a moving subarray without calculating everything again.",
    why: "Sliding windows are a natural next step after two pointers and prefix sums.",
    learn: [
      "Build a fixed size window",
      "Expand and shrink a flexible window",
      "Update the window state efficiently",
      "Know when negative values change the approach"
    ]
  },
  {
    id: "greedy",
    title: "Greedy",
    level: 3,
    levelName: "Intermediate tools",
    difficulty: "advanced",
    rating: "1400 to 1700",
    practiceCount: 5,
    description: "Make the best local choice while proving that it still leads to the full answer.",
    why: "Greedy solutions can be short, but recognising and proving them takes careful thinking.",
    learn: [
      "Identify a useful local choice",
      "Sort before making decisions",
      "Use an exchange argument",
      "Find examples where a greedy idea fails"
    ]
  },
  {
    id: "number-theory",
    title: "Basic Number Theory",
    level: 3,
    levelName: "Intermediate tools",
    difficulty: "advanced",
    rating: "1300 to 1600",
    practiceCount: 5,
    description: "Use divisibility, prime numbers, greatest common divisors, and modular arithmetic.",
    why: "Number theory appears often in contests and rewards a strong understanding of small mathematical rules.",
    learn: [
      "Find a greatest common divisor",
      "Check and generate prime numbers",
      "List divisors efficiently",
      "Use modular arithmetic safely"
    ]
  }
];
