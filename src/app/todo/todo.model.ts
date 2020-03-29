export class TodoList{
    public id:number
    public name:string
    constructor(public itemId:number, public itemName:string){
        this.id=itemId,
        this.name=itemName
    }
}