import rosetta from "../data/rosetta.json";

function localize(key, template, lang) {
  
  if (!rosetta[template])  console.error('template not found')
  if (!rosetta[template][key])  console.error('key not found')
  if (!rosetta[template][key][lang])  console.error('lang not found')
  
  if(
    !rosetta[template] ||
    !rosetta[template][key] ||
    !rosetta[template][key][lang]
  ) return '-'

  return rosetta[template][key][lang];
}

export default function localizeFactory(template = "pdp", lang = "nl") {
  return function (key) {
    return localize(key, template, lang);
  };
}
