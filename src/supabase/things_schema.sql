-- 📌 Table des entreprises
create table entreprises (
  id uuid primary key default uuid_generate_v4(),
  nom text not null,
  description text,
  logo_url text,
  created_at timestamp with time zone default now()
);

-- 📌 Table des utilisateurs custom liés à auth.users
create table users_custom (
  id uuid primary key,
  email text unique not null,
  role text not null,
  entreprise_id uuid references entreprises(id),
  created_at timestamp with time zone default now()
);

-- 📌 Table des produits
create table produits (
  id uuid primary key default uuid_generate_v4(),
  entreprise_id uuid references entreprises(id),
  nom text not null,
  description text,
  statut text not null,
  created_at timestamp with time zone default now()
);

-- 📌 Table des idées (améliorations ou nouveaux produits)
create table idees (
  id uuid primary key default uuid_generate_v4(),
  type text not null, -- 'amelioration' ou 'produit'
  contenu text not null,
  auteur_id uuid references auth.users(id),
  produit_id uuid references produits(id),
  entreprise_id uuid references entreprises(id),
  votes integer default 0,
  created_at timestamp with time zone default now()
);

-- 📌 Table des votes
create table votes (
  id uuid primary key default uuid_generate_v4(),
  idee_id uuid references idees(id) on delete cascade,
  user_id uuid references auth.users(id),
  created_at timestamp with time zone default now()
);

-- 📌 Table des spotlights (actualités / annonces des entreprises)
create table spotlights (
  id uuid primary key default uuid_generate_v4(),
  entreprise_id uuid references entreprises(id),
  titre text not null,
  contenu text not null,
  image_url text,
  created_at timestamp with time zone default now()
);
