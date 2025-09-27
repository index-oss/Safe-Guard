fetch("https://your-server.com/check-license?key=USER_KEY")
  .then(res => res.json())
  .then(data => {
    if (!data.valid) {
      throw new Error("Unauthorized usage detected!");
    }
    console.log("App running...");
  });
