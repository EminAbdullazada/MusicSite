
/**
 * TODO :  FOR HEADER
 */
let navigation = document.querySelector('#mobile_nav');
function open_nav(){
    navigation.classList.toggle('mobile_navigation_visible');
}
//
window.onscroll = function header_scrolled(){
    if(document.documentElement.scrollTop<50){
        document.querySelector('#head_cont').style.backgroundColor = 'rgba(130, 44, 44, 0.5)';
    }
    else{
        document.querySelector('#head_cont').style.backgroundColor = 'rgba(4, 0, 42, 0.9)'
    }
    // else{
    //     document.getElementById('head_cont').classList.toggle('head_container_scroll');
    // }
}
// MOBILE
// window.onscroll = function scroll_mob(){
//     if(document.documentElement.scrollTop<50){
//         document.querySelector('#head_mob').style.backgroundColor = 'transparent';
//     }
//     else{
//         document.querySelector('#head_mob').style.backgroundColor = 'rgba(4, 0, 42, 0.9)';
//     }
// }
// //////////////////////
/**
 *  TODO : FOR PLAYER
 */
let music_player = document.querySelector('#hidden');
function start(){
    music_player.classList.toggle('now_play_shown')
}
//
let music_player1 = document.querySelector('#hidden1');
function start1(){
    music_player1.classList.toggle('now_play_shown')
}
//
let music_player2 = document.querySelector('#hidden2');
function start2(){
    music_player2.classList.toggle('now_play_shown')
}
//
let music_player3 = document.querySelector('#hidden3');
function start3(){
    music_player3.classList.toggle('now_play_shown');
}
//
let music_player4 = document.querySelector('#hidden4');
function start4(){
    music_player4.classList.toggle('now_play_shown');
}



