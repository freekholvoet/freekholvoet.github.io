/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

$(document).ready(function() {

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);

      availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;

      // Show the dropdown btn
      $btn.removeClass("hidden");
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    // Check both breaks array and actual hidden items
    while ($hlinks.children().length > 0 && (breaks.length === 0 || availableSpace > breaks[breaks.length - 1])) {
      
      // Move the item to the visible list
      if ($vlinks_persist_tail.children().length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
      
      // Pop from breaks if it has items
      if (breaks.length > 0) {
        breaks.pop();
      }
      
      // Recalculate available space after adding item
      availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
      
      // Stop if we've run out of space
      if ($vlinks.width() > availableSpace) {
        // Oops, this last item doesn't fit, move it back
        if ($vlinks_persist_tail.children().length > 0) {
          $vlinks.children("*:not(.persist)").last().prependTo($hlinks);
        } else {
          $vlinks.children().last().prependTo($hlinks);
        }
        break;
      }
    }

    // Hide the dropdown btn if hidden list is empty
    if ($hlinks.children().length === 0) {
      $btn.addClass('hidden');
      $btn.removeClass('close');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Show button if there are any hidden items (check both breaks array and actual DOM)
  if ((breaks.length > 0 || $hlinks.children().length > 0) && $btn.hasClass('hidden')) {
    $btn.removeClass('hidden');
  }

  // update masthead height and the body/sidebar top padding
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
screen.orientation.addEventListener("change", function () {
  updateNav();
});

$btn.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();

}); // End document.ready
