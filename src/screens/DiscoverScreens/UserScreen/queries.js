import gql from 'graphql-tag'

export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      name
      email
      birthday
      gender
      ethnicity
      photos {
        id
        imageUrl
        rank
      }
      height
      age
      job
      bodyType
      interests
      educations {
        class
        degree
        school
      }
    }
  }
`
