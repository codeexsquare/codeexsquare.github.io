const createBtn = document.querySelector("#create");
createBtn.addEventListener("click", () => {
  const longUrl = document.querySelector("#longUrl").value;
  const shortUrl = "domain.com/" + Math.random().toString(36).substr(2, 5);
  document.querySelector("#shortUrl").innerHTML = shortUrl;
  
  const newWindow = window.open("", "", "width=300, height=200");
  newWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Redirect Page</title>
      </head>
      <body>
        <h1>Redirect Page</h1>
        <button id="clickHere">Click Here</button>
      </body>
      <script>
        const clickHereBtn = document.querySelector("#clickHere");
        clickHereBtn.addEventListener("click", () => {
          window.location.href = "${longUrl}";
        });
      </script>
    </html>
  `);
});
