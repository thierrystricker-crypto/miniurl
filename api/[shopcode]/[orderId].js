export default function handler(req, res) {
  const { shopcode, orderId } = req.query;

  if (!shopcode || !orderId) {
    res.status(400).send("Missing shop or order ID");
    return;
  }

  // Normalisation
  const s = shopcode.toUpperCase();

  // Liste des URLs des 3 boutiques
  const MAP = {
    "JAR": `https://admin.shopify.com/store/le-meuble/apps/official-swiss-post-app/order/getorders/type/label?shop=le-meuble.myshopify.com&ids%5B%5D=${orderId}`,
    "GAL": `https://admin.shopify.com/store/cb4c13-3/apps/official-swiss-post-app/order/getorders/type/label?shop=cb4c13-3.myshopify.com&ids%5B%5D=${orderId}`,
    "LUM": `https://admin.shopify.com/store/jardin-confort/apps/official-swiss-post-app/order/getorders/type/label?shop=jardin-confort.myshopify.com&ids%5B%5D=${orderId}`
  };

  const target = MAP[s];

  if (!target) {
    res.status(404).send("Unknown shop: " + shopcode);
    return;
  }

  // Redirection propre
  res.writeHead(302, { Location: target });
  res.end();
}
