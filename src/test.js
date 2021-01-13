import './styles/index.less';
import liveReload from '../utils/liveReload';
import injectStyles from '../utils/injectStyles';
// import triggerOnNode from '../utils/triggerOnNode';
import "./styles/index.less"

if (ENV === 'development') {
  liveReload(); 
  injectStyles();
}

const body = document.querySelector('body');
body.classList.add('EXP_NAME');


// Example on how to start building this experiment
//  triggerOnNode( 'selectorToWatch',callback(),'variableName')
//    'selectorToWatch' will be the selector you target via document.querySelector or jQuery("")
//    callback() will be the function you execute when found, this will be the found node
//    variableName will be the window.variableName set to true to prevent rerun.


body.classList.add('EXP_LOADED'); 
// EXP_LOADED is overriden on compilation by rollup by the experiment name, same on LESS selectors.

