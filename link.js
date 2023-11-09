function storeData(str) {
  let data = {};

  let splitArray = str.split("://");

  data.protocol = splitArray[0];

  let hostPath = splitArray[1].split("?");
  let spl = hostPath[0].split("/");

  data.host = spl.shift();
  data.path = spl.join("/");
  let quertStr = new URLSearchParams(hostPath[1]);

  data.query = {};
  for (const [spec, value] of quertStr) {

    data.query[spec] = value;
  }

  for (const [key, value] of Object.entries(data)) {
    console.log(key, value);
  }
}

let link =
  "https://www.google.com/search?client=opera-gx&hs=bYm&sca_esv=580120143&sxsrf=AM9HkKnZyM6JRQqTOKCF0Zf0mHD058POOQ:1699369185375&q=google&tbm=isch&source=lnms&sa=X&ved=2ahUKEwivr4vFk7KCAxV2SfEDHToNCVMQ0pQJegQIDRAB&biw=1495&bih=754&dpr=1.25";
storeData(link);

// protocol , domain , directoriq i poddirectoriq, ima na par stoinost na par;
