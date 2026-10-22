/* =====================================================================
   js/goal-data.js  —  Sumber data REKOD PENCAPAIAN (Gerak Kerja)
   Anda kemaskini fail ini secara manual di GitHub. Halaman hanya MEMBACA data ini.

   CARA TAMBAH REKOD: salin satu blok, tampal di dalam senarai REKOD
   (jangan lupa koma di antara blok), dan isi nilai sebenar.

   {
     tarikh: "2026-10-22",            // format WAJIB: TAHUN-BULAN-HARI
     servicing: { jumlah: 0, catatan: "" },   // dot hijau
     content:   { jumlah: 0, catatan: "" },   // Content Marketing -> dot emas
     live:      { jumlah: 0, catatan: "" },   // dot merah jambu
     catatan: ""                      // catatan am (pilihan)
   }

   PERATURAN:
   - Satu kategori dikira WUJUD (dan dot dipaparkan) jika jumlah > 0 atau ada catatan.
   - Kategori yang tiada rekod boleh dibuang terus daripada blok.
   - Satu tarikh sepatutnya satu blok sahaja. Jika ada dua blok pada tarikh
     yang sama, jumlah digabungkan dan catatan disambung.
   ===================================================================== */
window.REKOD = [
  {
    tarikh: "2026-10-22",
    servicing: { jumlah: 22, catatan: "" },
    content:   { jumlah: 2,  catatan: "" },
    live:      { jumlah: 1,  catatan: "" }
  }
];
