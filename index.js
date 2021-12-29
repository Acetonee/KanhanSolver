if (document.getElementById("quiz-question-number")) {
    const title = document.title.replace(/\s/g, '').replace(/\s/g, '').split('|')[0];
    const id = parseInt(document.getElementById("quiz-question-number").textContent) - 1;


    fetch("https://acetonee.github.io/KanhanSolver/data/idiom/")
        .then(data => {
            if (!data.ok) {
                const err = new Error(`NetworkError: ${data.status} ${data.statusText}`);
                err.response = data;
                throw err;
            } else {
                return data.json();
            }
        })
        .then(data => {
            data.forEach(e => {
                if (e.title === title) {
                    document.querySelectorAll("input[type='radio']")[e.answers[id].charCodeAt(0) - 65].checked = true;
                    document.getElementById("quiz-question-answering-form").submit();
                }
            })
        })
        .catch(e => {
            if (e.message === "NetworkError: 404 Not Found") {
                console.log("%c" + e.message + "\n" +
                    "We cannot find this question in our database!\n" +
                    "Help us improve by adding to the database below\n",
                    "display:inline-block; color:red; font-size:2rem; text-shadow: 0 0 1px #000;");
                console.log("%cOpen an issue here: https://github.com/Acetonee/KanhanSolver/issues",
                    "display:inline-block; color:aqua; text-decoration: underline; font-size:1.5rem; text-shadow: .5px .5px 1px #000;");
            } else {
                console.log("%c" + e.name + ": " + e.message + "\n" +
                    "Something went wrong!\n" +
                    "Check if you have the right code / page\n" +
                    "Help us improve by reporting errors below\n",
                    "display:inline-block; color:red; font-size:2rem; text-shadow: 0 0 1px #000;");
                console.log("%cOpen an issue here: https://github.com/Acetonee/KanhanSolver/issues",
                    "display:inline-block; color:aqua; text-decoration: underline; font-size:1.5rem; text-shadow: .5px .5px 1px #000;");
                console.log("%cError details for nerds: ",
                    "display:inline-block; color:red; text-shadow: 0 0 1px #000;");
                console.error(e);
            }
        });
} else {
    document.getElementById("quiz-preview-form").submit();
}

