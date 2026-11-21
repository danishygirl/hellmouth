CREATE TABLE IF NOT EXISTS rolls (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  request_id TEXT NOT NULL UNIQUE,
  character TEXT NOT NULL,
  episode TEXT NOT NULL DEFAULT '',
  action TEXT NOT NULL,
  sides INTEGER NOT NULL CHECK (sides IN (4,6,8,10,12,20,100)),
  result INTEGER NOT NULL CHECK (result >= 1 AND result <= sides),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_rolls_created ON rolls(id DESC);
CREATE INDEX IF NOT EXISTS idx_rolls_character ON rolls(character);
