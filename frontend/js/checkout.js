async function finalizarCompra() {
  try {
    const response = await fetch('/api/create_preference', {
      method: 'POST'
    });

    const data = await response.json();

    window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${data.id}`;

  } catch (error) {
    alert("Erro ao iniciar pagamento");
  }
}