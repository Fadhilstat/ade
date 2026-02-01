// --- DATA GALLERY (7 Kategori x 5 Foto = 35 Item) ---
const memories = [
    // CAT 1: Mini Mania
    { id: 1, cat: "Mini Mania", title: "Naik Kapal", desc: "Kita sedang naik kapal", url: "images/Korea1.jfif" },
    { id: 2, cat: "Mini Mania", title: "Ade Cantik Banget", desc: "Seru banget", url: "images/Korea2.jfif" },
    { id: 3, cat: "Mini Mania", title: "Selfie Time", desc: "Ade masyaallah banget.", url: "images/Korea3.jfif" },
    { id: 4, cat: "Mini Mania", title: "Pose Lucu", desc: "Selain posenya, ade  lucu banget", url: "images/Korea4.jfif" },
    { id: 5, cat: "Mini Mania", title: "Berasa Prewed", desc: "Masyaallah bismillah prewed di korea aamiin.", url: "images/Korea5.jfif" },

    // CAT 2: Traveling
    { id: 6, cat: "Traveling", title: "Mendayung", desc: "Mas dan ade mendayung", url: "images/Seribu1.jfif" },
    { id: 7, cat: "Traveling", title: "Ade di Perahu", desc: "Masyaallah ade cantiknya.", url: "images/Seribu2.jfif" },
    { id: 8, cat: "Traveling", title: "Pantai", desc: "Kita selfie di pinggir pantai.", url: "images/Seribu3.jfif" },
    { id: 9, cat: "Traveling", title: "Dalam Kapal", desc: "Ade selfie lucu banget", url: "images/Seribu4.jfif" },
    { id: 10, cat: "Traveling", title: "Dalam Kapal 2", desc: "Senyum ade masyaallah", url: "images/Seribu5.jfif" },

    // CAT 3: Simple but Meaningful
    { id: 11, cat: "Simple but Meaningful", title: "Bunga", desc: "Cantiknya ade mengalahkan keindahan bunga", url: "images/Simple1.jfif" },
    { id: 12, cat: "Simple but Meaningful", title: "Lucuk", desc: "Senyum ade masyaallah banget", url: "images/Simple2.jfif" },
    { id: 13, cat: "Simple but Meaningful", title: "GEmesh", desc: "Masyaallah ade", url: "images/Simple3.jfif" },
    { id: 14, cat: "Simple but Meaningful", title: "Glasees", desc: "Ade lucu banget kacamatanya", url: "images/Simple4.jfif" },
    { id: 15, cat: "Simple but Meaningful", title: "Glasees 2", desc: "Ade lucu banget kacamatanya plis", url: "images/Simple4.jfif" },

    // CAT 4: Margo
    { id: 16, cat: "Margo", title: "Photobox", desc: "Lucu banget", url: "images/Nonton1.jfif" },
    { id: 17, cat: "Margo", title: "Another Photobox", desc: "Masyaallah", url: "images/Nonton2.jfif" },
    { id: 18, cat: "Margo", title: "Avatar", desc: "Ade lucu banget", url: "images/Nonton3.jfif" },
    { id: 19, cat: "Margo", title: "Another Avatar", desc: "Sumpah ade masyaallah cantiknya", url: "images/Nonton4.jfif" },
    { id: 20, cat: "Margo", title: "Other Avatar", desc: "Ini gila ade cantiknya masyaallah", url: "images/Nonton5.jfif" },

    // CAT 5: Food
    { id: 21, cat: "Food", title: "Pose Gemes", desc: "Ade lucu banget ci", url: "images/Makan1.jfif" },
    { id: 22, cat: "Food", title: "Wide Angle", desc: "Gemasnya ade masyaallah", url: "images/Makan2.jfif" },
    { id: 23, cat: "Food", title: "Another Wide Angle", desc: "Ade super duper menggemaskan", url: "images/Makan3.jfif" },
    { id: 24, cat: "Food", title: "Gemes", desc: "Masyaallah senyuman ade", url: "images/Makan3.jfif" },
    { id: 25, cat: "Food", title: "Dari Atas", desc: "Ade ucul banget", url: "images/Makan5.jfif" },

];

// RENDER GALLERY
const grid = document.getElementById('gallery-root');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalCat = document.getElementById('modal-category');
const relatedRow = document.getElementById('related-images');

function init() {
    grid.innerHTML = '';
    memories.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        // Animasi muncul berurutan
        card.style.animation = `popUp 0.5s ease backwards ${index * 0.05}s`;
        
        card.innerHTML = `
            <img src="${item.url}" alt="${item.title}" loading="lazy">
            <div class="card-overlay">
                <span class="card-cat">${item.cat}</span>
                <span class="card-title">${item.title}</span>
            </div>
        `;
        card.onclick = () => openModal(item);
        grid.appendChild(card);
    });
}

function openModal(data) {
    modal.style.display = 'block';
    modalImg.src = data.url;
    modalTitle.innerText = data.title;
    modalDesc.innerText = data.desc;
    modalCat.innerText = data.cat;

    // Filter Related
    const related = memories.filter(m => m.cat === data.cat && m.id !== data.id).slice(0,4);
    relatedRow.innerHTML = '';
    
    if(related.length === 0) relatedRow.innerHTML = '<p style="color:#888; font-size:0.9rem;">Tidak ada foto lain di kategori ini.</p>';

    related.forEach(rel => {
        const thumb = document.createElement('img');
        thumb.src = rel.url;
        thumb.className = 'related-thumb';
        thumb.onclick = (e) => {
            e.stopPropagation();
            openModal(rel);
        }
        relatedRow.appendChild(thumb);
    });
}

// Close Modal Logic
document.querySelector('.close-modal').onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }

// Background Hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart-float';
    heart.innerText = ['❤️','💖','💕','✨'][Math.floor(Math.random()*4)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 5 + 's';
    heart.style.fontSize = Math.random() * 15 + 10 + 'px';
    document.getElementById('heart-bg').appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 500);

// Run
init();



