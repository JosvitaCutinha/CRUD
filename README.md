# Task Management CRUD App

A complete task management application built with React, TypeScript, Vite, and Supabase.

## Features

- 🔐 User Authentication (Sign up/Sign in)
- ✅ CRUD Operations for Tasks
- 📷 Image Upload for Tasks
- 🔄 Real-time Updates
- 🎨 Dark Theme UI
- 🔒 Row Level Security (RLS)

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Backend**: Supabase (Database, Auth, Storage)
- **Styling**: CSS (Dark theme)
- **Deployment**: GitHub Pages

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/JosvitaCutinha/CRUD.git
cd CRUD
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
1. Copy `.env` to `.env.local`
2. Update `.env.local` with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Supabase Setup
1. Create a new project at [supabase.com](https://supabase.com)
2. Create a `tasks` table with columns:
   - `id` (int8, primary key)
   - `title` (text)
   - `description` (text)
   - `email` (text)
   - `image_url` (text, nullable)
   - `created_at` (timestamptz)

3. Enable Row Level Security and create policies:
```sql
-- Enable RLS
ALTER TABLE "public"."tasks" ENABLE ROW LEVEL SECURITY;

-- INSERT Policy
CREATE POLICY "Enable insert for authenticated users based on email" 
ON "public"."tasks" FOR INSERT TO authenticated 
WITH CHECK (auth.jwt() ->> 'email' = email);

-- SELECT Policy  
CREATE POLICY "Enable select for users based on email" 
ON "public"."tasks" FOR SELECT TO authenticated 
USING (auth.jwt() ->> 'email' = email);

-- UPDATE Policy
CREATE POLICY "Enable update for users based on email" 
ON "public"."tasks" FOR UPDATE TO authenticated 
USING (auth.jwt() ->> 'email' = email)
WITH CHECK (auth.jwt() ->> 'email' = email);

-- DELETE Policy
CREATE POLICY "Enable delete for users based on email" 
ON "public"."tasks" FOR DELETE TO authenticated 
USING (auth.jwt() ->> 'email' = email);
```

4. Create a storage bucket named `tasks-images` for image uploads

### 5. Run the Application
```bash
npm run dev
```

Visit `http://localhost:5173` to see the app.

## Deployment

### GitHub Pages
```bash
npm run deploy
```

### Other Platforms
- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder after `npm run build`

## Live Demo

🚀 **Live App**: [https://josvitacutinha.github.io/CRUD](https://josvitacutinha.github.io/CRUD)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - feel free to use this project for learning and development!