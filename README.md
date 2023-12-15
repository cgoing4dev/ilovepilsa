## database

https://gist.github.com/cgoing4dev/a1e4a4af3ed94776fbf3630a8dae3181

authentication setup: https://supabase.com/docs/guides/auth/auth-helpers/nextjs-server-components

before authentication, generate the types for your tables

npx supabase login
npx supabase gen types typescript --project-id <project-id> --schema public > types/supabase.ts
