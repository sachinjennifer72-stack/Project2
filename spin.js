const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const popup = document.getElementById("popup");

const popupEmoji = document.getElementById("popupEmoji");

const popupTitle = document.getElementById("popupTitle");

const popupMessage = document.getElementById("popupMessage");

const prizes = [

{
title:"💋 One Forehead Kiss",
message:"You just earned one forehead kiss from your Chotki. Redeem it whenever you want🤍"
},

{
title:"🤗 One Long Hug",
message:"A hug with no time limit. Stay there as long as you want❤️"
},

{
title:"☕ Coffee Date",
message:"Looks like destiny has spoken... A coffee date with your Chotki is waiting for you☕🤍"
},

{
title:"🍟 Food Treat",
message:"Your Chotki officially owes you your favourite treat🍟❤️"
},

{
title:"🧇 Waffle Treat",
message:"Yayyy! Destiny has decided that Dudu owes Chotki a delicious waffle treat. No excuses allowed. 🤭❤️"
},
{
title:"📸 Cute Selfie Together",
message:"Time to click another memory together!📸🤍"
},

{
title:"🎵 Song Dedication",
message:"One song, dedicated only for your Chota Baby🎶❤️"
},

{
title:"❤️ Unlimited Cuddles",
message:"Jackpot! Unlimited cuddles from your Chotki. No expiry date🤭❤️"
}

];

let hasSpun = false;

spinBtn.addEventListener("click", function(){

    if(hasSpun) return;

    hasSpun = true;

    spinBtn.disabled = true;

    const prizeIndex = Math.floor(Math.random() * prizes.length);

const degreePerSlice = 360 / prizes.length;

const extraSpin = 360 * 6;

const randomInsideSlice = Math.random() * (degreePerSlice - 10) + 5;

const landingPosition =
(prizeIndex * degreePerSlice) + randomInsideSlice;

const rotation =
    extraSpin + (360 - landingPosition);

    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(function(){

        const emoji = prizes[prizeIndex].title.split(" ")[0];

const title = prizes[prizeIndex].title.replace(emoji, "");

popupEmoji.textContent = emoji;

popupTitle.textContent = title;

popupMessage.textContent = prizes[prizeIndex].message;

popup.style.display = "flex";

spinBtn.style.pointerEvents = "none";

result.style.display="block";

        spinBtn.innerHTML = "✨ Destiny has made its choice";

        nextAdventure.style.display = "inline-block";

    },5000);

});
