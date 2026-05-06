-- Table pour stocker les leads (demandes de contact)
CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT,
  commerce_type TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Activer Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Politique : autoriser les insertions publiques (formulaire de contact)
CREATE POLICY "Insert public" ON leads FOR INSERT WITH CHECK (true);

-- Politique : lecture réservée à l'admin (désactivée pour les utilisateurs publics)
CREATE POLICY "Select admin only" ON leads FOR SELECT USING (false);
