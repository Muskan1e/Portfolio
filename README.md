# 🌟 Muskan Sharma - Personal Portfolio Website

A modern, responsive, high-performance single-page portfolio built with **HTML5, CSS3, and Vanilla JavaScript** (Zero frameworks, zero dependencies).

---

## 📁 File Structure

```text
my/
├── index.html        # Main semantic HTML structure & sections
├── style.css         # Styling, CSS variables, Dark/Light theme, animations & responsiveness
├── main.js           # Interactive features, Swiper carousel, typewriter effect, validations
└── README.md         # Guide & documentation
```

---

## 🚀 How to Run in VS Code

1. Open **VS Code**.
2. Go to **File -> Open Folder...** and select the `my` (or `my name`) folder from your Desktop.
3. To view the website:
   - **Method 1 (Recommended)**: Install the **Live Server** extension in VS Code. Right-click on `index.html` and click **"Open with Live Server"**.
   - **Method 2**: Simply double-click `index.html` in your file explorer to open it in Chrome, Edge, or Firefox.

---

## 🎨 How to Customize

### 1. Change Colors & Theme
Open `style.css` and find the `:root` section right at the top (lines 14–25):
```css
:root {
  --primary-color: #6c63ff;           /* Change your main accent color */
  --primary-hover: #564ded;           /* Accent hover color */
  --secondary-color: #ff6584;         /* Secondary accent for gradients */
  --accent-gradient: linear-gradient(135deg, #6c63ff 0%, #ff6584 100%);
}
```
*Change `#6c63ff` to any color code you like (e.g. `#00d2ff`, `#3b82f6`, `#ec4899`) and the whole website will automatically update!*

---

### 2. Replace Photos (Profile & Projects)
- **Profile Photo**: 
  - Save your photo inside this folder (e.g., as `muskan.jpg`).
  - In `index.html`, search for `id="profile-img"` (around line 140) and change:
    ```html
    <img src="muskan.jpg" alt="Muskan Sharma" class="home__img" id="profile-img">
    ```
- **About Photo**:
  - Search for `class="about__img"` (around line 205) and replace the `src` with your photo.
- **Project Images**:
  - In the `<section class="projects">` section, find each `<img class="project__img">` tag and update the image `src`.

---

### 3. Update Social Media Links
In `index.html`:
- **LinkedIn**: Already linked to `https://www.linkedin.com/in/muskan-sharma-3a4b8537a`.
- **GitHub**: Search for `ri-github-fill` and change `href="https://github.com"` to your GitHub profile URL.
- **Instagram**: Search for `ri-instagram-line` and change `href="https://instagram.com"` to your Instagram handle URL.
- **Email**: Update `mailto:muskan.sharma@example.com` to your actual email.
- **Phone**: Update `tel:+919876543210` to your actual phone number.

---

### 4. Add or Edit Projects
In `index.html`, find the `<section class="projects">` section. Each project is wrapped in:
```html
<article class="project__card">
  ...
</article>
```
You can simply copy and paste a `<article class="project__card">` block to add more projects!

---

## ✨ Features Included

- 📱 **Mobile-First & Fully Responsive**: Breakpoints for 320px, 576px, 768px, 1024px, 1200px+.
- 🌓 **Dark & Light Mode Toggle**: Remembers your theme preference using `localStorage`.
- ⌨️ **Dynamic Typewriter Effect**: Cycles through your roles in the Hero section.
- 🖱️ **Custom Animated Desktop Cursor**: Smooth trailing outline with hover interactions (automatically disabled on touch devices).
- 📜 **ScrollSpy & Sticky Header**: Active navigation link changes as you scroll.
- 💼 **Interactive Tabs**: Seamlessly switch between Education and Experience timelines.
- 🌟 **Swiper.js Testimonials Slider**: Autoplay, touch-swipeable cards with star ratings.
- ✉️ **Interactive Contact Form**: Real-time validation for Name, Email, and Message with sending state and success alert.
- ⬆️ **Scroll-To-Top Button**: Smoothly returns to the top with one click.
- 💫 **ScrollReveal Animations**: Staggered scroll animations for every section.
