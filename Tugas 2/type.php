<?php
// Tugas 2 - String Concatenation
// Menggabungkan 4 variabel string menjadi satu kalimat

$variable1 = "MAQDIS";
$variable2 = 'Academy';
$variable3 = 'is';
$variable4 = 'awesome';

// Menggabungkan variabel menjadi satu kalimat
$sentence = $variable1 . " " . $variable2 . " " . $variable3 . " " . $variable4;

// Output hasil
echo $sentence . "\n";

// Alternatif menggunakan interpolation
$sentence_alt = "$variable1 $variable2 $variable3 $variable4";
echo "Alternative: " . $sentence_alt . "\n";
?>