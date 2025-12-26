# Personal Professional Website

> Personal professional-academic platform built with Next.js 15 and Firebase

## 🌐 Live Demo

Website ini akan di-deploy di Vercel. URL akan tersedia setelah deployment.

## ✨ Features

- 🎨 **Modern Design** - Clean, minimal, dan professional
- 📱 **Responsive** - Optimized untuk semua device sizes
- ⚡ **Fast Performance** - Built with Next.js 15 + Turbopack
- 🔥 **Firebase Integration** - Firestore, Authentication, Storage
- 📝 **Dynamic Content** - Publications system dengan Firestore
- 🎯 **SEO Optimized** - Metadata dan semantic HTML

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Firebase (Firestore, Auth, Storage)
- **Hosting:** Vercel (Frontend) + Firebase (Backend)
- **Version Control:** Git & GitHub

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm atau yarn
- Firebase account
- Git

### Installation

1. **Clone repository**

```bash
git clone https://github.com/kuntinajma/personal-website.git
cd personal-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Setup Firebase**

- Buka [Firebase Console](https://console.firebase.google.com)
- Create new project atau gunakan existing project
- Register web app dan copy configuration
- Enable Firestore Database
- Enable Authentication (optional)
- Enable Storage (optional)

4. **Configure environment variables**

Copy `.env.example` ke `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` dan isi dengan Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

5. **Run development server**

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📁 Project Structure

```
personal-website/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── page.tsx         # Homepage
│   │   ├── layout.tsx       # Root layout
│   │   ├── globals.css      # Global styles
│   │   ├── about/           # About page
│   │   ├── research/        # Research page
│   │   ├── publications/    # Publications page
│   │   ├── projects/        # Projects page
│   │   └── contact/         # Contact page
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── lib/                 # Utilities & configs
│       └── firebase.ts      # Firebase configuration
├── public/                  # Static assets
├── .env.example             # Environment variables template
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 📦 Adding Publications to Firestore

Untuk menambahkan publikasi, buat collection `publications` di Firestore dengan struktur:

```javascript
{
  title: "Paper Title",
  authors: "Author 1, Author 2",
  year: 2024,
  venue: "Conference/Journal Name",
  type: "Conference Paper" | "Journal Article" | "Working Paper",
  abstract: "Short description...",
  url: "https://link-to-paper.com" // optional
}
```

### Cara menambahkan via Firebase Console:

1. Buka Firebase Console → Firestore Database
2. Klik "Start collection"
3. Collection ID: `publications`
4. Add document dengan field di atas
5. Refresh halaman Publications di website

## 🚀 Deployment ke Vercel

### Via Vercel Dashboard (Recommended)

1. Push code ke GitHub (sudah dilakukan)
2. Login ke [Vercel](https://vercel.com)
3. Klik "New Project" atau "Add New..."
4. Import repository `kuntinajma/personal-website`
5. **Configure Environment Variables:**
   - Klik "Environment Variables"
   - Tambahkan semua variable dari `.env.local`
6. Klik "Deploy"
7. Tunggu 2-3 menit, website akan live!

### Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Follow the prompts dan jangan lupa add environment variables di dashboard.

## 🔧 Development

### Available Scripts

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

### Adding New Pages

1. Buat folder baru di `src/app/page-name/`
2. Buat file `page.tsx`
3. Export default component
4. Update Navbar links di `src/components/Navbar.tsx`

### Styling Guidelines

- Gunakan Tailwind CSS utility classes
- Maintain consistent spacing (px-4, py-16, mb-8, etc.)
- Stick to color palette: gray scale + accent colors
- Ensure responsive design (use md: breakpoints)

## 🔒 Security

- `.env.local` **JANGAN** di-commit ke Git (sudah ada di `.gitignore`)
- Firebase Security Rules harus di-setup untuk production
- Update Firestore rules dari test mode ke production mode sebelum launch

### Firebase Security Rules Example:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Publications - read only
    match /publications/{document} {
      allow read: if true;
      allow write: if request.auth != null; // Only authenticated users
    }
  }
}
```

## 📝 Customization

### Update Personal Information

- **Name & Bio:** Edit `src/app/page.tsx`
- **About page:** Edit `src/app/about/page.tsx`
- **Contact info:** Edit `src/app/contact/page.tsx`
- **Footer links:** Edit `src/components/Footer.tsx`

### Change Color Scheme

Edit `tailwind.config.ts` untuk customize colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // Add custom colors
    },
  },
}
```

## 📊 Future Enhancements

- [ ] Blog system dengan MDX
- [ ] Admin dashboard untuk manage content
- [ ] Contact form dengan Firebase Functions
- [ ] Search functionality
- [ ] Dark mode toggle
- [ ] Analytics integration
- [ ] RSS feed
- [ ] Multi-language support (ID/EN)

## 👥 Contributing

Ini adalah personal website, namun feedback dan suggestions sangat diterima!

## 📝 License

MIT License - Feel free to use this as template untuk website Anda sendiri.

## 🚀 Author

**Najma**
- GitHub: [@kuntinajma](https://github.com/kuntinajma)
- Website: [Coming soon after deployment]

---

**Built with ❤️ using Next.js and Firebase**