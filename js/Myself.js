(function () {
  const projects = [
    {
      title: 'IOS-點餐系統',
      image: 'https://i.imgur.com/FFFwzKi.png',
      imageAlt: 'Report Photo',
      description: '這個是使用Object-C撰寫 針對飲料Json內容解析',
      badgeCaption: 'Report',
      links: {
        github: 'https://github.com/nk960106/Android_GoogleBooks'
      },
      accomplishments: [
        'Using Object-C',
        'JSON Parsing'
      ]
    },
    {
      title: 'Android-GoogleBooks',
      image: 'https://i.imgur.com/pM0ntVX.png',
      imageAlt: 'Report Photo',
      description: '這個是使用Java撰寫 串接Google API回傳Json解析',
      badgeCaption: 'Report',
      links: {
        github: 'https://github.com/nk960106/Android_GoogleBooks'
      },
      accomplishments: [
        'Using Java',
        'JSON Parsing'
      ]
    },
    {
      title: '報表分析網頁',
      image: 'https://i.imgur.com/GEs9nA0.png',
      imageAlt: 'Report Photo',
      description: '這個網頁是使用HTML、Bootstrap設計，並使用Angular在後端連接API抓取資料，抓完資料在分析完成後顯示出來結果',
      badgeCaption: 'Report',
      links: {
        github: 'https://github.com/nk960106'
      },
      accomplishments: [
        'Using HTML、Bootstrap',
        'Using Angular Connect API',
        'Display Data'
      ]
    },
    {
      title: '自動程式交易',
      image: 'https://i.imgur.com/9A3X0Zs.png',
      imageAlt: 'Automated program trading',
      description: '此專題較為複雜，先是使用Python去網頁抓去需要的資料進行分析儲存在資料庫，再使用C#作為使用者介面與卷商API進行溝通以及下單功能，上圖為C#的使用介面。',
      badgeCaption: 'Trading',
      links: {
        github: 'https://github.com/nk960106'
      },
      accomplishments: [
        'Using Python',
        'Using C# Connect API'
      ]
    }
    // {
    //   title: '股票管理網頁',
    //   image: 'https://i.imgur.com/XPu7ylQ.png',
    //   imageAlt: 'Stock Manage Web',
    //   description: '這個網頁使用HTML與Bootstrap製作頁面基底，在使用Javascript與MySQL進行後端資料儲存與刪除，並且曾設置在學校伺服器中進行實際上展示。',
    //   badgeCaption: 'Stock',
    //   links: {
    //     github: 'https://github.com/nk960106'
    //   },
    //   accomplishments: [
    //     'Using HTML、Bootstrap',
    //     'Using Javascript、MySQL'
    //   ]
    // },
    // {
    //   title: '機車維修網頁',
    //   image: 'https://i.imgur.com/e68gk5e.png',
    //   imageAlt: 'Motorcycle Manage Web',
    //   description: '這個網頁使用HTML製作，後端使用PHP進行與資料庫的溝通。',
    //   badgeCaption: 'Motor',
    //   links: {
    //     github: 'https://github.com/nk960106'
    //   },
    //   accomplishments: [
    //     'Using HTML、PHP',
    //   ]
    // }
  ]

  const blogPosts = [
    {
      name: '技能練習路程',
      link: 'https://github.com/nk960106',
      image: 'img/IMG_0420.JPG'
    }
  ]

  const nav = document.querySelector('nav')
  const navHeight = nav.offsetHeight
  const skillOffsetHeight = document.getElementById('skill').offsetTop
  const projectOffsetHeight = document.getElementById('project').offsetTop
  const actionBtn = document.querySelector('.fixed-action-btn a:first-of-type')
  let skillsAnimated = false
  let aboutCardPlaced = false
  let projectPlaced = false
  let learnMoreAnimated = false

  // Handle animation end
  function handleAnimationEnd(element, animations) {
    element.classList.remove(...animations)
  }

  // Handle navbar animation
  function animateNav() {
    if (window.pageYOffset > navHeight) { return nav.classList.add('blue-grey', 'lighten-3', 'shadow') }
    nav.classList.remove('blue-grey', 'lighten-3', 'shadow')
  }
  // Handle floating action button
  function showFloatingActionButton() {
    if (window.pageYOffset > navHeight) { return actionBtn.classList.remove('scale-out') }
    actionBtn.classList.add('scale-out')
  }
  // Handle about cards animation
  function animateAboutCards() {
    if (window.pageYOffset <= navHeight) { return }
    // switch status to placed
    aboutCardPlaced = true
    // get about section
    const aboutSection = document.querySelector('.section-about .row')
    // generate html for each blog post
    blogPosts.forEach(post => {
      // place post
      aboutSection.innerHTML += `
        <div class="col s12 m6 xl3">
          <div class="card animated jackInTheBox slow">
            <a href="${post.link}" target="_blank">
              <div class="card-image" style="background-image: url(${post.image});">
                <div class="overlay"></div>
                <span class="card-title">
                  ${post.name}
                </span>
              </div>
            </a>
          </div>
        </div>
      `
    })
  }

  // Handle skill section animation
  function animateSkills() {
    if (window.pageYOffset + window.innerHeight <= skillOffsetHeight) { return }
    const firstSkillSection = document.getElementById('front-end-carousel-item')
    const animations = ['animated', 'slideInRight']
    skillsAnimated = true
    firstSkillSection.classList.add(...animations)
    firstSkillSection.addEventListener('animationend', () => handleAnimationEnd(event.target, animations))
  }

  // Handle learn more section animation
  function animateLearnMore() {
    const learnMoreOffsetHeight = document.getElementById('more-info').offsetTop
    if (window.pageYOffset + window.innerHeight <= learnMoreOffsetHeight) { return }
    const buttons = document.querySelectorAll('.learn-more-link a')
    const animations = ['animated', 'bounceIn', 'slow']
    learnMoreAnimated = true
    buttons.forEach(button => button.classList.add(...animations))
  }

  // Generate icons of link
  function getIconLinks(links) {
    let icons = ``
    if (links.github) {
      icons += `<a href=${links.github} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-github"></i></a>`
    }
    if (links.medium) {
      icons += `<a href=${links.medium} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i
                  class="fab fa-medium-m"></i></a>`
    }
    if (links.chrome) {
      icons += `<a href=${links.chrome}
                class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-chrome"></i></a>`
    }
    if (links.heroku) {
      icons += `<a href=${links.heroku}
                class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fas fa-home"></i></a>`
    }
    return icons
  }

  function getAccomplishments(accomplishments) {
    return accomplishments.map(point => `<li><i class="fas fa-caret-right"></i>${point}</li>`).join('')
  }

  // Place all projects into project section
  function placeProjects() {
    // place projects when scroll to project section
    if (window.pageYOffset + window.innerHeight <= projectOffsetHeight) { return }
    // get elements
    const projectSection = document.querySelector('.section-project .row')
    // switch status to placed
    projectPlaced = true
    // generate html for each project
    projects.forEach(project => {
      // Get all icon links
      const icons = getIconLinks(project.links)
      // Gather all accomplishments
      const accomplishments = getAccomplishments(project.accomplishments)

      projectSection.innerHTML += `
        <div class="col s12 m6 animated flipInX">
          <div class="card sticky-action hoverable">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="responsive-img activator" src=${project.image}
                alt="${project.image} Project Cover Photo">
              <div class="overlay"></div>
              <span class="card-title activator">${project.title}</span>
            </div>
            <div class="card-action">
              <p class="activator truncate"><span class="new badge right activator"
                data-badge-caption="${project.badgeCaption}"></span>${project.title}</p>
            </div>
            <div class="card-reveal">
              <div class="overlay"></div>
              <span class="card-title white-text">Accomplishments<i class="material-icons right">close</i></span>
              <ul class="white-text">
                ${accomplishments}
              </ul>
              <div id="card-reveal-icons">
                ${icons}
              </div>
            </div>
          </div>
        </div>
        <div class="col m5 hide-on-med-and-down offset-m1 valign-wrapper">
          <h5 class="blue-grey-text text-darken-1">${project.title}</h5>
          <span class="blue-grey-text text-lighten-1">${project.description}</span>
        </div>
      `
    })
  }

  window.addEventListener('scroll', () => {
    animateNav()
    // showFloatingActionButton()
    if (!aboutCardPlaced) { animateAboutCards() }
    if (!skillsAnimated) { animateSkills() }
    if (!projectPlaced) { placeProjects() }
    if (!learnMoreAnimated && projectPlaced) { animateLearnMore() }
  })
})()