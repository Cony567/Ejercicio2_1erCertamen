
const L_Tropa = [];
const eliminarMiembro = async function(){
    let res = await Swal.fire({
        title: `¿Desea eliminar el miembro ${L_Tropa[this.numero].nombre}?`,
        showCancelButton:true,
        confirmButtonText:'Si'
    })
    if (res.isConfirmed){
        L_Tropa.splice(this.numero,1);
        cargarTabla();
        Swal.fire("Miembro asesinado");
    }else{
        Swal.fire("Operacion cancelada");
    }
}

const cargarTabla = ()=>{
    let tbody = document.querySelector("#tabla-tbody");
    tbody.innerHTML = "";

    for(let i=0;i<L_Tropa.length; ++i){
        let T = L_Tropa[i];

        let tr = document.createElement("tr");
        let td_Nro = document.createElement("td");
        td_Nro.innerText = (i+1);
        let td_nombre = document.createElement("td");
        td_nombre.innerText = T.nombre;
        let td_tipo = document.createElement("td");
        td_tipo.innerText = T.tipo;
        let td_rango = document.createElement("td");
        td_rango.innerText = T.rango;
        let td_accion = document.createElement("td");
        let boton = document.createElement("button");
        
        boton.classList.add("btn","btn-danger");
        boton.innerText = "asesinado por la aparición"
        boton.numero = i;
        boton.addEventListener("click",eliminarMiembro);
        td_accion.appendChild(boton);

        tr.appendChild(td_Nro);
        tr.appendChild(td_nombre);
        tr.appendChild(td_tipo);
        tr.appendChild(td_rango);
        tr.appendChild(td_accion);

        tr.classList.add("text-center");
        tbody.appendChild(tr);

    }
}

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let tipo = document.querySelector("#tipo-select").value;
    let rango = document.querySelector("#rango-select").value;
    let tropa = {};
    tropa.nombre = nombre;
    tropa.tipo   = tipo;
    tropa.rango  = rango;
    L_Tropa.push(tropa);
    cargarTabla();
    Swal.fire("¡Exito!", "Miembro registrado","success");
});