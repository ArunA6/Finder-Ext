document.addEventListener('DOMContentLoaded', function () {

    const bg = chrome.extension.getBackgroundPage()
    Object.keys(bg.finder).forEach(function (url) {
      const div = document.createElement('div')
      div.textContent = `${url}: ${bg.finder[url]}`
      document.body.appendChild(div)
    })

  }, false)