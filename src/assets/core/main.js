
// 一个数组存放所有颜色对象
var colors = [
    {name:"团团团",        line1bg:"#f2e849",  line1txt:"#2757da",     line2bg:"#2757da",    line2txt:"#ffffff"},
    {name:"7+7",        line1bg:"#00805f",  line1txt:"#ffffff",     line2bg:"#febd00",    line2txt:"#e70000"},
    {name:"不焦绿",     line1bg:"#3bb778",    line1txt:"#ffffff",   line2bg:"#febd00",     line2txt:"#3bb778"},
    {name:"橙团啦",     line1bg:"#ff8d44",    line1txt:"#ffffff",    line2bg:"#ffeacf",     line2txt:"#ff8f46"},
    {name:"川沙妲己",   line1bg:"#ffa09e",    line1txt:"#ffffff",    line2bg:"#ffe9d4",     line2txt:"#8d76ec"},
    {name:"大眼仔",     line1bg:"#de0000",    line1txt:"#ffffff",    line2bg:"#fbe06d",     line2txt:"#de0000"},
    {name:"顶流男神",   line1bg:"#3ab54a",    line1txt:"#ffffff",    line2bg:"#dbff9b",     line2txt:"#ff5a2a"},
    {name:"番茄炒蛋",   line1bg:"#ff6046",    line1txt:"#ffffff",    line2bg:"#ffee82",     line2txt:"#ff6046"},
    {name:"隔壁大叔",   line1bg:"#ffbe00",    line1txt:"#ffffff",    line2bg:"#000000",     line2txt:"#ffbe00"},
    {name:"过气顶流",   line1bg:"#ac8efe",    line1txt:"#ffffff",    line2bg:"#fffcc5",     line2txt:"#ac8efe"},
    {name:"开封菜",     line1bg:"#f00a24",    line1txt:"#ffffff",    line2bg:"#dddddd",     line2txt:"#000000"},
    {name:"可乐自由",   line1bg:"#ff3e3c",    line1txt:"#ffffff",    line2bg:"#391300",     line2txt:"#ff3d3b"},
    {name:"萝卜达咩",   line1bg:"#3ab54a",    line1txt:"#ffffff",    line2bg:"#ff671b",     line2txt:"#fef200"},
    {name:"前男友",     line1bg:"#2d8ff2",    line1txt:"#ffffff",    line2bg:"#c3f5ff",     line2txt:"#005bbd"},
    {name:"去海边",     line1bg:"#6b94e3",    line1txt:"#ffffff",    line2bg:"#ffe9c4",     line2txt:"#6b94e3"},
    {name:"上帝预言",   line1bg:"#ed1c24",    line1txt:"#ffffff",    line2bg:"#ffd900",     line2txt:"#000000"},
    {name:"睡衣神颜",   line1bg:"#6b76e2",    line1txt:"#ffffff",    line2bg:"#ffe3ff",     line2txt:"#6b76e2"},
    {name:"淘走了",     line1bg:"#ff4900",    line1txt:"#ffffff",    line2bg:"#ffcf2e",     line2txt:"#ff5303"},
    {name:"贴心备胎",   line1bg:"#153273",    line1txt:"#ffffff",    line2bg:"#e1ffb9",     line2txt:"#143273"},
    {name:"外籍男友",   line1bg:"#143273",    line1txt:"#ffffff",    line2bg:"#71e5ce",     line2txt:"#153273"},
    {name:"我想吃菜",   line1bg:"#00a54f",    line1txt:"#ffffff",    line2bg:"#eaff62",     line2txt:"#00a54f"},
    {name:"我想吃肉",   line1bg:"#e05366",    line1txt:"#ffffff",    line2bg:"#ffd4db",     line2txt:"#e05366"},
    {name:"想喝咖啡",   line1bg:"#006f44",    line1txt:"#ffffff",    line2bg:"#d9b38c",     line2txt:"#006f44"},
    {name:"想喝奶茶",   line1bg:"#d98c3d",    line1txt:"#ffffff",    line2bg:"#e2d8bd",     line2txt:"#5f3913"},
    {name:"小区走走",   line1bg:"#24569f",    line1txt:"#ffffff",    line2bg:"#e6e3c2",     line2txt:"#c23218"},
    {name:"心无波蓝",   line1bg:"#8493ca",    line1txt:"#ffffff",    line2bg:"#dadada",     line2txt:"#8392c9"},
    {name:"鸳鸯锅",     line1bg:"#ed1c24",    line1txt:"#ffffff",    line2bg:"#ffe1bf",     line2txt:"#ed1d24"},
    {name:"宅家全妆",   line1bg:"#fe54aa",    line1txt:"#ffffff",    line2bg:"#ffd4e8",     line2txt:"#fe54aa"},
    {name:"紫想粗门",   line1bg:"#862ac9",    line1txt:"#ffffff",    line2bg:"#e6c2ff",     line2txt:"#862ac9"}
]

var currColor = colors[0];

// 根据colors生成列表
function iniColorBalls(){
    for(let i=0;i<colors.length;i++){
        let objColor = colors[i];
        $(".tempList").html($(".tempList").html()+"<li data-color-idx = "+i+" class='colorSelector'>"
        +   "<div class='colorBall'>"
        +   "   <div class='cbLine1' style='background-color:"+objColor.line1bg+"'></div>"
        +   "   <div class='cbLine2' style='background-color:"+objColor.line2bg+"'></div>"
        +   "</div>"
        +   "<div class='colorName'>"+objColor.name+"</div>"
        +"</li>");
    }

    $(".colorSelector").click(onColorSelect);
}

function onColorSelect(e){
    let idxColor = $(e.currentTarget).attr('data-color-idx');
    clearSelect();
    $(e.currentTarget).addClass('selected');
    setAvatar(colors[idxColor]);

    /**CNZZ CLICK */
    const {aplus_queue} = window;
    aplus_queue.push({action: 'aplus.record',arguments: ['colorSelected', 'CLK', {
        idxColor: idxColor,
        nameColor: colors[idxColor].name
    }]});
}

function clearSelect(){
    $(".tempList li").removeClass("selected");
}
function setAvatar(objColor){
    $(".line1").html($("#unit").val());
    $(".line1").css("background-color",objColor.line1bg);
    $(".line1").css("color",objColor.line1txt);

    $(".line2").html($("#room").val());
    $(".line2").css("background-color",objColor.line2bg);
    $(".line2").css("color",objColor.line2txt);

    makeAvatar($("#roomAvatar"));
    currColor = objColor;


    
}

// 生成头像图片
function makeAvatar(eleImg) {
    return html2canvas($(".tmpAvatar")[0],{scale:1}).then(canvas => {
		eleImg.attr("src",canvas.toDataURL("image/png")); 
	});
}

$(function(){
    iniColorBalls();
    setAvatar(currColor);
    $("#btnSubmit").click(function(){
        setAvatar(currColor);
        
        /**CNZZ CLICK */
        const {aplus_queue} = window;
        aplus_queue.push({action: 'aplus.record',arguments: ['btnSubmit', 'CLK', {
            unit: $("#unit").val(),
            room: $("#room").val()
        }]});
    })
    
    $("#mnuA").click(function(){
        $("#layGroupmaster").hide();
        $("#mnuA").addClass("active");
        $("#mnuB").removeClass("active");
    })
    $("#mnuB").click(function(){
        $("#layGroupmaster").show();
        $("#mnuB").addClass("active");
        $("#mnuA").removeClass("active");
    })
    /**CNZZ PV */
    const {aplus_queue} = window;
    aplus_queue.push({action: 'aplus.sendPV',arguments: [{is_auto: false}]});
})