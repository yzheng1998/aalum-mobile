import React, { Component } from 'react'
import { Pic } from './styles'

class UserSearchCardPicture extends Component {
  render() {
    return (
      <Pic
        source={{
          uri:
            'https://media.licdn.com/dms/image/C4D03AQEimgIJC3va5g/profile-displayphoto-shrink_200_200/0?e=1549497600&v=beta&t=RpwoPYFCUcjYQbkCJeIGaEnqWfTug0k_i2brmKMIL64'
        }}
      />
    )
  }
}

export default UserSearchCardPicture
