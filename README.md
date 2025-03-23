# Cactro Frontend Engineering Hiring Test

This project is a **frontend implementation** of a Slack-inspired UI built using **React and Tailwind CSS**. The goal was to create a **pixel-perfect, responsive, and interactive UI** while keeping the structure clean and scalable.

---

## **Design Flow & Thought Process**

The approach was to **break down the UI into reusable components** and implement them **step by step**, ensuring that each section was completed and tested before moving to the next. Here’s the structured approach followed:

### **1. Layout & Setup**
- A **global layout** was considered in `App.jsx` to wrap all sections.
- **Tailwind CSS Play CDN** was used initially for quick development, with plans to switch to full installation with Vite later.

### **2. Navbar**
- A **sticky** top navigation bar.
- **Responsive Design:**
  - **Desktop:** Full navigation menu.
  - **Mobile:** Shows only the **Slack logo, a search icon, and a hamburger menu**.

### **3. Hero Section**
- **Two-column layout:**
  - **Left:** Headline, subtext, CTA buttons.
  - **Right:** Video illustration (`hero_slack.webm`).
- **Google Sign-up Button:**
  - A manually created button with a **Google logo image**.
  - **Does not authenticate users**, since it’s only for UI purposes.

### **4. Trusted By Section**
- Implemented using **Swiper.js** for an **infinite auto-loop slider**.
- Used `react-icons/si` for **colorful brand icons** (Google, Amazon, Netflix, etc.).
- **Centered icons** correctly inside Swiper slides.

### **5. Features Section**
- **Left:** Text and a **Watch Video** button with an embedded play icon.
- **Right:** A **video thumbnail with a Play button overlay** for a smooth UI experience.

### **6. Alert (Digital HQ Message)**
- Instead of a **toaster notification**, a **persistent alert** was used at the top.
- Implemented with **`useState`** so it can be **dismissed on click**.
- **Smooth fade-out effect** when dismissed.

---

## **Technologies Used**
- **React** (Component-based architecture)
- **Tailwind CSS** (Utility-first styling for faster development)
- **Swiper.js** (Auto-play carousel for brand icons)
- **React Icons** (`react-icons/si` for brand logos, `lucide-react` for UI icons)

---

## **Future Improvements**
- Add **authentication** for the Google sign-up button.
- Implement **actual video playback** instead of just a thumbnail.
- Improve **animations** for a more dynamic user experience.

---

## **Conclusion**
This project focused on **creating a responsive and interactive UI** while ensuring that each component was modular and reusable. Every feature was carefully designed to **mimic the Slack website while adding functional interactions**, making it a great frontend assessment.

🚀 **Ready for Review!**

