let inp = document.getElementsByClassName("grade");
let credit = [2, 3, 3, 3, 3, 1, 1, 1, 1]

function calculate() {
    let i = 0;
    sum = 0;
    let gpa = 0;
    let ch = 0;
    for (i = 0; i < inp.length; i++) {
        if(inp[i].value === "WF" || inp[i].value === "None" )
        {continue;}
        
        console.log(inp[i].value)
        sum += (credit[i] * (gradepoint(inp[i].value)));
        ch += credit[i];
        //console.log( gradepoint(inp[i].value));

    }
    gpa = sum / ch;
    console.log(gpa.toFixed(5));
    document.getElementById("result").innerHTML = gpa.toFixed(5);

}

function gradepoint(grd) {
    if (grd == "A+") {
        return 4;
    }
    else if (grd == "A") {
        return 4;
    }
    else if (grd == "A-") {
        return 3.7;
    }
    else if (grd == "B+") {
        return 3.3;
    }
    else if (grd == "B") {
        return 3;
    }
    else if (grd == "B-") {
        return 2.7;
    }
    else if (grd == "C+") {
        return 2.3;
    }
    else if (grd == "C") {
        return 2;
    }
    else if (grd == "C-") {
        return 1.7;
    }
    else if (grd == "D+") {
        return 1.3;
    }
    else if (grd == "D") {
        return 1;
    }
    else if (grd == "F") {
        return 0;
    }
    else {
        return 0;
    }

}

