const liveReload = () => {
    const reloadScript = document.createElement("script");
    reloadScript.src =
      "http://" + "localhost".split(":")[0] + ":35729/livereload.js?snipver=1";
    document.getElementsByTagName("head")[0].appendChild(reloadScript);
};
export default liveReload;
