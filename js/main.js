function handleNav() {
  const click = document.getElementById("click");
  const click2 = document.getElementById("click2");
  const sub = document.getElementById("sub");
  const sub2 = document.getElementById("sub2");
  if (!click.classList.contains("on")) {
    click.classList.add("on");
    sub.classList.add("active");
    sub2.classList.remove("active");
    click2.classList.remove("on");
    sub3.classList.remove("active");
    click3.classList.remove("on");
  } else {
    click.classList.remove("on");
    sub.classList.remove("active");
  }
}

function handleNav2() {
  const click2 = document.getElementById("click2");
  const click = document.getElementById("click");

  const sub2 = document.getElementById("sub2");
  const sub = document.getElementById("sub");

  if (!click2.classList.contains("on")) {
    click2.classList.add("on");
    sub2.classList.add("active");
    sub.classList.remove("active");
    click.classList.remove("on");
    sub3.classList.remove("active");
    click3.classList.remove("on");
  } else {
    click2.classList.remove("on");
    sub2.classList.remove("active");
  }
}

function handleNav3() {
  const click3 = document.getElementById("click3");
  const click2 = document.getElementById("click2");
  const click = document.getElementById("click");

  const sub3 = document.getElementById("sub3");
  const sub2 = document.getElementById("sub2");
  const sub = document.getElementById("sub");

  if (!click3.classList.contains("on")) {
    click3.classList.add("on");
    sub3.classList.add("active");
    sub2.classList.remove("active");
    click2.classList.remove("on");
    sub.classList.remove("active");
    click.classList.remove("on");
  } else {
    click3.classList.remove("on");
    sub3.classList.remove("active");
  }
}

function handleNav4() {
  const click4 = document.getElementById("click4");
  const click3 = document.getElementById("click3");
  const click2 = document.getElementById("click2");
  const click = document.getElementById("click");

  const sub3 = document.getElementById("sub3");
  const sub2 = document.getElementById("sub2");
  const sub = document.getElementById("sub");

  if (!click4.classList.contains("on")) {
    click3.classList.remove("on");
    sub3.classList.remove("active");
    sub2.classList.remove("active");
    click2.classList.remove("on");
    sub.classList.remove("active");
    click.classList.remove("on");
  } else {
  }
}

// slide

$(document).ready(function () {
  flag = 1;
  $("#nex").click(function () {
    if (flag == 0) {
      $("#side1").css("z-index", "999");
      $("#side2").css("z-index", "9");
      $("#side3").css("z-index", "9");
      $("#side4").css("z-index", "8");
      $("#side5").css("z-index", "7");

      $("#side1").css("transform", "translateX(0px) scale(1.5)");
      $("#side2").css("transform", "translateX(-100px) scale(1)");
      $("#side3").css("transform", "translateX(100px)");

      flag = 1;
    } else if (flag == 1) {
      $("#side3").css("z-index", "999");
      $("#side2").css("z-index", "8");
      $("#side4").css("z-index", "9");
      $("#side1").css("z-index", "9");
      $("#side5").css("z-index", "7");

      $("#side3").css("transform", "translateX(0px) scale(1.5)");
      $("#side1").css("transform", "translateX(-100px) scale(1)");
      $("#side4").css("transform", "translateX(100px)");
      $("#side2").css("transform", "translateX(100px)");

      flag = 2;
    } else if (flag == 2) {
      $("#side4").css("z-index", "999");
      $("#side3").css("z-index", "9");
      $("#side5").css("z-index", "9");
      $("#side1").css("z-index", "8");
      $("#side2").css("z-index", "7");
      $("#side4").css("transform", "translateX(0px) scale(1.5)");
      $("#side3").css("transform", "translateX(-100px) scale(1)");
      $("#side5").css("transform", "translateX(100px)");
      flag = 3;
    } else if (flag == 3) {
      $("#side5").css("z-index", "999");
      $("#side4").css("z-index", "9");
      $("#side2").css("z-index", "9");
      $("#side1").css("z-index", "8");
      $("#side3").css("z-index", "7");
      $("#side5").css("transform", "translateX(0px) scale(1.5)");
      $("#side4").css("transform", "translateX(-100px) scale(1)");
      $("#side2").css("transform", "translateX(100px)");
      flag = 4;
    } else if (flag == 4) {
      $("#side2").css("z-index", "999");
      $("#side1").css("z-index", "9");
      $("#side5").css("z-index", "9");
      $("#side4").css("z-index", "8");
      $("#side3").css("z-index", "7");
      $("#side2").css("transform", "translateX(0px) scale(1.5)");
      $("#side5").css("transform", "translateX(-100px) scale(1)");
      $("#side1").css("transform", "translateX(100px)");
      flag = 0;
    }
  });
  $("#pre").click(function () {
    if (flag == 2) {
      $("#side1").css("z-index", "999");
      $("#side2").css("z-index", "9");
      $("#side3").css("z-index", "9");
      $("#side4").css("z-index", "8");

      $("#side1").css("transform", "translateX(0px) scale(1.5)");
      $("#side2").css("transform", "translateX(-100px) scale(1)");
      $("#side3").css("transform", "translateX(100px)");
      flag = 1;
    } else if (flag == 3) {
      $("#side3").css("z-index", "999");
      $("#side1").css("z-index", "9");
      $("#side4").css("z-index", "9");
      $("#side2").css("z-index", "8");
      $("#side5").css("z-index", "7");
      $("#side3").css("transform", "translateX(0px) scale(1.5)");
      $("#side1").css("transform", "translateX(-100px) scale(1)");
      $("#side4").css("transform", "translateX(100px)");
      flag = 2;
    } else if (flag == 4) {
      $("#side4").css("z-index", "999");
      $("#side3").css("z-index", "9");
      $("#side5").css("z-index", "9");
      $("#side1").css("z-index", "8");
      $("#side2").css("z-index", "7");
      $("#side4").css("transform", "translateX(0px) scale(1.5)");
      $("#side3").css("transform", "translateX(-100px) scale(1)");
      $("#side5").css("transform", "translateX(100px)");
      flag = 3;
    } else if (flag == 0) {
      $("#side5").css("z-index", "999");
      $("#side4").css("z-index", "9");
      $("#side2").css("z-index", "9");
      $("#side1").css("z-index", "8");
      $("#side3").css("z-index", "7");
      $("#side5").css("transform", "translateX(0px) scale(1.5)");
      $("#side4").css("transform", "translateX(-100px) scale(1)");
      $("#side2").css("transform", "translateX(100px)");
      flag = 4;
    } else if (flag == 1) {
      $("#side2").css("z-index", "999");
      $("#side5").css("z-index", "9");
      $("#side1").css("z-index", "9");
      $("#side3").css("z-index", "8");
      $("#side4").css("z-index", "7");

      $("#side2").css("transform", "translateX(0px) scale(1.5)");
      $("#side5").css("transform", "translateX(-100px) scale(1)");
      $("#side1").css("transform", "translateX(100px)");

      flag = 0;
    }
  });
});

// a_link

$(document).on("click", 'a[href="#"]', function (e) {
  e.preventDefault();
});

// hamburger

const btn = document.querySelector(".menu_toggle");
const nav = document.querySelector(".mobile_nav");

btn.addEventListener("click", function () {
  nav.classList.toggle("open");
});
