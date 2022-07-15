let new_h1_tag = document.querySelector(`#h1-tag`)
new_h1_tag[`innerText`] = `Title Different`;

let new_p_tag = document.querySelectorAll(`.p-tag`);
for(let counter = 0; counter < new_p_tag.length; counter++) {
    new_p_tag[counter][`innerText`] = `grabbed by my class`;
}