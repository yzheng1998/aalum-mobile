import React, { Component } from 'react'
import { DatePickerAndroid, View } from 'react-native'

export default class DatePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
    const { setDate, doneOnPress, date, maxDate } = props
    this.openDatePicker = async () => {
      try {
        const { action, year, month, day } = await DatePickerAndroid.open({
          date,
          mode: 'spinner',
          maxDate
        })
        if (action !== DatePickerAndroid.dismissedAction) {
          setDate(new Date(year, month, day))
          doneOnPress()
        } else if (action === DatePickerAndroid.dismissedAction) {
          doneOnPress()
        }
      } catch ({ code, message }) {
        this.setState({ error: `Cannot open date picker: ${message}` })
      }
    }
  }

  render() {
    return <View />
  }
}
