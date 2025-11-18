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
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");
const previewmodal = document.querySelector("#preview-image-modal");

// button for opening modal
const EditProfileBtn = document.querySelector(".profile__button-secondary");
const NewPostBtn = document.querySelector(".profile__button-large");

// button for closing modal
const EditProfileCloseBtn = editProfileModal.querySelector(
  ".modal__close-button"
);
const NewPostCloseBtn = newPostModal.querySelector(".modal__close-button");
const PreviewCloseBtn = previewmodal.querySelector(
  ".modal__preview_close-button"
);

// select current input
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

// select user input
const editProfileForm = editProfileModal.querySelector(".modal__form");
const ProfilenameInput = editProfileModal.querySelector("#modal-profile-name");
const descriptionInput = editProfileModal.querySelector(
  "#modal-profile-description"
);

// select caption and select image for preview modal
const PreviewCaption = previewmodal.querySelector(".modal__caption");
const PreviewImage = previewmodal.querySelector(".modal__image");

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
  cardLikeBtn.addEventListener("click", function (EventObject) {
    EventObject.stopPropagation();
    EventObject.target.classList.toggle("card__like-button_click");
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
    openModal(previewmodal);
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
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

/*--------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------*/

/*        sprint 4        */
//notes: new-post-modal and edit-profile-modal
NewPostBtn.addEventListener("click", function () {
  //newPostModal.classList.add("modal_is-opened");
  openModal(newPostModal);
});

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
  closeModal(previewmodal);
});

/*--------------------------------------------------------------------------------------------------------*/
/*        sprint 5 and 6        */
/*--------------------------------------------------------------------------------------------------------*/
// task 1 and 2: Filling the form fields when opening the modal and Edit Profile form submission

EditProfileBtn.addEventListener("click", function () {
  ProfilenameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;

  //editProfileModal.classList.add("modal_is-opened");
  openModal(editProfileModal);
});

editProfileForm.addEventListener("submit", function (EventObject) {
  EventObject.preventDefault();
  profileName.textContent = ProfilenameInput.value;
  profileDescription.textContent = descriptionInput.value;
  //editProfileModal.classList.remove("modal_is-opened");
  closeModal(editProfileModal);
});

// task 3: New Post form submission
// Select the necessary form elements. You should select
// these from inside the modal, not the document.
const addCardFormElement = newPostModal.querySelector(".modal__form");
const NewPostlinkInput = newPostModal.querySelector("#modal-image-link");
const NewPostnameInput = newPostModal.querySelector("#modal-caption-texts");

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
  console.log("New Post name:", NewPostnameInput.value);
  console.log("New Post image link:", NewPostlinkInput.value);

  // data of user input
  const UserInput = {
    name: NewPostnameInput.value,
    link: NewPostlinkInput.value,
  };

  // use getCardElement() function to create the new card and add then add it to the DOM
  const NewCardElement = getCardElement(UserInput);
  cardsList.prepend(NewCardElement);

  updateNoCards();

  // Reset the form to clear all inputs
  evt.target.reset();

  // Then close the modal
  closeModal(newPostModal);
}

// Create the submit listener.
addCardFormElement.addEventListener("submit", handleAddCardSubmit);

/*--------------------------------------------------------------------------------------------------------*/
/*        sprint 5 and 6 end        */
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
