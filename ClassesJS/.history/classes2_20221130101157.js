class Computer{
    constructor(harddrive,cpu,memory){
        this.harddrive =harddrive;
        this.cpu =cpu;
        this.memory=memory;
    }
    make(){
        console.log("This is a macbook m1")
    }

}

class CPU extends Computer{
    constructor()
}