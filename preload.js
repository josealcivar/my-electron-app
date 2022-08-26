window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element =document.getElementById(selector)
    if(element) element.innerText = text
  }

  for (const dependecy of ['chrome', 'node','electron']){
    console.log(dependecy)
    replaceText(`${dependecy}-version`, process.versions[dependecy])
  }
})