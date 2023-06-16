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

export function primeraFaseSpecial(){
  document.getElementById('special-reserve-type-event').style.display = "block";
  document.getElementById('special-reserve-details').style.display = "none";
}

export function segundaFaseSpecial(){
  document.getElementById('special-reserve-type-event').style.display = "none";
  document.getElementById('special-reserve-details').style.display = "block";
}

export function ultimaFaseSpecial(){
  document.getElementById('special-reserve-type-event').style.display = "none";
  document.getElementById('special-reserve-details').style.display = "none";
  document.getElementById('confirmed').style.display = "block";
  document.getElementById('state').style.display = "none";
}

export function primeraFaseGeneral(){
  document.getElementById('general-reserve-ambience').style.display = "block";
  document.getElementById('general-reserve-details').style.display = "none";
}

export function segundaFaseGeneral(){
  document.getElementById('general-reserve-ambience').style.display = "none";
  document.getElementById('general-reserve-details').style.display = "block";
}

export function ultimaFaseGeneral(){
  document.getElementById('general-reserve-ambience').style.display = "none";
  document.getElementById('general-reserve-details').style.display = "none";
  document.getElementById('confirmed').style.display = "block";
  document.getElementById('state').style.display = "none";
}

export function reservar(){
  document.getElementById('sin-reserva').style.display = "none";
  document.getElementById('con-reserva').style.display = "block";
}


export function edit(){
  document.getElementById('reserve').style.display = "none";
  document.getElementById('edit').style.display = "block";
}

export function reserve(){
  document.getElementById('reserve').style.display = "block";
  document.getElementById('edit').style.display = "none";
}
