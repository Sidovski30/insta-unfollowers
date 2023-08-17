let elReady = (selector) => {
  return new Promise((resolve, reject) => {
    let el = document.querySelector(selector);
    if (el) {
      resolve(el); 
      return
    }
    new MutationObserver((mutationRecords, observer) => {
      Array.from(document.querySelectorAll(selector)).forEach((element) => {
        resolve(element);
        observer.disconnect();
      });
    })
      .observe(document.documentElement, {
        childList: true,
        subtree: true
      });
  });
}
let following = ''
let followers = ''

const followersNum = +document.querySelector("div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x1gryazu.xh8yej3.x10o80wk.x14k21rp.x17snn68.x6osk4m.x1porb0y > div:nth-child(2) > section > main > div > header > section > ul > li:nth-child(2) > a > span > span").textContent.replace(/\s/g, '')
const followersOpen = document.querySelector("div.x9f619.x1n2onr6.x1ja2u2z header > section > ul > li:nth-child(2) > a")

const followingNum = +document.querySelector("div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x1gryazu.xh8yej3.x10o80wk.x14k21rp.x17snn68.x6osk4m.x1porb0y > div:nth-child(2) > section > main > div > header > section > ul > li:nth-child(3) > a > span > span").textContent.replace(/\s/g, '')
const followingOpen = document.querySelector("div.x9f619.x1n2onr6.x1ja2u2z header > section > ul > li:nth-child(3) > a")

const closeSelector = 'div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div.x1qjc9v5.x78zum5.xdt5ytf > div > div._ac7b._ac7d > div > button'
const scrollBlock = 'div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div._aano'
let scrolledPeople = '.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div._aano > div:nth-child(1) > div > div > div > div > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.x1iyjqo2.xs83m0k.xeuugli.x1qughib.x6s0dn4.x1a02dak.x1q0g3np.xdl72j9 > div > div > div > div > div > a > div > div > span'

                     
  const followingStart = (followingNum, followingOpen, following) => {
    folExtract(followingNum, followingOpen, following, null)
  }
  const showResult = () => {
    let followersNames = []
    let followingsNames = []
    followers.forEach(i => followersNames.push(i.innerHTML))
    following.forEach(i => followingsNames.push(i.innerHTML))
    let res = followingsNames.filter(i => !followersNames.includes(i))
    console.log(res)
}

  let folExtract = (follNum, follOpen, foll, nextFunc) => {
    follOpen.click()
    elReady(scrollBlock).then(el => {
    const r = document.querySelector(scrollBlock)
    const start = () => {
        if(foll === 'followers') {
            followers = document.querySelectorAll(scrolledPeople)
            if(followers.length < (follNum)){
              console.log('followers: ', followers.length)
              let timeOut = setTimeout(() => {
                
                r.scrollTo(0, r.scrollHeight);
                followers = document.querySelectorAll(scrolledPeople)
              start();
            }, 2000);  
            } else {
              console.log('done', followers.length)
              document.querySelector(closeSelector).click()
              nextFunc(followingNum, followingOpen, 'following')
            }
        }
        if(foll === 'following') {
            following = document.querySelectorAll(scrolledPeople)
            if(following.length < (follNum)){
              console.log('following :', following.length)
              let timeOut = setTimeout(() => {
                  
                r.scrollTo(0, r.scrollHeight);
                following = document.querySelectorAll(scrolledPeople)
              start();
            }, 2000);  
            } else {
              console.log('done', following.length)
              document.querySelector(closeSelector).click()
              showResult()
            }   
        }
    }
    start();
    })
  }
folExtract(followersNum, followersOpen, 'followers', followingStart)
