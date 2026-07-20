/*
  Warnings:

  - Added the required column `userIcon` to the `UserTable` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserTable" (
    "userIcon" TEXT NOT NULL,
    "userId" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userGender" TEXT NOT NULL,
    "userPhNo" TEXT NOT NULL
);
INSERT INTO "new_UserTable" ("userEmail", "userGender", "userId", "userName", "userPhNo") SELECT "userEmail", "userGender", "userId", "userName", "userPhNo" FROM "UserTable";
DROP TABLE "UserTable";
ALTER TABLE "new_UserTable" RENAME TO "UserTable";
CREATE UNIQUE INDEX "UserTable_userEmail_key" ON "UserTable"("userEmail");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
