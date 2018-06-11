function HolidayPriorityQueue() {

    let shoppingList = new Array();
    function addGift(gift) {
        for (let i = 0; i < gift.length; i++) {
            shoppingList.unshift(gift[i]);
        }
        return shoppingList.length
    }

    function buyGift() {
        let name = "";
        if (shoppingList.length != 0) {
            let highestPriority = shoppingList[0].priority;
            let index;
            for (let i = 0; i < shoppingList.length; i++) {
                if (shoppingList[i].priority <= highestPriority) {
                    highestPriority = shoppingList[i].priority;
                    name = shoppingList[i].name;
                    index = i;
                }
            }
            removeGiftFromList(index);
        }
        return name;

    }
    return {
        addGift: addGift,
        buyGift: buyGift
    }


    function removeGiftFromList(index) {
        return shoppingList.splice(index, 1);
    }
}

