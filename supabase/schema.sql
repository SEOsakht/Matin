-- Supabase schema for Matin (Alpha)
create table if not exists matin_users (
  id uuid primary key default gen_random_uuid(),
  supabase_id text not null unique,
  nickname text not null unique,
  is_admin boolean not null default false,
  created_at timestamptz default now()
);

create table if not exists anchors (
  anchor_id text primary key,
  content text not null,
  created_at timestamptz default now()
);

create table if not exists annotations (
  id uuid primary key default gen_random_uuid(),
  anchor_id text references anchors(anchor_id) on delete cascade,
  parent_id uuid null references annotations(id) on delete cascade,
  author_id uuid references matin_users(id) on delete set null,
  author_name text not null,
  body text not null,
  like_count int default 0,
  created_at timestamptz default now()
);

create table if not exists annotation_likes (
  id uuid primary key default gen_random_uuid(),
  annotation_id uuid references annotations(id) on delete cascade,
  user_id uuid references matin_users(id) on delete cascade,
  created_at timestamptz default now(),
  unique(annotation_id, user_id)
);
