window.DEVQUEST_CHALLENGES = [
  {
    id: "reverse-string",
    title: "Reverse a String",
    difficulty: "Beginner",
    language: "Any",
    category: "Strings",
    description: "Return a string with its characters in reverse order.",
    problem: "Write a function that takes a string and returns the same characters in reverse order.",
    exampleInput: "hello",
    exampleOutput: "olleh",
    hint: "Think about how to visit the characters from the end of the string back to the start."
  },
  {
    id: "fizzbuzz-plus",
    title: "FizzBuzz+",
    difficulty: "Beginner",
    language: "Any",
    category: "Logic",
    description: "Build a configurable version of the classic FizzBuzz problem.",
    problem: "Print values from 1 to n. Replace multiples of 3 with Fizz, multiples of 5 with Buzz, and multiples of both with FizzBuzz.",
    exampleInput: "n = 15",
    exampleOutput: "1, 2, Fizz, 4, Buzz, ... , 14, FizzBuzz",
    hint: "Check the most specific condition first: numbers divisible by both 3 and 5."
  },
  {
    id: "palindrome-checker",
    title: "Palindrome Checker",
    difficulty: "Beginner",
    language: "Any",
    category: "Strings",
    description: "Detect palindromes while ignoring spaces and letter case.",
    problem: "Determine whether a phrase reads the same forward and backward after ignoring spaces and letter case.",
    exampleInput: "Never odd or even",
    exampleOutput: "true",
    hint: "Normalise the input before comparing it with its reversed form."
  },
  {
    id: "expense-summary",
    title: "Expense Summary",
    difficulty: "Intermediate",
    language: "JavaScript",
    category: "Data",
    description: "Summarise transactions by category and calculate totals.",
    problem: "Given a list of expenses, return the total spent in each category and the overall total.",
    exampleInput: '[{"category":"Food","amount":50},{"category":"Travel","amount":20},{"category":"Food","amount":30}]',
    exampleOutput: '{"Food":80,"Travel":20,"total":100}',
    hint: "Use one accumulator object and update it as you iterate through the transactions."
  },
  {
    id: "rate-limiter",
    title: "Rate Limiter",
    difficulty: "Intermediate",
    language: "Any",
    category: "Backend",
    description: "Design a simple fixed-window request rate limiter.",
    problem: "Allow at most N requests per user during a fixed time window and reject extra requests until the next window.",
    exampleInput: "limit = 3 requests / 60 seconds",
    exampleOutput: "Requests 1-3 allowed, request 4 rejected",
    hint: "Track both a request count and the timestamp when the current window began."
  },
  {
    id: "path-finder",
    title: "Path Finder",
    difficulty: "Advanced",
    language: "Any",
    category: "Algorithms",
    description: "Find the shortest path through a weighted graph.",
    problem: "Given a weighted graph and two nodes, return the minimum-cost path between them.",
    exampleInput: "A-B:4, A-C:1, C-B:2",
    exampleOutput: "A → C → B, cost 3",
    hint: "A priority queue can help you always expand the cheapest known route next."
  }
];