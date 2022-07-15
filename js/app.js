let new_h1_tag = document.querySelector(`#h1-tag`)
new_h1_tag[`innerText`] = `Title Different`;

let new_p_tag = document.querySelectorAll(`.p-tag`);
for(let counter = 0; counter < new_p_tag.length; counter++) {
    new_p_tag[counter][`innerText`] = `grabbed by my class`;
}

let another_h1 = document.getElementById(`another-h1`);
another_h1[`innerText`] = `Another teeeext`;

let another_p_tag = document.getElementsByClassName(`new-p-tag`);
for(let counter = 0; counter < another_p_tag.length; counter++) {
    another_p_tag[counter][`innerText`] = `grabbed by my class, diferently`
}

let title = document.querySelector(`#title`);
title[`innerHTML`] = `hahahahahahahahahahahahha`;
title[`outerHTML`] = `<h2>Right before</h2>` + title[`outerHTML`] + `<h2>after</h2>`;

let replace_me = document.querySelectorAll(`.replace-me`);

let change_css = document.getElementById(`css-with-js`);
change_css[`style`][`backgroundColor`] = `green`;
change_css[`style`][`fontSize`] = `1.5rem`;
change_css[`style`][`marginTop`] = `50%`;

let img = document.getElementById(`change-id`);
img.setAttribute(`src`, `https://images.unsplash.com/photo-1657427349727-1ed381469cdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`);