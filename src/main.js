
// Business Logic //

// Function Factory // for altering state

const changeState = (prop) => {
  return(value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

// Store State // stores and updates state of an object ??

const storeState = () => {
  let currentState = {}; // between function steps
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState); // call changeState function on current state and save as the new state
    currentState = {...newState}; // save currentState as a copy of newState // so that next time this is called it's a mirror of the current, updated state?
    return newState;
  };
};

const stateControl = storeState();

// User Interface Logic //

const feed = changeState("soil")(1);
const superFood = changeState("soil")(5);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

const sun = changeState("light")(5);


$(document).ready(function() {

  $('#feed').click(function() {
    const newState = stateControl(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#feed2').click(function() {
    const newState = stateControl(superFood);
    $(`#soil-value`).text(`Soil: ${newState.soil}`);
  });

  $('#hydrate').click(function() {
    const newState = stateControl(hydrate);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#hydrate2').click(function() {
    const newState = stateControl(superWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#sun').click(function() {
    const newState = stateControl(sun);
    $('#light-value').text(`Light: ${newState.light}`);
  });

  $('#show-state').click(function() {
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
  });


});





