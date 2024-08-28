export default function loading() {
  return (
    <>
      <div className="containerLoading">
        <div className="pre-loader">
          <div className="loader"></div>
          <div className="loaderBg"></div>
        </div>
        <div className="loaderContent">
          <div className="count">
            <p>0</p>
          </div>
          <div className="copy">
            <p className="ml16">Eve Dubuisson</p>
          </div>
        </div>
        <div className="loader2"></div>
      </div>
      <div className="siteContent"></div>
    </>
  );
}
