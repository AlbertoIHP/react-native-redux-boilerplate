## This react native boilerplate includes:

- React Functional Components (https://es.reactjs.org/docs/hooks-intro.html)
- React navigation Auth and Tab stacks screens implementation (https://reactnavigation.org/docs/tab-based-navigation)
- React Redux Hooks implementation (https://react-redux.js.org/api/hooks)
- React Redux Persist implementation with AsyncStorage (https://github.com/rt2zz/redux-persist)
- Native Base CSS Framework Integrated (https://docs.nativebase.io/Components.html#Components)
- Expo app.json basic configuration boilerplate (https://docs.expo.io/workflow/configuration/)

## To customize:
- Redux: Inside redux folder you can create
    - Actions: Inside redux/actions you can create your own actions (Then remember to add to index.js)
    - Reducers: Inside redux/reducers you can create your own reducers (Then remember to add to index.js)

- React Navigation: Inside router you can create
    - Stacks: If you want to add a new tab, with it's own stack screens at router/stacks
    - Navigators: If you want to add a new navigator environment at router/navigators (This boilerplate includes the auth navigator and logged navigator). Remember to add your new logic with your news navigator at index.js.
    - Screens: If you want to add new views (screens) to your app to link it with some route at screens folder.
    - Components: Add your own components to use it at screens at components folder


