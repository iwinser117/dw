import React from "react";

const Paginacion = ({value}) => {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link"  aria-disabled="true">
              {next}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
            {next}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
            {next}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              {next}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
            {next}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Paginacion;
