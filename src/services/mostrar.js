export function mostrarMenu(){
  document.getElementById('menu').style.display = "block";
  document.getElementById('ubicacion').style.display = "none";
  document.getElementById('contactos').style.display = "none";
}

export function mostrarUbicacion(){
  document.getElementById('menu').style.display = "none";
  document.getElementById('ubicacion').style.display = "block";
  document.getElementById('contactos').style.display = "none";
}

export function mostrarContactos(){
  document.getElementById('menu').style.display = "none";
  document.getElementById('ubicacion').style.display = "none";
  document.getElementById('contactos').style.display = "block";
}

export function ocultarNavbar(){
  document.getElementById('navbar').style.display = "block";
}