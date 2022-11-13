module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'babar.db.elephantsql.com '),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'fxggmoge'),
      user: env('DATABASE_USERNAME', 'fxggmoge'),
      password: env('DATABASE_PASSWORD', 'eIWxDpfzW7xDQShC4ejN3audm9UyMLvZ'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
