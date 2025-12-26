# Personal Professional Website - Kunti Najma Jalia

> Platform personal-profesional-akademik menggunakan HTML, CSS, JavaScript, dan Firebase

## 🌐 Overview

Website ini dirancang sebagai **digital hub** yang mengintegrasikan identitas profesional, akademis, dan personal dalam satu ekosistem. Bukan sekadar portfolio, tetapi representasi cara berpikir, nilai, dan perjalanan intelektual yang berkelanjutan.

### Filosofi Desain
- **Content-First**: Konten adalah prioritas utama, design mendukung readability
- **Minimalist & Professional**: Clean aesthetic yang tidak mengalihkan perhatian dari substansi
- **Accessible**: Mudah dinavigasi dan diakses oleh berbagai audiens
- **Scalable**: Struktur modular yang mudah dikembangkan

## ✨ Features

### 🎯 Core Sections
1. **Beranda** - Hero section dengan positioning statement dan 3 pilar identitas
2. **Tentang** - Filosofi, perjalanan singkat, dan nilai-nilai inti
3. **Pendidikan & Pelatihan** - Formal education dan continuous learning
4. **Keahlian** - Technical & soft skills dengan evidence
5. **Pengalaman** - Work experience dan organizational involvement
6. **Proyek** - Portfolio dengan detailed case studies
7. **Publikasi** - Academic outputs dan research papers
8. **Blog** - Reflective writings dan thought leadership
9. **Kontak** - Professional contact information

### 🛠️ Technical Features
- **Vanilla Stack**: HTML5, CSS3, JavaScript (ES6+) - No frameworks!
- **Firebase Integration**: Firestore untuk dynamic content
- **Responsive Design**: Mobile-first approach
- **Smooth Navigation**: Sticky header & smooth scroll
- **Fast Loading**: Minimal dependencies, optimized assets
- **SEO Optimized**: Semantic HTML & meta tags

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- Text editor (VS Code recommended)
- Firebase account
- Basic understanding of HTML/CSS/JS

### Installation

1. **Clone repository**
```bash
git clone https://github.com/kuntinajma/personal-website.git
cd personal-website
```

2. **Setup Firebase**

- Buat project di [Firebase Console](https://console.firebase.google.com)
- Enable Firestore Database
- Copy Firebase config
- Update `js/firebase-config.js` dengan credentials Anda:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

3. **Run locally**

Karena menggunakan ES6 modules, Anda perlu local server:

```bash
# Gunakan Python
python -m http.server 8000

# Atau Node.js http-server
npx http-server -p 8000

# Atau VS Code Live Server extension
```

Buka `http://localhost:8000` di browser.

## 📋 Project Structure

```
personal-website/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main styles
│   ├── sections.css       # Section-specific styles
│   └── responsive.css     # Responsive breakpoints
├── js/
│   ├── firebase-config.js # Firebase setup
│   └── main.js            # Main JavaScript
├── sections/
│   ├── tentang.html       # About section
│   ├── pendidikan.html    # Education section
│   └── keahlian.html      # Skills section
└── README.md
```

## 🔥 Firebase Setup

### 1. Create Collections

Buat collections berikut di Firestore:

#### `highlights` collection
```javascript
{
  title: "Project Title",
  category: "Development" | "Research" | "Writing",
  description: "Brief description",
  date: "2025-01",
  link: "https://...",
  order: 1
}
```

#### `publications` collection
```javascript
{
  title: "Paper Title",
  authors: "Author 1, Author 2",
  year: 2025,
  venue: "Conference/Journal",
  type: "Conference" | "Journal" | "Preprint",
  abstract: "Abstract text",
  url: "https://...",
  status: "Published" | "Under Review"
}
```

#### `projects` collection
```javascript
{
  title: "Project Name",
  summary: "Brief summary",
  role: "Your role",
  period: "2024-2025",
  tags: ["Next.js", "Firebase"],
  background: "Problem context",
  approach: "How you solved it",
  impact: "Results & learning",
  links: {
    github: "https://...",
    live: "https://..."
  }
}
```

### 2. Security Rules

Update Firestore rules untuk production:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read, authenticated write
    match /{collection}/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 🎨 Customization

### Update Content

1. **Personal Info** - Edit `index.html` hero section
2. **About** - Edit `sections/tentang.html`
3. **Education** - Edit `sections/pendidikan.html`
4. **Skills** - Edit `sections/keahlian.html`

### Update Styles

1. **Colors** - Edit CSS variables di `css/style.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
}
```

2. **Typography** - Update font family:
```css
:root {
    --font-primary: 'Your Font', sans-serif;
}
```

3. **Spacing** - Adjust spacing variables

### Add New Sections

1. Create new HTML file di `sections/`
2. Add nav link di header
3. Add corresponding styles di `css/sections.css`
4. Update JavaScript if needed

## 🚀 Deployment

### Option 1: Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Deploy
firebase deploy
```

### Option 2: Vercel

1. Push to GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy (automatic)

### Option 3: Netlify

1. Drag & drop folder ke [Netlify Drop](https://app.netlify.com/drop)
2. Or connect GitHub repo

### Option 4: GitHub Pages

1. Push to GitHub
2. Settings → Pages
3. Select branch to deploy

## 📝 Content Management

### Static Content
- Edit HTML files directly
- Update via Git workflow
- Deploy changes

### Dynamic Content (Firebase)
- Update via Firebase Console
- Or create admin panel (future enhancement)
- Changes reflect immediately

## 🛡️ Best Practices

### Performance
- Minimize CSS/JS files before production
- Optimize images (use WebP format)
- Lazy load images
- Use CDN for Firebase

### SEO
- Update meta tags for each page
- Add structured data (JSON-LD)
- Create sitemap.xml
- Add robots.txt

### Accessibility
- Use semantic HTML
- Add alt text to images
- Ensure keyboard navigation
- Test with screen readers

### Security
- Never commit Firebase credentials
- Use environment variables
- Set proper Firestore rules
- Implement CORS if needed

## 📈 Future Enhancements

- [ ] Admin dashboard untuk manage content
- [ ] Blog system dengan Markdown support
- [ ] Search functionality
- [ ] Dark mode toggle
- [ ] Multi-language support (ID/EN)
- [ ] Contact form dengan email integration
- [ ] Analytics dashboard
- [ ] RSS feed untuk blog
- [ ] PDF export untuk CV

## 👥 Contributing

Ini adalah personal website, namun suggestions dan improvements welcome!

## 📝 License

MIT License - Feel free to use as template.

## 👤 Author

**Kunti Najma Jalia**
- GitHub: [@kuntinajma](https://github.com/kuntinajma)
- Email: [Your Email]

---

**Built with ❤️ using vanilla HTML, CSS, JavaScript & Firebase**

_Website ini merepresentasikan perjalanan profesional dan intelektual yang terus berkembang._