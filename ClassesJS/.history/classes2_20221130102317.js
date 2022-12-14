class Computer{
    constructor(harddrive,cpu,memory){
        this.harddrive =harddrive;
        this.cpu =cpu;
        this.memory=memory;
    }
    makeYear(){
        if("SSD"==this.harddrive){
            console.log("This device was built after 1991");
        }
        else{
            console.log("Insufficient Information to identify the make Year");
        }
    }

}

class CPU{
    constructor(chip){
        this.chip=chip;
    }

    operatingSystem(){
        if('AppleSilicon'==this.chip){
            console.log("");
        }
        else{
            console.log("first")
        }
    }
}

