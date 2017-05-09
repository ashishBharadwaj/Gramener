
google.charts.load('current', {
	packages: ['corechart']
});
google.charts.load('current', {'packages':['corechart','treemap']});
google.charts.load('current', {
	packages: ['corechart','geochart']
});

google.charts.setOnLoadCallback(drawChart);

function drawChart(){
	drawLineChart();
	drawGeoChart();
	drawColumnChart();
	// drawTreeMapChart();
}

//function to draw column chart
function drawColumnChart() {
   // Define the chart to be drawn.
   var data = google.visualization.arrayToDataTable([
      ['Date', 'Balance'],
	  ['1',  900],
      ['2',  1000],
      ['3',  1170],
      ['4',  1250],
      ['5',  1530],
	  ['6',  1530],
	  ['7', 2000],
	  ['8', 4000],
	  ['9', 3000],
	  ['10', 5500],
	  ['11', 2100],
	  ['12', 700],
	  ['13', 6000],
	  ['14', 8000],
	  ['15', 9000],
	  ['16', 10000],
	  ['17', 22200],
	  ['18', 10000],
	  ['19', 30000],
	  ['20', 9000],
	  ['21', 8000],
	  ['22', 7000],
	  ['23', 10000],
	  ['24', 600],
	  ['25', 20000],
	  ['26', 9000],
	  ['27', 5000],
	  ['28', 6000],
	  ['29', 7000],
	  ['30', 8000],
	  ['31', 9000]
   ]);

   var options = {
	  'width': 1200,
      'height': 400,
      title: 'Day-wise Trend CDAB, MAY 2016'	  
   }; 

   // Instantiate and draw the chart.
   var chart = new google.visualization.ColumnChart(document.getElementById('__ColumnChartContainer'));
   chart.draw(data, options);
}

//function to draw geo chart
function drawGeoChart() {
      var data = google.visualization.arrayToDataTable([
        ['State', 'YOY Groth'],
        ['West Bengal', 5],
		['Bihar', 5],
		['Karnataka', 20],
		['Andhra Pradesh', 19],
		['Punjab', 10],
		['Gujarat', 25],
		['Rajasthan', -10],
		['Assam', -5],
		['Goa', 7],
		['Jharkhand', 2],
		['Kerala', 12],
		['Haryana', 3],
		['Arunachal Pradesh', 8],
		['Chhattisgarh', 4],
		['Himachal Pradesh', 22],
		['Madhya Pradesh', 1],
		['Maharashtra', 22],
		['Manipur', 6],
		['Meghalaya', 12],
		['Mizoram', 11],
		['Nagaland', 16],
		['Jammu and Kashmir', 4],
		['Uttar Pradesh', 13],
		['Uttarakhand', 19],
		['Tamil Nadu', 22]
      ]);

      var options = {
		'width': 1200,
        'height': 400,
        region: 'IN',
        displayMode: 'regions',
        resolution: 'provinces',
		colorAxis: {colors: ['red', 'green']}
      };

      var chart = new google.visualization.GeoChart(document.getElementById('__GeoChart'));
      chart.draw(data, options);
 }
 
//function to draw line chrt
function drawLineChart() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Month');
    data.addColumn('number', 'Actual Budget');
    data.addColumn({ type: 'boolean', role: 'certainty' });
    data.addColumn('number', 'Actual Performance');
    data.addColumn({ type: 'boolean', role: 'certainty' });
    data.addRows([
        ['Jan 2016', 5000, true, 10000, true],
        ['Feb 2016', 10000, true, 1100, true],
        ['Mar 2016', 20000, true, 30000, true],
        ['Apr 2016', 30000, true, 40000, true],
        ['May 2016', 40000, true, 50000, true],
        ['Jun 2016', 50000, true, 60000, true],
        ['Jul 2016', 60000, true, 70000, true],
        ['Aug 2016', 70000, true, 80000, true],
        ['Sep 2016', 80000, true, 90000, true],
        ['Oct 2016', 90000, true, 100000, true],
        ['Nov 2016', 100000, true, 200000, true],
        ['Dec 2016', 200000, false, 300000, false]
    ]);

    // Set chart options
    var options = {
        'width': 1200,
        'height': 400,
        pointSize: 5,
        series: {
            0: { pointShape: 'circle' },
            1: { pointShape: 'circle' },
        }
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.LineChart(document.getElementById('__LineChartContainer'));
    chart.draw(data, options);
}

//function to bind filter events	
function bindFilterEvents(){
   $("#__AccountFilterContainer .dropdown-item").unbind('click').click(function(){
	  $("#__AccountFilterValue").text($(this).text());
   });   
   $("#__RegionFilterContainer .dropdown-item").unbind('click').click(function(){
	  $("#__RegionFilterValue").text($(this).text());
   });
   $("#__MonthFilterContainer .dropdown-item").unbind('click').click(function(){
	  $("#__MonthFilterValue").text($(this).text());
   });
   $("#__TimePeriodFilterContainer .dropdown-item").unbind('click').click(function(){
	  $("#__TimePeriodFilterValue").text($(this).text());
   });
   $("#__SegmentFilterContainer .dropdown-item").unbind('click').click(function(){
	  $("#__SegmentFilterValue").text($(this).text());
   });
   
}
function bindTabEvent(){
	$(".tabs").unbind('click').click(function(){
		var id = $(this).attr('id');
		var reverseId = 'Tab' + id.split("Tab")[0];
		$('#' + id).siblings().removeClass('activeTab');
		$('#' + id).addClass('activeTab');
		$('#' + reverseId).fadeIn(700).siblings().fadeOut(700);
						
	});
}

$(function(){
	bindFilterEvents();
	bindTabEvent();
});