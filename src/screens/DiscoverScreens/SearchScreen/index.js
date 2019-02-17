import React, { Component } from 'react'
import { Screen, SearchContainer } from './styles'
import SearchBar from './components/SearchBar'
import ScreenHeader from '../../../components/ScreenHeader'
import UserSearchCard from './components/UserSearchCard'

const userData = [
  {
    pic: 'https://i.ytimg.com/vi/nIV26rVCWjw/maxresdefault.jpg',
    name: 'Arthur',
    age: 39,
    location: 'Atlantis, FL',
    school: 'University of Florida',
    degree: 'B.A.',
    year: 2001,
    isInterested: false
  },
  {
    pic:
      'https://static.projects.iq.harvard.edu/files/styles/profile_full/public/atp/files/yuke_zheng.jpg?m=1531971036&itok=3oUmuyM0',
    name: 'Yuke',
    age: 19,
    location: 'Cambridge, MA',
    school: 'Harvard University',
    degree: 'B.A.',
    year: 2021,
    isInterested: true
  },
  {
    pic: 'https://lrmonline.com/file/2019/01/margot-robbie-harley-quinn.jpg',
    name: 'Harley',
    age: 25,
    location: 'Somewhere, NY',
    school: 'Yale University',
    degree: 'B.S.',
    year: 2008,
    isInterested: false
  },
  {
    pic:
      'https://www.westhawaiitoday.com/wp-content/uploads/2018/06/web1_Hope-Kudo.jpg',
    name: 'Hope',
    age: 18,
    location: 'The Big Island, HI',
    school: 'Harvard College',
    degree: 'B.A.',
    year: 2022,
    isInterested: true
  },
  {
    pic: 'https://pbs.twimg.com/profile_images/941623413684232192/q4Lkt_kb.jpg',
    name: 'Hossam',
    age: 19,
    location: 'Mansoura, Egypt',
    school: 'Harvard College',
    degree: 'B.A.',
    year: 2021,
    isInterested: true
  },
  {
    pic:
      'https://cdn.aarp.net/content/dam/aarp/entertainment/books/2017/10/1140-book-bites-muhammad-ali-bio.imgcache.rev4d78e736e7f066e5dca72a74ba52a250.jpg',
    name: 'Houddy',
    age: 29,
    location: 'Tanzania',
    school: 'Boston University',
    degree: "Master's",
    year: 2001,
    isInterested: false
  },
  {
    pic: 'https://i.ytimg.com/vi/s3frfGLylIc/maxresdefault.jpg',
    name: 'Bliss',
    age: 129,
    location: 'Somewhere, Some place',
    school: 'Ithaca College',
    degree: 'B.S.',
    year: 2001,
    isInterested: true
  },
  {
    pic:
      'https://images-na.ssl-images-amazon.com/images/I/41xgjPGILRL._SX425_.jpg',
    name: 'Courage',
    age: 3,
    location: 'Middle of Nowhere, Planet Earth',
    school: 'Our Hearts',
    degree: 'B.A.',
    year: 2008,
    isInterested: false
  }
]

export default class SearchScreen extends Component {
  render() {
    return (
      <Screen>
        <ScreenHeader
          navigation={this.props.navigation}
          title="Search"
          showBack
        />
        <SearchBar />
        <SearchContainer>
          {userData.map(data => (
            <UserSearchCard
              key={data.name}
              profilePicture={data.pic}
              name={data.name}
              age={data.age}
              location={data.location}
              school={data.school}
              degree={data.degree}
              year={data.year}
              isInterested={data.isInterested}
            />
          ))}
        </SearchContainer>
      </Screen>
    )
  }
}
