window.disableScroll = function () {
  document.body.dbScroll = window.scrollY;

  document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%;
    overflow: hidden;
    heigth: 100vh;
  `;
};

window.enableScroll = function () {
  document.body.style.cssText = ``;
  window.scroll({ top: document.body.dbScroll });
};
