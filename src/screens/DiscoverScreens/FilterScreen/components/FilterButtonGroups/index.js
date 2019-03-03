import React from 'react'
import { Container } from './styles'
import ToggleButtonGroup from '../../../../../components/ToggleButtonGroup'
import {
  genderList,
  bodyTypeList,
  ethnicityList,
  degreeList
} from '../../../../../../enumMappings'

const FilterButtonGroups = ({
  genderSelection,
  bodyTypeSelection,
  ethnicitySelection,
  educationSelection,
  updateState
}) => (
  <Container>
    <ToggleButtonGroup
      isFilter
      title="GENDER"
      optionsArray={genderList}
      selectionArray={genderSelection}
      updateState={selection => updateState({ genders: selection })}
    />
    <ToggleButtonGroup
      isFilter
      title="BODY TYPE"
      optionsArray={bodyTypeList}
      selectionArray={bodyTypeSelection}
      updateState={selection => updateState({ bodyTypes: selection })}
    />
    <ToggleButtonGroup
      isFilter
      title="ETHNICITY"
      optionsArray={ethnicityList}
      selectionArray={ethnicitySelection}
      updateState={selection => updateState({ ethnicities: selection })}
    />
    <ToggleButtonGroup
      isFilter
      title="EDUCATION"
      optionsArray={degreeList}
      selectionArray={educationSelection}
      updateState={selection => updateState({ educations: selection })}
    />
  </Container>
)

export default FilterButtonGroups
