const constraints = {
  email: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a college email'
    },
    format: {
      pattern:
        '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+(.edu|.ac.uk|ac.nz|.edu.au|.edu.cn|.edu.tw)$',
      message: '^Please provide a college email'
    }
  }
}

export default constraints
