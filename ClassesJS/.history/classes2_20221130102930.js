class Computer{
    constructor(harddrive,cpu,memory,manufacturer){
        this.harddrive =harddrive;
        this.cpu =cpu;
        this.memory=memory;
        this.manufacturer=manufacturer;
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

class CPU extends Computer{
    constructor(harddrive,cpu,memory,manufacturer,chip){
        super(harddrive,cpu,memory,manufacturer);
        this.chip=chip;
        this.register=register;
        this.register
    }

    operatingSystem(){
        if('AppleSilicon'==this.chip){
            console.log("MacOS is the oeprating system");
        }
        else{
            console.log("Windows is the operating system");
        }
    }
}

const comp1 = Computer("SSD","M1",8,"Apple");

