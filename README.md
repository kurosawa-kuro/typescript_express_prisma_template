# typescript_express_prisma_template

```
sudo /opt/lampp/lampp start

npm install
cd prisma
npx prisma generate
npx prisma migrate dev --name init

cd seed
npx ts-node .\index.ts
npx ts-node .\reader.ts

cd src
npm run test
npm run dev
```