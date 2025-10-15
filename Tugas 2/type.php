<?php
/**
 * Tugas 2 - String Concatenation (PHP/Lumen Version)
 * Program sederhana untuk menggabungkan 4 variabel string
 * Author: Wildan Miladji
 * 
 * Requirement:
 * - Menggabungkan 4 variabel string menjadi satu kalimat
 * - Output: "MAQDIS Academy is awesome"
 */

/**
 * Class untuk handle string concatenation
 * Dibuat menggunakan OOP untuk konsistensi dengan style project lain
 */
class StringConcatenator {
    
    // Properties untuk menyimpan variabel string
    private $variable1 = "MAQDIS";
    private $variable2 = 'Academy';
    private $variable3 = 'is';
    private $variable4 = 'awesome';
    
    /**
     * Fungsi untuk menggabungkan semua variabel string
     * Menggunakan string interpolation untuk code yang lebih clean
     * @return string - Kalimat hasil gabungan
     */
    public function concatenateStrings() {
        return "$this->variable1 $this->variable2 $this->variable3 $this->variable4";
    }
    
    /**
     * Alternatif concatenation menggunakan operator dot
     * Untuk menunjukkan berbagai cara menggabungkan string di PHP
     * @return string - Kalimat hasil gabungan
     */
    public function concatenateWithDot() {
        return $this->variable1 . " " . $this->variable2 . " " . $this->variable3 . " " . $this->variable4;
    }
    
    /**
     * Getter untuk akses variabel dari luar class
     * @return array - Array berisi semua variabel
     */
    public function getVariables() {
        return [
            'variable1' => $this->variable1,
            'variable2' => $this->variable2,
            'variable3' => $this->variable3,
            'variable4' => $this->variable4
        ];
    }
    
    /**
     * Fungsi utama untuk menjalankan program
     */
    public function run() {
        // Generate kalimat hasil gabungan
        $sentence = $this->concatenateStrings();
        
        // Output hasil ke console
        echo $sentence . "\n";
        
        // Bonus: tampilkan alternatif method juga
        $sentence_alt = $this->concatenateWithDot();
        echo "Alternative method: " . $sentence_alt . "\n";
    }
}

// Jalankan program jika file ini dieksekusi langsung
if (php_sapi_name() === 'cli') {
    $concatenator = new StringConcatenator();
    $concatenator->run();
}

?>