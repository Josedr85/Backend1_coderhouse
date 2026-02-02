import fs from "fs";

// Lectura Sincronica
// const data = fs.readFileSyc("./notas/notas.txt", "utf-8");
// console.log("Contenido de Data", data);

// Lectura Asincrona
// fs.readFile('./notas/notas.txt', 'utf-8', (error, data) => {
//     if (error) return console.error("Error ocurrido: ", error);
//     console.log("Contenido de Data", data);
// })

// Crear un Archivo y escribir en El
// Sincronica
// fs.writeFileSync("nuevoSinc.txt", "Hola desde el Nuevo Archivo Sincronico");
// console.log("El Archivo fue generado correctamente");
// const nuevo = fs.readFileSync("nuevo.txt", "utf-8");
// console.log("Contenido de Data", nuevo);

// Asincronicamente
// fs.writeFile(
//   "nuevoAsync.txt",
//   "Hola desde el nuevo archivo Asincrono",
//   (err) => {
//     if (err) return console.error("Error: ", err);
//     console.log("El Archivo Asincrono fue generado correctamente");
//   },
// );

// Agregar contenido a un archivo existente (append)
// fs.appendFile("./notas/nueva_nota.txt", "\nNueva linea agregada", (err) => {
//   if (err) return console.error("Error: ", err);
//   console.log("El Archivo log.txt' tiene una nueva linea agregada");
// });

// Verificar si un archivo existe
// if (fs.existsSync("./notas/notas.txt")) {
//   console.log("El Archivo archivo.txt Existe");
// } else {
//   console.error("Error, el archivo no existe");
// }

// Eliminar un Archivo
// fs.unlink("./notas/borrar_notas.txt", (err) => {
//   if (err) return console.error("Error, el archivo no existe", err);
//   console.log("El Archivo archivo_borrar.txt fue borrado exitosamente.!");
// });

// Crear una carpeta
// fs.mkdir("carpeta_nueva", (err) => {
//   if (err) return console.error("Error, la carpeta no pudo crearse", err);
//   console.log("La carpeta nueva_carpeta, fue creada exitosamente.!");
// });

// Leer el contenido completo de un directorio
// fs.readdir(".", (err, files) => {
//   if (err) return console.error("Error, ", err);
//   console.log("Archivos existentes: ", files);
// });

// Obtener la informacion de un archivo
// fs.stat("./notas/notas.txt", (err, stats) => {
//   if (err) return console.error("Error, ", err);
//   console.log("Tamaño: ", stats.size, " bytes");
//   console.log("¿Es un Archivo? ", stats.isFile());
//   console.log("¿Es un Directorio? ", stats.isDirectory());
// });

// Renombrar o mover un Archivo
fs.rename(
  "./carpeta_nueva/nota_nueva.txt",
  "nueva_carpeta/nuevaNota.txt",
  (err) => {
    if (err) return console.error("Error, ", err);
    console.log("El archivo fue correctamente renombrado");
  },
);
