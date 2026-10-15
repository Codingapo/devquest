# DevQuest

> A lightweight, open-source coding challenge platform for practicing programming, tracking progress, and learning through real GitHub collaboration.

![GitHub stars](https://img.shields.io/github/stars/Codingapo/devquest?style=flat)
![GitHub forks](https://img.shields.io/github/forks/Codingapo/devquest?style=flat)
![GitHub issues](https://img.shields.io/github/issues/Codingapo/devquest)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Codingapo/devquest)
![License](https://img.shields.io/badge/license-MIT-blue)

## Why DevQuest?

DevQuest is designed for learners who want something simpler than a full course platform but more useful than a static list of coding exercises.

You can:

- browse Beginner, Intermediate, and Advanced coding quests;
- search, filter, sort, and favorite challenges;
- open dedicated challenge detail pages with examples and hints;
- mark quests as completed and track progress locally;
- use a random quest picker when you do not know what to solve next;
- switch between light and dark themes;
- contribute through issues and pull requests;
- benefit from automated GitHub Actions validation on new changes.

The project is intentionally dependency-light: plain HTML, CSS, and JavaScript.

## Quick start

```bash
git clone https://github.com/Codingapo/devquest.git
cd devquest
```

Open `index.html` in your browser.

No package installation or build step is required.

## Current features

| Feature | Status |
| --- | --- |
| Responsive challenge board | ✅ |
| Search and difficulty filters | ✅ |
| Sorting | ✅ |
| Favorites | ✅ |
| Random quest picker | ✅ |
| Challenge detail pages | ✅ |
| Completion tracking | ✅ |
| Progress dashboard | ✅ |
| Light / dark theme | ✅ |
| Reset saved progress | ✅ |
| Issue and PR templates | ✅ |
| GitHub Actions validation | ✅ |

## Project structure

```text
devquest/
├── index.html
├── challenge.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── challenge.js
│   ├── challenges-data.js
│   └── theme.js
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   └── pull_request_template.md
├── CONTRIBUTING.md
├── SECURITY.md
├── LICENSE
└── README.md
```

## How DevQuest is developed

DevQuest uses a public GitHub workflow for every meaningful change:

1. Open or choose an issue.
2. Create a focused branch.
3. Make and test the change.
4. Commit with clear messages.
5. Open a pull request.
6. Review and merge when ready.

This keeps the history understandable and makes the repository friendly to new contributors.

## Contributing

Contributions are welcome.

Good first contributions include:

- new coding challenge ideas;
- accessibility improvements;
- bug fixes;
- documentation improvements;
- UI polish;
- tests and validation;
- translations.

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a larger pull request.

## Roadmap

Planned ideas include:

- more challenge categories;
- language-specific challenge tracks;
- difficulty recommendations;
- shareable challenge links;
- streaks and lightweight learning statistics;
- import/export of local progress;
- improved accessibility testing;
- a hosted public demo.

## Security

Please report security-related problems responsibly. See [SECURITY.md](SECURITY.md).

## License

DevQuest is available under the [MIT License](LICENSE).

## Support the project

If DevQuest helps you learn or you like the direction of the project, you can support it by:

- starring the repository;
- opening a useful issue;
- contributing a challenge or fix;
- sharing the project with another learner.

Every genuine contribution helps the project improve.
