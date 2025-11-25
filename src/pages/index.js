// import

import "./index.css";
import {
  settings,
  enableValidation,
  toggleButtonState,
  hideInputError,
} from "../scripts/validation.js";

// end import

/*        init and selector        */

// for init
const cardsList = document.querySelector(".cards__list");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

// count how many cards left
let cardCount = 0;

// select for display texts when no post
const noCardsElement = document.querySelector(".no-cards");

// Modals
const allModals = Array.from(document.querySelectorAll(".modal"));
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");
const previewModal = document.querySelector("#preview-image-modal");

// button for opening modal
const EditProfileBtn = document.querySelector(".profile__button-secondary");
const NewPostBtn = document.querySelector(".profile__button-large");

// button for closing modal
const EditProfileCloseBtn = editProfileModal.querySelector(
  ".modal__close-button"
);
const NewPostCloseBtn = newPostModal.querySelector(".modal__close-button");
const PreviewCloseBtn = previewModal.querySelector(
  ".modal__close-button_type_preview"
);

// select current input
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

// select user input
const editProfileForm = editProfileModal.querySelector(".modal__form");
const profileNameInput = editProfileModal.querySelector("#modal-profile-name");
const descriptionInput = editProfileModal.querySelector(
  "#modal-profile-description"
);

// select caption and select image for preview modal
const PreviewCaption = previewModal.querySelector(".modal__caption");
const PreviewImage = previewModal.querySelector(".modal__image");

const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

/*--------------------------------------------------------------------------------------------------------*/

/*        sprint 6        */
/*
task:
Create a function called getCardElement() that has one parameter: (data)
The data parameter will be an object like those in your initialCards array.
It also allow users click like button for heart's color change to red,
and delete button for delete a post
*/
function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__text");
  const cardImage = cardElement.querySelector(".card__image");

  // select like button
  const cardLikeBtn = cardElement.querySelector(".card__like-button");

  // select delete button
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  // When the user clicks on the card’s heart-shaped “like button,” the heart's color should change
  cardLikeBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    event.target.classList.toggle("card__like-button_click");
  });

  // When the user clicks a card’s trashcan-shaped delete button, the card should be removed from the DOM
  cardDeleteBtn.addEventListener("click", function (evt) {
    evt.stopPropagation();
    cardCount -= 1;
    updateNoCards();
    cardElement.remove();
  });

  //When the user clicks a card’s image, a modal should appear showing a larger version of the image and its title
  cardImage.addEventListener("click", function () {
    PreviewImage.src = data.link;
    PreviewImage.alt = data.name;
    PreviewCaption.textContent = data.name;
    openModal(previewModal);
  });

  cardCount += 1;

  return cardElement;
}

initialCards.forEach((card) => {
  const cardElement = getCardElement(card);
  cardsList.append(cardElement);
});

updateNoCards();

/*        sprint 5 and 6 init end       */

/*--------------------------------------------------------------------------------------------------------*/

//openModal and closeModal functions
function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", closeOnEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", closeOnEscape);
}

/*--------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------*/

//notes: close button for all modal
EditProfileCloseBtn.addEventListener("click", function () {
  //editProfileModal.classList.remove("modal_is-opened");
  closeModal(editProfileModal);
});
NewPostCloseBtn.addEventListener("click", function () {
  //newPostModal.classList.remove("modal_is-opened");
  closeModal(newPostModal);
});

// sprint 6
// close button for preview modal
PreviewCloseBtn.addEventListener("click", function () {
  closeModal(previewModal);
});

/*--------------------------------------------------------------------------------------------------------*/
/*        sprint 5 and 6        */
/*--------------------------------------------------------------------------------------------------------*/
// Filling the form fields when opening the modal and Edit Profile form submission
EditProfileBtn.addEventListener("click", function () {
  profileNameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;

  const inputList = Array.from(
    editProfileForm.querySelectorAll(".modal__input")
  );

  const buttonElement = editProfileForm.querySelector(".modal__save-button");

  // reset Error Messages
  inputList.forEach((inputElement) => {
    hideInputError(editProfileForm, inputElement, settings);
  });

  // check Button State
  toggleButtonState(inputList, buttonElement, settings);

  openModal(editProfileModal);
});

editProfileForm.addEventListener("submit", function (EventObject) {
  EventObject.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = descriptionInput.value;
  //editProfileModal.classList.remove("modal_is-opened");
  closeModal(editProfileModal);
});

// New Post modal
// Select the necessary form elements. You should select
// these from inside the modal, not the document.
const addCardFormElement = newPostModal.querySelector(".modal__form");
const newPostLinkInput = newPostModal.querySelector("#modal-image-link");
const newPostNameInput = newPostModal.querySelector("#modal-caption-texts");

// click for open new post modal
NewPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

/*
task 4:
“New post” modal submission:
Create the form submission handler,
When the user clicks the "Save" button on the “New post” modal, the modal should close,
and a new card should appear as the first element in the card container.
*/
function handleAddCardSubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault();

  // Log both input values to the console.
  console.log("New Post name:", newPostNameInput.value);
  console.log("New Post image link:", newPostLinkInput.value);

  // data of user input
  const UserInput = {
    name: newPostNameInput.value,
    link: newPostLinkInput.value,
  };

  // use getCardElement() function to create the new card and add then add it to the DOM
  const NewCardElement = getCardElement(UserInput);
  cardsList.prepend(NewCardElement);

  updateNoCards();

  // Reset the form to clear all inputs
  evt.target.reset();

  // reset validation after first submit
  const formElement = newPostModal.querySelector(".modal__form");
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const buttonElement = formElement.querySelector(".modal__save-button");

  //check button state
  toggleButtonState(inputList, buttonElement, settings);

  // Then close the modal
  closeModal(newPostModal);
}

// Create the submit listener.
addCardFormElement.addEventListener("submit", handleAddCardSubmit);

/*--------------------------------------------------------------------------------------------------------*/
/*        sprint 5 and 6 end        */
/*--------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------*/
/*        sprint 7        */
/*--------------------------------------------------------------------------------------------------------*/

// Modal UX improvements
// Closing the modal by clicking on the overlay
allModals.forEach(function (modalElement) {
  modalElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      closeModal(modalElement);
    }
  });
});

// Closing the modal by pressing the Escape key
// this function allows the users to close the modal by pressing the Escape key
// this function fires when open the modal
function closeOnEscape(event) {
  console.log(`key press: ${event.key}`);
  if (event.key === "Escape") {
    const openedModal = document.querySelector(".modal_is-opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
}

/*--------------------------------------------------------------------------------------------------------*/
/*        sprint 7 end        */
/*--------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------*/
/*   extra function such like helper function or other features   */
/*--------------------------------------------------------------------------------------------------------*/
// helper function for checking number of cards
function updateNoCards() {
  if (cardCount <= 0) {
    noCardsElement.classList.remove("no-cards_hidden");
  } else {
    noCardsElement.classList.add("no-cards_hidden");
  }
}

// start the validation by using the settings object
enableValidation(settings);
