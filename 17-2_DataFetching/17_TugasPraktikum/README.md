### 3 Poin yang dipelajari dari data fetching dengan Hasura 
- **Hasura GraphQL Engine** adalah sebuah server GraphQL ultra-cepat yang menyediakan API GraphQL instan dan real-time diatas Postgres, dengan pemicu webhook pada event basis data, dan skema jarak jauh untuk mengimplementasi logika bisnis.
Hasura dapat membantu dalam membangun aplikasi berbasis GraphQL dengan Postgres atau membantu aplikasi yang sudah ada untuk berpindah ke GraphQL secara bertahap.
- Hasura support empat komponen dasar yaitu,
    - Queries. Dengan membuat scheme, kita bisa langsung melakukan query ke database, beserta dengan relasi-relasinya. Ini akan menghemat kita karena menampilkan query-query dasar. 
    - Insert Mutations, 
    - Update Mutations, 
    - dan Delete Mutations.
- **Mutation** memudahkan untuk insert aktivitas CRUD di database postgresql via graphql.
Di dalam data fetching kita menggunakan library createAsyncThunk dan menambahkan **extraReducer** sebagai penghandle hasil promise.