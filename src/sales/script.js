
//#region MODELO DE DATOS (MODELS)

// Definimos la clase Sale
class Sale {
  constructor(id, customerName, customerPhone, saleDate, salesman, realEstate, salePrice, notes) {
    this.id = id; // Identificador de la venta
    this.customerName = customerName; // Nombre del cliente
    this.customerPhone = customerPhone; // Teléfono del cliente
    this.saleDate = saleDate; // Fecha de la venta
    this.salesman = salesman; // Vendedor
    this.realEstate = realEstate; // Referencia al modelo de la casa vendida
    this.salePrice = salePrice; // Precio de la venta
    this.notes = notes; // Información adicional sobre la venta
  }
}

//#endregion

//#region MANIPULACION DEL DOM (VIEW)

// Mostrar y ocultar el modal para agregar una nueva venta.
function initAddSaleButtonHandler() {

  document.getElementById('addSale').addEventListener('click', () => {
      document.getElementById('modalBackground').style.display = 'block';
      document.getElementById('modal').style.display = 'block';
  });

  modalBackground.addEventListener('click', () => {
      document.getElementById('modalBackground').style.display = 'none';
      document.getElementById('modal').style.display = 'none';
  });

}

//#endregion


//#region INICIALIZAMOS FUNCIONALIDAD (CONTROLLER)

initAddSaleButtonHandler();

//#endregion
