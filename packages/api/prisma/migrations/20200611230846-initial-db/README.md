# Migration `20200611230846-initial-db`

This migration has been generated by Lucas Bittencourt at 6/11/2020, 11:08:46 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `bazardathatab`.`User` DROP COLUMN `cpf`,
DROP COLUMN `type`;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200611230846-initial-db
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,15 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "mysql"
+  url      = env("DATABASE_URL")
+}
+
+model User {
+  id       Int    @default(autoincrement()) @id
+  name     String
+  email    String @unique
+  password String
+}
```


