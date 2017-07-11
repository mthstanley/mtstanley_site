var svg = d3.select("svg#pie"),
    width = svg.node().getBoundingClientRect().width,
    height = svg.node().getBoundingClientRect().height,
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var color = d3.scaleOrdinal(d3.schemeCategory20c);

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.percent; });

var path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var label = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

d3.csv("/assets/data/pie.csv", function(d) {
  d.percent = +d.percent;
  return d;
}, function(error, data) {
  if (error) throw error;

  var arc = g.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  arc.append("path")
      .attr("d", path)
      .attr("fill", function(d) { return color(d.data.passion); })
      .transition()
        .ease(d3.easeCubic)
        .duration(1000)
        .attrTween("d", tweenPie)
        .on("end", addText.bind(null, arc));

});

function addText(arc) {
  arc.append("text")
      .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
      .attr("dy", "0.35em")
      .text(function(d) { return d.data.passion; });
}

function tweenPie(b) {
  b.innerRadius = 0;
  var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
  return function(t) { return path(i(t)); };
}
