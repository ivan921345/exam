const messages = [
  "Świetnie!",
  "Kto gra główną rolę?",
  "Lubisz filmy Tego reżysera?",
  "Będę 10 minut wcześniej",
  "Może kupimy sobie popcorn?",
  "Ja wolę Colę",
  "Zaproszę jeszcze Grześka",
  "Tydzień temu też byłem w kinie na Diunie",
  "Ja funduję bilety",
];

const refs = {
  sendBtnEl: document.querySelector(".sendBtn"),
  inputEl: document.querySelector(".input"),
  chatContainerEl: document.querySelector(".chat"),
  randBtnEl: document.querySelector(".randBtn"),
};

const scrollLastMessageIntoView = () => {
  const lastMessage = refs.chatContainerEl.lastElementChild;

  lastMessage ? lastMessage.scrollIntoView({ behavior: "smooth" }) : "";
};

const handleSendMessageClick = (e) => {
  const inputValue = refs.inputEl.value;

  refs.chatContainerEl.insertAdjacentHTML(
    "beforeend",
    `
    <div class="messageOne">
        <img src="./Jolka.jpg" alt="" />
        <p>${inputValue}</p>
    </div>
    `
  );
  scrollLastMessageIntoView();
};

const handleRandomButtonClick = (e) => {
  const randomIndex = Math.floor(Math.random() * messages.length);

  refs.chatContainerEl.insertAdjacentHTML(
    "beforeend",
    `
    <div class="messageTwo">
        <img src="./Krzysiek.jpg" alt="" />
        <p>${messages[randomIndex]}</p>
    </div>
    `
  );
  scrollLastMessageIntoView();
};

refs.randBtnEl.addEventListener("click", handleRandomButtonClick);
refs.sendBtnEl.addEventListener("click", handleSendMessageClick);
