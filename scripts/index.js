/*        sprint 5 init        */
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
  EditProfileModal.classList.add("modal_is-opened");
});
NewPostBtn.addEventListener("click", function () {
  NewPostModal.classList.add("modal_is-opened");
});

EditProfileCloseBtn.addEventListener("click", function () {
  EditProfileModal.classList.remove("modal_is-opened");
});
NewPostCloseBtn.addEventListener("click", function () {
  NewPostModal.classList.remove("modal_is-opened");
});

/*--------------------------------------------------------------------------------------------------------*/
/*        sprint 5        */
/*--------------------------------------------------------------------------------------------------------*/
// task 1 and 2: Filling the form fields when opening the modal and Edit Profile form submission
//oops...I didnt expect I already completed these tasks in the last sprint...

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = editProfileModal.querySelector(".modal__form");

const ProfilenameInput = editProfileModal.querySelector("#modal-profile-name");
const descriptionInput = editProfileModal.querySelector(
  "#modal-profile-description"
);
const editProfileBtn = document.querySelector(".profile__button-secondary");

editProfileBtn.addEventListener("click", function () {
  ProfilenameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;

  editProfileModal.classList.add("modal_is-opened");
});

editProfileForm.addEventListener("submit", function (EventObject) {
  EventObject.preventDefault();
  profileName.textContent = ProfilenameInput.value;
  profileDescription.textContent = descriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
});

// task 3: New Post form submission
// Select the necessary form elements. You should select
// these from inside the modal, not the document.
/*
const newPostModal = document.querySelector("#new-post-modal");
const addCardFormElement = newPostModal.querySelector(".modal__form");
const NewPostnameInput = newPostModal.querySelector("#modal-image-link");
const NewPostlinkInput = newPostModal.querySelector("#modal-caption-texts");
// Create the form submission handler.
function handleAddCardSubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault();

  // Log both input values to the console.
  console.log("New Post name:", NewPostnameInput.value);
  console.log("New Post image link:", NewPostlinkInput.value);

  // Close the modal.
  newPostModal.classList.remove("modal_is-opened");
}

// Create the submit listener.
addCardFormElement.addEventListener("submit", handleAddCardSubmit);
*/
/*--------------------------------------------------------------------------------------------------------*/
/*        sprint 5        */
/*--------------------------------------------------------------------------------------------------------*/

// Since I had already completed half of the task before it started, I'm now finishing the new post functionality.
// I thought it might be complicated, but it turned out to be easier than i thought......
const newPostModal = document.querySelector("#new-post-modal");
const addCardFormElement = newPostModal.querySelector(".modal__form");
const NewPostnameInput = newPostModal.querySelector("#modal-image-link");
const NewPostlinkInput = newPostModal.querySelector("#modal-caption-texts");
const cardsList = document.querySelector(".cards__list");

function handleAddCardSubmit(EventObject) {
  EventObject.preventDefault();
  const captionText = NewPostlinkInput.value;
  const imageUrl = NewPostnameInput.value;

  const newCardHTML = `
    <li class="card">
      <img
        src="${imageUrl}"
        alt="${captionText}"
        class="card__image"
      />
      <div class="card__content">
        <h2 class="card__text">${captionText}</h2>
        <button class="card__like-button"></button>
      </div>
    </li>
  `;
  cardsList.innerHTML = newCardHTML + cardsList.innerHTML;
  NewPostnameInput.value = "";
  NewPostlinkInput.value = "";

  newPostModal.classList.remove("modal_is-opened");
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);

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
