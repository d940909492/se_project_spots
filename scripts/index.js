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

// I feel this project is too easy, so Ive decided to add something based on what I learnt during my self-study
const CardLikeBtn = document.querySelectorAll(".card__like-button");

let isLikeBtnClicked = false;

CardLikeBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    if (isLikeBtnClicked === false) {
      button.setAttribute(
        "style",
        "background-image: url(../images/heart.png); opacity: 1;"
      );
    } else {
      button.removeAttribute("style");
    }
    isLikeBtnClicked = !isLikeBtnClicked;
  });
});

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = editProfileModal.querySelector(".modal__form");

const nameInput = editProfileModal.querySelector("#modal-profile-name");
const descriptionInput = editProfileModal.querySelector(
  "#modal-profile-description"
);
const editProfileBtn = document.querySelector(".profile__button-secondary");

editProfileBtn.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;

  editProfileModal.classList.add("modal_is-opened");
});

editProfileForm.addEventListener("submit", function (EvenObject) {
  EvenObject.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
});

/*--------------------------------------------------------------------------------------------------------*/
/*        sprint 5        */
/*--------------------------------------------------------------------------------------------------------*/
