
const schoolQuestions = [
  "Who is your classmate?",
  "Who is your crush?",
  "Who is your best friend?",
  "Who is your ex?"
];
const schoolImages = [
  "assest/school-teen1.jpg",
  "assest/school-teen2.jpg",
  "assest/school-teen3.jpg",
  "assest/school-teen4.jpg",
  "assest/school-teen5.jpg",
  "assest/school-teen6.jpg",
  "assest/school-teen7.jpg",
  "assest/school-teen8.jpg",
  "assest/school-teen9.jpg",
  "assest/school-teen10.jpg",
  "assest/school-teen11.jpg",
  "assest/school-teen12.jpg",
  "assest/school-teen13.jpg"
];

let currentSchoolQuestionIndex = 0;
let currentSchoolImage = "";


function initSchool() {
  currentSchoolQuestionIndex = 0;
  document.getElementById("schoolQuestion").textContent = schoolQuestions[currentSchoolQuestionIndex];
  document.getElementById("schoolImage").innerHTML = "";
}

function nextSchool() {
  currentSchoolQuestionIndex = (currentSchoolQuestionIndex + 1) % schoolQuestions.length;
  document.getElementById("schoolQuestion").textContent = schoolQuestions[currentSchoolQuestionIndex];
  document.getElementById("schoolImage").innerHTML = "";
}

function pickSchool() {
  currentSchoolImage = schoolImages[Math.floor(Math.random() * schoolImages.length)];
  document.getElementById("schoolImage").innerHTML = `<img src="${currentSchoolImage}" alt="school">`;
}

function replaySchool() {
  document.getElementById("schoolImage").innerHTML = "";
}


const partyQuestions = [
  "Who would you dance with?",
  "Who brings the best snacks?",
  "Who is the life of the party?",
  "Who would you avoid at the party?"
];
const partyImages = [
  "assest/partyt-teen1.jpg",
  "assest/party-teen2.jpg",
  "assest/party-teen3.jpg",
  "assest/party-teen4.jpg",
  "assest/party-teen5.jpg",
  "assest/party-teen6.jpg",
  "assest/party-teen7.jpg",
  "assest/party-teen8.jpg",
  "assest/party-teen9.jpg",
  "assest/party-teen10.jpg",
  "assest/party-teen11.jpg",
  "assest/party-teen12.jpg",
  "assest/party-teen13.jpg"
];

let currentPartyQuestionIndex = 0;
let currentPartyImage = "";

function initParty() {
  currentPartyQuestionIndex = 0;
  document.getElementById("partyQuestion").textContent = partyQuestions[currentPartyQuestionIndex];
  document.getElementById("partyImage").innerHTML = "";
}

function nextParty() {
  currentPartyQuestionIndex = (currentPartyQuestionIndex + 1) % partyQuestions.length;
  document.getElementById("partyQuestion").textContent = partyQuestions[currentPartyQuestionIndex];
  document.getElementById("partyImage").innerHTML = "";
}

function pickParty() {
  currentPartyImage = partyImages[Math.floor(Math.random() * partyImages.length)];
  document.getElementById("partyImage").innerHTML = `<img src="${currentPartyImage}" alt="party">`;
}

function replayParty() {
  document.getElementById("partyImage").innerHTML = "";
}

const collegeQuestions = [
  "Who is your study partner?",
  "Who is always late to class?",
  "Who is the professor's favorite?",
  "Who throws the best college parties?"
];
const collegeImages = [
  "assest/college-1.jpg",
  "assest/college-2.jpg",
  "assest/college-3.jpg",
  "assest/college-4.jpg"
];

let currentCollegeQuestionIndex = 0;
let currentCollegeImage = "";

function initCollege() {
  currentCollegeQuestionIndex = 0;
  document.getElementById("collegeQuestion").textContent = collegeQuestions[currentCollegeQuestionIndex];
  document.getElementById("collegeImage").innerHTML = "";
}

function nextCollege() {
  currentCollegeQuestionIndex = (currentCollegeQuestionIndex + 1) % collegeQuestions.length;
  document.getElementById("collegeQuestion").textContent = collegeQuestions[currentCollegeQuestionIndex];
  document.getElementById("collegeImage").innerHTML = "";
}

function pickCollege() {
  currentCollegeImage = collegeImages[Math.floor(Math.random() * collegeImages.length)];
  document.getElementById("collegeImage").innerHTML = `<img src="${currentCollegeImage}" alt="college">`;
}

function replayCollege() {
  document.getElementById("collegeImage").innerHTML = "";
}


function showGame(gameId) {
  document.getElementById("homePage").classList.add("hidden");
  document.querySelectorAll(".game-page").forEach(page => {
    page.classList.add("hidden");
  });
  document.getElementById(gameId).classList.remove("hidden");


  if (gameId === "schoolGame") {
    initSchool();
  } else if (gameId === "partyGame") {
    initParty();
  } else if (gameId === "collegeGame") {
    initCollege();
  }
}

function backHome() {
  document.getElementById("homePage").classList.remove("hidden");
  document.querySelectorAll(".game-page").forEach(page => {
    page.classList.add("hidden");
  });
}