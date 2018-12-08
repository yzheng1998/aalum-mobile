import React, { Component } from 'react'
import { TouchableOpacity, Keyboard } from 'react-native'
import { Screen, ContentContainer } from './styles'
import moment from 'moment'

import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import PrimaryInput from '../../../components/PrimaryInput'

/* eslint-disable */
import DatePicker from '../../../components/DatePicker/DatePicker'
/* eslint-enable */

export default class IntroduceYourselfScreen extends Component {
  state = {
    name: '',
    birthday: '',
    birthdayFormatted: '',
    showBirthdayPicker: false
  }
  render() {
    const { birthday, showBirthdayPicker, birthdayFormatted, name } = this.state
    const enabled = name && birthday
    return (
      <Screen>
        <RegistrationScreen
          navigation={this.props.navigation}
          showBack
          title="Introduce Yourself"
          progress="50%"
        >
          <ContentContainer>
            <PrimaryInput
              title="Name"
              placeholder={name || 'Enter your first name'}
              autoCapitalize="words"
              onChangeText={text => this.setState({ name: text })}
            />
            <PrimaryInput
              title="Birthday"
              placeholder={birthdayFormatted || 'MM/DD/YYYY'}
              defaultValue={birthdayFormatted}
              editable={false}
              pointerEvents="none"
              as={TouchableOpacity}
              onPress={() => {
                Keyboard.dismiss()
                this.setState({ showBirthdayPicker: true, birthday }, () =>
                  this.datePicker.openDatePicker()
                )
              }}
              style={birthdayFormatted && { lineHeight: 20 }} // corrects some visual bugs
            />
            <PrimaryButton
              title="Continue"
              onPress={() => this.props.navigation.navigate('Gender')}
              disabled={!enabled}
            />
          </ContentContainer>
        </RegistrationScreen>
        <DatePicker
          ref={datePicker => {
            this.datePicker = datePicker
          }}
          visible={showBirthdayPicker}
          mode="date"
          date={birthday || new Date(1996, 0, 1)}
          doneOnPress={() => {
            this.setState({
              showBirthdayPicker: false
            })
          }}
          setDate={date => {
            this.setState({
              birthday: date,
              birthdayFormatted: moment(date).format('MM/DD/YYYY')
            })
          }}
        />
      </Screen>
    )
  }
}
