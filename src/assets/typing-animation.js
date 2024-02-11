"use strict";

const QUOTES = [
    '"In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them." - Andrew Hunt',
    '"Programming isn\'t about what you know; it\'s about what you can figure out.” - Chris Pine',
    '"Testing leads to failure, and failure leads to understanding." - Burt Rutan',
    '“First, solve the problem. Then, write the code.” - John Johnson',
    '"The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time." - Tom Cargill',
    '"Being a good software engineer is 3% talent, 97% not being distracted by the internet." - Unknown',
    '"The function of good software is to make the complex appear to be simple." - Grady Booch',
    '"In theory, theory and practice are the same. In practice, they\'re not."- Yoggi Berra',
    '“Everyone knows that debugging is twice as hard as writing a program in the first place. So if you\'re as clever as you can be when you write it, how will you ever debug it?” - Brian Kernighan',
    `"Any code of your own that you haven't looked at for six or more months might as well have been written by someone else." - Eagleson's Law`,
    `"It always takes longer than you expect, even when you take into account Hofstadter's Law." - Hofstadter's Law`,
    `"The best thing about a boolean is even if you are wrong, you are only off by a bit." - Unknown`,
    `"It's harder to read code than to write it." - Joel Spolsky`,
    `"Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away." - Antoine de Saint-Exupery`,
    `"If debugging is the process of removing software bugs, then programming must be the process of putting them in." - Edsger Dijkstra`,
    `"It's not that I'm so smart, it's just that I stay with problems longer." - Albert Einstein`,
    `"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - Patrick McKenzie`,
    `"Programming is not about typing, it's about thinking." - Rich Hickey`,
    `"In programming, the hard part isn't solving problems but deciding what problems to solve." - Paul Graham`,
    `"Testing can only prove the presence of bugs, not their absence." - Edsger W. Dijkstra`,
]

class TxtType {
    // String we will type
    text;

    // The html element we are modifying
    element;

    // characters currently displayed
    i;

    tick = () => {
        if (this.i >= this.text.length) {
            this.element.textContent = this.text.substring(0, this.i);
            return;
        }

        this.element.textContent = this.text.substring(0, this.i) + "▏";

        let delay;
        if (this.i >= 1 && ['.', ';', ':', '?', '!'].includes(this.text.charAt(this.i - 1))) {
            delay = 500;
        } else {
            delay = 30;
        }

        this.i += 1;

        setTimeout(() => {
            this.tick();
        }, delay);
    }

    constructor(text, element) {
        this.text = text;
        this.element = element;
        this.i = 0;
        this.tick();
    }
};


let element = document.getElementById("typing-animation");

let date = new Date();

// local days since 1970
let day = (date.getTime() - date.getTimezoneOffset() * 60000) / 8.64e7;
console.log(day);
let text = QUOTES[Math.floor(day) % QUOTES.length];
new TxtType(text, element);
