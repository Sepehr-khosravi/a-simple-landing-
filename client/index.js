document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const content = document.querySelector('.master');
        const loading = document.getElementById('loading');
        content.style.opacity = '1';
        content.addEventListener('transitionend', function () {
            loading.style.opacity = '0';
            loading.addEventListener('transitionend', function () {
                loading.style.display = 'none';
            }, { once: true });

        }, { once: true });
    }, 3000);
});
let bodyDom = document.querySelector('.master');
const divError = document.querySelector('.divError')
if (screen.width < '320') {
    navigator.vibrate(1000)
    let contentTextError = document.createTextNode('!دیوایس شما قادر به ورود به وبسایت پیکسل پالس نیست لطفا با دیوایسی دیگر اقدام کنید');
    let textError = document.createElement('p');
    textError.setAttribute('class', 'errorTextScreen')
    textError.appendChild(contentTextError);
    bodyDom.style.cssText = 'display : none ; opacity : 0% ;'
    divError.appendChild(textError)
    alert('!دیوایس شما قادر به ورود به وبسایت پیکسل پالس نیست لطفا با دیوایسی دیگر اقدام کنید')
}
else {
    setTimeout(() => {
        bodyDom.style.cssText = 'opacity : 100%;';
    }, 1000)
}
const buttonThem = document.querySelector('.buttonThem');
const iconButtonThem = document.getElementById('iconButtonThem');
const nav = document.querySelector('.nav nav');
const liUlfirst = document.querySelectorAll('.hoverLi');
const bodyWeb = document.body;
const buttonLogin = document.getElementById('buttonLogin');
const buttonThem2 = document.getElementById('buttonSidebarThem');
const iconButton2 = document.getElementById('iconButtonThem2');
let totalThem = 0;
const navSide = document.querySelector('.navSide');
const buttonLogin2 = document.getElementById('buttonLogin2');
const buttonSubmitWeb = document.getElementById('buttonSubmit');

const allButton = document.querySelectorAll('button');

const aStyle = document.querySelectorAll('a');

const footer = document.querySelector('footer');


const divCall = document.querySelector('.divCall')

const iDivCall = document.querySelectorAll('#divCallI');

const overlayColorText = document.querySelectorAll('.pWidthLow');

if (screen.width > '1100') {
    overlayColorText.forEach(text => {
        text.style.color = 'white';
    })
}



buttonThem.addEventListener('click', function () {
    if (totalThem % 2 === 0 || totalThem === 0) {

        nightThem();
        totalThem++;
    } else if (totalThem % 2 === 1) {
        dayThem();
        totalThem++;
    }
});
buttonThem2.addEventListener('click', function () {
    if (totalThem % 2 === 0 || totalThem === 0) {
        nightThem();
        totalThem++;
    } else if (totalThem % 2 === 1) {
        dayThem();
        totalThem++;
    }
})

function nightThem() {
    if (screen.width <= '1100') {
        overlayColorText.forEach(text => {
            text.style.color = 'white';
        })
    }
    iDivCall.forEach(i => {
        i.style.color = 'black'
    })
    divCall.style.color = 'black';
    footer.style.backgroundColor = 'white';
    buttonSubmitWeb.style.cssText = 'border-color : white; color : white ;'
    bodyWeb.style.cssText = 'background-color: #25282e; color: white; border-color : white;';
    iconButtonThem.style.cssText = 'color: white;';
    iconButton2.style.cssText = 'color: white;';
    iconButtonThem.className = 'ri-sun-fill';
    aStyle.forEach(a => {
        a.style.color = 'white'
    })
    allButton.forEach(item => {
        item.style.boxShadow = '2px 2px 16px white'
        item.addEventListener('mouseover', function () {
            item.style.boxShadow = 'none';
        })
        item.addEventListener('mouseleave', function () {
            item.style.boxShadow = '2px 2px 16px white'
        })

    })
    iconButton2.className = 'ri-sun-fill';
    localStorage.setItem('theme', 'night');
    liUlfirst.forEach(item => {
        item.style.cssText = 'border-color: white;';
    });
    nav.style.cssText = 'border-color: white;';
    buttonThem.style.cssText = 'border-color: white; box-shadow: 0px 0px 13px white;';
    buttonThem2.style.cssText = 'border-color: white; box-shadow: 0px 0px 13px white;';
    buttonLogin.style.cssText = 'color: white; border-color: white; ';
    buttonLogin2.style.cssText = 'color: white; border-color: white; '
    navSide.style.cssText = 'background-color: #25282e;'
}

function dayThem() {
    if (screen.width <= '1100') {
        overlayColorText.forEach(text => {
            text.style.color = 'black';
        })
    }
    footer.style.backgroundColor = '#25282e';
    buttonSubmitWeb.style.cssText = 'border-color : black; color : black ;'
    bodyWeb.style.cssText = 'background-color: white; color: black; border-color : black;';
    iconButtonThem.style.cssText = 'color: black;';
    aStyle.forEach(a => {
        a.style.color = 'black';
    })
    iconButtonThem.className = 'ri-moon-line';
    allButton.forEach(item => {
        item.style.boxShadow = '2px 2px 16px black'
        item.addEventListener('mouseover', function () {
            item.style.boxShadow = 'none';
        })
        item.addEventListener('mouseleave', function () {
            item.style.boxShadow = '2px 2px 16px black'
        })

    })
    iconButton2.style.cssText = 'color: black;';
    iconButton2.className = 'ri-moon-line';
    localStorage.setItem('theme', 'day');
    liUlfirst.forEach(item => {
        item.style.cssText = 'border-color: black;';
    });
    nav.style.cssText = 'border-color: black;';
    buttonThem.style.cssText = 'border-color: black; box-shadow: 0px 0px 13px black;';
    buttonThem2.style.cssText = 'border-color: black; box-shadow: 0px 0px 13px black;';
    buttonLogin.style.cssText = 'color: black; border-color: black; box-shadow: 0px 0px 13px black;';
    buttonLogin2.style.cssText = 'color: black; border-color: black; box-shadow: 0px 0px 13px black;'
    navSide.style.cssText = 'background-color: white;'
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'night') {
        nightThem();
        if (screen.width <= '1100') {
            overlayColorText.forEach(text => {
                text.style.color = 'white';
            })
        }
        else if (screen.width > '1100') {
            overlayColorText.forEach(text => {
                text.style.color = 'white';
            })
        }
        totalThem = 1;
    } else {
        dayThem();
        if (screen.width <= '1100') {
            overlayColorText.forEach(text => {
                text.style.color = 'black';
            })
        }
        else if (screen.width > '1100') {
            overlayColorText.forEach(text => {
                text.style.color = 'white';
            })
        }
        totalThem = 2;
        if (!savedTheme) {
            localStorage.setItem('theme', 'day');
        }
    }
}

document.addEventListener('DOMContentLoaded', loadTheme);

let previousWidth = window.innerWidth;

window.addEventListener('resize', function () {
    clearTimeout(window.refreshTimeout);

    window.refreshTimeout = setTimeout(function () {
        if (window.innerWidth !== previousWidth) {
            location.reload();
            previousWidth = window.innerWidth;
        }
    }, 500);
});

const article = document.querySelector('article');

setTimeout(() => {
    article.style.cssText = 'opacity : 100% ;';
}, 1500)

const Side = document.getElementById('sidebar');
const menuButton = document.getElementById('liMenu');
const closeButtonSide = document.getElementById('closeMenu');
const outSide = document.querySelector('.outSide');
const tagBody = document.querySelector('body');
const tagHtml = document.querySelector('html');

menuButton.addEventListener('click', function () {
    showSide();
});

closeButtonSide.addEventListener('click', function () {
    closeSide();
})

function showSide() {
    tagBody.style.overflowY = 'hidden';
    tagHtml.style.overflowY = 'hidden';
    Side.style.left = '30%';
    outSide.style.right = '70%';
}

function closeSide() {
    tagBody.style.overflowY = 'auto';
    tagHtml.style.overflowY = 'auto';
    Side.style.left = '100%';
    outSide.style.right = '100%';
}
const imageArticle = document.getElementById('imageAn');

const arrayAnimationImage = [imageArticle];
let totalArray = 1;



arrayAnimationImage.forEach(element => {
    setInterval(() => {
        element.style.transform = 'translateY(35px)';
        setTimeout(() => {
            element.style.transform = 'translateY(-35px)';
        }, 1000)

    }, 2250)
})

const iconClose = document.querySelectorAll('#ri-close-line');


iconClose.forEach(icon => {
    icon.style.backgroundColor = 'red';
});

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    if (answer.style.display === "block") {
        answer.style.display = "none";
        arrow.classList.remove('up');
        arrow.classList.add('down');
    } else {
        answer.style.display = "block";
        arrow.classList.remove('down');
        arrow.classList.add('up');
    }
}

const divRule = document.querySelector('.rule');

function showRule() {
    divRule.style.cssText = 'top : 0% ; z-index : 1200;';
    bodyDom.style.cssText = 'opacity : 0%;';
    closeSide();
}
function hideRule() {
    divRule.style.cssText = 'top : 200% ;';
    bodyDom.style.cssText = 'opacity : 100%;';
    closeSide();
}

const featureScroll = document.querySelectorAll('.featureScrol');

const feature = document.querySelector('.feature');

const featureWeb = document.querySelector('.fetureScrollWeb')

featureScroll.forEach(button => {
    button.addEventListener('click', function () {
        if (screen.width <= '1100') {
            feature.scrollIntoView({ behavior: "smooth" });
        }
        else {
            featureWeb.scrollIntoView({ behavior: "smooth" })
        }
        closeSide()
    })
})

const buttonScroll = document.querySelectorAll('.buttonWeb')

const webScroll = document.querySelector('.web');

buttonScroll.forEach(button => {
    button.addEventListener('click', function () {
        webScroll.scrollIntoView({ behavior: "smooth" });
        closeSide();
    })
})

const buttonPrice = document.querySelectorAll('#priceItem')

const priceItem = document.querySelector('.titlePrice');

buttonPrice.forEach(button => {
    button.addEventListener('click', function () {
        priceItem.scrollIntoView({ behavior: "smooth" });
        closeSide();
    });
})

const buttonContact = document.querySelectorAll('#contact');

const contact = document.querySelector('.call');

buttonContact.forEach(button => {
    button.addEventListener('click', function () {
        contact.scrollIntoView({ behavior: "smooth" });
        closeSide();
    })
});

const divOrder = document.querySelector('.order');

function showOrder() {
    bodyDom.style.opacity = '0%'
    document.body.style.overflowY = 'hidden';
    document.querySelector('html').style.overflowY = 'hidden';
    divOrder.style.top = '0%';
    closeSide();
}
function hideOrder() {
    bodyDom.style.opacity = '100%'
    closeSide();
    document.body.style.overflowY = 'auto';
    document.querySelector('html').style.overflowY = 'auto';
    divOrder.style.top = '200%'
}

const buttonPlan1 = document.querySelector('#plan1B');
const buttonPlan2 = document.querySelector('#plan2B');
const buttonPlan3 = document.querySelector('#plan3B');

const plan1 = document.querySelector('#plan1');
const plan2 = document.querySelector('#plan2');
const plan3 = document.querySelector('#plan3');

buttonPlan1.addEventListener('click', function () {
    plan1.checked = true;
    showOrder();
});

buttonPlan2.addEventListener('click', function () {
    plan2.checked = true;
    showOrder();
});

buttonPlan3.addEventListener('click', function () {
    plan3.checked = true;
    showOrder();
});

const orderIn = document.querySelectorAll('#orderIn');

orderIn.forEach(ord => {
    ord.addEventListener('click', function () {
        plan1.checked = false;
        plan2.checked = false;
        plan3.checked = false;
    })
})

const buttonOrderIn = document.querySelector('#buttonSubmit');

buttonOrderIn.addEventListener('click', function () {
    plan1.checked = false;
    plan2.checked = false;
    plan3.checked = false;
})

const buttonSubmitOrder = document.querySelector('.buttonOrder');

const inputName = document.querySelector('#name');

const inputPhone = document.querySelector('#phone');

const inputText = document.querySelector('#description');

let arrayOrderItem = [inputName, inputPhone, plan1, plan2, plan3, inputText]

buttonSubmitOrder.addEventListener('click', function () {
    arrayOrderItem.forEach(item => {
        if (item.value == false) {
            navigator.vibrate(1000);
        }
    })
})