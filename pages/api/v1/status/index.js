function status(request, response) {
  response.status(200).json({ chave: "alunos do Curso.dev são top" })
}

export default status