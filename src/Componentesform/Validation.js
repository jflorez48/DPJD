const validateEmail = ({ email, setEmailError }) => {
    const emailRegular =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email && !email.match(emailRegular)
      ? setEmailError('Email no valido')
      : setEmailError('');
  };
  
  const validatePhone = ({ phone, setPhoneError }) => {
    var phoneRegular = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phone && !phone.match(phoneRegular)
      ? setPhoneError('Numero de celular no valido')
      : setPhoneError('');
  };
  
  const validateFullName = ({ fullName, setFullNameError }) => {
    return fullName && fullName.length < 10
      ? setFullNameError('Nombre muy corto')
      : fullName && fullName.length > 50
      ? setFullNameError('Nombre muy largo')
      : setFullNameError('');
  };
  
  const validateMessage = ({ message, setMessageError }) => {
    return message && message.length < 5
      ? setMessageError('Mensaje muy corto')
      : message && message.length > 200
      ? setMessageError('Mensaje muy largo')
      : setMessageError('');
  };
  
  export { validateEmail, validateFullName, validateMessage, validatePhone };

