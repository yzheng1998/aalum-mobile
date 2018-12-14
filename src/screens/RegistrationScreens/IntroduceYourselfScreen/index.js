import React, { Component } from 'react'
import { TouchableOpacity, Keyboard } from 'react-native'
import { Screen, ContentContainer } from './styles'
import moment from 'moment'
import { connect } from 'react-redux'

import RegistrationScreen from '../../../components/RegistrationScreen'
import PrimaryButton from '../../../components/PrimaryButton'
import PrimaryInput from '../../../components/PrimaryInput'
import { addInfo } from '../../../redux/actions'

/* eslint-disable */
import DatePicker from '../../../components/DatePicker/DatePicker'
/* eslint-enable */

const mapStateToProps = state => ({
  name: state.name,
  birthday: state.birthday
})

const mapDispatchToProps = dispatch => ({
  addInfo: info => dispatch(addInfo(info))
})

class IntroduceYourselfScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name || '',
      birthday: '',
      birthdayFormatted: this.props.birthday || '',
      showBirthdayPicker: false
    }
  }

  render() {
    const { birthday, showBirthdayPicker, birthdayFormatted, name } = this.state
    const enabled = name && birthdayFormatted
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
              placeholder="Enter your first name"
              autoCapitalize="words"
              onChangeText={text => this.setState({ name: text })}
              defaultValue={this.state.name}
              autoFocus
              returnKeyType="next"
              onFocus={() => {
                this.setState({
                  showBirthdayPicker: false
                })
              }}
              onSubmitEditing={() => {
                Keyboard.dismiss()
                this.setState({ showBirthdayPicker: true, birthday }, () =>
                  this.datePicker.openDatePicker()
                )
              }}
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
              style={birthdayFormatted && { lineHeight: 20 }}
            />
            <PrimaryButton
              ref={button => {
                this.button = button
              }}
              title="Continue"
              onPress={() => {
                this.setState({
                  showBirthdayPicker: false
                })
                this.props.addInfo({ key: 'name', value: name })
                this.props.addInfo({
                  key: 'birthday',
                  value: birthdayFormatted
                })
                this.props.navigation.navigate('Gender')
              }}
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
          date={new Date(birthdayFormatted) || new Date(1996, 0, 1)}
          doneOnPress={() => {
            this.setState({
              showBirthdayPicker: false
            })
            if (enabled) {
              this.button.onPress()
            }
          }}
          setDate={date => {
            this.setState({
              birthday: date,
              birthdayFormatted: moment(date).format('MM/DD/YYYY')
            })
          }}
          maximumDate={moment()
            .subtract(18, 'y')
            .toDate()}
          maxDate={moment()
            .subtract(18, 'y')
            .toDate()}
        />
      </Screen>
    )
  }
}

const IntroduceYourself = connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroduceYourselfScreen)
export default IntroduceYourself
