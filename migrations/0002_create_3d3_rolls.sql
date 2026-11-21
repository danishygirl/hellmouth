-- Tabela para as rolagens 3D3. O Worker cria automaticamente na primeira solicitação.
CREATE TABLE IF NOT EXISTS rolls_v2 (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  request_id TEXT NOT NULL UNIQUE,
  character TEXT NOT NULL,
  episode TEXT NOT NULL DEFAULT '',
  action TEXT NOT NULL,
  dice_count INTEGER NOT NULL DEFAULT 3,
  sides INTEGER NOT NULL,
  difficulty INTEGER,
  modifier INTEGER NOT NULL DEFAULT 0,
  rolls_json TEXT NOT NULL,
  total INTEGER NOT NULL,
  outcome TEXT NOT NULL,
  legacy INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
