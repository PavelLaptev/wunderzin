const macbook = document.getElementById("macbook-device");
const iphone = document.getElementById("iphone-device");
const ipad = document.getElementById("ipad-device");

const macbookPos = ["-6px -1781px", "-6px -2373px", "-917px -2372px"];
const iphonePos = ["-5px -1733px", "207.5px -1733px", "421.5px -1733px"];
const ipadPos = ["-3px -2134px", "496px -2134px", "997px -2134px"];

///////
macbook.addEventListener("mouseenter", function() {
    this.style.backgroundPosition = macbookPos[Math.floor(Math.random() * 3)];
});

macbook.addEventListener("mouseleave", function() {
    this.style.backgroundPosition = macbookPos[Math.floor(Math.random() * 3)];
});

///////
iphone.addEventListener("mouseenter", function() {
    this.style.backgroundPosition = iphonePos[Math.floor(Math.random() * 3)];
});

iphone.addEventListener("mouseleave", function() {
    this.style.backgroundPosition = iphonePos[Math.floor(Math.random() * 3)];
});

///////
ipad.addEventListener("mouseenter", function() {
    this.style.backgroundPosition = ipadPos[Math.floor(Math.random() * 3)];
});

ipad.addEventListener("mouseleave", function() {
    this.style.backgroundPosition = ipadPos[Math.floor(Math.random() * 3)];
});
