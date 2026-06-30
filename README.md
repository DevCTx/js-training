# JavaScript Training

A collection of small, self-contained **vanilla JavaScript** projects built while following
[freeCodeCamp's Full Stack Developer Curriculum](https://www.freecodecamp.org/). Each project
explores one concept — DOM manipulation, canvas, animations, the Fetch API, IndexedDB,
regular expressions, and more — using plain HTML, CSS and JavaScript, with no framework and
no build step.

## Tech stack

- HTML5, CSS3, modern JavaScript (ES6+)
- Browser Web APIs: Fetch, Canvas, Web Animations API (WAAPI), `requestAnimationFrame`,
  IndexedDB
- No dependencies, no bundler — every project runs straight in the browser

## How to run

Each folder is an independent project. Open its `index.html` in a browser:

```bash
# simplest: open the file directly
xdg-open "Weather app/index.html"      # Linux
open "Weather app/index.html"          # macOS

# or serve the folder (recommended for fetch/IndexedDB projects)
python -m http.server
# then visit http://localhost:8000 and pick a project
```

A local server is recommended for the projects that use `fetch` or IndexedDB, since some
browsers restrict those APIs on the `file://` protocol.

## Projects

### DOM & UI interactions
| Project | What it does |
|---|---|
| Alert | native alert/confirm/prompt dialogs |
| Modal | a custom modal window |
| Bookmarks | add and store bookmarks in the page |
| Classic Form | a styled form with validation |
| Themes et Blur | theme switching and blur effects |
| Tri Par Menu Deroulant | sorting driven by a dropdown menu |
| target | event targeting / delegation demo |

### Canvas, animation & visualization
| Project | What it does |
|---|---|
| Canva | drawing on the HTML canvas |
| Bubble Sort | a step-by-step bubble-sort visualizer |
| WAAPI | animations with the Web Animations API |
| requestAnimationFrame | frame-based animation loop |
| Galery | an interactive image gallery |
| Video | HTML5 video player controls |

### APIs & data
| Project | What it does |
|---|---|
| Weather app | fetches live weather from a freeCodeCamp proxy API |
| IndexedDB | stores and reads records in the browser database |

### Tools & parsers
| Project | What it does |
|---|---|
| Markdown Converter | converts Markdown to HTML live, using regex |
| Regex Sandbox | a playground to test regular expressions |
| Unit Converter | converts between units of measurement |

### Games
| Project | What it does |
|---|---|
| Rock Paper Scissors | the classic game against the computer |
| DrumPads | a keyboard-triggered drum machine |

## Extras

- `frontend_vs_backend.txt` — personal notes on when logic belongs on the front end vs the
  back end (security, validation, data access).
- `debugger/` — small scratch project for practicing the browser debugger.
- Certification PDFs: **JavaScript Algorithms and Data Structures** and **Responsive Web
  Design**, both from freeCodeCamp.

## Skills demonstrated

DOM manipulation and events · the Fetch API and async/await · Canvas and animation
(WAAPI, `requestAnimationFrame`) · client-side storage (IndexedDB) · regular expressions ·
clean separation of HTML / CSS / JavaScript · building features from scratch without a
framework.
