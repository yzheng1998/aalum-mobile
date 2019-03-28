import React from 'react'
import UserCard from '../../../../../../../components/UserCard'

const PendingConnectionCard = ({
  id,
  name,
  age,
  locationName,
  profilePicture,
  school,
  degree,
  year
}) => (
  <UserCard
    profilePicture={profilePicture}
    name={name}
    age={age}
    locationName={locationName}
    school={school}
    degree={degree}
    year={year}
  />
)

export default PendingConnectionCard
