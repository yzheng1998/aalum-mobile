const constraints = {
  email: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a university email'
    },
    format: {
      pattern:
        '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+(.edu|.ac.uk|ac.nz|.edu.au|.edu.cn|.edu.tw|.stanfordgsb.org|.stanfordalumni.org)$',
      message: '^Please provide a university email'
    }
  }
}

export default constraints
