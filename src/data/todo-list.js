const todoList = [
  {
    "id": 1,
    "text": "Semantic HTML",
    "done": false,
    "category": "htmlCss"
  },
  {
    "id": 2,
    "text": "CSS Pre-Processors",
    "done": false,
    "category": "htmlCss"
  },
  {
    "id": 3,
    "text": "CSS Specificity",
    "done": false,
    "category": "htmlCss"
  },
  {
    "id": 4,
    "text": "Resetting & Normalizing CSS",
    "done": false,
    "category": "htmlCss"
  },
  {
    "id": 5,
    "text": "CSS Architecture (BEM)",
    "done": false,
    "category": "htmlCss"
  },
  {
    "id": 6,
    "text": "Floats",
    "done": false,
    "category": "htmlCss"
  },
  {
    "id": 7,
    "text": "Flexbox & CSS Grid",
    "done": false,
    "category": "htmlCss"
  },
  {
    "id": 8,
    "text": "SVGs",
    "done": false,
    "category": "htmlCss"
  },
  {
    "id": 9,
    "text": "Media Queries",
    "done": false,
    "category": "htmlCss"
  },
  {
    "id": 10,
    "text": "CSS Display Property",
    "done": false,
    "category": "htmlCss"
  },
  {
    "id": 11,
    "text": "CSS Frameworks (Bootstrap)",
    "done": false,
    "category": "htmlCss"
  },
  {
    "id": 12,
    "text": "CSS Animations",
    "done": false,
    "category": "htmlCss"
  },
  {
    "id": 13,
    "text": "Pseudo Classes",
    "done": false,
    "category": "htmlCss"
  },
  {
    "id": 14,
    "text": "Sprites",
    "done": false,
    "category": "htmlCss"
  },
  {
    "id": 15,
    "text": "This",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 16,
    "text": "Prototypal Inheritance",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 17,
    "text": "IIFE",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 18,
    "text": "Closure",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 19,
    "text": "Null vs Undefined",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 20,
    "text": "Loop vs Map",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 21,
    "text": ".call & .apply",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 22,
    "text": "Hoisting",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 23,
    "text": "Event Delegation",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 24,
    "text": "Attributes vs Properties",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 25,
    "text": "Ternary Operators",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 26,
    "text": "Promises vs Callbacks",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 27,
    "text": "Single Page Applications",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 28,
    "text": "Js Frameworks",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 29,
    "text": "Higher-Order-Functions",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 30,
    "text": "== vs ===",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 31,
    "text": "Mutable vs Immutable",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 32,
    "text": "Objects",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 33,
    "text": "Scope",
    "done": false,
    "category": "javaScript"
  },
  {
    "id": 34,
    "text": "Linked Lists",
    "done": false,
    "category": "dataStructureAlgorithm"
  },
  {
    "id": 35,
    "text": "Hashtables",
    "done": false,
    "category": "dataStructureAlgorithm"
  },
  {
    "id": 36,
    "text": "Stack",
    "done": false,
    "category": "dataStructureAlgorithm"
  },
  {
    "id": 37,
    "text": "Queues",
    "done": false,
    "category": "dataStructureAlgorithm"
  },
  {
    "id": 38,
    "text": "Trees",
    "done": false,
    "category": "dataStructureAlgorithm"
  },
  {
    "id": 39,
    "text": "Graphs",
    "done": false,
    "category": "dataStructureAlgorithm"
  },
  {
    "id": 40,
    "text": "Arrays",
    "done": false,
    "category": "dataStructureAlgorithm"
  },
  {
    "id": 41,
    "text": "Bubble Sort",
    "done": false,
    "category": "dataStructureAlgorithm"
  },
  {
    "id": 42,
    "text": "Merge Sort",
    "done": false,
    "category": "dataStructureAlgorithm"
  },
  {
    "id": 43,
    "text": "Binary Search",
    "done": false,
    "category": "dataStructureAlgorithm"
  },
  {
    "id": 44,
    "text": "Selection Sort",
    "done": false,
    "category": "dataStructureAlgorithm"
  },
  {
    "id": 45,
    "text": "Quick Sort",
    "done": false,
    "category": "dataStructureAlgorithm"
  },
  {
    "id": 46,
    "text": "Insertion Sort",
    "done": false,
    "category": "dataStructureAlgorithm"
  },
  {
    "id": 47,
    "text": "Performance",
    "done": false,
    "category": "frontEndTopics"
  },
  {
    "id": 48,
    "text": "Unit Testing",
    "done": false,
    "category": "frontEndTopics"
  },
  {
    "id": 49,
    "text": "E2E Testing",
    "done": false,
    "category": "frontEndTopics"
  },
  {
    "id": 50,
    "text": "Web Accessibility",
    "done": false,
    "category": "frontEndTopics"
  },
  {
    "id": 51,
    "text": "CORS",
    "done": false,
    "category": "frontEndTopics"
  },
  {
    "id": 52,
    "text": "SEO",
    "done": false,
    "category": "frontEndTopics"
  },
  {
    "id": 53,
    "text": "REST",
    "done": false,
    "category": "frontEndTopics"
  },
  {
    "id": 54,
    "text": "APIs",
    "done": false,
    "category": "frontEndTopics"
  },
  {
    "id": 55,
    "text": "HTTP/HTTPS",
    "done": false,
    "category": "frontEndTopics"
  },
  {
    "id": 56,
    "text": "Github",
    "done": false,
    "category": "frontEndTopics"
  },
  {
    "id": 57,
    "text": "Task Runners",
    "done": false,
    "category": "frontEndTopics"
  },
  {
    "id": 58,
    "text": "Browser APIs",
    "done": false,
    "category": "frontEndTopics"
  }
];

export default todoList;