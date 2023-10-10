// Formatea un número como una cadena en formato de moneda (MXN).
function formatCurrency(number) {
  if (typeof number !== 'number') {
    throw new Error('El valor proporcionado no es un número.');
  }

  return number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// Formatea un número con dos decimales.
function formatDecimal(number) {
  if (typeof number !== 'number') {
    throw new Error('El valor proporcionado no es un número.');
  }

  return number.toFixed(2);
}

// Formatea un número con dos decimales y lo etiqueta como metros cuadrados (m²).
function formatM2(number) {
  if (typeof number !== 'number') {
    throw new Error('El valor proporcionado no es un número.');
  }

  return number.toFixed(2) + ' m²';
}
