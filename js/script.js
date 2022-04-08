var words = ['Developer'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 150;

var wordflick = function() {
    setInterval(() => {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        } else {
            if (offset == 0) {
                forwards = true;
                i++;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substring(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }
        $('.word').text(part);
    }, speed)
}

$(document).ready(function() {
    wordflick();
    $('.Introduction').waypoint(function() {
        $('.Introduction').find('button').css({
            position: 'relative',
            animation: 'BottomRight 5s'
        })
    }, { offset: '50%' })
});


function onClick(section) {
    var sections = ["Home", "About", "Services", "Skills", "Contact"]
    for (var i = 0; i < sections.length; i++) {
        if ($(`a.nav-link:contains(${sections[i]})`).hasClass('active')) {
            $(`a.nav-link:contains(${sections[i]})`).removeClass('active')
        }
    }
    var section = "a.nav-link:contains('" + section + "')"
    $(section).addClass('active')
    $(".navbar-toggler-icon").click()
}

$('.row:nth-child(2) .col-md-6:nth-child(2) .card:nth-child(1) svg circle:nth-child(2)').delay(1000).queue(function() {
    $(this).css('stroke-dashoffset', 'calc(440 - (440*80)/100)')
})

$('.row:nth-child(2) .col-md-6:nth-child(1) .card:nth-child(1) svg circle:nth-child(2)').delay(1000).queue(function() {
    $(this).css('stroke-dashoffset', 'calc(440 - (440*80)/100)')
})

$('.row:nth-child(1) .col-md-4:nth-child(1) .card:nth-child(1) svg circle:nth-child(2)').delay(1000).queue(function() {
    $(this).css('stroke-dashoffset', 'calc(440 - (440*90)/100)')
})

$('.row:nth-child(1) .col-md-4:nth-child(2) .card:nth-child(1) svg circle:nth-child(2)').delay(1000).queue(function() {
    $(this).css('stroke-dashoffset', 'calc(440 - (440*70)/100)')
});

$('.row:nth-child(1) .col-md-4:nth-child(3) .card:nth-child(1) svg circle:nth-child(2)').delay(1000).queue(function() {
    $(this).css('stroke-dashoffset', 'calc(440 - (440*70)/100)')
});

$('.row:nth-child(1) .col-md-6:nth-child(1) .card:nth-child(1) svg circle:nth-child(2)').delay(1000).queue(function() {
    $(this).css('stroke-dashoffset', 'calc(440 - (440*70)/100)')
});





document.addEventListener('scroll', function() {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        $('.contactButton').css({
            visibility: "visible"
        })
    } else {
        $('.contactButton').css({
            visibility: "hidden"
        })
    }
})