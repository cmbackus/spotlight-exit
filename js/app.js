var svg = d3.select("svg")
    , m = 20
    , left = 0
    , padding = 2
    , charge = 5;




questions.forEach(function (d, i) {
    d.fixed = true;
    d.radius = 35;
    d.class = "genre";
    d.x = 200 + i * 250
        , d.y = 250;
});

answers.forEach(function (d) {
    d.radius = Math.random() * 4 + 3;
    d.isExpanded = false;
    d.class = "user"
    d.title = d.user_name;
});
//set up gradients/////////////////////////////////////////////////////////////
var gradient = svg.append("svg:defs")
    .append("svg:linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");

// Define the gradient colors
gradient.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "#a00000")
    .attr("stop-opacity", 1);

gradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "#aaaa00")
    .attr("stop-opacity", 1);
//////////////////////////////////////////////end gradient
var force = d3.layout.force()
    .nodes(answers.concat(questions))
    .charge(0)
    .gravity(0)
    .on("tick", tick);



circles = svg.append("g")
    .selectAll(".user")
    .data(force.nodes())
    .enter()
    .append("g")
    .attr("class", function (d) {
        return d.class;
    })
    .call(force.drag);

circles.append("circle")
    .attr("r", function (d) {
        return d.radius;
    })
    .attr("x", function (d) {
        return -d.radius / 2;
    })
    .attr("y", function (d) {
        return -d.radius / 2;
    })
    .on("click", function (d) {
        console.log(d);
        //d3.select(this).style("fill", 'url(#gradient)');
        console.log(d.radius);
        console.log(d3.select(this).attr("r"));
        if (d.isExpanded == true) {
            console.log("is expanded")
            d3.select(this).attr("r", d.radius);
            d3.select(this).style("fill", '#999');
            d.isExpanded = false

        } else {
            console.log("will expand now")
            d3.select(this).style("fill", 'url(#gradient)');
            d3.select(this).attr("r", 30);
            d.isExpanded = true;
        }

        // d3.select(this).attr("class", "expandUser")
        /*d3.select(this).append("img")
        .attr("xlink:href", "@Url.Content('media/takeawayPoster_final.png')")
            .attr("x", "60")
            .attr("y", "60")
            .attr("width", "20")
            .attr("height", "20");
            */
        // hasClass = d.classed("selected");
        //d.classed("selected", not hasClass);
        console.log(d);

    })
    .call(function (g) {
        g.append("title")
            .text(function (d) {
                return d.title;
            });
    });

var users = d3.selectAll(".user")
    , questions = d3.selectAll(".genre");


questions.append("text")
    .text(function (d) {
        return d.title;
    })
    .attr({
        class: "label"
        , dy: 5
    });



function tick(e) {
    force.resume();
    users
        .each(function (d) {
            questions.each(function (q) {
                if (q.x < 50) return;

                var dx = d.x - q.x
                    , dy = d.y - q.y
                    , dn = 1 / Math.sqrt(dx * dx + dy * dy);
                APPROX_RAD = 60;
                if (d.x < q.x + APPROX_RAD && d.x > q.x - APPROX_RAD && d.y < q.y + APPROX_RAD && d.y > q.y - APPROX_RAD) return;

                d.px += charge * dx * Math.pow(dn, 2) * d.genres[q.no] * d.radius || 0;
                d.py += charge * dy * Math.pow(dn, 2) * d.genres[q.no] * d.radius || 0;

            });
        })
        .each(collide(0.5))
        .each(function (node) {

            node.x = Math.max(node.radius / 2, Math.min(container.offsetWidth - m, node.x));
            node.y = Math.max(m, Math.min(container.offsetHeight - m, node.y));
        });

    circles.attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
    });
}

// Resolve collisions between nodes.
function collide(alpha) {
    var quadtree = d3.geom.quadtree(force.nodes());
    return function (d) {
        var curRad
        if(d.isExpanded==true){curRad=30}
        else{curRad=d.radius}
        var r = curRad + padding
            , nx1 = d.x - r
            , nx2 = d.x + r
            , ny1 = d.y - r
            , ny2 = d.y + r;
        d.last = new Date();
        quadtree.visit(function (quad, x1, y1, x2, y2) {
            if (quad.point && (quad.point !== d)) {
                var x = d.x - quad.point.x
                    , y = d.y - quad.point.y
                    , l = Math.sqrt(x * x + y * y)
                    , r = (curRad + quad.point.radius + padding);
                if (l < r) {
                    l = (l - r) / l * 0.5;
                    d.x -= x *= l;
                    d.y -= y *= l;
                    if (!quad.point.fixed && quad.point.last != d.last) {
                        quad.point.x += x;
                        quad.point.y += y;
                    }
                }
            }
            return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        });
    };
}


function resize() {
    force.size([container.offsetWidth, container.offsetHeight]).start();
}

d3.select(window).on("resize", resize);
resize();