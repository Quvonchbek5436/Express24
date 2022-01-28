const userProfil = document.querySelector("#userProfile");
const userModal = document.querySelector(".userModal")

userProfil.onclick = () => {
    userModal.classList.toggle("d-block")
}