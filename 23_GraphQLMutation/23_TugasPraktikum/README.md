### 3 Poin Yang Dipelajari pada materi GraphQLMutation
- Mutation digunakan untuk mengubah data di server Anda. Baik itu insert, update, maupun delete. Anda dapat menganggap Mutasi GraphQL sebagai setara dengan permintaan POST, PUT, PATCH, dan DELETE di REST.
- Seperti query, mutation juga mengembalikan data. mutation, bagaimanapun, hanya akan mengembalikan data baru yang dibuat.
- best practices menggunakan mutation antara lain,
    - **Gunakan nama pendek, tetapi deskriptif untuk menggambarkan tindakan mutation.** Cara termudah dan terbaik untuk merepresentasikan mutasi adalah memulai dengan kata kerja tindakan terlebih dahulu diikuti dengan nama objek tempat tindakan diterapkan.
    - **Untuk keterbacaan yang lebih baik, beri nama mutation dengan objek terlebih dahulu.** Beberapa API mungkin mendukung operasi serupa pada beberapa jenis objek.
    - **Gunakan nama yang lebih spesifik untuk tindakan.**
    - **Cobalah untuk memastikan bahwa mutation Anda menggunakan objek argumen tunggal.** Daripada memiliki beberapa objek individual, buat satu objek yang di sarangkan sebanyak mungkin untuk menyertakan semua bidang yang diperlukan.