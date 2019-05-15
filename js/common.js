/**
 * Created by wangyang on 2019-05-02.
 * itwangyang@gmail.com
 * http://www.itwangyang.xyz
 */



$(function () {
    //点击向上箭头，滚动到顶部

    $(document).on("click",".flyTop",function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    //滑动到400px的时候，显示滑动导航条
    var m_st, m_po = 400; //滚动到400像素时显示
    $(window).scroll(
        function () {
            m_st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            if (m_st > m_po) {
                $('.scrollup').slideDown();//
            } else {
                $('.scrollup').slideUp();//
            }
        });

    //点击切换导航
    $(".tab-myOrder li").click(function () {
        $(".tab-myOrder li").eq($(this).index()).addClass("cur-active").siblings().removeClass('cur-active');
        $(".tab-wang2").hide().eq($(this).index()).show();
        //另一种方法: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on');
    });


    //点击切换导航2
    $(".tab-designer li").click(function () {
        $(".tab-designer li").eq($(this).index()).addClass("cur1").siblings().removeClass('cur1');
        $(".tab-wang").hide().eq($(this).index()).show();
        //另一种方法: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on');
    });


    $(".tab-two li ").click(function () {
        $(".tab-two li ").eq($(this).index()).addClass("cur-two").siblings().removeClass('cur-two');
        $(".tab-wang-two").hide().eq($(this).index()).show();
        $(".tab-wang").hide()
        //另一种方法: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on');
    });


    /*点击增加样式，点击移除样式*/
    // $(document).on("click", ".nav-item", function () {
    //     console.log($(this).index());
    //     $(".nav-item").addClass("nav-link-hover-color").siblings().removeClass("nav-link-hover-color");
    // });


    //公用组件
    // $('#header').load('common/header.html');
    // $('#footer').load('common/footer.html');
    // $('#float').load('common/float.html');


    // // $(".lba").show();
    // // $(".guna.test-1").hide();
    // $(document).on("click",".handleBtn",function () {
    //     $(".lba").toggle(300);
    //     $(".guna.test-1").show();
    // });

        let browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if(browserWidth<767)
        {
            $(".lba").show();
            // $(".guna.test-1").hide();
            $('.list-item span').show();
            $(document).on("click",".handleBtn",function () {
                $(".lba").toggle(300);
                $(".guna.test-1").show();
            });
        }




    //传值高亮显示
    function changeHeaderActive(index) {
        var items = document.querySelectorAll(".head-item");
        for (let i = 0; i < items.length; i++) {
            if (i === index) {
                $(items[i]).addClass("nav-link-hover-color");
            } else {
                $(items[i]).removeClass("nav-link-hover-color");
            }
        }
    }
    changeHeaderActive();//调用这个方法，index这个是代码导航条的索引值

    new WOW().init();

//    搜索
  $(document).on('click','.my-search-btn',function () {
    console.log($(".myInput").val());
    if ($(".myInput").val() !=='' || null || undefined){
      window.location.href="search-product.html";
    }else {
      alert('请您输入内容')
    }
  });

  $(document).keyup(function(event){
    if(event.keyCode ==13){
      if ($(".myInput").focus()){
        window.location.href="search-product.html";
      }
    }
  });




});


// $('#header').load('common/header.html');
// $('#footer').load('common/footer.html');
// $('#float').load('common/float.html');

$(function(){
  $('#header').load('common/header.html',function(responseTxt,statusTxt,xhr){
    if(statusTxt=='success'){
      console.log('头部加载成功!')
    }
  });
  $('#footer').load('common/footer.html',function(responseTxt,statusTxt,xhr){
    if(statusTxt=='success'){
      //加载完毕前要处理的事件
      console.log('footer加载成功!')
    }
  });
  $('#float').load('common/float.html',function(responseTxt,statusTxt,xhr){
    if(statusTxt=='success'){
      //加载完毕前要处理的事件
      console.log('footer加载成功!')
    }
  });
});




  var m_st, m_po = 400; //滚动到400像素时显示
  $(window).scroll(
    function () {
      m_st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
      if (m_st > m_po) {
        $('.float-item').slideDown();//classNmae : tips
      }else{
        $('.float-item').slideUp();//classNmae : tips
      }
    });
