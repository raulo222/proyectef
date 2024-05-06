const mysql2 = require('mysql2');

async function insertarDatos(nombre, apellidos) {
    return new Promise((resolve, reject) => {
        const connection = mysql2.createConnection({
            host: 'localhost',
            user: 'raul',
            password: 'raul',
            database: 'rauldb'
        });

        connection.connect((err) => {
            if (err) {
                console.error('Error al conectar a MySQL:', err);
                reject(err);
                return;
            }

            console.log('Conexión exitosa a MySQL');

            const sql = 'INSERT INTO usuarios (nombre, apellidos) VALUES (?, ?)';
            connection.query(sql, [nombre, apellidos], (err, result) => {
                if (err) {
                    console.error('Error al insertar datos:', err);
                    reject(err);
                    return;
                }

                console.log('Datos insertados correctamente:', result);

                connection.end();

                resolve(result);
            });
        });
    });
}

module.exports = { insertarDatos };
