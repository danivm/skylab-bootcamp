arrancar mongo:
mongod --dbpath ~/data/db

entrar en el shell:
mongo

show dbs =>
use skylab-db => crear bbdd
show collections

db.movies.insert({
    year: 1985,
    title: 'Back to the Future'
}) 
db.movies.insertMany([
{
    year: 1981,
    title: 'En busca del arca perdida'
},
{
    year: 1989,
    title: 'Indiana Jones y la última cruzada'
},
{
    year: 1984,
    title: 'Indiana Jones y el templo maldito'
},
{
    year: 1989,
    title: '    Regreso al futuro II'
}
]) 

db.movies.find() => muestra datos de una colección
db.movies.find().pretty() => muestra los datos bonitos

db.movies.update(
    { 
        title: 'Back to the Future',
        year: '1984'
    },
    { $set: 
        { title: 'Regreso al futuro'} 
    }
)

db.movies.remove(
    { 
        title: 'Back to the Future',
        year: '1984'
    }
)