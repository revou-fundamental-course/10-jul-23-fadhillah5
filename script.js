function hitungBMI() {
    var beratBadan = document.getElementById("beratbadan").value;
    var tinggiBadan = document.getElementById("tinggibadan").value;
    var jenisKelamin = document.getElementById("jenisKelamin").value;
    var umur = document.getElementById("umur").value;

    // Konversi ke tipe data numerik
    beratBadan = parseFloat(beratBadan);
    tinggiBadan = parseFloat(tinggiBadan);
    umur = parseInt(umur);

    // Validasi input
    if (isNaN(beratBadan) || isNaN(tinggiBadan) || isNaN(umur)) {
      alert("Masukkan angka yang valid!");
      return;
    }

    // Mengubah tinggi menjadi meter
    tinggiBadan = tinggiBadan / 100;

    // Menghitung BMI
    var bmi = beratBadan / (tinggiBadan * tinggiBadan);

    // Menampilkan hasil BMI
    document.getElementById("hasil").innerHTML = "BMI Anda adalah: <br>" + bmi.toFixed(2);

    // Menampilkan kategori dan keterangan diet
    var kategori = "";
    var keterangan = "";

    if (bmi < 18.5) {
      kategori = "Kekurangan berat badan";
      keterangan = "Anda berada di bawah berat badan normal. Disarankan untuk konsultasi dengan dokter atau ahli gizi.";
    } else if (bmi >= 18.5 && bmi<= 24.9 ) {
      kategori = "Normal (ideal)";
      keterangan = "Berat badan Anda berada dalam rentang normal. Tetap jaga pola makan sehat dan rutin berolahraga.";
    } else if (bmi >= 25.0 && bmi<= 29.9) {
      kategori = "Kelebihan berat badan";
      keterangan = "Anda memiliki kelebihan berat badan. Disarankan untuk mengatur pola makan dan meningkatkan aktivitas fisik.";
    } else {
      kategori = "Kegemukan (Obesitas)";
      keterangan = "Anda mengalami kegemukan. Penting untuk berkonsultasi dengan dokter atau ahli gizi untuk perencanaan diet yang tepat.";
    }

    document.getElementById("kategori").innerHTML = "Kategori BMI Anda: " + kategori;
    document.getElementById("keterangan").innerHTML = "Keterangan: " + keterangan;
  }
 
      
  function resetForm() {
    document.getElementById("beratbadan").value = "";
    document.getElementById("tinggibadan").value = "";
    document.getElementById("jenisKelamin").value = "Laki-laki";
    document.getElementById("umur").value = "";
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("kategori").innerHTML = "";
    document.getElementById("keterangan").innerHTML = "";
  }


