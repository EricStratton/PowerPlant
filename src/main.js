// blueFood = (state) => ("soil") => {
//   return (5) => {
//     return (state) => ({
//       ...state,
//       ["soil"] : (state["soil"] || 0) + 5
//     })
//   }
// }

// blueFood(cannabisPlant) leads to 5 units of whatever being added for its growth

// yellowFood = changeState("soil")(3);

// yellowFood(cannabisPlant) lead to 3 units of whatever being added



// yellowStrain1 = changeState("soil")(3);
// yellowStrain31 = changeState("soil")(2);

// const newCannabisPlant = yellowStrain1(cannabisPlant);




// Function Factory // for altering state

const changeState = (prop) => {
  return(value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

// Store State // stores and updates state of an object ??

const storeState = () => {
  let currentState = {}; // between function steps
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState); // call changeState function on current state and save as the new state
    currentState = {...newState}; // save currentState as a copy of newState // so that next time this is called it's a mirror of the current, updated state?
    return newState;
  }
}

const stateControl = storeState();