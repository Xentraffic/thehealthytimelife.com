const agents = [{
    name: "James",
    image: "james.webp"
  },
  {
    name: "Sarah",
    image: "sarah.png"
  },
  {
    name: "John",
    image: "john.png"
  },
  {
    name: "Emily",
    image: "emily.webp"
  },
  {
    name: "Michael",
    image: "michael.webp"
  },
  {
    name: "Sophia",
    image: "sophia.png"
  },
];

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function displayMessages(stepNum, numMessages, element) {
  const step = document.getElementById(stepNum);

  if (stepNum === "step5") {
    const chat = document.getElementById("chat");
    chat.classList.remove("extra-padding");
  }

  step.style.display = "block";
  if (element) {
    element.parentElement.style.display = "none";
    if (element.parentElement.id === "step2Buttons") {
      document.getElementById("step2Title").style.display = "none";
    }
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<p>${element.innerHTML}</p><img
          src="blankProfile.png"
          class="profileRight"
          alt="Profile Pic"
          height="32"
          width="32"
        />`;
    newDiv.querySelector("p").classList.add("chatText");
    newDiv.classList.add("response");
    step.parentElement.insertBefore(newDiv, step);
  }

  const chatBubbles = step.querySelector(".chatBubbles");

  const buttons = document.getElementById(`${stepNum}Buttons`);
  await delay(1000);

  for (let i = 0; i < numMessages; i++) {
    //const time = step.children[i].innerText.split(" ").length * 100;
    await delay(2000);
    step.children[i].style.display = "block";
    step.children[i].scrollIntoView({
      behavior: "smooth"
    });
  }

  chatBubbles.style.display = "none";

  if (stepNum === "step4") {
    await delay(1000);
    const chat = document.getElementById("chat");
    chat.classList.add("extra-padding");
    buttons.style.display = "flex";
    buttons.scrollIntoView({
      behavior: "smooth"
    });
  } else {
    buttons.style.display = "flex";
    if (stepNum === "step2") {
      document.getElementById("step2Title").style.display = "block";
    }
  }
}

async function displayChat() {
  const chat = document.getElementById("chat");
  const section2 = document.getElementById("section2");
  const section1 = document.getElementById("section1");
  section2.style.display = "none";
  section1.style.display = "none";

  const num = Math.floor(Math.random() * 6);
  const {
    name,
    image
  } = agents[num];

  chat.style.display = "flex";
  const online = document.querySelector(".online");
  online.innerHTML = `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
        >
          <circle cx="6" cy="6.5" r="6" fill="#0FA74C" />
        </svg>
        ${name} is online`;
  const intro = document.querySelector(".intro");
  intro.innerHTML = `Hi 👋 I'm ${name} from <span>Essential Life Closure Benefits.</span>`;

  const pics = document.querySelectorAll(".profileLeft");
  pics.forEach((pic) => {
    pic.src = image;
  });

  await displayMessages("step1", 2, false);
}