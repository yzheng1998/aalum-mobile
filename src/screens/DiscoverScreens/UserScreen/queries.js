import gql from 'graphql-tag'

export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      name
      bio
      genders
      ethnicities
      photos {
        id
        imageUrl
        rank
      }
      languages
      profilePicture
      distance
      height
      age
      job
      bodyType
      interests
      professions
      educations {
        year
        degreeType
        schoolName
      }
      isConnected
    }
  }
`
