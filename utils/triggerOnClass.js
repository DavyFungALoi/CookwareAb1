// WORK IN PROGRESS


// function triggerOnClass (node, callback,triggerOnceVariable){
//     if(window[triggerOnceVariable]===true)return

//     function callback(mutationList) {
//     mutationList.forEach(function(mutation) {
//         const mutatedNode = mutation.target;
//         switch(mutation.attributeName) {
//         case "class":
//             if (mutatedNode.classList.contains("active") && !mutatedNode.classList.contains("modifiedOnce")) {
//             mutatedNode.classList.add("modifiedOnce")
//             observer.disconnect();

//             }
//         break;
//         }
//     });
// }

// var targetNode = document.querySelector("#tab-label-description");
// var observer = new MutationObserver(callback);

// observer.observe(targetNode, {
//     attributes: true,
//     attributeOldValue: true
// });



// }

// export default triggerOnClass