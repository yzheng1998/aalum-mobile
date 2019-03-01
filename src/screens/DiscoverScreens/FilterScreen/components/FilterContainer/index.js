import React, { Component } from 'react'
import { Container, Padding, Screen } from './styles'
import FilterSliders from '../FilterSliders'
import FilterButtonGroups from '../FilterButtonGroups'
import ScreenHeader from '../../../../../components/ScreenHeader'
import FloatingButton from '../../../../../components/FloatingButton'
import FilterMultiLists from '../FilterMultiLists'
import { inchesToString } from '../../../../../../unitConverters'
import {
  distanceSliderInfo,
  ageSliderInfo,
  heightSliderInfo,
  languageListInfo,
  professionListInfo
} from '../../constants'
import { APPLY_FILTERS } from '../../mutations'
import { Mutation } from 'react-apollo'
import { Alert } from 'react-native'

export default class FilterContainer extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
    this.state = {
      distance: props.distance || [6],
      age: props.age || [24, 30],
      height: props.height || [64, 76],
      genders: props.genders || [],
      languages: props.languages || [],
      professions: props.professions || [],
      ethnicities: props.ethnicities || [],
      bodyTypes: props.bodyTypes || []
    }
  }
  render() {
    const {
      distance,
      age,
      height,
      genders,
      languages,
      professions,
      ethnicities,
      bodyTypes
    } = this.state
    const sliders = [
      {
        ...distanceSliderInfo,
        values: distance,
        formatter: x => x,
        updateState: val => this.updateState({ distance: val })
      },
      {
        ...ageSliderInfo,
        values: age,
        formatter: x => x,
        updateState: val => this.updateState({ age: val })
      },
      {
        ...heightSliderInfo,
        values: height,
        formatter: inchesToString,
        updateState: val => this.updateState({ height: val })
      }
    ]

    const lists = [
      {
        ...languageListInfo,
        onChange: val => this.updateState({ languages: val }),
        selectedItems: languages
      },
      {
        ...professionListInfo,
        onChange: val => this.updateState({ professions: val }),
        selectedItems: professions
      }
    ]
    return (
      <Container>
        <Screen>
          <ScreenHeader
            navigation={this.props.navigation}
            title="Filter"
            showBack
          />
          <FilterSliders sliders={sliders} />
          <FilterButtonGroups
            genderSelection={genders}
            ethnicitySelection={ethnicities}
            bodyTypeSelection={bodyTypes}
          />
          <FilterMultiLists lists={lists} />
          <Padding />
        </Screen>

        <Mutation
          mutation={APPLY_FILTERS}
          onCompleted={() => {
            this.props.navigation.goBack()
          }}
          onError={error => {
            if (error) {
              Alert.alert('Encountered server error')
            }
          }}
        >
          {applyFilters => (
            <FloatingButton
              title="Apply"
              onPress={() => {
                const variables = {
                  input: {
                    distance,
                    ageRange: {
                      minimum: age[0],
                      maximum: age[1]
                    },
                    height: {
                      minimum: height[0],
                      maximum: height[1]
                    },
                    genders: [],
                    bodyTypes: [],
                    ethnicities: [],
                    educations: [],
                    languages,
                    professions
                  }
                }
                applyFilters({ variables })
              }}
            />
          )}
        </Mutation>
      </Container>
    )
  }
}
