class Computer{
    constructor(harddrive,cpu,memory){
        this.harddrive =harddrive;
        this.cpu =cpu;
        this.memory=memory;
    }
    make(){
        if("M1SSD"==this.harddrive){
            console.log("This is a Macbook M1")
        }
    }

}

class CPU extends Computer{
    constructor()
}