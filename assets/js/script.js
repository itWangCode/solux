/**
 * Created by wangyang on 2019-04-18.
 * itwangyang@gmail.com
 * http://www.itwangyang.xyz
 */

// 解决placeholder不生效的问题
$(function () {
    if (!('placeholder' in document.createElement('input'))) {
        $('input[placeholder],textarea[placeholder]').each(function () {
            var that = $(this),
                text = that.attr('placeholder');
            if (that.val() === "") {
                that.val(text).addClass('placeholder');
            }
            that.focus(function () {
                if (that.val() === text) {
                    that.val("").removeClass('placeholder');
                }
            })
                .blur(function () {
                    if (that.val() === "") {
                        that.val(text).addClass('placeholder');
                    }
                })
                .closest('form').submit(function () {
                if (that.val() === text) {
                    that.val('');
                }
            });
        });
    }
});


/*点击增加样式，点击移除样式*/
// $(document).ready(function () {
//     $(".nav-item").click(function () {
//         $(".nav-item > a.nav-link").addClass("nav-link-hover-color").siblings().removeClass("nav-link-hover-color");
//     });
// });


//导航条滚动监听事件
// $(function () {
//     $(window).scroll(function () {
//         var scrollTop = $(this).scrollTop();//滚动高度
//         if (scrollTop > 100) {
//             alert("11");
//             $(".my-navbar").addClass("display-none");
//         }
//         if (scrollTop < 100) {
//             alert("22");
//             $(".my-navbar").removeClass("display-none")
//         }
//     });
// });






//这边浮动局域的监听事件
window.onscroll = function () {
    //变量t是滚动条滚动时，距离顶部的距离
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollup = document.getElementById('scrollup');
    //当滚动到距离顶部200px时，返回顶部的锚点显示
    if (t >= 200) {
        scrollup.style.display = "block";
    } else {          //恢复正常
        scrollup.style.display = "none";
    }
};

//手风琴实现
