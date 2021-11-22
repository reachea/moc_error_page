import Link from "next/link";
import React from "react";

export default function PageNotFound() {
  return (
    <div className="app-404">
      <div className="header-404">
        <img className="img-logo-404" src="/moclogo1.png" />
      </div>

      <h1 className="title-404 mt-5">ERROR 404: PAGE NOT FOUND</h1>
      <div>
        <img src="/404.png" className="img-404" />
      </div>
      <div className="banner-btn mt-3">
        <Link href="/">
          <a className="default-btn-one" style={{ fontSize: 18 }}>
            Back To Home
          </a>
        </Link>
      </div>

      <div className="footer-404">
        <div className="footer-left-container-404">
          <div>
            <h3>What happened?</h3>

            <p>No page corresponding to current route.</p>
          </div>
        </div>

        <div className="footer-right-container-404">
          <div>
            <h3>What can I do?</h3>

            <p>Please try entering different URL.</p>
          </div>
        </div>

        <div className="social-media-container-404">
          <a
            href="https://www.facebook.com/moc.gov.kh/"
            title="facebook"
            target="_blank"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.youtube.com/c/mocgovkhcambodia"
            title="youtube"
            target="_blank"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
