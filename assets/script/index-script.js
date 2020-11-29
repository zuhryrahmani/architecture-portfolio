function dropFunctionFreelance() {
   document.querySelector("#dropDownFreelance").classList.toggle("show");
}

function dropFunctionCompetition() {
   document.querySelector("#dropDownCompetition").classList.toggle("show");
}

function dropFunctionEducations() {
   document.querySelector("#dropDownEducations").classList.toggle("showProfileEducations");
}

function dropFunctionOrganizations() {
   document.querySelector("#dropDownOrganizations").classList.toggle("showProfileOrganizations");
}

function dropFunctionAwards() {
   document.querySelector("#dropDownAwards").classList.toggle("showProfileAwards");
}

function dropFunctionSkills() {
   document.querySelector("#dropDownSkills").classList.toggle("showProfileSkills");
}

function dropFunctionCertifications() {
   document.querySelector("#dropDownCertifications").classList.toggle("showProfileCertifications");
}

function dropMobileFreelance() {
   document.querySelector("#mobileFreelance").classList.toggle("showMobileFreelance");
}

function dropMobileCompetition() {
   document.querySelector("#mobileCompetition").classList.toggle("showMobileCompetition");
}

function dropHamburger() {
   let x = document.getElementById("mobileContainer");
   if (x.style.display === "block") {
      x.style.display = "none";
   } else {
      x.style.display = "block";
   }
}

window.onclick = function(event) {
   if (!event.target.matches('.buttonFreelance')) {
      let dropFreelance = document.querySelector("#dropDownFreelance");
      if (dropFreelance.classList.contains('show')) {
         dropFreelance.classList.remove('show');
      }
   }
   if (!event.target.matches('.buttonCompetition')) {
      let dropCompetition = document.querySelector("#dropDownCompetition");
      if (dropCompetition.classList.contains('show')) {
         dropCompetition.classList.remove('show');
      }
   }
}