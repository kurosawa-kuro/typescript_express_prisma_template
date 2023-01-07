# typescript_express_prisma_template

```
sudo /opt/lampp/lampp start
sudo /opt/lampp/lampp stop

npm install
cd prisma
npx prisma generate
npx prisma migrate dev --name init

cd seed
npx ts-node .\index.ts
npx ts-node .\reader.ts

cd typescript_express_prisma_template
cd src
npm run test
npm run dev


DATABASE_URL="mysql://root:password@localhost:3306/test_training?schema=public" npx prisma migrate dev --name init

DATABASE_URL="mysql://root:password@localhost:3306/test_training?schema=public" npx jest  __tests__/routes/user.routes.test.ts

```