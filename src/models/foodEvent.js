export class FoodEvent {
    constructor({ host, capacity, title, description, location, startingTime, pricing, foodTags }) {
        this.host = host;
        this.capacity = capacity;
        this.title = title;
        this.description = description;
        this.location = location;
        this.startingTime = startingTime;
        this.pricing = pricing;
        this.foodTags = foodTags;
    }
}
