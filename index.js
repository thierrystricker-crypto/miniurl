export default function handler(req, res) {
  const { code } = req.query;
  if (!code) {
    return res.status(400).send("Missing code");
  }
  const target = "https://shopify.com/apps/official-swiss-post-app/" + code;
  return res.redirect(302, target);
}
