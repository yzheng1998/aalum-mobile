import gql from 'graphql-tag'

export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      name
      genders
      ethnicities
      # photos {
      #   id
      #   imageUrl
      #   rank
      # }
      languages
      profilePicture
      height
      age
      job
      bodyType
      interests
      professions
      educations {
        class
        degree
        school
      }
    }
  }
`
