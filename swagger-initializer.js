window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {url: "https://raw.githubusercontent.com/inoerp/inoerp.github.io/main/files/rest/inoerp_ap.json", name: "Accounts Payable"},
      {url: "https://raw.githubusercontent.com/inoerp/inoerp.github.io/main/files/rest/inoerp_ar.json", name: "Accounts Receivable"},
      {url: "https://raw.githubusercontent.com/inoerp/inoerp.github.io/main/files/rest/inoerp_cst.json", name: "Cost Accounting"},
      {url: "https://raw.githubusercontent.com/inoerp/inoerp.github.io/main/files/rest/inoerp_fa.json", name: "Fixed Asset Accounting"},
      {url: "https://raw.githubusercontent.com/inoerp/inoerp.github.io/main/files/rest/inoerp_gl.json", name: "General Ledger"},
      {url: "https://raw.githubusercontent.com/inoerp/inoerp.github.io/main/files/rest/inoerp_inv.json", name: "Inventory"},
      {url: "https://raw.githubusercontent.com/inoerp/inoerp.github.io/main/files/rest/inoerp_mdm.json", name: "Master Data Management"},
      {url: "https://raw.githubusercontent.com/inoerp/inoerp.github.io/main/files/rest/inoerp_wip.json", name: "Work in Process"},
      {url: "https://raw.githubusercontent.com/inoerp/inoerp.github.io/main/files/rest/inoerp_po.json", name: "Purchasing"},
      {url: "https://raw.githubusercontent.com/inoerp/inoerp.github.io/main/files/rest/inoerp_sd.json", name: "Sales & Distribution"},
      {url: "https://raw.githubusercontent.com/inoerp/inoerp.github.io/main/files/rest/inoerp_fp.json", name: "Forecast & Planning"},
      {url: "https://raw.githubusercontent.com/inoerp/inoerp.github.io/main/files/rest/inoerp_hr.json", name: "Human Capital Management"}

    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
