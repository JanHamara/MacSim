$( document ).ready(function() {
    icon_holder = $('.holder-item');

    icon_holder.on('mouseenter', function(self) {
        iconEnter(self.currentTarget);
    });

    icon_holder.on('mouseleave', function(self) {
        iconLeave(self.currentTarget);
    });

    function iconEnter(target) {
        main_icon = target;

        if (main_icon.nextElementSibling !== null) {
            next_icon_1 = main_icon.nextElementSibling;

            if (next_icon_1.nextElementSibling !== null) {
                next_icon_2 = next_icon_1.nextElementSibling;
            }
        }

        if (main_icon.previousElementSibling !== null) {
            prev_icon_1 = main_icon.previousElementSibling;

            if (prev_icon_1.previousElementSibling !== null) {
                prev_icon_2 = prev_icon_1.previousElementSibling;
            }
        }

        main_icon.style.transform = "translate(0, -12px) scale(1.25)";

        if (next_icon_1) {
            next_icon_1.style.transform = "translate(0, -8px) scale(1.2)";
        }
        if (prev_icon_1) {
            prev_icon_1.style.transform = "translate(0, -8px) scale(1.2)";
        }
        if (next_icon_2) {
            next_icon_2.style.transform = "translate(0, -4px) scale(1.1)";
        }
        if (prev_icon_2) {
            prev_icon_2.style.transform = "translate(0, -4px) scale(1.1)";
        }

        for (i = 0; i < icon_holder.length; i++) {
            icon_holder[i].style.width = "4em"
        }
    }

    function iconLeave(target) {
        main_icon = target;

        if (main_icon.nextElementSibling !== null) {
            next_icon_1 = main_icon.nextElementSibling;

            if (next_icon_1.nextElementSibling !== null) {
                next_icon_2 = next_icon_1.nextElementSibling;
            }
        }

        if (main_icon.previousElementSibling !== null) {
            prev_icon_1 = main_icon.previousElementSibling;

            if (prev_icon_1.previousElementSibling !== null) {
                prev_icon_2 = prev_icon_1.previousElementSibling;
            }
        }

        main_icon.style.transform = "scale(1)";

        if (next_icon_1) {
            next_icon_1.style.transform = "scale(1)";
        }
        if (prev_icon_1) {
            prev_icon_1.style.transform = "scale(1)";
        }
        if (next_icon_2) {
            next_icon_2.style.transform = "scale(1)";
        }
        if (prev_icon_2) {
            prev_icon_2.style.transform = "scale(1)";
        }

        for (i = 0; i < icon_holder.length; i++) {
            icon_holder[i].style.width = "3.5em"
        }
    }
});