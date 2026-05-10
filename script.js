const pokeName = document.getElementById('poke-name');
const pokeImg = document.getElementById('poke-img');
const pokeType = document.getElementById('poke-type');
const btn = document.getElementById('btn-generate');

async function getPokemon() {
    // Menghasilkan ID acak 1-151
    const randomId = Math.floor(Math.random() * 151) + 1;
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();

        // Update UI
        pokeName.textContent = data.name.toUpperCase();
        pokeImg.src = data.sprites.other['official-artwork'].front_default;
        pokeType.textContent = data.types.map(t => t.type.name).join(', ');
        
    } catch (error) {
        console.error("Gagal mengambil data:", error);
    }
}

// Jalankan fungsi saat tombol diklik
btn.addEventListener('click', getPokemon);

// Jalankan sekali saat halaman dimuat
getPokemon();
