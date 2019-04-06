import React, { Component } from 'react'
import { TouchableOpacity, Keyboard } from 'react-native'
import { Screen, ContentContainer } from './styles'
import moment from 'moment'
import { connect } from 'react-redux'

import RegistrationScreen from '../components/RegistrationScreen'
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

const defaultDate = '01/01/1996'

class IntroduceYourselfScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name || '',
      birthday: this.props.birthday || '',
      showBirthdayPicker: false
    }
  }

  openDatePicker = () => {
    Keyboard.dismiss()
    this.setState({ showBirthdayPicker: true }, () =>
      this.datePicker.openDatePicker()
    )
    if (!this.state.birthday) this.setState({ birthday: defaultDate })
  }

  render() {
    const { birthday, showBirthdayPicker, name } = this.state
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
              onSubmitEditing={this.openDatePicker}
            />
            <PrimaryInput
              title="Birthday"
              placeholder={birthday || 'MM/DD/YYYY'}
              defaultValue={birthday}
              editable={false}
              pointerEvents="none"
              as={TouchableOpacity}
              onPress={this.openDatePicker}
              style={birthday && { lineHeight: 20 }}
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
                  value: birthday
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
          date={birthday ? new Date(birthday) : new Date(defaultDate)}
          doneOnPress={() => {
            this.setState({
              showBirthdayPicker: false
            })
            if (enabled) this.button.onPress()
          }}
          setDate={date => {
            this.setState({
              birthday: moment(date).format('MM/DD/YYYY')
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
