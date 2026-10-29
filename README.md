
**Backend:** 8080

**Open database**
```bash
$ docker compose up -d
```

**Get drizzle ready to migrate**
Create a `.env` file and add the following line to it:
   ```
   DATABASE_URL=postgres://postgres:secret@localhost:5432/addresses
   ```
**Run migrations:**
```bash
$ npx drizzle-kit migrate
```