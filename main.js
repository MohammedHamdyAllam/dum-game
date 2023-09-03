const mainImage = document.getElementById('main-image');
let otherImage = document.querySelectorAll('.other-image');

otherImage.forEach(function (ele, ind, arr) {
  ele.onclick = function() {
      mainImage.src = ele.src;
      // console.log(arr.length);
      arr[0].style.border = 'none';
      arr[1].style.border = 'none';
      arr[2].style.border = 'none';
      arr[3].style.border = 'none';
      arr[4].style.border = 'none';
      ele.style.border = '#fff solid 2px';
    }
  }
);
