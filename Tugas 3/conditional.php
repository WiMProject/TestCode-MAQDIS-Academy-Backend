<?php
/**
 * Tugas 3 - Conditional Logic & Werewolf Game (PHP/Lumen Version)
 * Program sederhana untuk validasi input nama dan peran werewolf
 * Author: Wildan Miladji
 * 
 * Fitur:
 * - Input validation nama dan peran
 * - Conditional logic untuk response game
 * - Error handling yang proper
 * - Clean code structure
 */

/**
 * Class untuk handle werewolf game logic
 * Dibuat menggunakan OOP untuk struktur yang lebih terorganisir dan mudah di-maintain
 */
class WerewolfGame {
    
    /**
     * Array konstanta untuk menyimpan pesan setiap peran
     * Private property agar tidak dapat diakses dari luar
     */
    private $roles = [
        'penyihir' => 'kamu dapat melihat siapa yang menjadi werewolf!',
        'guard' => 'kamu akan membantu melindungi temanmu dari serangan werewolf.',
        'werewolf' => 'Kamu akan memakan mangsa setiap malam!'
    ];
    
    /**
     * Fungsi untuk validasi input dari user
     * Mengecek apakah nama dan peran sudah diisi atau belum
     * @param string $nama - Nama pemain
     * @param string $peran - Peran yang dipilih
     * @return string|null - Error message atau null jika valid
     */
    public function validateInput($nama, $peran) {
        // Cek nama kosong atau hanya spasi
        if (empty(trim($nama))) {
            return "Nama harus diisi!";
        }
        
        // Jika nama ada tapi peran kosong
        if (empty(trim($peran))) {
            return "Halo $nama, Pilih peranmu untuk memulai game!";
        }
        
        // Jika semua valid, return null
        return null;
    }
    
    /**
     * Fungsi untuk generate pesan sesuai peran yang dipilih
     * Normalize input untuk case insensitive
     * @param string $nama - Nama pemain
     * @param string $peran - Peran yang dipilih
     * @return string|null - Role message atau null jika peran tidak valid
     */
    public function getRoleMessage($nama, $peran) {
        // Normalize peran menjadi lowercase untuk case insensitive
        $normalizedRole = strtolower(trim($peran));
        
        // Cek apakah peran ada di array roles
        if (!isset($this->roles[$normalizedRole])) {
            return null;
        }
        
        $roleMessage = $this->roles[$normalizedRole];
        
        // Capitalize first letter untuk tampilan yang rapi
        $capitalizedRole = ucfirst(strtolower($peran));
        return "Halo $capitalizedRole $nama, $roleMessage";
    }
    
    /**
     * Fungsi untuk ambil input dari user dengan prompt
     * @param string $prompt - Text yang ditampilkan ke user
     * @return string - Input dari user
     */
    private function getInput($prompt) {
        echo $prompt;
        return trim(fgets(STDIN));
    }
    
    /**
     * Fungsi utama untuk menjalankan game
     * Main logic berada di sini
     */
    public function run() {
        try {
            // Ambil input nama dari user
            $nama = $this->getInput('Masukkan nama: ');
            
            // Ambil input peran dari user
            $peran = $this->getInput('Masukkan peran: ');
            
            // Validasi input terlebih dahulu sebelum proses
            $validationError = $this->validateInput($nama, $peran);
            if ($validationError) {
                echo $validationError . "\n";
                return; // Keluar dari fungsi jika ada error
            }
            
            // Jika validasi lolos, tampilkan welcome message
            echo "Selamat datang di Dunia Werewolf, $nama\n";
            
            // Generate dan tampilkan pesan sesuai peran
            $roleMessage = $this->getRoleMessage($nama, $peran);
            if ($roleMessage) {
                echo $roleMessage . "\n";
            }
            
        } catch (Exception $e) {
            // Handle error jika ada yang unexpected
            echo "Error: " . $e->getMessage() . "\n";
        }
    }
}

// Jalankan program jika file ini dieksekusi langsung
if (php_sapi_name() === 'cli') {
    $game = new WerewolfGame();
    $game->run();
}

?>