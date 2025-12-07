export default function handler(req, res) {
  const { shopcode, orderId } = req.query;

  if (!shopcode || !orderId) {
    res.status(400).send("Missing shop or order ID");
    return;
  }

  let target = "";

  switch (shopcode.toUpperCase()) {
    case "JAR":
      target = `https://admin.shopify.com/store/le-meuble-jardin/orders/${orderId}`;
      break;

    case "GAL":
      target = `https://admin.shopify.com/store/cb4c13-3/app/orders/${orderId}`;
      break;

    case "LUM":
      target = `https://admin.shopify.com/store/lumi-shop/orders/${orderId}`;
      break;

    default:
      res.status(400).send(`Unknown shop: ${shopcode}`);
      return;
  }

  res.redirect(target);
}
