import React, { Component } from 'react'
import { Container } from './styles'
import ToggleButtonGroup from '../../../../../components/ToggleButtonGroup'
import {
  genderList,
  bodyTypeList,
  ethnicityList
} from '../../../../../../enumMappings'

export default class FilterButtonGroups extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
    this.state = {
      genderSelection: props.genderSelection || [],
      bodyTypeSelection: props.bodyTypeSelection || [],
      ethnicitySelection: props.ethnicitySelection || []
    }
  }

  render() {
    const {
      genderSelection,
      bodyTypeSelection,
      ethnicitySelection
    } = this.state
    return (
      <Container>
        <ToggleButtonGroup
          isFilter
          title="GENDER"
          optionsArray={genderList}
          selectionArray={genderSelection}
          updateState={selection =>
            this.updateState({ genderSelection: selection })
          }
        />
        <ToggleButtonGroup
          isFilter
          title="BODY TYPE"
          optionsArray={bodyTypeList}
          selectionArray={bodyTypeSelection}
          updateState={selection =>
            this.updateState({ bodyTypeSelection: selection })
          }
        />
        <ToggleButtonGroup
          isFilter
          title="ETHNICITY"
          optionsArray={ethnicityList}
          selectionArray={ethnicitySelection}
          updateState={selection =>
            this.updateState({ ethnicitySelection: selection })
          }
        />
      </Container>
    )
  }
}
