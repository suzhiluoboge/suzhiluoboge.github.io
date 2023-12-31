$(function () {
  var endDate = "5  20, 2021 9:00:00"; // 到期时间

  $(".countdown.styled").countdown({
    date: endDate,
    render: function (data) {
      $(this.el).html(
        "<div>" +
          this.leadingZeros(data.days, 3) +
          " <span>天</span></div><div>" +
          this.leadingZeros(data.hours, 2) +
          " <span>小时</span></div><div>" +
          this.leadingZeros(data.min, 2) +
          " <span>分</span></div><div>" +
          this.leadingZeros(data.sec, 2) +
          " <span>秒</span></div>"
      );
    },
  });
});
<!-----------------------------------
©著作权归作者所有：来自51CTO博客作者html网页设计的原创作品，请联系作者获取转载授权，否则将追究法律责任
html+css+js制作结婚倒计时网页模板(520/七夕情人节/程序员告白)
https://blog.51cto.com/ruan365392777/3321748-->