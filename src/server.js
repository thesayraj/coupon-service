const app = require("./app");
const { PORT } = require("./config");

app.listen(PORT, () => {
  console.log(`Coupon Service running on port ${PORT}`);
});
