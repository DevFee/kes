/*
  Warnings:

  - Added the required column `visualize` to the `Sites` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sites" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "desc" TEXT NOT NULL,
    "visualize" TEXT NOT NULL
);
INSERT INTO "new_Sites" ("desc", "id", "name", "price") SELECT "desc", "id", "name", "price" FROM "Sites";
DROP TABLE "Sites";
ALTER TABLE "new_Sites" RENAME TO "Sites";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
