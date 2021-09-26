class Author{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    describe(){
        return`${firstName} + ${lasName}`;
    }
}

class Book{
    constructor (name){
        this.name = name;
        this.list = [];
    }
    addBook (book){
        if (book instanceof Book){
            this.book.name.push(book);
        } else {
            throw new Error(`Book has already been added`);
        }
        describe();{
            return `${this.name} was added to ${this.list.length}`;
        }
    }
}

class Menu{
    constructor(){
        this.ReadingList = [];
        this.selectedBook = null;
    }
    start(){
        let selection = this.showMainMenuOptions();
        while (selection !==0)
            switch(selection){
                case`1`:
                this.createReadingList;
                break;
                case`2`:
                this.viewReadingList;
                break;
                case `3`:
                this.deleteReadingList;
                break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
    }
    showMainMenuOptions(){
        return prompt (`
        0) exit
        1)createReadingList
        2)viewAuthor
        3)deleteReadingList
        4)displayAll
        `);
    }
    createReadingList(){
        let name = prompt (`Enter the name of the new book:`);
        this.readinglist.push(newBook);
    }
    viewReadingList(){
        let index = prompt (`Enter the index of the book you wish to view:`);
        if (index > -1 && index < this.ReadingList.length){
            this.selectedBook = this.ReadingList[index];
            let description = `Reading List:` + this.selectedBook.name + `\n`;
        for (let i =0; i < this.selectedBook.list[i].length; i++){
            description = 'Book Name:' + `_` + this.selectedBook.list[i].name + `\n`;
        }
        }
    }
    deleteReadingList(){
        let index = prompt (`Enter the index of the book you wish to delete:`);
        if (index > -1 && index < this.selectedBook.name.length){
            this.selectedBook.name.splice(index,1);
        }
    }
}