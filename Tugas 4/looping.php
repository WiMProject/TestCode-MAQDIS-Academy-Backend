<?php
/**
 * Tugas 4 - Looping Implementation (PHP/Lumen Version)
 * Program untuk demonstrasi looping maju dan mundur dengan bilangan genap
 * Author: Wildan Miladji
 * 
 * Requirement:
 * - Looping pertama: For loop maju 2-20 (genap)
 * - Looping kedua: While loop mundur 20-2 (genap)
 * - Output dengan pesan yang berbeda
 */

/**
 * Class untuk handle looping operations
 * Dibuat menggunakan OOP untuk konsistensi dengan style project lain
 */
class LoopingDemo {
    
    /**
     * Konstanta untuk pesan output
     * Private properties agar tidak dapat diakses dari luar
     */
    private $messages = [
        'forward' => 'I love coding',
        'backward' => 'I will become a mobile developer'
    ];
    
    /**
     * Fungsi untuk looping maju menggunakan for loop
     * Menampilkan bilangan genap dari 2 sampai 20
     */
    public function forwardLoop() {
        echo "LOOPING PERTAMA\n";
        
        // For loop untuk increment bilangan genap
        for ($i = 2; $i <= 20; $i += 2) {
            echo "$i - {$this->messages['forward']}\n";
        }
    }
    
    /**
     * Fungsi untuk looping mundur menggunakan while loop
     * Menampilkan bilangan genap dari 20 sampai 2
     */
    public function backwardLoop() {
        echo "LOOPING KEDUA\n";
        
        // While loop untuk decrement bilangan genap
        $j = 20;
        while ($j >= 2) {
            echo "$j - {$this->messages['backward']}\n";
            $j -= 2; // Kurangi 2 untuk tetap genap
        }
    }
    
    /**
     * Fungsi utama untuk menjalankan semua looping
     * Memanggil kedua fungsi looping secara berurutan
     */
    public function run() {
        try {
            $this->forwardLoop();
            $this->backwardLoop();
        } catch (Exception $e) {
            echo "Error during looping: " . $e->getMessage() . "\n";
        }
    }
    
    /**
     * Getter untuk akses messages dari luar class (untuk testing)
     * @return array - Array berisi pesan-pesan
     */
    public function getMessages() {
        return $this->messages;
    }
}

// Jalankan program jika file ini dieksekusi langsung
if (php_sapi_name() === 'cli') {
    $demo = new LoopingDemo();
    $demo->run();
}

?>