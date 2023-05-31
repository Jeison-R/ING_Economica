function PrintNavBar() {
  let navBar = document.getElementById('navbar')
  if (navBar) {
    navBar.innerHTML = ''
    navBar.innerHTML = `<div class="container-fluid">
    <a class="navbar-brand" href="#">YUJEKEAL</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
      <a class="nav-link" aria-current="page" href="/index.html"
        >Inicio</a
      >
    </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Interes Simple
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="/FRONTEND/Paginas/Interes_Simple/ValorPresenteSimple.html">Valor
                Presente</a>
            </li>
            <li>
              <a class="dropdown-item" href="/FRONTEND/Paginas/Interes_Simple/ValorFuturoSimple.html">Valor
                Futuro</a>
            </li>
            <li>
              <a class="dropdown-item"
                href="/FRONTEND/Paginas/Interes_Simple/CalcularPeriodosSimple.html">Calcular
                Periodos</a>
            </li>
            <li>
              <a class="dropdown-item" href="/FRONTEND/Paginas/Interes_Simple/CalcularInteresSimple.html">Calcular
                tasa de Interes</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Interes Compuesto
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item"
                href="/FRONTEND/Paginas/Interes_Compuesto/ValorPresenteCompuesto.html">Valor Presente</a>
            </li>
            <li>
              <a class="dropdown-item" href="/FRONTEND/Paginas/Interes_Compuesto/ValorFuturoCompuesto.html">Valor
                Futuro</a>
            </li>
            <li>
              <a class="dropdown-item"
                href="/FRONTEND/Paginas/Interes_Compuesto/CalcularPeriodosCompuesto.html">Calcular
                Periodos</a>
            </li>
            <li>
              <a class="dropdown-item"
                href="/FRONTEND/Paginas/Interes_Compuesto/CalcularInteresCompuesto.html">Calcular
                tasa de Interes</a>
            </li>
          </ul>
        </li>

         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Amortización
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="/FRONTEND/Paginas/amortizacion/Frances.html">Francés</a>
            </li>
            <li>
              <a class="dropdown-item" href="/FRONTEND/Paginas/amortizacion/Americano.html">Americano</a>
            </li>
            <li>
              <a class="dropdown-item" href="/FRONTEND/Paginas/amortizacion/Aleman.html">Alemán</a>
            </li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Gradiente
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="/FRONTEND/Paginas/gradiente/gradienteGeometrico.html">Geometrico</a>
            </li>
            <li>
              <a class="dropdown-item" href="/FRONTEND/Paginas/gradiente/gradienteLineal.html">Lineal</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>`
  }
}
export default { PrintNavBar }
