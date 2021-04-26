let mic = document.getElementById("mic");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    output(transcript);
}

recognition.onend=function(){
    mic.style.background="#ff3b3b";
}

mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
});

function Select_function(){
  var a=document.getElementById("input1").value;
  if(a==="Institute"){
      var arr=["","History","Location","Contact","About","Awards"];
  }else if(a==="Administration"){
      var arr=["","ChairPerson","Director","DeputyDirector","HOD"];
  }else if(a==="Facilities"){
      var arr=["","Library","Central_Computer_Center","Health_Care","Guest_House","Hostels"];
  }else if(a==="Places"){
      var arr=["","SJA","SAC","Swimming_Pool"];
  }else if(a==="Canteen"){
      var arr=["","Amul","Nandini","Food_Court","Nescafe","Samudra_Darshan","Night_Canteen"];
  }else if(a==="Others"){
    var arr=["","Post_Office","Bank","Shopping_Centers"];
}

var string="";

  for(i=0;i<arr.length;i++)
  {
      string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
  }
  document.getElementById("Menu").innerHTML=string;
}


function GetSelectedTextValue(Menu) {
  var selectedText = Menu.options[Menu.selectedIndex].innerHTML;
  var selectedValue = Menu.value;
  output(selectedValue);
}




document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


function output(input) {
  let product;

  //Removes Digits and Spaces...
  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/ a /g, " ")               // 'tell me a story' -> 'tell me story'
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(prompts, replies, text)) { 
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } else {
    // If all else fails: random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // Update DOM
  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="img/user.jpeg" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "img/bot-mini.jpg";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000
  )

}