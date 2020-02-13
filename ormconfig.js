module.exports = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: false,
  entities: ['build/entity/*.js', 'build/entity/**/*.js'], //['build/entity/**/*.js'], //['src/entity/**/*.ts'], // ['build/entity/*.js'],
  migrations: ['build/migration/**/*.js'], //['src/migration/**/*.ts'], // ['build/migration/*.js'],
  subscribers: ['build/subscriber/*.js', 'build/subscriber/**/*.js'], //['src/subscriber/**/*.ts'], //['build/subscriber/*.js'],
  cli: {
    entitiesDir: 'build/entity',
    migrationsDir: 'build/migration',
    subscribersDir: 'build/subscriber',
  },
};
