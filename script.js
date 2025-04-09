function validarCedula() {
  //conectando con html y capturando la cedula 
  const cedula = document.getElementById('cedula').value;

 // notificando que tiene que escribir la cedula
  if (!cedula) {
		alert("Por favor, ingrese su cédula.");
		return false;
	 }
   // asegurar que solo sean numeros 
   if (!/^\d+$/.test(cedula)) {
    alert("La cédula debe contener solo números, sin guion, ni espacio en blanco");
    return false;
	}
  // asegurarnos de que solo sean 11 numeros
  if (cedula.length !== 11) {    
    return false;
  }

  let suma = 0;
  for (let i = 0; i < cedula.length; i++) {
      let digito = parseInt(cedula.charAt(i));
      if (i % 2 === 0) {
          digito *= 1;
      } else {
          digito *= 2;
      }
      if (digito > 9) {
          digito -= 9;
      }
      suma += digito;
  }

  const modulo = suma % 10;
  const Validar = modulo === 0;
    if( Validar){
      alert("LA CEDULA ES CORRECTA.");
      return;
    }else{
      alert("LA CEDULA ES INCORRECTA.");
    
    }
  }