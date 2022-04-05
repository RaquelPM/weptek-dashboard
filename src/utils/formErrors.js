const formErrors = (setError) => (response) => {
  if (response.status === 400) {
    if (response.data.details?.cpf) {
      if (response.data.details.cpf.match(/unique/)) {
        setError('cpf', { message: 'CPF já utilizado!' })

        return false
      }

      setError('cpf', { message: 'CPF inválido!' })

      return false
    }

    if (response.data.details?.email) {
      if (response.data.details.email.match(/unique/)) {
        setError('email', { message: 'Email já utilizado!' })

        return false
      }

      setError('email', { message: 'Email inválido!' })

      return false
    }

    if (response.data.details?.phone) {
      if (response.data.details.phone.match(/unique/)) {
        setError('phone', { message: 'Telefone já utilizado!' })

        return false
      }

      setError('phone', { message: 'Telefone inválido!' })

      return false
    }

    if (response.data.details?.pix) {
      setError('pix', { message: 'Chave PIX inválida!' })

      return false
    }

    if (response.data.details?.name) {
      if (response.data.details.name.match(/unique/)) {
        setError('name', { message: 'Nome já utilizado!' })

        return false
      }

      setError('name', { message: 'Nome inválido!' })

      return false
    }

    if (response.data.details.domain.match(/unique/)) {
      setError('domain', { message: 'Domínio já utilizado!' })

      return false
    }

    setError('domain', { message: 'Domínio inválido!' })

    return false
  }

  return true
}

export default formErrors
