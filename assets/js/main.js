const header = {
    init: function() {
        this.headerShow('.header__menu', '.header__bars i');
        this.headerScroll('.header');
        this.MenuClick('.header__menu', '.header__menu .list-items')
    },
    headerShow: function(nav, button) {
        let btn = document.querySelector(button);
        let layout = document.querySelector(nav);
        btn.addEventListener('click', function() {
            layout.classList.toggle('active');
        });
        document.querySelector('.wrapper').addEventListener('click', function() {

        })
    },
    headerScroll: function(header) {
        let seft = document.querySelector(header);
        let heightH = seft.offsetHeight;
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > heightH) {
                seft.classList.add('Hactive');
            } else seft.classList.remove('Hactive');
        })
    },
    MenuClick: function(wrap, btn) {
        let seft = document.querySelector(wrap);
        let btns = seft.querySelectorAll(btn);
        btns.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                btns.forEach(btn => btn.classList.remove('aactive'))
                btns[index].classList.add('aactive');
            })
        });
    }

}
header.init();

const plan = {
    init: function() {
        this.planClick('.left-button', 'a');
    },
    planClick: function(wrap, btn) {
        if (wrap == null)
            return false;
        let seft = document.querySelector(wrap);
        let btns = seft.querySelectorAll(btn);
        btns.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                btns.forEach(btn => btn.classList.remove('a-click'));
                btns[index].classList.add('a-click');
            })
        });
    }
}

plan.init();


const feedback = {
    init: function() {
        this.feedbackClick('.feedback', '.avata', '.feedback  .cardhide');
    },
    feedbackClick: function(wrap, btn, layout) {
        if (wrap == null)
            return false;
        let seft = document.querySelector(wrap);
        let btns = seft.querySelectorAll(btn);
        let layouts = seft.querySelectorAll(layout);
        btns.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                btns.forEach(btn => btn.classList.remove('active'));
                layouts.forEach(btn => btn.style.display = 'none');
                btns[index].classList.add('active');
                layouts[index].style.display = 'block';
            })
        });
    },

}
feedback.init();

const counter = {
    init: function() {

        this.Counter('.counter', '.count');
    },

    Counter: function(wrap, count) {
        if (wrap == null)
            return false;
        let seft = document.querySelector(wrap);
        let counts = seft.querySelectorAll(count);

        // Lặp 4 div count để lấy giá trị number của 4 div
        counts.forEach((item, i) => {
            item[i] = parseInt(item.innerHTML);
            var index = 0;

            // lặp liên tục với setInterval 0.1s 1 lần đến khi đúng điều kiện
            setInterval(function() {
                if (index < item[i]) {
                    index++;

                    // thêm number mới vào div
                    item.innerHTML = index;
                }
            }, 10)
        });

    }
}

counter.init();

const buttonback = {
    init: function() {
        this.headerScroll('.header', '.backtotop')

    },
    headerScroll: function(header, btn) {
        let Header = document.querySelector(header);
        let Btn = document.querySelector(btn);
        let heightH = Header.offsetHeight;
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > heightH) {
                Btn.classList.add('b__active');
            } else Btn.classList.remove('b__active');
        })
        Btn.addEventListener('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '300');
        })

    },


}
buttonback.init();