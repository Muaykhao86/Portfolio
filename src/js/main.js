(function () {
  const doc = document
  const rootEl = doc.documentElement
  const body = doc.body
  const lightSwitch = doc.getElementById('lights-toggle')
  /* global ScrollReveal */
  const sr = window.sr = ScrollReveal()
  const contactButtons = doc.querySelectorAll('#contactButton')
  const contactSection = doc.querySelector('.contact')
  const aboutMeSection = doc.querySelector('.aboutMe')
  const aboutMeButton = doc.querySelector('#aboutMeButton')
  const closeButtons = doc.querySelectorAll('#close')

  function revealSection (e) {
    // console.log(e.target.id)
    if (e.target.id === 'contactButton') {
      contactSection.classList.add('visible')
    }
    if (e.target.id === 'aboutMeButton') {
      aboutMeSection.classList.add('visible')
    }
  }
  function closeSection (e) {
    if (e.target.parentElement.parentElement.parentElement.id === 'contact') {
      contactSection.classList.remove('visible')
    }
    if (e.target.parentElement.parentElement.parentElement.id === 'aboutMe') {
      aboutMeSection.classList.remove('visible')
    }
  }

  contactButtons.forEach(button => button.addEventListener('click', revealSection))
  aboutMeButton.addEventListener('click', revealSection)
  closeButtons.forEach(button => button.addEventListener('click', closeSection))

  rootEl.classList.remove('no-js')
  rootEl.classList.add('js')

  window.addEventListener('load', function () {
    body.classList.add('is-loaded')
  })

  // Skillset card video playback

  const videos = document.querySelectorAll('video')
  videos.forEach(video => {
    video.playbackRate = 0.25
  })

  // Reveal animations
  function revealAnimations () {
    sr.reveal('.feature', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'right',
      viewFactor: 0.2
    })
  }

  if (body.classList.contains('has-animations')) {
    window.addEventListener('load', revealAnimations)
  }

  // Light switcher
  if (lightSwitch) {
    window.addEventListener('load', checkLights)
    lightSwitch.addEventListener('change', checkLights)
  }

  function checkLights () {
    let labelText = lightSwitch.parentNode.querySelector('.label-text')
    if (lightSwitch.checked) {
      body.classList.remove('lights-off')
      if (labelText) {
        labelText.innerHTML = 'dark'
      }
    } else {
      body.classList.add('lights-off')
      if (labelText) {
        labelText.innerHTML = 'light'
      }
    }
  }
}())
