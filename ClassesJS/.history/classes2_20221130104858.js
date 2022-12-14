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


class Computer extends CPU{
    constructor(chip,register,clockspeed,numCores,harddrive,cpu,memory,manufacturer){
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


const cpu1 = new CPU("Apple","xyz",2.3,8);
const comp1 = new Computer("Apple","xyz",2.3,8,"SSD","M1",8,"AppleInc");
console.log(cpu1.operatingSystem());
console.log(comp1.operatingSystem());
console.log(comp1.makeYear());

