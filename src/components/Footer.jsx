export default function FooterComponent() {
  return (
    <footer className="d-flex flex-wrap justify-content-between p-5 bg-dark  ">
      <div className="col-md-4 d-flex align-items-center">
        <a className="mb-3 me-2 mb-md-0 text-body-secondary lh-1">
          {/* <svg className="bi" width="30" height="24">
            <use xlinkHref="#bootstrap"></use>
          </svg> */}
        </a>
        <span className="mb-3 mb-md-0 text-light">
          Developed By Sithum Udara
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-light" href="https://github.com/sthmu/weatherRay.git">
          <i class="bi bi-github"></i>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-light" href="#">
          <i class="bi bi-facebook"></i>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-light" href="#">
          <i class="bi bi-whatsapp"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
