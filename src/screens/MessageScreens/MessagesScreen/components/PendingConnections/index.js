import React, { Component } from 'react'
import { Container, Title } from './styles'
import PendingConnectionCard from './components/PendingConnectionCard'

const data = [
  {
    id: '009f3e7b-1e0c-400f-ac91-e55558c60dc9',
    name: 'Lora',
    age: 19,
    locationName: 'Cambridge, MA',
    profilePicture: 'https://source.unsplash.com/collection/1484593'
  },
  {
    id: '01143457-30c2-4906-b017-69b420dd0788',
    name: 'Lesley',
    age: 19,
    locationName: 'Cambridge, MA',
    profilePicture: 'https://source.unsplash.com/collection/2370441'
  },
  {
    id: '012df28a-4e96-4da5-8098-72dc0062d477',
    name: 'Roslyn',
    age: 19,
    locationName: 'Cambridge, MA',
    profilePicture: 'https://source.unsplash.com/collection/551647'
  },
  {
    id: '009f3e7b-1e0c-400f-ac91-e55558c60dc6',
    name: 'Lora',
    age: 19,
    locationName: 'Cambridge, MA',
    profilePicture: 'https://source.unsplash.com/collection/1484593'
  },
  {
    id: '01143457-30c2-4906-b017-69b420dd0785',
    name: 'Lesley',
    age: 19,
    locationName: 'Cambridge, MA',
    profilePicture: 'https://source.unsplash.com/collection/2370441'
  },
  {
    id: '012df28a-4e96-4da5-8098-72dc0062d474',
    name: 'Roslyn',
    age: 19,
    locationName: 'Cambridge, MA',
    profilePicture: 'https://source.unsplash.com/collection/551647'
  },
  {
    id: '009f3e7b-1e0c-400f-ac91-e55558c60dc3',
    name: 'Lora',
    age: 19,
    locationName: 'Cambridge, MA',
    profilePicture: 'https://source.unsplash.com/collection/1484593'
  },
  {
    id: '01143457-30c2-4906-b017-69b420dd0782',
    name: 'Lesley',
    age: 19,
    locationName: 'Cambridge, MA',
    profilePicture: 'https://source.unsplash.com/collection/2370441'
  },
  {
    id: '012df28a-4e96-4da5-8098-72dc0062d471',
    name: 'Roslyn',
    age: 19,
    locationName: 'Cambridge, MA',
    profilePicture: 'https://source.unsplash.com/collection/551647'
  }
]

class PendingConnections extends Component {
  render() {
    return (
      <Container>
        <Title>PENDING CONNECTIONS</Title>
        {data.map(item => (
          <PendingConnectionCard
            id={item.id}
            name={item.name}
            age={item.age}
            locationName={item.locationName}
            profilePicture={item.profilePicture}
          />
        ))}
      </Container>
    )
  }
}

export default PendingConnections
