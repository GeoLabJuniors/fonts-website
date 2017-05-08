(function() {
            [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function(el) {
                new SelectFx(el);
            });
        })();
        
        
        
        $(".size").on("input change", function(){
            var size = $(this).val();
            $(this).parents(".font").children(".row").children(".font-example").children(".mgr0").children(".font-text").css("font-size", size+"em");
        })
        
        $(".weight").on("input change", function(){
            var weight = $(this).val();
            console.log(weight);
            $(this).parents(".font").children(".row").children(".font-example").children(".mgr0").children(".font-text").css("font-weight", weight);
        })
        
        $(".download-btn").mouseover(function(){
            $(this).parents(".font").children("div.font-hover").css("display", "block");
            $(this).css("opacity", "0");
        })
        
        $(".download-btn").mouseleave(function(){
            $(this).parents(".font").children("div.font-hover").css("display", "none");
            $(this).css("opacity", "1");
        })