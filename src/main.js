
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

// Controls // 
const stateControl = storeState(); // instance of state 
const indoorControl = storeState();

// Control : Outdoor Plants - these are the 'machines' that the function factory created
const feed = changeState("soil")(1);
const superFood = changeState("soil")(5);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

const sun = changeState("light")(5);

// Control : Indoor Plants
const indoorFood = changeState("indoorSoil")(2);
const indoorFertil = changeState("indoorSoil")(3); // it's a function that alters soil by 3

const indoorHydrate = changeState("water")(1);
const indoorSupHydrate = changeState("water")(2);

const indoorSun = changeState("light")(1);

// User Interface Logic //

$(document).ready(function() { // tied to stateControl

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


$(document).ready(function() {

  $('#feedIndoor').click(function() { // this is how you would alter the state of indoorControl // 
    const newState = indoorControl(indoorFood);
    $('#indoorSoil-value').text(`Soil: ${newState.indoorSoil}`);
  });

  $('#feedIndoor2').click(function() { // this is how you would alter the state of indoorControl // 
    const newState = indoorControl(indoorFertil);
    $('#indoorSoil-value').text(`Soil: ${newState.indoorSoil}`);
  });

  $('#feedIndoor').click(function() { // this is how you would alter the state of indoorControl // 
    const newState = indoorControl(indoorHydrate);
    $('#').text(`Soil: ${newState.soil}`);
  });

  $('#feedIndoor').click(function() { // this is how you would alter the state of indoorControl // 
    const newState = indoorControl(indoorSupHydrate);
    $('#').text(`Soil: ${newState.soil}`);
  });

  $('#feedIndoor').click(function() { // this is how you would alter the state of indoorControl // 
    const newState = indoorControl(indoorSun);
    $('#').text(`Soil: ${newState.soil}`);
  });
  
});




