const d = document,
  image = d.querySelector("#image"),
  link = d.querySelector("#link"),
  html = d.querySelector("#html"),
  t = d.querySelector(".Toast");
let content = 'your HTML will appear here',
  toast = (status, text) => {
    d.querySelector("#toastMessage").innerText = text;
    if (status == "error") {
      t.classList.replace("Toast--success", "Toast--error");
    }
    t.classList.remove("hidden");
    window.setTimeout(() => {
      t.classList.add("hidden");
      window.setTimeout(() => {
        t.classList.replace("Toast--error", "Toast--success");
      }, 310);
    }, 3000);
  }
d.querySelector("#generate").addEventListener('click', () => {
  const template = `<a href="${link.value}"><img src="${image.value}"></a>`;
  content = template;
  html.value = content;
  if (ultralightCopy(content)) {
    toast("success", "Successfully copied!");
  } else {
    toast("error", "Couldn't copy automatically");
  }
  image.value = '';
  link.value = '';
});

d.querySelector('#copy').addEventListener('click', () => {
  if (ultralightCopy(content)) {
    toast("success", "Successfully copied!");
  } else {
    toast("error", "Couldn't copy automatically");
  }
});
