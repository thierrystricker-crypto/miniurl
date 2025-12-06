export default function handler(req, res) {
  const { orderId } = req.query;

  if (!orderId) {
    res.status(400).send("Missing order ID");
    return;
  }

  // URL Shopify OFFICIAL SWISS POST pour JAR (le-meuble)
  const target =
    "https://admin.shopify.com/store/le-meuble/apps/official-swiss-post-app/order/getorders/type/label" +
    "?shop=le-meuble.myshopify.com&ids%5B%5D=" + orderId;

  res.redirect(302, target);
}
