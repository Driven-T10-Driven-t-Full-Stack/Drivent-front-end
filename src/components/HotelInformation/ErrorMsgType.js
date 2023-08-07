export default function errorMsgType(errorData) {
  var errorTypes = {
    'Service not included.': 'Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades',
    'Cannot list hotels!': 'Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem',
    'Not Found': 'Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem',
    'default': 'Algo deu errado. Tente novamente!',
  };
  return errorTypes[errorData] || errorTypes['default'];
}
