import fs from 'fs'; 
// Leer un archivo de manera asíncrona 
fs.readFile('./example.txt', 'utf8', (err, data) => { 
    if (err) throw err; 
    console.log('Contenido del archivo:', data);
});  
// Escribir en un nuevo archivo 
    fs.writeFile('./newfile.txt', 'Contenido nuevo', (err) => { 
    if (err) throw err; 
    console.log('Archivo creado y escrito'); 
}); 
// Renombrar un archivo 
    fs.rename('./newfile.txt', './data/renamedfile.txt', (err) => { 
    if (err) throw err; 
    console.log('Archivo renombrado'); 
});