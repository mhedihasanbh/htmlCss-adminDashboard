/*==================CHART JS=================*/

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
//PIE CHARTS
const pichart = document.getElementById('pichart');

new Chart(pichart, {
  type: 'doughnut',
  data: {
    labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
  }
});


//END CHART JS
$(document).on('click','#sidebar li',function(){
    $(this).addClass('active').siblings().removeClass('active');
});
$('.sub-menu ul').hide();
$('.sub-menu a').click(function(){
    $(this).parent(".sub-menu").children("ul").slideToggle("100"); 
    $(this).find(".right").toggleClass("fa-solid fa-chevron-right");
})
/*=====================SIDEBAR TOGGLE============*/
$(document).ready(function(){
$("#toggleSidebar").click(function(){
    $(".left-menu").toggleClass("hide");
    $(".content-wrapper").toggleClass("hide");
})
});
