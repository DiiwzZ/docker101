var img = {
    blue: '<img src="images/common.jpg"/>',
    purple: '<img src="images/uncommon.jpg"/>',
    pink: '<img src="images/rare.jpg"/>',
    red: '<img src="images/epic.jpg"/>',
    yellow: '<img src="images/legendary.jpg"/>'
};

let itemRates = {
    blue: 100,    // Common rate
    purple: 45,   // Uncommon rate
    red: 10,      // Epic rate
    yellow: 3     // Legendary rate
};

let animationDuration = 5000;  // Default duration

window.onload = function() {
    reset();
    startScrolling();
    document.querySelector('.item-manager').classList.add('collapsed');
    document.querySelector('.collapse-btn').classList.add('collapsed');
};

function startScrolling() {
    $("#cardList").addClass("scrolling");
}

function stopScrolling() {
    $("#cardList").removeClass("scrolling");
}

function reset() {
    $(".card-container").remove();
    let container = $('<div class="card-container"></div>');
    
    for (var i = 0; i < 310; i++) {
        var element = '<div class="card" style="background-color: lightblue;" data-rarity="blue" id=itemNumber' + i + ">" + img.blue + "</div>";
        var rand = random(1, 10000) / 100;
        if (rand < itemRates.purple) {
            element = '<div class="card" style="background-color: purple;" data-rarity="purple" id=itemNumber' + i + ">" + img.purple + "</div>";
        }
        if (rand < itemRates.red) {
            element = '<div class="card" style="background-color: red;" data-rarity="red" id=itemNumber' + i + ">" + img.red + "</div>";
        }
        if (rand < itemRates.yellow) {
            element = '<div class="card" style="background-color: yellow;" data-rarity="yellow" id=itemNumber' + i + ">" + img.yellow + "</div>";
        }
        container.append(element);
    }
    
    // Clone the cards for seamless scrolling
    const clonedCards = container.html();
    container.append(clonedCards);
    
    $("#cardList").append(container);
    
    if (!$("#cardList").hasClass("scrolling")) {
        $(".card-container").css("left", -1000);
    }
}

function restartScrolling() {
    reset();
    startScrolling();
}

function openCase() {
    stopScrolling();
    reset();
    var rand = random(1000, 20000);
    var childNumber = Math.floor(rand / 100) + 4;

    var mywidth = ((rand * 100) / screen.width) * 2;
    
    $(".card-container").animate(
        {
            left: -mywidth + "%"
        },
        {
            duration: animationDuration,
            easing: 'linear',
            step: function(now, fx) {
                if (fx.pos < 0.1) {
                    fx.now = fx.start + (fx.end - fx.start) * Math.pow(fx.pos * 10, 2) * 0.1;
                } else if (fx.pos > 0.3) {
                    let slowdown = Math.min(1, (fx.pos - 0.3) / 0.7);
                    fx.now = fx.start + (fx.end - fx.start) * (1 - Math.pow(1 - slowdown, 3));
                }
            },
            complete: function () {
                const centerX = $(".center-marker").offset().left;
                const cards = $(".card");
                let closestCard = null;
                let minDistance = Infinity;
                
                cards.each(function() {
                    const cardX = $(this).offset().left;
                    const distance = Math.abs(cardX - centerX);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestCard = this;
                    }
                });
                
                $(".card").removeClass('winner-card');
                $(closestCard).addClass('winner-card');
                
                // Remove arrow animation
                // $(".arrow-down").addClass('winner');
                
                // Ensure the winning card is visible above others
                $(closestCard).css('z-index', '1000');
            }
        }
    );

    $(".card").css({ backgroundColor: "red" });
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function adjustItemRate(rarity, change) {
    itemRates[rarity] = Math.max(0, Math.min(100, itemRates[rarity] + change));
    reset();
}

function toggleItemManager() {
    const itemManager = document.querySelector('.item-manager');
    const collapseBtn = document.querySelector('.collapse-btn');
    
    itemManager.classList.toggle('collapsed');
    collapseBtn.classList.toggle('collapsed');
}

function adjustDuration(change) {
    animationDuration = Math.max(1000, Math.min(15000, animationDuration + change));
    document.getElementById('duration-display').textContent = animationDuration;
}


