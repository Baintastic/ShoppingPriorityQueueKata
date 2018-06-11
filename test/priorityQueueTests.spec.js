describe("HolidayPriorityQueue", function () {
		
    describe("Given gifts to buy", function () {
       [{ input:[{name: "car" , priority: 2}], output: 1},
        { input:[{name: "car" , priority: 2},{name: "wig" , priority: 1}], output: 2},
        { input:[{name: "car" , priority: 2},{name: "wig" , priority: 1},{name: "polo neck" , priority: 3}], output: 3}
    ]
        .forEach(function(element){
            it("should add items to shopping list and return the list's new length", function() {
                // arrange
                var giftList = new HolidayPriorityQueue();
                // act
                var actual = giftList.addGift(element.input);
                // assert
                expect(actual).toBe(element.output);
                });
        })
        
    })

    describe("Given the gift list is empty", function () {
        it("should  remove nothing and return an empty string ", function() {
            // arrange
            var giftList = new HolidayPriorityQueue();
            // act
            var actual = giftList.buyGift();
            // assert
            expect(actual).toBe("");
            });
    })

    describe("Given a gift list with a single item", function () {
        it("should remove the car from the list and return car ", function() {
            // arrange
            var giftList = new HolidayPriorityQueue();
             giftList.addGift([{name: "car" , priority: 2}])
            
            // act
            var actual = giftList.buyGift();
            // assert
            expect(actual).toBe("car");
            });
    })
   
    describe("Given a gift list with 2 gifts", function () {
        it("should remove the wig from the list and return wig ", function() {
            // arrange
            var giftList = new HolidayPriorityQueue();
             giftList.addGift([{name: "car" , priority: 2},{name: "wig" , priority: 1}])
            // act
            var actual = giftList.buyGift();
            // assert
            expect(actual).toBe("wig");
            });
    })

    describe("Given a gift list with 3 gifts", function () {
        it("should remove the wig from the list and return wig ", function() {
            // arrange
            var giftList = new HolidayPriorityQueue();
             giftList.addGift([{name: "car" , priority: 2},{name: "wig" , priority: 1},{name: "polo neck" , priority: 3}])
            // act
            var actual = giftList.buyGift();
            // assert
            expect(actual).toBe("wig");
            });
    })
    
});