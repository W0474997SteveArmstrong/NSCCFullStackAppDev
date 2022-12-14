class Computer{
    constructor(harddrive,cpu,memory){
        this.harddrive =harddrive;
        this.cpu =cpu;
        this.memory=memory;
    }
    makeYear(){
        if("SSD"==this.harddrive){
            console.log("This is a Macbook");
        }
        else{
            console.log("This is a non apple device");
        }
    }

}

class CPU extends Computer{
    constructor()
}