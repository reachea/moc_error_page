export default function BadGateway() {
  return (
    <div className="app-502">
      <div className="header-502">
        <img
          className="img-logo-502"
          src="https://www.moc.gov.kh/_next/static/images/moclogo1-df0ca21f8bc9107e1f27db61784b359a.png"
        />
      </div>

      <h1 className="title-502">ERROR 502: BAD GATEWAY</h1>

      <div className="footer-502">
        <div className="footer-left-container-502">
          <div>
            <h3>What happened?</h3>

            <p>The web server reported a bad gateway error.</p>
          </div>
        </div>

        <div className="footer-right-container-502">
          <div>
            <h3>What can I do?</h3>

            <p>Please try again a few minutes.</p>
          </div>
        </div>

        <div className="social-media-container-502">
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
