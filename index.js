const app = require("./app");

const PORT = 5003;

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});