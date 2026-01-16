#  Pomodoro Clock

A minimalist **Pomodoro Timer** built with **HTML, CSS, and Vanilla JavaScript**, featuring a circular progress indicator, automatic work/break switching, and pomodoro tracking.

This project focuses on **logic clarity, smooth UI feedback, and zero unnecessary dependencies**.

---

## Live Demo

```
https://pomodoroclock-viraljain.netlify.app/
```

---

##  Features

-  **25-minute work sessions** and **5-minute breaks**
-  **Automatic session switching** (Work ↔ Break)
-  **SVG circular progress ring** synced with time
-  **Audio alert** when a session ends
-  **Pomodoros completed counter**
-  **Start / Pause** control
-  **Full reset functionality**
-  Clean dark UI with subtle gradients

---

##  How It Works

- The timer starts with a **25-minute work session**
- Once time reaches `00:00`:
  - A beep sound plays
  - Session switches automatically
  - Pomodoro count increases after each work session
- The circular SVG progress ring visually represents remaining time
- Progress updates every second using `stroke-dashoffset`

---

##  Tech Stack

- **HTML5** – Structure
- **CSS3** – Styling & layout
- **JavaScript (Vanilla)** – Timer logic & DOM manipulation
- **SVG** – Circular progress indicator

No frameworks. No libraries. No shortcuts.

---

##  Project Structure

```
pomodoro-clock/
│
├── index.html     # Markup
├── styles.css     # Styling
├── script.js      # Timer logic
└── README.md      # Documentation
```

---

##  Usage

Go to the link provided above and click **Start**

  OR

1. Clone the repository:
   ```
   git clone https://https://github.com/ViralJain758/Pomodoro-Clock.git
   ```

2. Open `index.html` in your browser.

3. Click **Start** to begin a work session.

That’s it. No setup, no build tools, no nonsense.

---

##  UI Highlights

- Circular progress ring rotates from the top (-90° SVG rotation)
- Timer remains centered using absolute positioning
- Smooth visual feedback without over-animation

---

## Author

Viral Jain


##  License

This project is open-source and free to use for learning and personal projects.

---

### Built for focus.  
### Designed to be simple.  
### Written without overengineering.
