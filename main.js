var students_name = [];

function submit() {
    students_name = [];
    document.getElementById("names_of_students_sort").innerHTML = "";
    document.getElementById("names").innerHTML = "";
    for (i=1; i<=4; i++) {
        var name= document.getElementById("student_name_"+i).value;
        students_name.push(name);
    }
    console.log(students_name);
    var display_array = [];
    for (j=0;j<students_name.length;j++) {
        display_array.push("<h4>name- "+students_name[j]+" </h4>");
    }
    document.getElementById("names").innerHTML = display_array.join(" ");
    document.getElementById("sorting").style.display = "inline";
    document.getElementById("btn1").style.display = "none";
    clear_text();
}

function sorting() {
    students_name.sort();
    document.getElementById("names_of_students_sort").innerHTML = "";
    document.getElementById("names").innerHTML = "";
    console.log(students_name);
    var display_sort = [];
    for (k=0;k<students_name.length;k++) {
        display_sort.push("<h4>name- "+students_name[k]+" </h4>");
    }
    document.getElementById("names_of_students_sort").innerHTML = display_sort.join(" ");
    document.getElementById("sorting").style.display = "none";
    document.getElementById("btn1").style.display = "inline";
    clear_text();
}

function clear_text() {
    for (a=1;a<=4;a++) {
        document.getElementById("student_name_"+a).value = "";
    }
}