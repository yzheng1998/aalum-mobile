import React, { Component } from 'react'
import MultiSelect from 'react-native-multiple-select'
import { Container, SubContainer, searchInputStyle } from './styles'
import { languageList, stringToEnum } from '../../../../../../enumMappings'
import theme from '../../../../../../theme'

class FilterMultiList extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedItems: [] }
    this.multiSelectRef = React.createRef()
  }

  render() {
    const { selectedItems } = this.state
    const { bodyText } = theme.fonts
    const { charcoal, gradientLeft, inactiveText } = theme.colors
    const items = languageList.map(l => ({ id: stringToEnum(l), name: l }))
    return (
      <Container>
        <SubContainer>
          {this.multiSelectRef.current &&
            this.multiSelectRef.current.getSelectedItemsExt(selectedItems)}
        </SubContainer>
        <MultiSelect
          uniqueKey="id"
          ref={this.multiSelectRef}
          items={items}
          onSelectedItemsChange={s => {
            this.setState({ selectedItems: s })
          }}
          selectedItems={selectedItems}
          selectText="Search Languages..."
          searchInputPlaceholderText="Search Languages..."
          altFontFamily={bodyText}
          fontFamily={bodyText}
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

export default FilterMultiList
