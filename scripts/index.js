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

/*
I also want to complete the new post feature, but I think is too far,
b/c not only i need to select elements, attach listener, extract inputs and prevent default action,
i also need to create card by innerHTML, insert post data, re-attach listener and add to page
*/

// lastly, reason that I wrote too much is because i feel writing code far more interesting than writing HTML and CSS...lol
