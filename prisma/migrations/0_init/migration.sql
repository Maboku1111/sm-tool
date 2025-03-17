-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "author" VARCHAR(255),
    "content" TEXT,
    "is_private" BOOLEAN DEFAULT false,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

