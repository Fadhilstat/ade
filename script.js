/* DATA MEMORI
  Total: 7 Kategori x 5 Foto = 35 Foto
  Ganti "url" dengan path foto kamu, misal: "images/foto1.jpg"
*/
const memories = [
    // --- KATEGORI 1: AWAL KETEMU (First Dates) ---
    { id: 1, category: "First Dates", title: "Kopi Pertama", desc: "Masih malu-malu kucing di sini.", url: "https://images.unsplash.com/photo-1516589174184-c68526614460?w=600" },
    { id: 2, category: "First Dates", title: "Nonton Bioskop", desc: "Filmnya jelek, tapi temennya asik.", url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600" },
    { id: 3, category: "First Dates", title: "Jalan Sore", desc: "Sore itu langitnya bagus banget.", url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600" },
    { id: 4, category: "First Dates", title: "Makan Malam", desc: "Pura-pura diet padahal laper.", url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600" },
    { id: 5, category: "First Dates", title: "Foto Box", desc: "Hasil foto box pertama kita.", url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600" },

    // --- KATEGORI 2: TRAVELING (Jalan-Jalan) ---
    { id: 6, category: "Traveling", title: "Ke Pantai", desc: "Pasir dimana-mana!", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600" },
    { id: 7, category: "Traveling", title: "Naik Gunung", desc: "Dingin tapi seru.", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600" },
    { id: 8, category: "Traveling", title: "Roadtrip", desc: "Nyasar bareng adalah hobi kita.", url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600" },
    { id: 9, category: "Traveling", title: "Staycation", desc: "Rebahan seharian.", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" },
    { id: 10, category: "Traveling", title: "Museum Date", desc: "Sok ngerti seni.", url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600" },

    // --- KATEGORI 3: KULINER (Makan-Makan) ---
    { id: 11, category: "Foodie", title: "Pizza Night", desc: "Berebut potongan terakhir.", url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600" },
    { id: 12, category: "Foodie", title: "Ice Cream", desc: "Manis, kayak kamu.", url: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600" },
    { id: 13, category: "Foodie", title: "Masak Bareng", desc: "Dapur berantakan tapi happy.", url: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=600" },
    { id: 14, category: "Foodie", title: "Street Food", desc: "Jajan pinggir jalan terbaik.", url: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600" },
    { id: 15, category: "Foodie", title: "Fancy Dinner", desc: "Sekali-kali gaya dikit.", url: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?w=600" },

    // --- KATEGORI 4: HAL KONYOL (Silly Moments) ---
    { id: 16, category: "Silly Moments", title: "Muka Jelek", desc: "Kompetisi muka terjelek.", url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600" },
    { id: 17, category: "Silly Moments", title: "Topeng", desc: "Mainan di toko mainan.", url: "https://images.unsplash.com/photo-1531747056595-07f6cbbe10fd?w=600" },
    { id: 18, category: "Silly Moments", title: "Kehujanan", desc: "Basah kuyup tapi ketawa.", url: "https://images.unsplash.com/photo-1519699047748-40ba52c79303?w=600" },
    { id: 19, category: "Silly Moments", title: "Filter IG", desc: "Korban filter aneh.", url: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600" },
    { id: 20, category: "Silly Moments", title: "Dance", desc: "Joget gak jelas.", url: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=600" },

    // --- KATEGORI 5: PERAYAAN (Celebrations) ---
    { id: 21, category: "Celebrations", title: "Ulang Tahunmu", desc: "Selamat ulang tahun sayang!", url: "https://images.unsplash.com/photo-1530103862676-de3c9da59af7?w=600" },
    { id: 22, category: "Celebrations", title: "Ulang Tahunku", desc: "Makasih kado-nya.", url: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600" },
    { id: 23, category: "Celebrations", title: "Anniversary", desc: "Satu tahun yang indah.", url: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=600" },
    { id: 24, category: "Celebrations", title: "Lebaran/Natal", desc: "Edisi baju seragam.", url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600" },
    { id: 25, category: "Celebrations", title: "Wisuda", desc: "Bangga banget sama kamu.", url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600" },
    
    // --- KATEGORI 6: KUCING/HEWAN (Pets) ---
    { id: 26, category: "Pets", title: "Si Meng", desc: "Kucing kita yang lucu.", url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600" },
    { id: 27, category: "Pets", title: "Tidur", desc: "Hobinya tidur mulu.", url: "https://images.unsplash.com/photo-1541781777631-faaf4b22b950?w=600" },
    { id: 28, category: "Pets", title: "Main", desc: "Lagi ngejar tikus mainan.", url: "https://images.unsplash.com/photo-1495360019602-e001922a4452?w=600" },
    { id: 29, category: "Pets", title: "Selfie", desc: "Ikutan eksis.", url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600" },
    { id: 30, category: "Pets", title: "Makan", desc: "Laper terus.", url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600" },

    // --- KATEGORI 7: RANDOM AESTHETIC ---
    { id: 31, category: "Random", title: "Bunga", desc: "Bunga yang kamu kasih.", url: "https://images.unsplash.com/photo-1490750967868-58cb75069ed6?w=600" },
    { id: 32, category: "Random", title: "Langit", desc: "Langit sore itu.", url: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600" },
    { id: 33, category: "Random", title: "Jalanan", desc: "Perjalanan pulang.", url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600" },
    { id: 34, category: "Random", title: "Kopi", desc: "Kopi pagi.", url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600" },
    { id: 35, category: "Random", title: "Buku", desc: "Baca bareng.", url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600" }
];

// 1. RENDER MASONRY GALLERY
const grid = document.getElementById('gallery-root');

function renderGallery() {
    grid.innerHTML = '';
    memories.forEach((memory, index) => {
        // Buat elemen div untuk setiap foto
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        
        // Animasi muncul bertahap (delay)
        item.style.animation = `popIn 0.5s ease backwards ${index * 0.1}s`;

        item.innerHTML = `
            <img src="${memory.url}" alt="${memory.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${memory.title}</h3>
            </div>
        `;
        
        // Tambah event klik
        item.onclick = () => openModal(memory);
        grid.appendChild(item);
    });
}

// 2. MODAL & RELATED LOGIC
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalTag = document.getElementById('modal-tag');
const relatedGrid = document.getElementById('related-images');

function openModal(data) {
    modal.style.display = "block";
    modalImg.src = data.url;
    modalTitle.innerText = data.title;
    modalDesc.innerText = data.desc;
    modalTag.innerText = data.category;

    // Filter gambar terkait (Category sama, tapi bukan gambar yang sedang dibuka)
    const related = memories.filter(m => m.category === data.category && m.id !== data.id);
    
    // Render related thumbnails
    relatedGrid.innerHTML = '';
    if(related.length === 0) relatedGrid.innerHTML = '<p style="color:#999; font-style:italic;">Tidak ada foto lain di kategori ini.</p>';
    
    related.forEach(rel => {
        const thumb = document.createElement('img');
        thumb.src = rel.url;
        thumb.classList.add('related-thumb');
        thumb.onclick = (e) => {
            e.stopPropagation(); // Mencegah modal tertutup saat klik thumbnail
            openModal(rel); // Buka foto terkait
        };
        relatedGrid.appendChild(thumb);
    });
}

// Tombol Close
document.querySelector('.close-modal').onclick = () => modal.style.display = "none";
window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
}

// 3. BACKGROUND HEARTS ANIMATION
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-floating');
    heart.innerHTML = '❤️'; // Bisa diganti '💖', '💕', dll
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's'; // 4-7 detik
    heart.style.fontSize = Math.random() * 10 + 20 + 'px';
    
    document.getElementById('heart-container').appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 6000);
}
setInterval(createHeart, 400); // Muncul setiap 0.4 detik

// Start!
renderGallery();