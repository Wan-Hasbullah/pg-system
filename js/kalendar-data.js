/* =====================================================================
   KALENDAR-DATA.JS  —  My Center
   Ubah makluman di fail ini sahaja. Simpan dalam folder "js".
   tarikh = format YYYY-MM-DD (contoh: "2026-11-15")
   ===================================================================== */
window.KALENDAR = {

  /* ---------- 1) MAKLUMAN EVENT CUSTOMER ---------- */
  customer: {
    link: "https://ilmu-emas.pages.dev/makluman-terkini",
    data: [
      { tajuk: "Workshop Kaya Dengan Emas", tarikh: "2026-10-28" }
      /* Template — salin baris di atas untuk tambah event lain (letak koma antara baris):
      { tajuk: "", tarikh: "2026-11-15" }
      */
    ]
  },

  /* ---------- 2) MAKLUMAN EVENT DEALER ---------- */
  dealer: {
    link: "https://ilmu-emas.pages.dev/makluman-terkini",
    data: [
      { tajuk: "PD Leadership Training (PLT)", tarikh: "2026-10-31" }
      /* Template (letak koma antara baris):
      { tajuk: "", tarikh: "2026-11-20" }
      */
    ]
  },

  /* ---------- 3) MAKLUMAN BIRTHDAY CUSTOMER (API Google Apps Script) ----------
     Tarikh dibaca automatik daripada API. Birthday berulang setiap tahun
     (bulan + hari sahaja). Format tarikh dikesan: YYYY-MM-DD, DD/MM/YYYY,
     DD-MM-YYYY, DD/MM dan ISO timestamp.                                    */
  birthday: {
    link: "https://wan-pgdealer.pages.dev/servicing",
    API_URL: "https://script.google.com/macros/s/AKfycbwhUaASqS8-1CYBsJkd961L6Zakg1GH7OsS2L6Y2nX1toZEYGEQkjz2rfz_f_M8-vMlNw/exec",
    TOKEN: "Wn7kQ4xZp9RtL2vMb8Hc5YdF",
    SHEET_ID: "19yWf_5j2eJoGnXwvkQgJXpHm7tnZt23eKWWukAIgE0M",

    /* Nama parameter yang dihantar ke API (ubah jika skrip anda guna nama lain) */
    PARAM_TOKEN: "token",
    PARAM_SHEET: "sheetId",
    /* Parameter tambahan jika perlu, contoh: { action: "birthday" } */
    EXTRA: {},

    /* Nama lajur/medan dalam respons API (tidak sensitif huruf besar/kecil) */
    /* API Follow Up memulangkan: tabs → rows → { n: nama, p: telefon, d: D.O.B (yyyy-mm-dd), l: lokasi } */
    MEDAN_NAMA:   ["n", "nama", "name"],
    MEDAN_TARIKH: ["d", "dob", "tarikhlahir", "birthday"]
  }
};
