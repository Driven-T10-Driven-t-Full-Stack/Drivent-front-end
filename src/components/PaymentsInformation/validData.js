export  function validDate(state) {
  const [mes, ano] = state.expiry.split('/');
  const mesAtual = new Date().getMonth() + 1;
  const anoAtual = new Date().getFullYear().toString().slice(-2);

  if((mes < 1 || mes > 12) || (ano < anoAtual) || ((ano <= anoAtual) && (mes < mesAtual)) || state.expiry === '') {
    return true;
  } 
  
  return false;
}

export  function validData(state) {
  const removeNonNumeric = (str) => str.replace(/\D/g, '');
  if((state.name === '') || 
       (state.number === '' || removeNonNumeric(state.number).length < 16) || 
       (state.cvc === '' || removeNonNumeric(state.cvc).length < 3)) {
    return true;
  }
  else{
    return false;
  }
}
