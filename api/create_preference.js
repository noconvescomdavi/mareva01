import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: "APP_USR-4333973540946731-040608-c78bcb6fc3fb697ed629ab6d8fcc7614-3316391779"
});

export default async function handler(req, res) {

  const items = req.body.map(item => ({
    title: item.nome,
    unit_price: item.preco,
    quantity: item.qtd
  }));

  const preference = {
    items,
    back_urls: {
      success: "https://mareva-rio.vercel.app/sucesso.html",
      failure: "https://mareva-rio.vercel.app/frontend/erro.html",
      pending: "https://mareva-rio.vercel.app/frontend/pendente.html"
    },
    auto_return: "approved"
  };

  const response = await mercadopago.preferences.create(preference);

  res.status(200).json({
    init_point: response.body.init_point
  });
<<<<<<< HEAD
}
=======
}
>>>>>>> 1f866ffdf14509b091eaa8cd1aec6cb61c693207
