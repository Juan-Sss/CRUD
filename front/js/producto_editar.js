console.log(location.search)//TOMA LOS VALORES DE LA URL QUE PASAMOS EN PRODUCTOS
//SUBSTRING ELIMINA EL STRING DE LA POCISION QUE DICE
//SPLIT SEPARA  CONVIERNTE EN LISTA O ARRAY
let arg = location.search.substring(1).split('&');


let data = [];
for (let i=0; i<arg.length;i++){
    data[i]=arg[i].split('=');
}
console.log(arg);
console.log(data)
document.getElementById('id').value = decodeURIComponent(data[0][1]);
document.getElementById('nombre').value = decodeURIComponent(data[1][1]);
document.getElementById('precio').value = decodeURIComponent(data[2][1]);
document.getElementById('stock').value = decodeURIComponent(data[3][1]);
document.getElementById('imagen').value = decodeURIComponent(data[4][1]);

function modificar(){
    //VAMOS A ACTUALIZAR LA BASE DE DATOS
    let id = document.getElementById('id').value
    let n = document.getElementById('nombre').value
    let p = document.getElementById('precio').value
    let s = document.getElementById('stock').value
    let i = document.getElementById('imagen').value

    let producto = {
        nombre: n,
        precio: p,
        stock: s,
        imagen: i
    }
    let url= 'http://127.0.0.1:5000/productos/'+id;
    
    let options= {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers:{'Content-Type':'application/json'}
    };
    fetch(url, options)
    .then(function(){
        document.getElementById('avisareditar').innerHTML = `Producto editado correctamente`
    })
    .catch(err=>{
        document.getElementById('avisareditar').innerHTML = `Producto no se pudo editar`

    })

}