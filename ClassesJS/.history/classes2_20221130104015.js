class Computer extends CPU{
    constructor(harddrive,cpu,memory,manufacturer,chip,register,clockspeed,numCores){
        super(chip,register,clockspeed,numCores);
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

class CPU{
    constructor(chip,register,clockspeed,numCores){
        this.chip=chip;
        this.register=register;
        this.clockspeed =clockspeed;
        this.numCores=numCores;
    }

    operatingSystem(){
        if('Apple'==this.chip){
            console.log("MacOS is the operating system");
        }
        else{
            console.log("Windows is the operating system");
        }
    }


}

const comp1 = new Computer("SSD","M1",8,"Apple");
const cpu1 = new CPU("Apple","xyz",2.3,8);

comp1.operatingSystem();
console.log(comp1.makeYear());

