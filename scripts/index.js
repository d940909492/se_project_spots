/*        sprint 5 init        */
const cardsList = document.querySelector(".cards__list");
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

initialCards.forEach((card) => {
  console.log(card.name);
});
/*        sprint 5 init        */

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
const EditProfileModal = document.querySelector("#edit-profile-modal");
const NewPostModal = document.querySelector("#new-post-modal");

const EditProfileBtn = document.querySelector(".profile__button-secondary");
const NewPostBtn = document.querySelector(".profile__button-large");

const EditProfileCloseBtn = EditProfileModal.querySelector(
  ".modal__close-button"
);
const NewPostCloseBtn = NewPostModal.querySelector(".modal__close-button");

EditProfileBtn.addEventListener("click", function () {
  //EditProfileModal.classList.add("modal_is-opened");
  openModal(EditProfileModal);
});
NewPostBtn.addEventListener("click", function () {
  //NewPostModal.classList.add("modal_is-opened");
  openModal(NewPostModal);
});

EditProfileCloseBtn.addEventListener("click", function () {
  //EditProfileModal.classList.remove("modal_is-opened");
  closeModal(EditProfileModal);
});
NewPostCloseBtn.addEventListener("click", function () {
  //NewPostModal.classList.remove("modal_is-opened");
  closeModal(NewPostModal);
});

/*--------------------------------------------------------------------------------------------------------*/
/*        sprint 5        */
/*--------------------------------------------------------------------------------------------------------*/
// task 1 and 2: Filling the form fields when opening the modal and Edit Profile form submission
//oops...I didnt expect I already completed these tasks in the last sprint...

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const editProfileForm = EditProfileModal.querySelector(".modal__form");

const ProfilenameInput = EditProfileModal.querySelector("#modal-profile-name");
const descriptionInput = EditProfileModal.querySelector(
  "#modal-profile-description"
);

EditProfileBtn.addEventListener("click", function () {
  ProfilenameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;

  //EditProfileModal.classList.add("modal_is-opened");
  openModal(EditProfileModal);
});

editProfileForm.addEventListener("submit", function (EventObject) {
  EventObject.preventDefault();
  profileName.textContent = ProfilenameInput.value;
  profileDescription.textContent = descriptionInput.value;
  //EditProfileModal.classList.remove("modal_is-opened");
  closeModal(EditProfileModal);
});

// task 3: New Post form submission
// Select the necessary form elements. You should select
// these from inside the modal, not the document.

const addCardFormElement = NewPostModal.querySelector(".modal__form");
const NewPostlinkInput = NewPostModal.querySelector("#modal-image-link");
const NewPostnameInput = NewPostModal.querySelector("#modal-caption-texts");
// Create the form submission handler.
function handleAddCardSubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault();

  // Log both input values to the console.
  console.log("New Post name:", NewPostnameInput.value);
  console.log("New Post image link:", NewPostlinkInput.value);

  // Close the modal.
  //NewPostModal.classList.remove("modal_is-opened");
  closeModal(NewPostModal);
}

// Create the submit listener.
addCardFormElement.addEventListener("submit", handleAddCardSubmit);

/*--------------------------------------------------------------------------------------------------------*/
/*        sprint 5        */
/*--------------------------------------------------------------------------------------------------------*/

// Since I had already completed half of the task before it started, I'm now finishing the new post functionality.
// I thought it might be complicated, but it turned out to be easier than i thought......
/*
const NewPostModal = document.querySelector("#new-post-modal");
const addCardFormElement = NewPostModal.querySelector(".modal__form");
const NewPostlinkInput = NewPostModal.querySelector("#modal-image-link");
const NewPostnameInput = NewPostModal.querySelector("#modal-caption-texts");

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const NewPostImageUrl = NewPostlinkInput.value;
  const NewPostCaption = NewPostnameInput.value;

  const newCardHTML = `
    <li class="card">
      <img
        src="${NewPostImageUrl}"
        alt="${NewPostCaption}"
        class="card__image"
      />
      <div class="card__content">
        <h2 class="card__text">${NewPostCaption}</h2>
        <button class="card__like-button"></button>
      </div>
    </li>
  `;
  cardsList.innerHTML = newCardHTML + cardsList.innerHTML;
  NewPostnameInput.value = "";
  NewPostlinkInput.value = "";

  //NewPostModal.classList.remove("modal_is-opened");
  closeModal(NewPostModal);
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);
*/

/*--------------------------------------------------------------------------------------------------------*/
/* Like Button */
/*--------------------------------------------------------------------------------------------------------*/

cardsList.addEventListener("click", function (EventObject) {
  if (EventObject.target.classList.contains("card__like-button")) {
    EventObject.preventDefault();
    EventObject.target.classList.toggle("card__like-button_click");
  }
});

/*--------------------------------------------------------------------------------------------------------*/
/* Like Button */
/*--------------------------------------------------------------------------------------------------------*/
