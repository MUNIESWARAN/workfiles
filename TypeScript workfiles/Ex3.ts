interface Course{
    name:string;
    fees: number;
    }

    function CourseDetails(course: Course){
        console.log("The Course "+course.name + " costs around Rs:"+course.fees);
    }

    var Pijv7 = { name: "Programming in Java 7 ", fees: 11500}
    CourseDetails(Pijv7)