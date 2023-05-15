//$(document).ready(function(){
//	$('#range-slider').on('input', function () {
//		$('#range-value').text($('#range-slider').val());
//	});
//});


//const config = {
//    type: 'line',
//    data: {
//        datasets: [
//            {
//                label: 'Speed',
//                cubicInterpolationMode: 'monotone',
//                borderColor: 'rgb(86, 204, 157)',
//                data: []
//            }
//        ]
//    },
//    options: {
//        scales: {
//            x: {
//                type: 'realtime',
//                realtime: {
//                    onRefresh: chart => {
//                        chart.data.datasets.forEach(dataset => {
//                            dataset.data.push({
//                                x: Date.now(),
//                                y: Number($('#range-slider').val())
//                            });
//                        });
//                    }
//                }
//            }
//        }
//    }
//};
//// </block:config>

//config.options.plugins = {
//    annotation: false,
//    datalabels: false,
//    zoom: false
//};



//const myChart = new Chart(
//    document.getElementById('myChart'),
//    config
//);