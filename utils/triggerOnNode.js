function triggerOnNode(node, callback, triggerOnceVariable) {
  // console.log('triggering',triggerOnceVariable)
  if(window[triggerOnceVariable]===true)return
  var observer = new MutationObserver(function (mutations) {
    // eslint-disable-next-line no-unused-vars
    for (const mutation in mutations) {
      if(window[triggerOnceVariable]===true){
        observer.disconnect();
        return
      }

      if (document.querySelector(node)) {
        callback(document.querySelector(node))
        window[triggerOnceVariable]=true
        observer.disconnect();
      }
    }
  });
  observer.observe(document, {
    attributes: false,
    childList: true,
    characterData: false,
    subtree: true,
  });
}

export default triggerOnNode;
