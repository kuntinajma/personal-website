// Main JavaScript file for interactivity
import { db, collection, getDocs, query, orderBy, limit } from './firebase-config.js';

// ================================================
// NAVIGATION
// ================================================

// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// ================================================
// FIREBASE DATA LOADING
// ================================================

// Load highlight content
async function loadHighlights() {
    const highlightContent = document.getElementById('highlightContent');
    
    try {
        // Try to load from Firebase
        const q = query(collection(db, 'highlights'), orderBy('order'), limit(4));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
            // Show placeholder if no data
            highlightContent.innerHTML = `
                <div class="highlight-card">
                    <h3>Belum ada konten</h3>
                    <p class="meta">Highlight akan muncul di sini</p>
                    <p>Setup Firebase dan tambahkan data ke collection 'highlights'</p>
                </div>
            `;
            return;
        }
        
        highlightContent.innerHTML = '';
        querySnapshot.forEach(doc => {
            const data = doc.data();
            const card = createHighlightCard(data);
            highlightContent.appendChild(card);
        });
        
    } catch (error) {
        console.error('Error loading highlights:', error);
        // Show error message if Firebase not configured
        highlightContent.innerHTML = `
            <div class="highlight-card">
                <h3>⚠️ Firebase belum dikonfigurasi</h3>
                <p>Silakan update Firebase credentials di <code>js/firebase-config.js</code></p>
                <p class="meta">Untuk sementara, website akan menampilkan konten statis.</p>
            </div>
        `;
    }
}

// Create highlight card element
function createHighlightCard(data) {
    const card = document.createElement('div');
    card.className = 'highlight-card';
    card.innerHTML = `
        <h3>${data.title}</h3>
        <p class="meta">${data.category} · ${data.date || 'Recent'}</p>
        <p>${data.description}</p>
        ${data.link ? `<a href="${data.link}" class="btn-text">Selengkapnya →</a>` : ''}
    `;
    return card;
}

// ================================================
// INITIALIZATION
// ================================================

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Website loaded successfully!');
    
    // Load Firebase data
    loadHighlights();
    
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Export functions for use in other modules
export { loadHighlights };