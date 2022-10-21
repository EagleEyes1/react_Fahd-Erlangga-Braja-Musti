### 3 Poin yang dipelajari dari GraphQL Basic
- GraphQL adalah suatu bahasa query untuk API, dimana kita bisa *define schema* dari data yang kita ingin kirim ke *client*, dan bisa meminimalkan jumlah field yang kita inginkan. Dengan GraphQL kita hanya butuh satu *endpoint* saja dan bisa memakai semua *request* yang kita butuhkan. 3 fitur di GraphQL yaitu,
    - Query, adalah cara kita untuk mendapatkan.
    - Mutation, adalah untuk memanipulasi data
    - Subscription, kita bisa dapat mendapatkan data paling update atau *real-time*.
  
- Dalam query, kita dapat memilih field mana saja yang kita butuhkan, query juga menyediakan **multiple data related** yang artinya misalkan di dalam tabel movies kita punya tabel director, director juga punya field dan seterusnya. Query juga menyediakan **multiple data unrelated** yang artinya di tabel yang berbeda kita dapat mengambil value secara bersamaan. Query juga menyediakan fitur **fragment** yang artinya bisa dipanggil kembali. 
- Mutation berfungsi untuk melakukan update, insert, dan delete data. Mutation diharuskan memiliki returning. Subscription memakai web socket sehingga client nantinya akan mendapat data real-time dari server.
