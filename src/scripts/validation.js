/* -------------------------------------------------------------------------- */
/*                        Configuration Settings                        */
/* -------------------------------------------------------------------------- */
export const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
};

/* -------------------------------------------------------------------------- */
// Error Handling
/* -------------------------------------------------------------------------- */

// function for showing the error message and apply error styling
const showInputError = (formElement, inputElement, errorMessage, config) => {
  // find the span element that corresponds to this specific input
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  // add the error class
  inputElement.classList.add(config.inputErrorClass);

  // set the text content of the span to the browser's default error message
  errorElement.textContent = errorMessage;
};

// function for hide the error message and remove error styling
export const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  // remove the error class
  inputElement.classList.remove(config.inputErrorClass);

  // clear the error text
  errorElement.textContent = "";
};

// function for checking if a specific input is valid or not
const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    // ff invalid, show the error message
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    // if valid, hide error messages
    hideInputError(formElement, inputElement, config);
  }
};

/* -------------------------------------------------------------------------- */
// Button State Logic
/* -------------------------------------------------------------------------- */

// helper function to check if any input in the form is invalid
const hasInvalidInput = (inputList) => {
  // .some() returns true if at least one element in the array meets the condition
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// function for to toggle the submit button state
export const toggleButtonState = (inputList, buttonElement, config) => {
  // check if there is at least one invalid input:
  if (hasInvalidInput(inputList)) {
    // disable the button and add the inactive style class
    buttonElement.disabled = true;
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    // enable the button and remove the inactive style
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
};

/* -------------------------------------------------------------------------- */
// Event Listeners
/* -------------------------------------------------------------------------- */

// this function for set event listeners on all inputs inside a specific form
const setEventListeners = (formElement, config) => {
  // create an array of all input fields in this form
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );

  // find the submit button in this form
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  // check the button state immediately
  toggleButtonState(inputList, buttonElement, config);

  // loop through each input and add an 'input' event listener
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      // check the button state
      toggleButtonState(inputList, buttonElement, config);
      // check the specific input's validity
      checkInputValidity(formElement, inputElement, config);
    });
  });
};

/* -------------------------------------------------------------------------- */
// Initialization
/* -------------------------------------------------------------------------- */

// for enable validation on all forms matching the selector
export const enableValidation = (config) => {
  // select all forms on the page
  const formList = document.querySelectorAll(config.formSelector);

  // loop through each form and set up validation listeners
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};
