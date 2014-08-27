

(function() {

  var mainExample, exampleOne, exampleTwo, exampleThree;

  //var colors = d3.scale.category20().range();

  var test_data = stream_layers(3,20 + Math.random()*50,.1).map(function(data, i) {
    return {
      key: 'Stream' + i
    , values: data
    //, color: colors[i]
    };
  });


  // --------------------------- MAIN EXAMPLE ---------------------------------


  nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
                  .margin({top: 50, bottom: 30, left: 40, right: 10});

    chart.xAxis
        .tickFormat(d3.format(',f'));

    chart.yAxis
        .tickFormat(d3.format(',.1f'));

    d3.select('#mainExample')
        .datum(test_data)
      .transition().duration(500).call(chart);

    nv.utils.windowResize(chart.update);

    /*chart.legend.dispatch.on('legendClick.updateExamples', function() {
      setTimeout(function() {
        exampleOne.update();
        exampleTwo.update();
        exampleThree.update();
      }, 100);
    });*/

    mainExample = chart;

    return chart;
  });



  // --------------------------- EXAMPLE ONE ---------------------------------


  nv.addGraph(function() {  
    var chart = nv.models.lineChart()
                  //.showLegend(false)
                  .margin({top: 10, bottom: 30, left: 40, right: 10});

    chart.xAxis // chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the partent chart, so need to chain separately
        .tickFormat(d3.format(',r'));

    chart.yAxis
        .tickFormat(d3.format(',.1f'));

    console.log(test_data);

    d3.select('#exampleOne')
        .datum(test_data)
      .transition().duration(500)
        .call(chart);

    //TODO: Figure out a good way to do this automatically
    nv.utils.windowResize(chart.update);
    //nv.utils.windowResize(function() { d3.select('#chart1 svg').call(chart) });

    exampleOne = chart;

    return chart;
  });


  // --------------------------- EXAMPLE TWO ---------------------------------



  nv.addGraph(function() {
      var chart = nv.models.stackedAreaChart()
                  .margin({top: 10, bottom: 30, left: 40, right: 10})
                  //.showControls(false)
                  .style('stacke');

      chart.yAxis
          .showMaxMin(false)
          .tickFormat(d3.format(',.1f'));

         // console.log(test_data);
      d3.select("#exampleTwo")
        .datum(test_data)
          .transition().duration(500).call(chart);

      nv.utils.windowResize(chart.update);


      /*chart.stacked.dispatch.on('areaClick.updateExamples', function(e) {
        setTimeout(function() {
          mainExample.update();
          exampleOne.update();
          //exampleTwo.update();
          exampleThree.update();
        }, 100);
      })*/

      exampleTwo = chart;

      return chart;
  });



  // --------------------------- EXAMPLE THREE ---------------------------------


  var testdata = [
    {
      key: "One",
      y: 5
    },
    {
      key: "Two",
      y: 2
    },
    {
      key: "Three",
      y: 9
    },
    {
      key: "Four",
      y: 7
    },
    {
      key: "Five",
      y: 4
    },
    {
      key: "Six",
      y: 3
    },
    {
      key: "Seven",
      y: .5
    }
  ];


nv.addGraph(function() {
    
    var chart = nv.models.pieChart()
        .margin({top: 10, bottom: 30, left: 40, right: 10})
        .x(function(d) { return d.key })
        .y(function(d) { return d.y })
        .values(function(d) { return d })
        .color(d3.scale.category10().range());
        

     d3.select("#exampleThree")
          .datum([testdata])
        .transition().duration(1200)
          .call(chart);

   // chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

    return chart;
});





 /* nv.addGraph(function() {
      var chart = nv.models.pieChart()
                  .margin({top: 10, bottom: 30, left: 40, right: 10});

     

      d3.select("#exampleThree")
        .datum(test_data)
          .transition().duration(500).call(chart);

      nv.utils.windowResize(chart.update);


      chart.stacked.dispatch.on('areaClick.updateExamples', function(e) {
        setTimeout(function() {
          mainExample.update();
          exampleOne.update();
          exampleTwo.update();
          //exampleThree.update();
        }, 100);
      })

      exampleThree = chart;

      return chart;
  });*/



})();

