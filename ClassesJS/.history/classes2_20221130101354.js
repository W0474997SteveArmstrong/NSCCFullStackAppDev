class Computer{
    constructor(harddrive,cpu,memory){
        this.harddrive =harddrive;
        this.cpu =cpu;
        this.memory=memory;
    }
    make(){
        if("AppleSSD"==this.harddrive){
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