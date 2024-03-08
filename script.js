function choice1() {
    document.getElementById("storyimg").src = "images/Bateman phone.png";
    document.getElementById("part1").style.display = "none";
    document.getElementById("part2").style.display = "block";
}
    function escape() {
        document.getElementById("storyimg").src = "images/Esso bateman.png";
        document.getElementById("part2").style.display = "none";
        document.getElementById("part2b").style.display = "block";
    }

    function paypar1() {
        document.getElementById("storyimg").src = "images/Taxes paid bateman.png";
        document.getElementById("part2").style.display = "none";
    }
    

    function donothing() {
        document.getElementById("storyimg").src = "images/Bateman politet kommer.png";
        document.getElementById("part2").style.display = "none";
        document.getElementById("part2a").style.display = "block";
    }

        function paypar2a() {
            document.getElementById("storyimg").src = "images/Taxes paid bateman.png";
            document.getElementById("part2a").style.display = "none";
            document.getElementById("payend").style.display = "block";
        }     
        function fightpar2a() {
            document.getElementById("storyimg").src = "images/Sloss mot politiet.png";
            document.getElementById("part2a").style.display = "none";
            document.getElementById("fight").style.display = "block";
        }
            function continuepar2() {
                document.getElementById("storyimg").src = "images/Bateman in prison.png";
                document.getElementById("fight").style.display = "none";
                document.getElementById("prison").style.display = "block";
            }
        
        function runawaypar2a() {
            document.getElementById("storyimg").src = "images/Esso bateman.png";
            document.getElementById("part2a").style.display = "none";
            document.getElementById("part2b").style.display = "block";
        }
        function meetman() {
            document.getElementById("storyimg").src = "images/Drviver_og_Bateman.png";
            document.getElementById("part2b").style.display = "none";
            document.getElementById("meetfirst").style.display = "block";
        }
            function gowithman() {
                document.getElementById("storyimg").src = "images/Driver og Bateman forlater byen.png";
                document.getElementById("meetfirst").style.display = "none";
            }
            function notgowithman() {
                document.getElementById("storyimg").src = "images/Sloss mot politiet.png";
                document.getElementById("meetfirst").style.display = "none";
                document.getElementById("fight").style.display = "block";
            }
            function goinshop() {
                document.getElementById("storyimg").src = "images/robe gas stasjon baitman.png";
                document.getElementById("part2b").style.display = "none";
                document.getElementById("inshop1").style.display = "block";
            }   
            function pay() {
                document.getElementById("storyimg").src = "images/gas station bateman.png";
                document.getElementById("inshop1").style.display = "none";
                document.getElementById("inshoppay").style.display = "block";
            }           
            function goodend() {
                document.getElementById("storyimg").src = "images/Driver og Bateman forlater byen.png";
                document.getElementById("inshoppay").style.display = "none";
            }           
            function stealcar() {
                document.getElementById("storyimg").src = "images/baitman stole a car.png";
                document.getElementById("inshoppay").style.display = "none";
            }          
            function steal() {
                document.getElementById("storyimg").src = "images/da_police_baitman.png";
                document.getElementById("inshop1").style.display = "none";
                document.getElementById("inshopsteal").style.display = "block";
            }
                function fightshop() {
                    document.getElementById("storyimg").src = "images/Sloss mot politiet.png";
                    document.getElementById("inshopsteal").style.display = "none";
                    document.getElementById("fight").style.display = "block";
                }
                function surrendershop() {
                    document.getElementById("storyimg").src = "images/Bateman in prison.png";
                    document.getElementById("inshopsteal").style.display = "none";
                    document.getElementById("prison").style.display = "block";
                }
