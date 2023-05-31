// IMPORTS
import InteresSimple from './Scripts/Interes_Simple/InteresSimple.js'
import InteresCompuesto from './Scripts/Interes_Compuesto/InteresCompuesto.js'
import PrinterNavbar from './Scripts/PrinterNavbar.js'

// VARIABLES

const formValorPresenteSimple = document.getElementById(
  'formValorPresenteSimple'
)
const SelectCalcular = document.getElementById('SelectCalcular')

// FUNCIONES

function ImprimirResultado(id) {
  switch (id) {
    case 'btnValorPresenteSimple':
      InteresSimple.calcularValorPresente()
      break
    case 'btnValorPresenteCompuesto':
      InteresCompuesto.calcularValorPresente()
      break
    case 'btnValorFuturoSimple':
      InteresSimple.calcularValorFuturo()
      break
    case 'btnValorFuturoCompuesto':
      InteresCompuesto.calcularValorFuturo()
      break
    case 'btnCalcularInteresSimple':
      InteresSimple.calcularInteres()
      break
    case 'btnCalcularPeriodosSimple':
      InteresSimple.calcularPeriodos()
      break
    case 'btnCalcularInteresCompuesto':
      InteresCompuesto.calcularInteres()
      break
    case 'btnCalcularPeriodosCompuesto':
      InteresCompuesto.calcularPeriodos()
      break
  }
}

function ImprimirFormulario() {
  switch (SelectCalcular.value) {
    //NADA
    case '0':
      PrinterInteresSimple.PrintNada()
      break

    //VALOR PRESENTE
    case '1':
      PrinterInteresSimple.PrintValorPresente()
      break

    //TASA DE INTERES
    case '2':
      PrinterInteresSimple.PrintCalcularInteres()
      break

    //NUMERO DE PERIODOS
    case '3':
      PrinterInteresSimple.PrintCalcularPeriodos()
      break

    case '4':
      PrinterInteresSimple.PrintValorFuturo()
      break

    default:
      break
  }
}

//EVENT LISTENERS
window.onload = () => {
  console.log('first')
  PrinterNavbar.PrintNavBar()
}

if (SelectCalcular) {
  SelectCalcular.addEventListener('change', () => {
    ImprimirFormulario()
  })
}

if (formValorPresenteSimple) {
  formValorPresenteSimple.addEventListener('click', (e) => {
    e.preventDefault()
    ImprimirResultado(e.target.id)
  })
}

// Main.js

document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('btnValorAleman')
    .addEventListener('click', calcularAmortizacion)
})

function calcularAmortizacion() {
  // Obtener los valores del formulario
  var montoPrestamo = parseFloat(
    document.getElementById('inputMontoPrestamo').value
  )
  var tasaInteres =
    parseFloat(document.getElementById('inputTasaInteres').value) / 100
  var unidadInteres = parseInt(
    document.getElementById('inputGroupSelectUnidadInteres').value
  )
  var numeroPeriodos = parseInt(
    document.getElementById('inputNumeroPeriodos').value
  )
  var unidadPeriodos = parseInt(
    document.getElementById('inputGroupSelectUnidadPeriodos').value
  )

  // Calcular la cuota periódica
  var cuota =
    (montoPrestamo * (tasaInteres / unidadInteres)) /
    (1 - Math.pow(1 + tasaInteres / unidadInteres, -numeroPeriodos))

  // Limpiar la tabla
  var amortizationTable = document.getElementById('amortizationTable')
  amortizationTable.innerHTML =
    '<tr><th>Periodo</th><th>Capital Restante</th><th>Interés</th><th>Amortización de capital</th><th>Cuota</th></tr>'

  // Calcular la tabla de amortización
  var saldoPendiente = montoPrestamo
  for (var i = 1; i <= numeroPeriodos; i++) {
    var interes = saldoPendiente * (tasaInteres / unidadInteres)
    var amortizacion = cuota - interes
    saldoPendiente -= amortizacion

    // Agregar la fila a la tabla
    var row = document.createElement('tr')
    row.innerHTML =
      '<td>' +
      i +
      '</td><td>' +
      saldoPendiente.toFixed(2) +
      '</td><td>' +
      interes.toFixed(2) +
      '</td><td>' +
      amortizacion.toFixed(2) +
      '</td><td>' +
      cuota.toFixed(2) +
      '</td>'
    amortizationTable.appendChild(row)
  }
}
