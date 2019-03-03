import React, { Component } from 'react'
import MultiSelect from 'react-native-multiple-select'
import { Container, SubContainer, searchInputStyle } from './styles'
import theme from '../../../../../../../../../../theme'

class DropdownList extends Component {
  /* fixes error of selection buttons not appearing until
  state updates by updating state as soon as component mounts */
  state = {
    refresh: false
  }

  componentDidMount = () => {
    this.setState({ refresh: !this.state.refresh })
  }

  render() {
    const { selectedItems, items, onChange, text } = this.props
    const { bodyText, title } = theme.fonts
    const { charcoal, gradientLeft, inactiveText } = theme.colors
    return (
      <Container>
        <SubContainer>
          {this.multiSelect &&
            this.multiSelect.getSelectedItemsExt(selectedItems)}
        </SubContainer>
        <MultiSelect
          uniqueKey="id"
          ref={r => {
            this.multiSelect = r
          }}
          items={items}
          onSelectedItemsChange={onChange}
          selectedItems={selectedItems}
          selectText={text}
          searchInputPlaceholderText={text}
          altFontFamily={title}
          fontFamily={title}
          itemFontFamily={bodyText}
          itemTextColor={charcoal}
          selectedItemFontFamily={bodyText}
          selectedItemIconColor={gradientLeft}
          selectedItemTextColor={gradientLeft}
          tagBorderColor={gradientLeft}
          tagTextColor={gradientLeft}
          tagRemoveIconColor={gradientLeft}
          textColor={inactiveText}
          searchInputStyle={searchInputStyle}
          fontSize={18}
          hideSubmitButton
          hideTags
        />
      </Container>
    )
  }
}

export default DropdownList
