<template>
    <div class="desktop-main">
        <div class="starterPoint">
            <p class="starterPoint__text">
                <span>Выбор парковки не проблема! </span><br><br>
               Резервируй удобное место в 1 клик с нашим приложением!
            </p>
        </div>
        <div class="subbackground"></div>
    </div>
</template>

<style lang="scss" scoped>
    .desktop-main{
        position: relative;
        width: inherit;
        height: inherit;
        background: url("../../resource/img/home/desktop/car-background.png") no-repeat;
        background-size: cover;
        .starterPoint{
            .starterPoint__text{
                animation: show 3s ease-in-out;
                position: absolute;
                right: 3rem;
                top: 9rem;
                width: 40rem;
                font-family: DroidSans;
                font-style: normal;
                font-weight: normal;
                font-size: 2rem;
                line-height: 124.99%;
                text-align: right;
                color: #FFFFFF;
                text-shadow: 0rem .4rem .4rem rgba(0, 0, 0, 0.25);
                span{
                    font-size: 3rem;
                    font-weight: bold;
                }
                z-index: 2;
            }
            .starterPoint__background{
                margin-top: 1rem;
                position: absolute;
                right: 0;
                width: 38rem;
                height: 50rem;
            }
        }
        .subbackground{
            width: inherit;
            height: inherit;
            background: url("../../resource/img/home/desktop/text-background.svg") no-repeat;
            background-size: contain;
        }
    }

    @keyframes show {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

    @media (min-width: 1024px) and (max-width: 1279px) {
        .desktop-main{
            .starterPoint{
                .starterPoint__text{
                    position: absolute;
                    top: 14rem;
                    line-height: 145.99%;
                }
            }
            .subbackground{
                background-size: cover;
            }
        }
    }

    @media (min-width: 1280px) and (max-width: 1649px) {
        .desktop-main{
            .starterPoint{
                .starterPoint__text{
                    position: absolute;
                    top: 10rem;
                    line-height: 145.99%;
                }
            }
            .subbackground{
                background-size: cover;
            }
        }
    }

    @media (min-width: 1650px) and (max-width: 1800px) {
        .desktop-main{
            .starterPoint{
                .starterPoint__text{
                    right: 5rem;
                    top: 7rem;
                    width: 37rem;
                    font-size: 2.5rem;
                    line-height: 124.99%;
                    span{
                        font-size: 4rem;
                    }
                }
            }
        }
    }

    @media (min-width: 1801px) and (max-width: 2500px) {
        .desktop-main{
            .starterPoint{
                .starterPoint__text{
                    right: 5rem;
                    top: 7rem;
                    width: 37rem;
                    font-size: 2.5rem;
                    line-height: 124.99%;
                    span{
                        font-size: 4rem;
                    }
                }
            }
        }
    }

    @media (min-width: 2501px) and (max-width: 3799px) {
        .desktop-main{
            .starterPoint{
                .starterPoint__text{
                    right: 10rem;
                    top: 10rem;
                    width: 50rem;
                    font-size: 3rem;
                    line-height: 124.99%;
                    span{
                        font-size: 5rem;
                    }
                }
            }
        }
    }
</style>