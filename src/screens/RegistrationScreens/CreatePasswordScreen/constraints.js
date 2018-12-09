const constraints = {
  password: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a password'
    }
  }
}

export default constraints
