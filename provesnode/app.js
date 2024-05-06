const express = require('express');
const path = require('path');
const app = express();
const funciones = require('./Insert');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
// Ruta principal
app.get('/', (req, res) => {
    
    
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/formulario', (req, res) => {
    res.render('formulario');
});
// Iniciar el servidor


//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

//Base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'raul',
    password: 'raul',
    database: 'rauldb'
});




// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a MySQL:', err);
        return;
    }

    console.log('Conexión exitosa a MySQL');

    // Ejemplo: Consultar datos
    connection.query('SELECT * FROM usuarios', (err, rows) => {
        if (err) {
            console.error('Error al ejecutar consulta:', err);
            return;
        }

        console.log('Resultados de la consulta:', rows);
    });

    // Cerrar la conexión al terminar
    connection.end()
});
app.get('/procesar', (req, res) => {
    // Obtener los valores del formulario desde los parámetros de consulta (query)
    const nombre = req.query.formulari1;
    
    const apellido = req.query.formulari2;
    console.log(apellido)


    // Hacer algo con los valores obtenidos
    console.log('Nombre:', nombre);
    // console.log('Apellido:', apellido);
    try{
         await funciones.insertarDatos(nombre,apellido,(err,result)=>{
            if  (err){
                res.status(500).send('Error interno del servidor');
                return;
            }
            else{
                // document.getElementById('lolaso').innerHTML='Se han enviat els datos'
                app.get('/datos', (req, res) => {
                    // Datos que quieres enviar al cliente
                    const datos = {
                        mensaje: 'Funciona Correctament'
                        
                    };
                
                    // Enviar datos como respuesta
                    res.json(datos);
                });
                };
                
            
        }
        
    )
    }
         catch (error) {
            console.error('Error al insertar datos:', error);
        }
        

    //     console.log('Datos insertados correctamente');
    //     res.send('Datos insertados correctamente');
    // });
   
    // resposta per a la consola
    console.log(nombre);
})



    