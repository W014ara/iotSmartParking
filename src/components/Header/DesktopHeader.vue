<template>
    <div class="content">
        <img src="../../resource/img/header/desktopLogo.svg" alt="" class="logo">
        <nav class="navigation">
            <router-link to="/place" class="place">
                Свободные места
            </router-link>
            <router-link to="/status" class="status">
                Статус бронирования
            </router-link>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    .content{
        position: fixed;
        display:flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        height: 8rem;
        background: url("../../resource/img/header/desktopBackground.png") no-repeat;
        background-size: contain;
        .logo{
            margin-left: 9rem;
            width: 42rem;
            height: 8rem;
        }
        .navigation{
            margin-top: 3rem;
            margin-left: 72rem;
            width: 34rem;
            height: 2rem;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            a{
                font-family: DroidSans;
                font-style: normal;
                font-weight: normal;
                font-size: 1.5rem;
                line-height: 69.49%;
                text-decoration: none;
                color: white;
                transition: .2s;
                &:active{
                    color:white;
                }
                &:hover{
                    border-bottom: .3rem solid white;
                }
            }
        }
    }
</style>