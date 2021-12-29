# KanHanSolver

By [Acetonee](https://github.com/Acetonee)

## Getting Started

This currently only works for Chinese idioms. [Open a feature request](https://github.com/Acetonee/KanhanSolver/issues)
on the issues page if you want support for other sections as well.

I am using Firefox here. This should also work on other browsers, perhaps with slightly different shortcut keys.

1. Log in to your _Kanhan_ account and navigate to the exercise page. You should see multiple choice questions shown on
   the page.


2. Open the web console.
    - Firefox: Press `Crtl + Shift + K`
    - Chrome: Press `Ctrl + Shift + J`
    - Safari:
        1. From the top menu bar, select `Safari` > `Preferences...`.
        2. Once the dialogue is open, select the `Advanced` tab.
        3. Check the `Show Develop menu in the menu bar` box.
        4. Once the `Develop` menu has been enabled, go to the `Develop` menu in the menu bar and select
           the `Show JavaScript Console` option.


3. Copy **all** of the following code and paste it into the web console.
   ```
   let script = document.createElement('script');
   script.type = "text/javascript";
   script.src = "https://acetonee.github.io/KanhanSolver/index.js";
   document.getElementsByTagName('head')[0].appendChild(script);
   ```


4. Run the code by pressing the `Run` button or `Ctrl + Enter` keys.


5. The answers should be filled in automatically and the page refreshed to the next question.


6. Repeat `Step 4` to `Step 5` after the new page is loaded, until the exercise is complete. If your web console is
   cleared after each run, just paste the code again or get Firefox (it's better for privacy!).


7. Voila. Your answers should be submitted automatically.

## Features

- No installations required
- Runs on most modern browsers
- Open source with no security concerns

## FAQ

Q: What is this?  
A: This is an application that runs in your browser to fill in Kanhan answers and submits it for you.

Q: Why is this?  
A: I have been seeing students, including myself, having to complete this Kanhan exercise for 9 years now. It's frankly
quite pointless and repetitive. I am not saying it's completely pointless, just that our precious lifetime deserves
better alternative use. Going out and playing with friends is more worthwhile.

Q: When is this?  
A: Today. But also, the future.

Q: How is this?  
A: The JavaScript code you copied is loading another JavaScript file that is doing the real work. It identifies, checks
the database, fills and submits the correct answer for you.   
Anyway, why do none ever ask how I am? I cri ;_;

Q: Who is this?  
A: It's a me. Acetonee. And also you, if you use this.

Q: Where is this?  
A: On Github's cloud servers. And also your computer's ram when you pasted it into your browser.

Q: IT DOESN'T WORK!  
A: If the shortcut keys provided in the instructions does not work for your browser, do a simple internet search before
opening an issue. Make sure you have the entire code block copied and pasted correctly as well. If these do not help
you, [open an issue here](https://github.com/Acetonee/KanhanSolver/issues).

Q: Is it safe to use?  
A: Yes it's completely safe. This programme is completely open source. Source code can be viewed above. The code is also
unloaded after each refresh. That is why you have to rerun it after each question.

Q: Is this hacking?  
A: No this is just looking up a database of answers we collected from previous attempts of the exercise. The database is
not complete; you can help by [expanding it](https://github.com/Acetonee/KanhanSolver/issues).

Q: Why did you make this? _ has done it better!  
A: I figure putting this out and saving my friends a bit of time would perhaps make the world a pinch less miserable.

Q: There's a issue with _ / Can you add _?  
A: Put that under the [issues](https://github.com/Acetonee/KanhanSolver/issues) tab on the project's github page and I
may do it when I'm in the right mood.

Q: MY DAD OWNS GOOGLE  
A: That's a stupid question. I'm gonna pretend that you asked a smart one. I make small projects every now and then.
Most of them are kinda niche and don't end up on the internet. These things I do are probably gonna haunt me later in my
life and I'd probably regret posting to what's practically an infinite archiving machine.

Q: What is the airspeed velocity of an unladen swallow?  
A: African or European?

## Contact

https://github.com/Acetonee

Want a website? Contact me!

Shameless plug: [Join Queen's College Astronomers' Club](https://qcac.hk/#recruitment) for more resources like this.

## Copyright

KanHanSolver  
Copyright (C) 2021 Acetonee

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public
License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later
version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not,
see https://www.gnu.org/licenses/.
