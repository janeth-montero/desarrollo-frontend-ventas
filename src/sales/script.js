
//#region 1. VARIABLES GLOBALES


//#endregion


//#region 2. MODELO DE DATOS (MODELS)

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

function mapAPIToSales(data) {
  return data.map(item => {
    return new Sale(
      item.id,
      item.customerName,
      item.customerPhone,
      new Date(item.saleDate),
      item.salesman,
      item.realEstate,
      item.salePrice,
      item.notes
    );
  });
}

// Definimos la clase de RealEstate con los datos necesarios
class RealEstateDescriptor {

  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

}


function mapAPIToRealEstateDescriptors(data) {
  return data.map(item => {
    return new RealEstateDescriptor(
      item.id,
      item.name,
      item.price
    );
  });
}

//#endregion


//#region 3. VENTAS (VIEW)

function displaySalesView(sales) {

  clearTable();

  showLoadingMessage();

  if (sales.length === 0) {

    showNotFoundMessage();

  } else {

    hideMessage();

    displaySalesTable(sales);
  }

}


function displayClearSalesView() {
  clearTable();

  showInitialMessage();
}


// Funcion que agrega los datos de los modelos de casas a la tabla.
function displaySalesTable(sales) {

  const tablaBody = document.getElementById('data-table-body');

  sales.forEach(sale => {

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${sale.id}</td>
      <td>${sale.customerName}</td>
      <td>${sale.customerPhone}</td>
      <td>${sale.realEstate}</td>
      <td>${sale.salesman}</td>
      <td>${sale.saleDate}</td>
      <td class="text-right">${formatCurrency(sale.salePrice)}</td>
      <td>${sale.notes}</td>
      <td>
        <button class="btn-delete" data-sale-id="${sale.id}">Eliminar</button>
      </td>
    `;

    tablaBody.appendChild(row);

  });

  initDeleteSaleButtonHandler();
}


// Funcion que limpia la tabla
function clearTable() {
  const tableBody = document.getElementById('data-table-body');

  tableBody.innerHTML = '';
}


// Funcion que muestra mensaje de carga
function showLoadingMessage() {
  const message = document.getElementById('message');

  message.innerHTML = 'Cargando...';

  message.style.display = 'block';
}


// Funcion que muestra mensaje de carga
function showInitialMessage() {
  const message = document.getElementById('message');

  message.innerHTML = 'No se ha realizado una consulta de ventas.';

  message.style.display = 'block';
}


// Funcion que muestra mensaje de que no se encuentraron datos
function showNotFoundMessage() {
  const message = document.getElementById('message');

  message.innerHTML = 'No se encontraron casas con el filtro proporcionado.';

  message.style.display = 'block';
}


// Funcion que oculta mensaje
function hideMessage() {
  const message = document.getElementById('message');

  message.style.display = 'none';
}

//#endregion


//#region 4. FILTROS (VIEW)

function initFilterButtonsHandler() {

  document.getElementById('filter-form').addEventListener('submit', event => {
    event.preventDefault();
    searchSales();
  });

  document.getElementById('reset-filters').addEventListener('click', () => clearSales());

}


function clearSales() {
  document.querySelector('select.filter-field').selectedIndex = 0;
  document.querySelectorAll('input.filter-field').forEach(input => input.value = '');

  displayClearSalesView();
}


function resetSales() {
  document.querySelector('select.filter-field').selectedIndex = 0;
  document.querySelectorAll('input.filter-field').forEach(input => input.value = '');
  searchSales();
}


function searchSales() {
  const realEstate = document.getElementById('real-estate-filter').value;
  const customerName = document.getElementById('customer-filter').value;
  const salesman = document.getElementById('salesman-filter').value;
  const saleDate = document.getElementById('date-filter').value;

  getSalesData(realEstate, customerName, salesman, saleDate);
}

//#endregion


//#region 5. BOTONES PARA AGREGAR Y ELIMINAR VENTAS (VIEW)

function initAddSaleButtonsHandler() {

  document.getElementById('addSale').addEventListener('click', () => {
      document.getElementById('modal-background').style.display = 'block';
      document.getElementById('modal').style.display = 'block';
  });

  document.getElementById('modal-background').addEventListener('click', () => {
      document.getElementById('modal-background').style.display = 'none';
      document.getElementById('modal').style.display = 'none';
  });

}


function initDeleteSaleButtonHandler() {

  document.querySelectorAll('.btn-delete').forEach(button => {

    button.addEventListener('click', () => {

      const saleId = button.getAttribute('data-sale-id'); // Obtenemos el ID de la venta
      deleteSale(saleId); // Llamamos a la función para eleminar la venta

    });

  });

}


// Mostrar y ocultar el modal para agregar una nueva venta.

//#endregion


//#region 6. CARGAR DATOS DE MODELOS PARA FORM (VIEW)

// Funcion que agrega los datos de los modelos de casas a la tabla.
function displayRealEstateOptions(realEstates) {

  const realEstateFilter = document.getElementById('real-estate-filter');
  const realEstateModal = document.getElementById('real-estate-field');

  realEstates.forEach(realEstate => {

    const optionFilter = document.createElement('option');

    optionFilter.value = realEstate.name;
    optionFilter.text = `${realEstate.name} - ${formatCurrency(realEstate.price)}`;

    realEstateFilter.appendChild(optionFilter);

    const optionModal = document.createElement('option');

    optionModal.value = realEstate.name;
    optionModal.text = `${realEstate.name} - ${formatCurrency(realEstate.price)}`;

    realEstateModal.appendChild(optionModal);
  });

}

//#endregion


//#region 7. CONSUMO DE DATOS DESDE API

function getRealEstateData() {
  fetchAPI(`${apiURL}/real-estate`, 'GET')
    .then(data => {
      const realEstatesList = mapAPIToRealEstateDescriptors(data);
      displayRealEstateOptions(realEstatesList);
    });

}


function getSalesData(realEstate, customerName, salesman, saleDate) {

  const url = `${apiURL}/sales`;

  fetchAPI(url, 'GET')
    .then(data => {
      const salesList = mapAPIToSales(data);
      displaySalesView(salesList);
    });
}


function deleteSale(saleId) {

  const confirm = window.confirm(`¿Estás seguro de que deseas eliminar la venta ${saleId}?`);

  if (confirm) {

    fetchAPI(`${apiURL}/sales/${saleId}`, 'DELETE')
      .then(() => {
        resetSales();
        window.alert("Venta eliminada.");
      });

  }
}

//#endregion


//#region 8. INICIALIZAMOS FUNCIONALIDAD (CONTROLLER)

initAddSaleButtonsHandler();

initFilterButtonsHandler();

getRealEstateData();

//#endregion
