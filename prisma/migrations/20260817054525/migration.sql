-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserTable" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userDob" TEXT NOT NULL,
    "userGender" TEXT NOT NULL,
    "userMob" TEXT NOT NULL
);
INSERT INTO "new_UserTable" ("userDob", "userEmail", "userGender", "userId", "userMob", "userName") SELECT "userDob", "userEmail", "userGender", "userId", "userMob", "userName" FROM "UserTable";
DROP TABLE "UserTable";
ALTER TABLE "new_UserTable" RENAME TO "UserTable";
CREATE UNIQUE INDEX "UserTable_userEmail_key" ON "UserTable"("userEmail");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
