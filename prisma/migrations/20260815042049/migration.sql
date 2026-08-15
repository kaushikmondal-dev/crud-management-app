-- CreateTable
CREATE TABLE "UserTable" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userDob" DATETIME NOT NULL,
    "userGender" TEXT NOT NULL,
    "userMob" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTable_userEmail_key" ON "UserTable"("userEmail");
