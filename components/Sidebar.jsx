import React from 'react'
import { useRouter } from 'next/router'

export default function Sidebar() {

  const router = useRouter();

  return (
    <div>
      <div>
        <div
          className="offcanvas offcanvas-start w-25"
          tabIndex={-1}
          id="offcanvas"
          data-bs-keyboard="false"
          data-bs-backdrop="false"
        >
          <div className="offcanvas-header">
            <h6 className="offcanvas-title d-none d-sm-block" id="offcanvas">
              <span onClick={() => router.push("/home")}>SIPSE</span>
            </h6>

            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body px-0">
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
              id="menu"
            >
              <li className="nav-item">
                <a className="nav-link text-truncate" to="/dasboard" onClick={() => router.push("/dashboard")}>
                  <i className="fs-5 bi-house" />
                  <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </a>
              </li>
              {/* <li>
                <Link
                  data-bs-toggle="collapse"
                  className="nav-link text-truncate"
                  to='/estadisticas'
                >
                  <i className="fs-5 bi-speedometer2" />
                  <span className="ms-1 d-none d-sm-inline">
                    Dashboard
                  </span>{" "}
                </Link>
              </li> */}
              <li className="dropdown">
                {/* DROPDOWN HISTORIAL */}
                <a
                  className="nav-link dropdown-toggle  text-truncate"
                  id="dropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fs-5 bi-bootstrap" />
                  <span className="ms-1 d-none d-sm-inline">Historial</span>
                </a>
                <ul
                  className="dropdown-menu text-small shadow"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => router.push("/historial/historialerrores")}
                    >
                      Historial de Errores
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                {/* DROPDOWN CATALOGOS */}
                <a
                  className="nav-link dropdown-toggle  text-truncate"
                  id="dropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fs-5 bi-bootstrap" />
                  <span className="ms-1 d-none d-sm-inline">Catálogos</span>
                </a>
                <ul
                  className="dropdown-menu text-small shadow"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => router.push("catalogos/catunidmedida")}
                    >
                      Categoría Unidad de Medida
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" to="/catalogos/unidmedida" onClick={() => router.push("catalogos/unidmedida")}>
                      Unidad de Medida
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col min-vh-100 p-4">
              {/* toggler */}
              <button
                className="btn btn-primary float-end"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas"
                role="button"
              >
                Sidebar
                <i
                  className="bi bi-arrow-right-square-fill fs-3"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
