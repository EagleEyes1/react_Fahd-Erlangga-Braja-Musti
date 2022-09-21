### 3 Poin yang dipelajari pada materi React Hooks
- Hooks merupakan fitur baru di react 16.8 yang dapat menggunakan state dan fitur react yang lain tanpa perlu menulis sebuah kelas. Hooks ada dikarenakan adanya kesulitan untuk menggunakan kembali stateful logic antar komponen, komponen kompleks menjadi sulit untuk dimengerti, dan kelas membingungkan manusia dan mesin. 
- Hooks dasar antara lain useState(), useEffect(), dsb. Aturan pemakaian hooks antara lain,
    - Hanya panggil hooks di tingkat atas,
    - Hanya panggil hooks dari fungsi fungsi react.
- useEffect() adalah effect hooks yang memungkinkan kita melakukan efek samping di dalam function component. semua lifecycle seperti componentDidMount, dsb dapat diwakili oleh useEffect(). Ada dua jenis useEffect() yaitu butuh pembersihan dan tidak butuh pembersihan. Custom Hooks yaitu hooks yang memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.