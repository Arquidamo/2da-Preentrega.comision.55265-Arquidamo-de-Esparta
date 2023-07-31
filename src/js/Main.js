const Libro= function(autor,isbc,titulo,precio){
    this.autor=autor;
    this.isbc=isbc;
    this.titulo=titulo;
    
    this.precio=precio;
}
let Libro1=new Libro("tucidides",1293933,"guerra del peloponeso",3400);
let Libro2=new Libro("tucidides",1293955,"guerra del peloponeso II",3200);
let Libro3=new Libro("tucidides",1293434,"guerra del peloponeso III",3400);
let Libro4=new Libro("tucidides",1295454,"guerra del peloponeso IV",3000);
let Libro5=new Libro("marco aurelio",1293933,"meditaciones",9000);
let Libro6=new Libro("homero",1293933,"iliada",2000);
let Libro7=new Libro("robert howard",1293933,"relatos de conan",3400);

let biblioteca=[Libro1,
                Libro2,
                Libro3,
                Libro4,
                Libro5,
                Libro6,
                Libro7
];

console.log(biblioteca);

function buscarLibro(){
    let tituloLibro=prompt("ingresa el titulo del libro que estas buscando").trim().toUpperCase();
    let busqueda=biblioteca.filter((libro)=>libro.titulo.toUpperCase().includes(tituloLibro));
    if (busqueda.length>0){
        console.table(busqueda)
    } else {
    console.log("no se encontro el titulo "+tituloLibro);
    }
}

function buscarAutor(){
    let nombreAutor=prompt("ingresa el nombre de autor del libro que estas buscando").trim().toUpperCase()
    let busqueda=biblioteca.filter((libro)=>libro.autor.toUpperCase().includes(nombreAutor));

if (busqueda.length>0){
    console.table(busqueda)
} else {
console.log("no se encontro el autor "+ nombreAutor)
}
}


function AgregarLibro(){
    let autor=prompt("ingrese el nombre del Autor:");
    let isbc=parseFloat(prompt("ingrese el isbc:"));
    let titulo=prompt("ingresa el titulo del libro");
    let precio=parseFloat(prompt("ingrese el precio:"));
    if (autor==="" || isNaN(isbc) || titulo==="" || isNaN(precio)){
        console.log("revise los datos ingresados")
        return
    }

    let libro=new Libro(autor,isbc,titulo,precio);
    biblioteca.push(libro);
    console.table(biblioteca);

}



//queria hacer una especie de crud pero trabaje el fin de semana y termine fusilado. faltan los botones  