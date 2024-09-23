/*
  Warnings:

  - You are about to drop the `Sales` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Sales";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "stock" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "desc" TEXT NOT NULL
);
