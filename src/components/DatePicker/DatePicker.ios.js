import React, { Component } from 'react'
import { DatePickerIOS, View } from 'react-native'
import { DoneButton, DoneButtonText, Container } from './styles'

export default class DatePicker extends Component {
  openDatePicker = () => null

  render() {
    const { doneOnPress, date, setDate, mode, visible } = this.props
    return (
      <Container>
        {visible && (
          <View>
            <DoneButton onPress={doneOnPress}>
              <DoneButtonText>Done</DoneButtonText>
            </DoneButton>
            <DatePickerIOS mode={mode} date={date} onDateChange={setDate} />
          </View>
        )}
      </Container>
    )
  }
}
