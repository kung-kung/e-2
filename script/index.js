$(function(){
    $(".main>li").hover(function(){
        $(this).find(".sub").stop().slideDown()
        $(this).children("a").css("border-radius","25px 25px 0 0")
    },function(){
        $(".sub").stop().slideUp()
        $(".main>li>a").css("border-radius","25px")
    })
    var x = 0, y = -600, z = 0
    setInterval(function(){
        z = x * y
        $(".m").animate({top:z},1000)
        x = ( x + 1 ) % 3
    },2000)
    $(".no_txt ul li").eq(0).click(function(){
        $(".pop_bg").show()
    })
    $(".close").click(function(){
        $(".pop_bg").hide()
    })
})