const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector
('#about-content')
const contactContent = document.querySelector
('#contact-content')

about.addEventListener('click', () => {
 const aboutBox = new WinBox({
  title: 'About Me',
  width: '450px',
  height: '400px',
  top: 25,
  right: 25,
  bottom: 25,
  left: 25,
  mount: aboutContent,
  onfocus: function() {
      this.setBackground('#00aa00')
  }
 })
})

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
     title: 'Contact Me',
     background: '#00aa00',
     width: '400px',
     height: '300px',
     top: 75,
     right: 75,
     bottom: 75,
     left: 75,
     mount: contactContent,
    })
   })