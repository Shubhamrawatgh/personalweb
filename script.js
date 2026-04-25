/* ==========================================
   1. CSS VARIABLES (THEMING)
   ========================================== */
:root {
    /* Light Mode Colors */
    --bg-color: #ffffff;
    --text-main: #111827;
    --text-muted: #6b7280;
    --accent: #2563eb;
    --card-bg: #f9fafb;
    --card-border: #e5e7eb;
    --nav-bg: rgba(255, 255, 255, 0.8);
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --card-shadow-hover: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

[data-theme="dark"] {
    /* Dark Mode Colors */
    --bg-color: #0f172a;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --accent: #60a5fa;
    --card-bg: #1e293b;
    --card-border: #334155;
    --nav-bg: rgba(15, 23, 42, 0.8);
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5);
    --card-shadow-hover: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
}

/* ==========================================
   2. GLOBAL RESET & BASE STYLES
   ========================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-main);
    line-height: 1.6;
    transition: background-color 0.4s ease, color 0.4s ease;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

/* ==========================================
   3. NAVIGATION & THEME TOGGLE
   ========================================== */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1.5rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--nav-bg);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 1000;
    border-bottom: 1px solid var(--card-border);
    transition: all 0.4s ease;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    align-items: center;
}

.nav-links a {
    font-weight: 500;
    font-size: 0.95rem;
    color: var(--text-muted);
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--accent);
}

.theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    color: var(--text-main);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.3s ease;
}

.theme-toggle:hover {
    background-color: var(--card-border);
}

.theme-toggle svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
}

[data-theme="light"] .icon-sun,
[data-theme="dark"] .icon-moon {
    display: none;
}

/* ==========================================
   4. LAYOUT & SECTIONS
   ========================================== */
section {
    min-height: 100vh;
    padding: 6rem 5% 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
}

h1 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1rem;
    letter-spacing: -1px;
}

h2 {
    font-size: clamp(2rem, 3vw, 2.5rem);
    font-weight: 700;
    margin-bottom: 3rem;
    position: relative;
}

h2::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 4px;
    background-color: var(--accent);
    border-radius: 2px;
}

p {
    font-size: 1.125rem;
    color: var(--text-muted);
    max-width: 600px;
    margin-bottom: 2rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.875rem 2rem;
    background-color: var(--accent);
    color: #ffffff;
    font-weight: 600;
    border-radius: 8px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border: none;
    cursor: pointer;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

/* ==========================================
   5. CARDS (SKILLS & PROJECTS)
   ========================================== */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    width: 100%;
}

.card {
    background-color: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: var(--shadow);
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: var(--card-shadow-hover);
    border-color: var(--accent);
}

.card h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--text-main);
}

.card p {
    font-size: 1rem;
    margin-bottom: 0;
}

.project-card {
    padding: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.project-img-placeholder {
    width: 100%;
    height: 200px;
    background-color: var(--card-border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    font-weight: 500;
}

.project-content {
    padding: 2rem;
}

/* ==========================================
   6. SCROLL REVEAL ANIMATIONS
   ========================================== */
.reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

.grid .reveal:nth-child(1) { transition-delay: 0.1s; }
.grid .reveal:nth-child(2) { transition-delay: 0.2s; }
.grid .reveal:nth-child(3) { transition-delay: 0.3s; }
.grid .reveal:nth-child(4) { transition-delay: 0.4s; }

/* ==========================================
   7. RESPONSIVE DESIGN
   ========================================== */
@media (max-width: 768px) {
    .nav-links {
        display: none; 
    }
    
    section {
        padding-top: 8rem;
        min-height: auto;
    }
}
