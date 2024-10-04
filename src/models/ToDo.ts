import uniqid from 'uniqid'
class ToDo{
    id: string;
    text: string;

    constructor(todoText: string){
        this.text = todoText;
        this.id = uniqid();
    }
}

export default ToDo;