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

// Frances

// Obtener los elementos del formulario y la tabla de amortización
const form = document.getElementById('formValorPresenteSimple')
const table = document.getElementById('amortizationTable')

// Agregar un evento de escucha al formulario
form.addEventListener('submit', calcularAmortizacion)

function calcularAmortizacion(event) {
  event.preventDefault()

  // Obtener los valores ingresados por el usuario
  const montoPrestamo = parseFloat(
    document.getElementById('inputMontoPrestamo').value
  )
  const tasaInteres = parseFloat(
    document.getElementById('inputTasaInteres').value
  )
  const unidadInteres = parseInt(
    document.getElementById('inputGroupSelectUnidadInteres').value
  )
  const numeroPeriodos = parseInt(
    document.getElementById('inputNumeroPeriodos').value
  )
  const unidadPeriodos = parseInt(
    document.getElementById('inputGroupSelectUnidadPeriodos').value
  )

  // Calcular el factor de amortización
  const factorAmortizacion = calcularFactorAmortizacion(
    tasaInteres,
    unidadInteres,
    numeroPeriodos,
    unidadPeriodos
  )

  // Calcular la tabla de amortización
  const tablaAmortizacion = calcularTablaAmortizacion(
    montoPrestamo,
    factorAmortizacion
  )

  // Mostrar la tabla de amortización en HTML
  mostrarTablaAmortizacion(tablaAmortizacion)
}

function calcularFactorAmortizacion(
  tasaInteres,
  unidadInteres,
  numeroPeriodos,
  unidadPeriodos
) {
  const tasaPeriodo = tasaInteres / (unidadInteres * unidadPeriodos)
  const factor = Math.pow(1 + tasaPeriodo, numeroPeriodos)
  const factorAmortizacion = (tasaPeriodo * factor) / (factor - 1)
  return factorAmortizacion
}

function calcularTablaAmortizacion(montoPrestamo, factorAmortizacion) {
  const tabla = []

  let saldoPendiente = montoPrestamo
  let cuota = saldoPendiente * factorAmortizacion
  let intereses = saldoPendiente * factorAmortizacion
  let amortizacion = cuota - intereses

  for (let i = 1; i <= numeroPeriodos; i++) {
    tabla.push({
      periodo: i,
      cuota: cuota.toFixed(2),
      intereses: intereses.toFixed(2),
      amortizacion: amortizacion.toFixed(2),
      saldoPendiente: saldoPendiente.toFixed(2),
    })

    saldoPendiente -= amortizacion
    cuota = saldoPendiente * factorAmortizacion
    intereses = saldoPendiente * factorAmortizacion
    amortizacion = cuota - intereses
  }

  return tabla
}

function mostrarTablaAmortizacion(tablaAmortizacion) {
  // Limpiar la tabla existente
  table.innerHTML = ''

  // Crear encabezados de columna
  const thead = table.createTHead()
  const row = thead.insertRow()
  const headers = [
    'Periodo',
    'Cuota',
    'Intereses',
    'Amortización',
    'Saldo Pendiente',
  ]

  for (const header of headers) {
    const th = document.createElement('th')
    th.innerText = header
    row.appendChild(th)
  }

  // Agregar filas de datos
  const tbody = table.createTBody()

  for (const fila of tablaAmortizacion) {
    const row = tbody.insertRow()
    const valores = Object.values(fila)

    for (const valor of valores) {
      const cell = row.insertCell()
      cell.innerText = valor
    }
  }
}
