// --- DATA GALLERY (7 Kategori x 5 Foto = 35 Item) ---
const memories = [
    // CAT 1: Mini Mania
    { id: 1, cat: "Mini Mania", title: "Naik Kapal", desc: "Kita sedang naik kapal", url: "images/Korea1.jfif" },
    { id: 2, cat: "Mini Mania", title: "Ade Cantik Banget", desc: "Seru banget", url: "images/Korea2.jfif" },
    { id: 3, cat: "Mini Mania", title: "Selfie Time", desc: "Ade masyaallah banget.", url: "images/Korea3.jfif" },
    { id: 4, cat: "Mini Mania", title: "Pose Lucu", desc: "Selain posenya, ade  lucu banget", url: "images/Korea4.jfif" },
    { id: 5, cat: "Mini Mania", title: "Berasa Prewed", desc: "Masyaallah bismillah prewed di korea aamiin.", url: "images/Korea5.jfif" },

    // CAT 2: Traveling
    { id: 6, cat: "Traveling", title: "Pantai", desc: "Pasir putih.", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600" },
    { id: 7, cat: "Traveling", title: "Gunung", desc: "Dingin banget.", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600" },
    { id: 8, cat: "Traveling", title: "Roadtrip", desc: "Nyanyi di mobil.", url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600" },
    { id: 9, cat: "Traveling", title: "Kota Tua", desc: "Jalan-jalan sejarah.", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" },
    { id: 10, cat: "Traveling", title: "Camping", desc: "Api unggun.", url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600" },

    // CAT 3: Kuliner
    { id: 11, cat: "Kuliner", title: "Pizza", desc: "Enak banget.", url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600" },
    { id: 12, cat: "Kuliner", title: "Ice Cream", desc: "Manis.", url: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600" },
    { id: 13, cat: "Kuliner", title: "Sushi", desc: "Favorit kamu.", url: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=600" },
    { id: 14, cat: "Kuliner", title: "Street Food", desc: "Jajan terus.", url: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600" },
    { id: 15, cat: "Kuliner", title: "Fine Dining", desc: "Sekali-kali.", url: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?w=600" },

    // CAT 4: Random
    { id: 16, cat: "Random", title: "Ketawa", desc: "Lucu banget.", url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600" },
    { id: 17, cat: "Random", title: "Topeng", desc: "Iseng.", url: "https://images.unsplash.com/photo-1531747056595-07f6cbbe10fd?w=600" },
    { id: 18, cat: "Random", title: "Hujan", desc: "Neduh.", url: "https://images.unsplash.com/photo-1519699047748-40ba52c79303?w=600" },
    { id: 19, cat: "Random", title: "Filter IG", desc: "Aneh.", url: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600" },
    { id: 20, cat: "Random", title: "Joget", desc: "Tiktokan.", url: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=600" },

    // CAT 5: Special Days
    { id: 21, cat: "Special", title: "Ultah", desc: "Happy Birthday.", url: "https://images.unsplash.com/photo-1530103862676-de3c9da59af7?w=600" },
    { id: 22, cat: "Special", title: "Anniv", desc: "Happy Anniv.", url: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600" },
    { id: 23, cat: "Special", title: "New Year", desc: "Kembang api.", url: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=600" },
    { id: 24, cat: "Special", title: "Lebaran", desc: "Maaf lahir batin.", url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600" },
    { id: 25, cat: "Special", title: "Wisuda", desc: "Congrats.", url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600" },

    // CAT 6: Pets
    { id: 26, cat: "Pets", title: "Kucing", desc: "Meow.", url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600" },
    { id: 27, cat: "Pets", title: "Tidur", desc: "Zzz.", url: "https://images.unsplash.com/photo-1541781777631-faaf4b22b950?w=600" },
    { id: 28, cat: "Pets", title: "Main", desc: "Lari-lari.", url: "https://images.unsplash.com/photo-1495360019602-e001922a4452?w=600" },
    { id: 29, cat: "Pets", title: "Makan", desc: "Laper.", url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600" },
    { id: 30, cat: "Pets", title: "Lucu", desc: "Gemoy.", url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600" },

    // CAT 7: Aesthetics
    { id: 31, cat: "Aesthetic", title: "Bunga", desc: "Cantik.", url: "https://images.unsplash.com/photo-1490750967868-58cb75069ed6?w=600" },
    { id: 32, cat: "Aesthetic", title: "Langit", desc: "Senja.", url: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600" },
    { id: 33, cat: "Aesthetic", title: "Jalan", desc: "Sepi.", url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600" },
    { id: 34, cat: "Aesthetic", title: "Kopi", desc: "Pahit.", url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600" },
    { id: 35, cat: "Aesthetic", title: "Buku", desc: "Membaca.", url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600" }
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

