function status(request, response) {
  response.status(200).json({ chave: "Deu certo o jasão" });
}

export default status;
