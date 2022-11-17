### 3 Poin yang dipelajari pada materi Testing 
- Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. **Test assertions** ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita. Manfaat testing antara lain,
    - Ketika aplikasi kita mempunyai coverage yang baik, kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya.
    - Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.
- Kategori testing secara umum ada dua,
    - **Rendering component trees** di dalam environtment tes yang sudah disederhanakan dan ditegaskan pada keluarannya. Kita akan fokus pada bagian ini.
    - **Menjalankan aplikasi** lengkap di dalam environtment peramban(browser) asli. Ini dikenal sebagai tes "end-to-end"
  
  Pertimbangan memilih perkakas nya dapat dilihat di poin berikut,
    - Kecepatan iterasi vs environtment yang realistis
    - Seberapa banyak mock.
  
  Rekomendasi toolsnya antara lain,
    - Jest
    - React Testing Library
  
  Biasanya 2 tools tersebut sudah built-in ketika kita install react-app nya.

- **Render dan Debug**, fungsi render RTL akan merender file jsx apapun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file jsx sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil fungsi render RTL. **Memilih Elemen**, React testing library menawarkan berbagai fungsi untuk mendapatkan elemen. Elemen selanjutnya digunakan untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL. Untuk mengetes custom hook, kita menggunakan **React Hooks Testing Library**. Dia akan memberikan kita alat alat untuk mengetes hooks tanpa merender satu komponen.