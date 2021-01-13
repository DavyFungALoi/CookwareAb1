function injectStyles () {
    const l = document.createElement('link'); 
    l.href = 'http://localhost:10001/style.css'; 
    l.type = 'text/css';
    l.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(l);
}
 
export default injectStyles