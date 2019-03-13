# Introduction

In this issue, we document our efforts to test our front-end components, as well as some reflections on their efficacy, their potential benefits, as well as its limitations and our frustrations.

For testing the front-end for AAlum, we generally have implemented (or at least attempted to implement) two different testing suites. The first testing suite unit tests the basic rendering and functionality of front-end components, in isolation from other components. It tests, for example, that a button is rendered properly, that it doesn't crash, and that it properly calls the `onPress` function when pressed, and so on. So far, we have only tested general components (those components that are in the `src/components` directory, and are accessed by more than one screen. The idea, however, was to eventually extend this and work our way up to include every component and ultimately every screen. So far, these tests for general components live in the `__tests__/components` directory.

The second test suite was intended to tests the queries and mutations that front-end components make, and to make sure that front-end components have the expected behavior upon interacting with the back-end. So far, we have attempted three such tests, one for the `blockUser` mutation, one for the `reportUser` mutation, and one for the `getUser` query. So far, all three have failed. This is not because the front-end components have buggy code (the mutations and queries work fine when tested on the application itself), but a bug in writing the tests themselves, which so far we have not been able to locate.

Both suites using the [jest testing framework](https://jestjs.io/), in conjunction with the [Enzyme library](https://airbnb.io/enzyme/), which makes integrating `jest` tests with React Native apps smoother and cleaner. For testing mutations and queries, we additionally use `react-apollo`'s `MockedProvider` component, which allows us to simulate back-end behavior in a predictable fashion, without having to actually connect to a database, allowing us to test front-end behavior in isolation from any potential back-end problems.

# Test Suite 1: General Components

For test suite 1, we have so far only tested the behavior of general components, those present in the `src/components` folder. All these tests live in the `__tests__/components` directory.

## Snapshots

The main idea and the most common test in these components, is to use a `snapshot`, a method of testing in the `jest` framework, which can be found [here](https://jestjs.io/docs/en/snapshot-testing#snapshot-testing-with-jest). The idea is that the component, at the time of the writing of the test, is assumed to be rendering properly and having the expected structure, coloring, styling, etc. Then, when the test is ran, a `jest` function, `expect(...).toMatchSnapshot()`, where `...` is simply the rendered component we're testing. The first time this test is ran, the function "takes a snapshot" of how the component is rendered, which is basically the `JSX` structure after the component is rendered (including the props that were passed in). This snapshot is saved in the `__snapshots__` directory of this test. Then, each consecutive time that the test is ran, the `.toMatchSnapshot()` function takes a new snapshot of the component and compares it to the one on file. If they don't, the test fails, and the testing suite prints a description of the error, as well as a comparison between the snapshot on file and the one that was taken while running the test. Each time `.toMatchSnapshot()` in one test corresponds to one snapshot on file, so usually tests will have multiple snapshots.

## Testing Components

There are other types of tests that we can use as well. We will look at these tests in more detail using the example of the `FloatingButton` component, which uses almost all tests that we use for general components. The `FloatingButton` component is the button used for the Message and Apply buttons, such as below,:

![Message Button](https://user-images.githubusercontent.com/31601104/52530264-73da0b00-2cd0-11e9-82c8-0d69357199bf.png)

![Apply Button](https://user-images.githubusercontent.com/31601104/52530276-b1d72f00-2cd0-11e9-8649-984875e18e5f.png)

Now, let's look at how these are implemented. We take a look at the `__tests/FloatingButton/FloatingButton.test.js` file.

First, we import `React`, `styled`, and the `FloatingComponet`.

```javascript
import React from 'react'
import FloatingButton from '../../../src/components/FloatingButton'
import styled from 'styled-components'
```

We also import the `shallow` function from `Enzyme` and the `mountWithTheme` function from the `helpers` director, which uses `Enzyme`'s `mount` function under the hood. We will discuss later what the differences are between `mount` and `shallow` and the benefits of using one over the other.

```javascript
import { shallow } from 'enzyme'
import mountWithTheme from '../../helpers/theme'
```

Then, we begin with our tests:

```javascript
test('renders correctly', () => {
  const wrapper = mountWithTheme(<FloatingButton />)
  expect(wrapper).toMatchSnapshot()

  wrapper.setProps({ title: 'title', disabled: true })
  expect(wrapper).toMatchSnapshot()
})
```

This first test is aimed at simply testing that the component renders properly without throwing any errors and that it matches its snapshot from before (as described earlier). We can break this down line by line. First, we attempt to render the component `const wrapper = mountWithTheme(<FloatingButton />)`.

## Detour: Discussion of `shallow` vs `mount`

This is now a good time to discuss the different rendering methods that `Enzyme` offers. The first is `shallow` rendering, which what we use most often. Using `shallow` creates a snapshot in which only the level of component being rendered is produced, while any "deeper" levels are not rendered recursively. Consider, for example, if (hypothetically) the `FloatingButton` component renders like this:

```javascript
<View>
  <PrimaryButton />
</View>
```

where `PrimaryButton` is also another user-defined component, which is built-up from smaller components, native or user-defined. If we use `shallow`, then the snapshot produced will look exactly like the above code, without also recursively breaking down `PrimaryButton` into its sub-components, and so on, hence the name `shallow`.

The upside of this is that it makes our snapshots much smaller, cleaner, and easier to debug; makes tests faster to run; and allows us to isolate the testing of a component only to itself, leaving testing `PrimaryButton`, for example, for `PrimaryButton`'s tests.

However, the downside, is that you can imagine there being a scenario in which testing a crucial aspect of the component relies on testing the behavior of a deeper element (for example, triggering a click on a deeper component to see if a certain behavior in our component is being met). This is why we might use `Enzyme`'s `mount` or `render`, which recursively render the subcomponents, down to the basic native components. There is a subtle difference between `render` and `mount`, but it is not very useful for us to make this distinction for our purposes here. In our tests, we use `mount` when we need to render deeper components.

One prime example of why we might need to use `mount` is when testing components that rely on the theme. In the normal running of the application, the entire application is rendered inside a `ThemeProvider` component, which allows the component to access the theme. If we are unit-testing a component that uses the theme, we need to allow it to access the theme. However, if we use code like the following:

```javascript
const wrapper = shallow(
  <ThemeProvider theme={theme}>
    <FloatingButton />
  </ThemeProvider>
)
```

Then, our snapshot will look like this:

```javascript
<ThemeProvider theme="...">
  <FloatingButton />
</ThemeProvider>
```

which, as you can imagine, will not allow us to test any features of the `FloatingButton` component. This is why, if we want to render with a `ThemeProvider`, we need to use `mount`. This is precisely what the `mountWithTheme` function in `__tests__/helpers` does.

## Back on track: test 1: `renders correctly`

Now, back to our test for `FloatingButton`:

```javascript
test('renders correctly', () => {
  const wrapper = mountWithTheme(<FloatingButton />)
  expect(wrapper).toMatchSnapshot()

  wrapper.setProps({ title: 'title', disabled: true })
  expect(wrapper).toMatchSnapshot()
})
```

We first use `mountWithTheme` to render the component, and then we match it against the snapshot from before. Then, we also use `.setProps` to change some props in the component (we test all the props that the component receives that affects rendering behavior), and make sure that after changing these props, the component still renders correctly.

This `renders correctly` test is the most general common test we have, and we have a version of it for each general component.

## Test2: `renders children properly`

Next, we define another test:

```javascript
test('renders children properly', () => {
  const MockChild = styled.View``
  MockChild.displayName = 'MockChild'
  const wrapper = mountWithTheme(
    <FloatingButton>
      <MockChild />
    </FloatingButton>
  )
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('MockChild').length).toBe(1)
})
```

We notice that the `FloatingButton` component receives and uses a prop `children`. This is used, for example, to render the message icon in the message button:

![Message Button](https://user-images.githubusercontent.com/31601104/52530264-73da0b00-2cd0-11e9-82c8-0d69357199bf.png)

We want to make sure that the `FloatingButton` correctly renders those children (and doesn't completely ignore them for example, or render them more than one).

To do this, we define a mock child component, `mockChild`, which is simply a `View`, obtained from `styled`. Next, we mount the `FloatingButton` component using that child. We make sure that the child is rendered correctly through `expect(wrapper).toMatchSnapshot()`, but we also use an additional test, `expect(wrapper.find('MockChild').length).toBe(1)`, which makes sure that in the snapshot of `FloatingButton`, there is exactly one instance of the `MockChild` component.

## Test 3: `handles onPress correctly`

```javascript
test('handles onPress correctly', () => {
  const onPressMock = jest.fn()
  const wrapper = shallow(<FloatingButton onPress={onPressMock} />)
  const button = wrapper.find('Button')
  button.simulate('press')

  expect(onPressMock).toHaveBeenCalledTimes(1)
})
```

We notice that the `FloatingButton` component also takes a prop `onPress`, which is a function that should be called whenever the button is pressed. To test this, we use `jest.fn()` to create a mock function, that we can then pass to the `FloatingButton` component as `onPress`. Since now we're only testing the functionality of pressing on the button, and we don't really care about the theme, we can use `shallow`.

```javascript
const onPressMock = jest.fn()
const wrapper = shallow(<FloatingButton onPress={onPressMock} />)
```

Next, we use the `.find` function to be able to locate the `TouchableOpacity` in the `FloatingButton` component. There are multiple [types of arguments that can be passed to `find`](https://airbnb.io/enzyme/docs/api/ReactWrapper/find.html), but we use the component `displayName` attribute. To be able to easily select the `TouchableOpacity`, and for the code `const button = wrapper.find('Button')`, we need to change the `displayName` of the `TouchableOpacity` inside the `FloatingButton`. To do this, we look at where it's defined inside the `styles.js` file of the `FloatingButton`. We find that it's defined as follows:

```javascript
export const Button = styled.TouchableOpacity`
  justify-content: center;
  margin-left: 32px;
  margin-right: 32px;
  height: 60px;
  box-shadow: 0px 6px 25px ${theme.colors.shadow};
`
```

Even though we call this styled component `Button` in order, that will not be its `displayName`. Therefore, we add this line after this definition:

```javascript
Button.displayName = 'Button'
```

Now, the `const button = wrapper.find('Button')` will be able to correctly find a reference to this `TouchableOpacity`.

Having found the button, we can then use `Enzyme`'s [`simulate`](https://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html) function to trigger the `onPress` event. We expect that if the button handles the `onPress correctly, then after the button is clicked, our mock function should have been called exactly once.

Therefore, we check:

```javascript
expect(onPressMock).toHaveBeenCalledTimes(1)
```

Which concludes our test. If `onPressMock` was not called exactly once, this test will fail. Otherwise, it will succeed.

## Test 4: `handles disabled correctly`

```javascript
test('handles disabled correctly', () => {
  const onPressMock = jest.fn()
  const wrapper = shallow(<FloatingButton onPress={onPressMock} disabled />)
  const button = wrapper.find('Button')

  expect(button.props().disabled).toBe(true)

  if (!button.props().disabled) {
    button.simulate('press')
  }
  expect(onPressMock).toHaveBeenCalledTimes(0)
})
```

Lastly, we also notice that `FloatingButton` accepts a prop `disabled`, which when set to `True`, should disable the button such that the `onPress` function is not called even when the button is pressed.

To test this behavior, we start by similar code to the previous test to find the `Button`:

```javascript
const onPressMock = jest.fn()
const wrapper = shallow(<FloatingButton onPress={onPressMock} disabled />)
const button = wrapper.find('Button')
```

Having found this button, we want to make sure that its `disabled` prop is also set to `True`:

```javascript
expect(button.props().disabled).toBe(true)
```

One logical next step, one might argue, would be to repeat the code from last time, simulate an `press` event, and check that `onPressMock` was called `0` times. However, this will in fact not work. This is because according to `Enzyme`'s [documentation](https://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html), the `simulate` function does not actually trigger a `Press` event, but rather simply calls the `onPress` prop if one existed. Therefore, even if `disabled` was set to `True` in the button, the function will be called.

One way to work around this would be to only simulate the `press` event if the `disabled` property is not `True`, which is the behavior that actually happens, and then we can expect the `mockPress` function to have been called exactly `0` times.

```javascript
if (!button.props().disabled) {
  button.simulate('press')
}
expect(onPressMock).toHaveBeenCalledTimes(0)
```

which completes our test.

# Test Suite 2: Queries and Mutations:

Queries and Mutations are how the front-end interacts with the back-end. We still use the basic functionality of the `jest` framework and rendering using `Enzyme`, but we also add the `react-apollo` `MockedProvider` component (found [here](https://www.apollographql.com/docs/react/recipes/testing.html#Testing-mutation-components)) to simulate back-end behavior.

We can also take an example test to discuss how these work. We will look at the `reportUserMutation` tests, found in `**tests**/queries_mutations'.

```javascript
import React from 'react'
import ActionMenu from '../../../src/screens/DiscoverScreens/UserScreen/components/ActionMenu'
import { REPORT_USER } from '../../../src/screens/DiscoverScreens/UserScreen/mutations'
import { mount } from 'enzyme'
import { MockedProvider } from 'react-apollo/test-utils'
```

as before, we first import `React` and `ActionMenu`, the component which uses the `reportUser` mutation. However, this time, we also need to import the mutation itself. Then, we also import `mount` from `Enzyme` and the `MockedProvider` component which will be used to simulate back-end behavior.

## Test 1: `renders correctly`:

```javascript
test('renders correctly', () => {
  const wrapper = mount(
    <MockedProvider mocks={[]}>
      <ActionMenu />
    </MockedProvider>
  )
  expect(wrapper).toMatchSnapshot()
})
```

This is exactly the same test as before, except that we render the component inside a `MockedProvider` component, to make sure it's rendering properly, before we test the functionality of the mutation itself. We don't provide anything to the `mocks` prop, because we never trigger the mutation.

## Test 2: `handles success correctly`

First, we set up our mock mutation responses,

```javascript
const mocks = [
  {
    request: {
      query: REPORT_USER,
      variables: {
        reportedUserId: '00da5b9d-6c34-44a2-a26b-34013e34f032'
      }
    },
    result: {
      data: {
        reportUser: {
          id: '00da5b9d-6c34-44a2-a26b-34013e34f032',
          email: 'Ashtyn_Hudson@hotmail.com',
          name: 'Gennaro',
          isConnected: true
        }
      }
    }
  }
]
```

This specifies that when we get a request for the `REPORT_USER` query, we will treat the `variables` as being `{ reportedUserId: '00da5b9d-6c34-44a2-a26b-34013e34f032' }` and the response will be simulated to exactly match the mock response provided. This is based off examples found [here](https://blog.apollographql.com/testing-apollos-query-component-d575dc642e04), [here](https://www.apollographql.com/docs/react/recipes/testing.html#Testing-mutation-components), and [here](https://blog.usejournal.com/testing-graphql-container-components-with-react-apollo-and-jest-9706a00b4aeb). It is crucial that the types and structure of the `request` and `response` data exactly match the mutation itself.

Before we render our component, we also want to mock the `Alert` library, so we do this using `jest`:

```javascript
const alert = jest.fn()
jest.mock('Alert', () => ({
  alert
}))
```

We do this because when the `reportUser` mutation is successful, it calls the `Alert.alert` function saying `You have reported this user.` Therefore, to check that the mutation is successful, we override the native `Alert.alert` function and replace it with a `jest` mock function, to be able to check that it was called with the right argument.

Next, we want to trigger our mutation and make sure that we do the proper response according to this input.

Therefore, we render our component using the `mount` function. This is both because the `ActionMenu` component itself will be nested inside a `MockedProvider` and because what triggers the mutation is actually a `press` event on an `ActionSheet` component that is nested deeper in the structure than the `ActionMenu` itself. Therefore, we run:

```javascript
const wrapper = mount(
  <MockedProvider mocks={mocks} addTypeName={false}>
    <ActionMenu />
  </MockedProvider>
)
```

to mount our component, nested inside a `MockedProvider` which receives the mock requests as its `mocks` prop, with `addTypeName` set to `false` based on the examples.

Then, we trigger the `onPress` function on the `ActionSheet` component, passing in the index that corresponds to reporting the user, which by looking at the code in `ActionMenu/index.js`, we know is `0`.

```javascript
wrapper
  .find('ActionSheet')
  .first()
  .props()
  .onPress(0)
```

For some reason, `Enzyme`'s `simulate` does not work properly with nested components during `mount`, so we trigger the `press` event by calling the `onPress` prop directly instead.

Then, we need to wait to make sure that the mutation completes by executing

```javascript
await wait(0)
```

Lastly, we can check for correct behavior by making that the new component matches the snapshot, an also by ensuring that the `Alert.alert` function gets called with `You have reported this user`.

```javascript
expect(wrapper).toMatchSnapshot()
expect(alert).toHaveBeenCalledWith('You have blocked this user.')
```

which concludes our test.

So far, however, we have been unable to get these tests to work properly. So far, we have tried to test for both the `reportUser` and the `blockUser` mutation, as well as the `getUser` query, but so far they're not working. Here's what we know so far:

- The testing mechanism for detecting what the Alert function is being called with is working fine. We know this because it correctly detects that it was called with "Encountered server error." instead of "You have blocked/reported this user." The problem is that the wrong branch is being called (`onError` instead of `onComplete`)

- The error we are getting is "There are no more mocked responses for the query..."

- Reading online, it seems like this error is caused by the response and data types not exactly matching up with the mutation, but we can't seem to find the difference.

- It is possible that the reason we are getting this error is because `addType={false}` is not having the expected behavior. However, so far, attempts to remove this prop and manually add the `__type` to the query/mutation responses have still failed.

- It might also be possible that `Enzyme`'s `mount` function is the problem, since online examples use React's `renderer.create`, instead of `enzyme.mount`. It is unclear why that would be the case though

# Running the Tests

To run these tests, we simply execute this command on the terminal:

`npm run test`

<img width="569" alt="Screen Shot 2019-03-12 at 5 33 06 AM" src="https://user-images.githubusercontent.com/31644556/54192146-afadef00-448d-11e9-8486-196cf446a730.png">

This runs all the tests that it finds in the `__tests__` directory, including all subdirectories. After the tests run, you get a diagnostics of all the tests, including a summary of all the tests that failed and succeeded. The result will be a list of all the tests, along with green ticks if successful, or red crosses if they failed. If the test failed, it will also output a red arrow at exactly which `expect` statement in the test failed, along with a comparison between the expected value and the actual value.

<img width="323" alt="Screen Shot 2019-03-12 at 5 33 16 AM" src="https://user-images.githubusercontent.com/31644556/54192155-b63c6680-448d-11e9-950b-5d0d5a50dd37.png">
<img width="541" alt="Screen Shot 2019-03-12 at 5 33 57 AM" src="https://user-images.githubusercontent.com/31644556/54192156-b63c6680-448d-11e9-8989-603cee6e3044.png">
<img width="566" alt="Screen Shot 2019-03-12 at 5 34 48 AM" src="https://user-images.githubusercontent.com/31644556/54192157-b63c6680-448d-11e9-8212-9292b0b3bfcb.png">

One can also run tests specific to one component or one query/mutation. For example, if I want to simply test the test for the `FloatingButton`, I can type:

`npm run test FloatingButton`

This will only run tests with `FloatingButton` in their name.

Furthermore, if for some reason, the implementation of some components change, causing snapshot tests to fail, even though the component is working well as expected, then the snapshots can be updated by typing into the terminal:

`npm run test:update`

This can be done for all tests, as above, or it can also be done for one specific set of tests:

`npm run test:update FloatingButton`

# Discussion

This testing suite is one of the first we have ever built at Dev. As a result, this is far from a perfect endeavor, and more work needs to be done to make this better, more efficient, and more exhaustive in testing.

## General Components:

### Benefits

First of all, we discuss the benefits and advantages for using testing the way we do it. For general components, testing this way can ensure basic functionality is unit tested and is working properly. This is useful especially if the project gets too big and if some components are not used very often, to the point where it is plausible that a component malfunctioning will slip through the cracks. For example, if changing one piece of code in one component accidentally breaks basic functionality in another component, unit-testing in this way can easily detect this error.

This also is useful for making sure that any changes to the appearance of components is deliberate and thought-through. Any change, however minor, in the appearance of a component will cause it to fail the snapshot test, and it will produce exactly what changed from one instance to the other. This can ensure that this change is indeed something we want to follow through with, at which case we can update the snapshots. It can also reveal how the appearance of one component can influence other components that are dependent on it. For example, if we use `mount`, then a high-level component will also fail its snapshot test if a lower-level component is changed. This might reveal dependencies we were not aware of, and force us to think critically about whether or not we want to move forward with changing the lower level component.

### Drawbacks:

What this doesn't test for, however, is if the component was rendering properly from the very start. Since snapshots make the assumption that the component was working behaving properly during the first run of the test, this can cause tests to succeed even if the component is broken, if it was broken from the start.

Furthermore, front-end unit-testing in this way is fairly limited in capacity, since we only test basic functionality such as the fact that the function is being called when pressed upon, but not deeper functionality, such as what this function actually does. This might be mitigated if we expand this to include bigger components than just the general components, and work up until we test whole screens for example. However, that also comes at the expense of having to spend a big amount of time on these tests, and checking all the different possible cases in all the different screens. Given that writing these unit tests takes us a significant amount of time, partly due to our own inexperience with writing test suits, it is unclear if it is worth having these tests for front-end general components.

Lastly, since we are not very familiar with using these libraries, and we are learning as we go, it is very possible that there are inefficiencies in the way we test, and that are better ways of testing than using snapshots. Because of that, we have spent all of our time with these tests debugging the tests themselves, not the components. Whenever a test failed, we would modify the test itself so that it matches the component, and not the other way around, so I wonder if this is actually doing anything.

I think this will be most useful, though, if we adopt the model where tests are written firsts, and then the components themselves, to serve as some kind of model to follow when constructing the component. This is still, however, very imperfect, since there is no way of specifying the snapshot beforehand, which is the most common testing mechanism we have in these tests. It also cannot test that components are properly places, that they match the designs, and that they provide a good user experience, which is where the vast majority of time in developing front-end components go, much more so than ensuring `onClick` functions are being called.

## Queries/Mutations

### Benefits

Arguably, testing queries and mutations will be more useful than the general component unit-testing. Testing queries and mutations allows us to simulate the behavior of a back-end in a predictable fashion, and therefore isolate any potential problems to either the back-end or the front-end. Ultimately, to extensively test them, it would require much more extensive tests than we have now, for example to test that once we successfully get the user's information, that we render their name in the proper place, their age, their gender, etc.

Something we also haven't tested yet, but could easily add is the `onError` testing. This would allow us to make sure that all components properly handle queries or mutations failing in the proper way, which usually doesn't happen often during normal testing operations, and would be very hard to simulate otherwise.

### Drawbacks:

That being said, these tests are still front-end tests. They do not test the back-end. They ensure that, on receiving the correct data, the correct behavior is being done, but it does not guarantee that running the mutation/query on the back-end results in the component actually receiving the correct data. Other types of tests would be required to ensure that's the case, which is arguably more important and trickier to debug than front-end testing.

Furthermore, while testing queries/mutations allows more flexibility and a wider range of tests than general component testing, it is still very limited. Besides the fact that it doesn't test whether or not correct data is actually received, it also does not allow that correct behavior is being done for all the received data. If we look at the `getUser` query for example, since it would be tricky and time-consuming to test that all fields within this user is being used properly in its appropriate context, since this data spans the entire user screen, and even other screens as well. While it is technically feasible, it might become cumbersome and too time-consuming.

Lastly, there is the obvious problem we face currently with us not even being able to run our tests successfully. We have spent significant amount of time simply debugging the tests themselves, and rewriting our tests so that they match the component and they pass, rather than the other way around, so it is doubtful if it's worth all this time.

## Verdict

Overall, for both the queries/mutations and the general components, I believe there is still a lot of work to be done to get comfortable with using these frameworks/libraries, and to really make use of these tests. Put in isolation from their time cost, I think these tests are beneficial, and will only get more exhaustive and more beneficial, and even cost less time, as we spend more time working on them. However, given the current state of the project, the fact that we did not start out with the model where we fit our components to match tests but the other way around, and that we spend a lot of time writing these with little benefit, it is unclear if it is worth spending our time further developing these tests, especially general component tests.
