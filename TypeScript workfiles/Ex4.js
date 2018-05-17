var Skills = /** @class */ (function () {
    function Skills(Skills, empid) {
        this.employeeId = empid;
        this.skillList = Skills;
    }
    Skills.prototype.listCourse = function () {
        for (var i = 0; i < this.skillList.length; i++) {
            console.log(this.skillList[i]);
        }
    };
    return Skills;
}());
var ITCourse = new Skills(["Java", "RDBMS", "WCD", "ANGULAR", "NODE"], 1);
ITCourse.listCourse();
