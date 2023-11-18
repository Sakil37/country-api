const Footer = () => {
  return (
    <section className="px-2 py-2 footerbg">
      <div className="container">
        <div className="row align-items-center .justify-content-between
align-items-center">
          <div className="col-lg-3">
            <p className="text-white mb-0">
              © 2023 The Country-api design by Shakil
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <h6 className="text-white">This is Footer design</h6>
          </div>
          <div className="col-lg-3">
            <ul className="d-flex justify-content-between align-items-center mb-0">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
