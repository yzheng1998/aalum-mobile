import React, { Component } from 'react'
import { Container } from './styles'
import ToggleButtonGroup from '../../../../../components/ToggleButtonGroup'
import {
  genderList,
  bodyTypeList,
  ethnicityList,
  degreeList
} from '../../../../../../enumMappings'

export default class FilterButtonGroups extends Component {
  render() {
    const {
      genderSelection,
      bodyTypeSelection,
      ethnicitySelection,
      educationSelection
    } = this.props
    return (
      <Container>
        <ToggleButtonGroup
          isFilter
          title="GENDER"
          optionsArray={genderList}
          selectionArray={genderSelection}
          updateState={selection =>
            this.props.updateState({ genders: selection })
          }
        />
        <ToggleButtonGroup
          isFilter
          title="BODY TYPE"
          optionsArray={bodyTypeList}
          selectionArray={bodyTypeSelection}
          updateState={selection =>
            this.props.updateState({ bodyTypes: selection })
          }
        />
        <ToggleButtonGroup
          isFilter
          title="ETHNICITY"
          optionsArray={ethnicityList}
          selectionArray={ethnicitySelection}
          updateState={selection =>
            this.props.updateState({ ethnicities: selection })
          }
        />
        <ToggleButtonGroup
          isFilter
          title="EDUCATION"
          optionsArray={degreeList}
          selectionArray={educationSelection}
          updateState={selection =>
            this.props.updateState({ educations: selection })
          }
        />
      </Container>
    )
  }
}
