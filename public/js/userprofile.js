$(document).ready(function () {
    var scores;

    var url = window.location.search;
    var userId;
    if (url.indexOf("?user_id=") !== -1) {
        userId = url.split("=")[1];
        getScores(userId);
    }
    
    else {
        return;
    }

    function getScores(user) {
        userId = user || "";
        if (userId) {
            userId = "/?user_id=" + userId;
        }
        $.get("/api/scores" + userId, function (res) {
            console.log("Scores", res);
            scores = res;
            if (!scores || !scores.length) {
                console.log("no scores");
            }
            else {
                console.log(scores);

                var scoreDateArr = [];

                for (var i = 0; i < scores.length; i++) {
                    var scoreDate = new Date(scores[i].createdAt);
                    scoreDateArr.push(scoreDate);
                }

                var trace1 = {
                    x: scoreDateArr,
                    y: scores,
                    mode: 'lines',
                    line: { shape: 'spline' },
                };
                
                var data = [trace1];

                var layout = {
                    xaxis: {
                        showgrid: true,
                        tickmode: "auto"
                    },
                    yaxis: {
                        title: 'Score',
                        showgrid: true
                    },
                    height: 700,
                };

                Plotly.newPlot('scoreChart', data, layout, { responsive: true, scrollZoom: true, displayModeBar: false });
            }
        });
    }
})