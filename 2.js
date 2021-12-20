class Media {
    constructor(type,year,sells,cost){
        this.type_of_media=type  
        this.year_that_makes=year
        this.how_much_sells=sells
        this.how_much_cost=cost
    }
}
class Book extends Media {
    constructor(type,year,sells,cost,owner,paper,publication,typeOf){
        super(type,year,sells,cost)
        this.author_of_media=owner
        this.number_of_paper=paper
        this.name_of_publications=publication
        this.type_of_book=typeOf
    }
    volume(){
        if(this.type_of_book==="printed"){
            console.log("it  sells phisically")
        }else if(this.type_of_book==="digital"){
            console.log("it sells in pdf type")
        }
    }
    
}
class Video extends  Media{
    constructor(type,owner,year,sells,cost,time,actor,rate){
        super(type,year,sells,cost)
        this.director_of_media=owner
        this.long_of_time=time
        this.first_actor=actor
        this.rate=rate
    }
    insight(){
        if(this.rate>100000){
            console.log("it was very good movie")
        }else{
            console.log("it wasn`t very good movie")
        }
    }
    zhanr="romantic"

}
class Music extends Media{
    constructor(type,owner,year,sells,cost,time){
        super(type,year,sells,cost)
        this.time=time
        this.singer=owner
    }
    
}

const cleancode = new Book('book','Robert C. Martin',2009,'1milion','21.66$',431,'prentice hall','printed')
console.log(cleancode)
const Spider_Man = new Video('video','john watts', 2021,2000000,100,'2h 28min','tom holland',9.1)
console.log(Spider_Man)
const i_see_fire= new Music('music','ed sheeran' , '8 years ago','1billion',100,'5:16min')
console.log(i_see_fire)