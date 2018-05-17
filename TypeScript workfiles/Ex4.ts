class Skills{
    employeeId: number;
    skillList: Array<string>;

    constructor(Skills:  Array<string>, empid: number){
        this.employeeId=empid;
        this.skillList = Skills;
    }

    listCourse(){
        for(var i=0; i< this.skillList.length;i++){
            console.log(this.skillList[i]);
        }
    }

}


var ITCourse = new Skills(["Java","RDBMS", "WCD", "ANGULAR", "NODE"], 1);
ITCourse.listCourse();