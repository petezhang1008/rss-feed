import fs from 'fs'
import path from 'path'


const models = ['User', 'RssGenerator', 'Feed', 'ExecuteTask']

const prismaDir = path.join(__dirname, 'prisma/models')
let schemaContent = `generator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\n`;
// 读取每个模型文件并合并
models.forEach(model => {
  const modelFile = path.join(prismaDir, `${model}.prisma`);
  const modelContent = fs.readFileSync(modelFile, 'utf8');
  schemaContent += modelContent + '\n';
});

// 将合并后的内容写入 schema.prisma
fs.writeFileSync(path.join(__dirname, 'prisma/schema.prisma'), schemaContent);
console.log('Schema generated successfully!');