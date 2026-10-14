

document.addEventListener("DOMContentLoaded", (event) => {

    gsap.registerPlugin(ScrollTrigger);

    // gsap set 
    gsap.set(".banner-img-wpr", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    });

    // banner timeline code 

    const tl = gsap.timeline({
        delay: 0.5
    });

    tl.to(".videoplay", {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out"
    }, 0);

    tl.to(".loader", {
        opacity: 1,
        ease: "power1.inOut"
    }, 0)

    tl.to(".loader-bar", {
        width: "100%",
        duration: 2,
        ease: "power1.inOut"
    }, 0);

    tl.to(".loading-screen", {
        opacity: 0,
        delay: 0.2,
        duration: 0.5,
        ease: "power1.inOut",
        // onComplete: () => {
        //     document.querySelector(".loading-screen").style.display = "none";
        // }
    });

    tl.to(".main-sec", {
        opacity: 1,
        delay: 0.2,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
            document.querySelector(".loading-screen").style.display = "none";
            // document.querySelector("body").classList.remove('scroll-off');
        }
    });

    tl.to(".top-eachpart", {
        y: 0,
        opacity: 1,
        duration: 0.5
    });

    tl.call(() => {
        // Start confetti animation
        const canvas = document.getElementById("confetti-canvas");

        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let confettiParticles = [];

        const colors = [
            "#FF6B6B", "#F59E0B", "#20B2AA",
            "#3B82F6", "#EC4899", "#8B5CF6"
        ];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        class ConfettiPiece {
            constructor(x, y, isBurst = false) {
                this.x = x !== undefined ? x : Math.random() * canvas.width;
                this.y = y !== undefined ? y : -10;
                this.size = Math.random() * 8 + 6;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.speedX = isBurst
                    ? (Math.random() - 0.5) * 14
                    : (Math.random() - 0.5) * 3;
                this.speedY = isBurst
                    ? (Math.random() * -12) - 3
                    : Math.random() * 3 + 2;
                this.rotation = Math.random() * 360;
                this.rotationSpeed = (Math.random() - 0.5) * 8;
                this.opacity = 1;
                this.isBurst = isBurst;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.rotation += this.rotationSpeed;

                if (this.isBurst) {
                    this.speedY += 0.25;
                    this.opacity -= 0.01;
                }

                if (!this.isBurst && this.y > canvas.height) {
                    this.y = -10;
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                if (this.opacity <= 0) return;

                ctx.save();
                ctx.globalAlpha = Math.max(0, this.opacity);
                ctx.translate(this.x, this.y);
                ctx.rotate((this.rotation * Math.PI) / 180);
                ctx.fillStyle = this.color;
                ctx.fillRect(
                    -this.size / 2,
                    -this.size / 2,
                    this.size,
                    this.size * 0.7
                );
                ctx.restore();
            }
        }

        // Initial falling confetti
        for (let i = 0; i < 40; i++) {
            confettiParticles.push(new ConfettiPiece());
        }

        function createConfettiBurst(x, y, count = 60) {
            for (let i = 0; i < count; i++) {
                confettiParticles.push(new ConfettiPiece(x, y, true));
            }
        }

        // Trigger a burst from the center of the screen
        createConfettiBurst(
            canvas.width / 2,
            canvas.height / 2,
            60
        );

        function animateConfetti() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            confettiParticles = confettiParticles.filter(
                p => p.opacity > 0
            );

            confettiParticles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animateConfetti);
        }

        animateConfetti();
    });

    tl.from(".special-txt", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "sine.inOut"
    });

    tl.from(".hey-ketie-cap", {
        y: -90,
        rotate: 50,
        duration: 1,
        ease: "sine.inOut",
    });

    tl.from(".h-one-title", {
        y: 50,
        opacity: 0,
        ease: "sine.inOut"
    });

    tl.from(".hone-icon", {
        opacity: 0,
        scale: 0,
        stagger: 1,
        duration: 1,
        ease: "elastic.out(1,0.3)",
    }, "<");

    tl.from(".may-txt", {
        opacity: 0,
        ease: "sine.inOut"
    });

    tl.from(".from-txt", {
        opacity: 0,
        ease: "sine.inOut"
    });

    tl.to(".banner-img-wpr", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "sine.inOut"
    });

    tl.from(".banner-img-wpr img", {
        scale: 1.5,
        duration: 1,
        ease: "sine.inOut",
        onComplete: () => {
            // document.querySelector(".loading-screen").style.display = "none";
            document.querySelector("body").classList.remove('scroll-off');
        }
    }, "<");


    tl.to(".baloons", {
        y: "-140vh",
        opacity: 1,
        stagger: 1,
        duration: 6,
        ease: "power1.out"
    });

    tl.to(".baloons", {
        rotation: 35,
        duration: 1,
        ease: "sine.inOut",
        repeat: 9,
        yoyo: true
    }, "<");






    let tll = gsap.timeline();

    ScrollTrigger.create({
        animation: tll,
        trigger: ".section-two",
        start: "top 50%",
        // markers: true

    });

    tll
        .from(".make-title", {
            y: 80,
            opacity: 0,
        })

        .from(".tap-txt", {
            y: 80,
            opacity: 0,
        })

        .from(".figure-cake", {

            opacity: 0,
        })

        .from(".btn-wpr", {
            y: 80,
            opacity: 0,
        })

        .from(".section-two-baloon", {
            y: "90vh",
            duration: 5,
            ease: "power1.out",
            onComplete: function () {
                document.querySelector(".section-two-baloon").classList.add("bouncing");
            }
        }, "<");


    let note = gsap.timeline();

    ScrollTrigger.create({
        animation: note,
        trigger: ".section-three",
        start: "top 50%",
        // markers: true

    });

    note
        .from(".personal-txt", {
            y: 80,
            opacity: 0,
        })

        .from(".note-img", {
            opacity: 0,
            scale: 0
        })

        .from(".dear-txt", {
            y: 80,
            opacity: 0,
        })

        .from(".personal-msg-sec>p", {
            y: 80,
            opacity: 0,
        })

        .from(".lft-ft-txt", {
            y: 80,
            opacity: 0,
        })

        .from(".with-joy", {
            y: 80,
            opacity: 0,
        })

        .from(".listener_slider_outer-main", {
            
            opacity: 0
        })



});


const blowBtn = document.getElementById('blow-candles-btn');
// const feedback = document.getElementById('wish-feedback');
const flames = document.querySelectorAll('.fire-each');
let candlesBlown = false;


blowBtn.addEventListener('click', (e) => {

    // Start confetti animation
    const canvas = document.getElementById("confetti-canvas");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let confettiParticles = [];

    const colors = [
        "#FF6B6B", "#F59E0B", "#20B2AA",
        "#3B82F6", "#EC4899", "#8B5CF6"
    ];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class ConfettiPiece {
        constructor(x, y, isBurst = false) {
            this.x = x !== undefined ? x : Math.random() * canvas.width;
            this.y = y !== undefined ? y : -10;
            this.size = Math.random() * 8 + 6;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.speedX = isBurst
                ? (Math.random() - 0.5) * 14
                : (Math.random() - 0.5) * 3;
            this.speedY = isBurst
                ? (Math.random() * -12) - 3
                : Math.random() * 3 + 2;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = (Math.random() - 0.5) * 8;
            this.opacity = 1;
            this.isBurst = isBurst;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.rotation += this.rotationSpeed;

            if (this.isBurst) {
                this.speedY += 0.25;
                this.opacity -= 0.01;
            }

            if (!this.isBurst && this.y > canvas.height) {
                this.y = -10;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            if (this.opacity <= 0) return;

            ctx.save();
            ctx.globalAlpha = Math.max(0, this.opacity);
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(
                -this.size / 2,
                -this.size / 2,
                this.size,
                this.size * 0.7
            );
            ctx.restore();
        }
    }

    // Initial falling confetti
    for (let i = 0; i < 40; i++) {
        confettiParticles.push(new ConfettiPiece());
    }

    function createConfettiBurst(x, y, count = 60) {
        for (let i = 0; i < count; i++) {
            confettiParticles.push(new ConfettiPiece(x, y, true));
        }
    }

    // Trigger a burst from the center of the screen
    // createConfettiBurst(
    //     canvas.width / 2,
    //     canvas.height / 2,
    //     60
    // );

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confettiParticles = confettiParticles.filter(
            p => p.opacity > 0
        );

        confettiParticles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animateConfetti);
    }

    animateConfetti();

    const rect = blowBtn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top;

    if (!candlesBlown) {
        // Blow out flames
        flames.forEach(flame => flame.classList.add('flame-extinguished'));
        blowBtn.textContent = '🕯️ Relight Candles';
        // feedback.classList.remove('opacity-0');
        candlesBlown = true;

        // Trigger celebratory confetti burst
        createConfettiBurst(centerX, centerY, 90);
        createConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.4, 70);
    } else {
        // Relight flames
        flames.forEach(flame => flame.classList.remove('flame-extinguished'));
        blowBtn.textContent = '🎂 Blow Out The Candles!';
        // feedback.classList.add('opacity-0');
        candlesBlown = false;
    }
});


jQuery(document).ready(function ($) {
    if ($(".listener_slider").length) {
        new Splide('.listener_slider', {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 3,
            gap: 15,
            pagination: false,
            arrows: false,
            autoScroll: {
                speed: 0.5,
                pauseOnHover: false,
                pauseOnFocus: false

            },

        }).mount(window.splide.Extensions);
    }

    if ($(".listener_slider-rev").length) {
        new Splide(".listener_slider-rev", {
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: 3,
            gap: 15,
            pagination: false,
            arrows: false,
            autoScroll: {
                speed: -0.5,
                pauseOnHover: false,
                pauseOnFocus: false
            }
        }).mount(window.splide.Extensions);
    }

})
