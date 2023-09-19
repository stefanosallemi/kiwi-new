$("#genBtn").click(function() {
    $('html,body').animate({
        scrollTop: $(".results").offset().top
    }, 'slow');
});

// Results
$('#form').on('submit', e => {
    e.preventDefault();

    var input = $('#input').val();
    var $results = $('#results');
    var items = StartupNameGenerator(input);
    $results.html('');
    items.forEach((item, idx) => {
        var $resultItem = $('<div class="result-item">').html(`<span>${item}</span>`);
        $resultItem.click(function() {
            copyToClipboard(item);
        });
        $results.append($resultItem);
    });
});

function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}
