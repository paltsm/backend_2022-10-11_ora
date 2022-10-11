export class Book {
	private name : string;
	private rating : number;
	
	constructor(name: string, rating: number) {
		this.name = name;
		this.rating = rating;
	}
	public get getName(): string {
		return this.name;
	}
	public get getRating(): number {
		return this.rating;
	}
	
	public set setRating(rating : number) {
		console.log("okosskosfsokdos")
		if (this.rating>0 && this.rating<11){
			this.rating=rating;
		}else{
			this.rating=3333;
			console.log("a számnak 1 és 10 között kell lennie")
		}
	}
	
	public toString() : string {
		console.log(this.name, this.rating);
		return "könyv neve: "+this.name+", könyv értékelése: "+this.rating
	}

}