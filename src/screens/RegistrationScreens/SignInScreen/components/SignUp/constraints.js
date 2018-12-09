const constraints = {
  email: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a college email'
    },
    email: {
      message: '^Please provide a college email'
    }
  }
}

export default constraints
