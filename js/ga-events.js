function handleGAEvent(action, event_category, event_label) {
  return (_) => {
    console.log("analytics");
    gtag("event", action, { event_category, event_label });
  };
}

document.querySelector(`.js-resume-event`).onclick = handleGAEvent(
  "download_file",
  "download",
  "resume"
);

document.querySelectorAll(`.link-general`).forEach((link) => {
  link.onclick = handleGAEvent(
    "opened_my_general_sites",
    "general_link",
    `${link.href}: ${link.innerText}`
  );
});

document.querySelectorAll(`.link-project`).forEach((link) => {
  link.onclick = handleGAEvent(
    "opened_project",
    "projects",
    `${link.href}: ${link.innerText}`
  );
});
