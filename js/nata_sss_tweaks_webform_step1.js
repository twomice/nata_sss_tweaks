(function ($) {
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
      for (i in settings.nata_sss_tweaks.onpage_validate_yes_formkeys) {
        $('input[type="radio"][name$="' + settings.nata_sss_tweaks.onpage_validate_yes_formkeys[i] + ']"]').change(nata_sss_onpage_validate_yes);
        $('input[type="radio"][name$="' + settings.nata_sss_tweaks.onpage_validate_yes_formkeys[i] + ']"]').change();
      }
    }
  };

  var nata_sss_onpage_validate_yes = function(e) {
    var radio = $(this);
    if (radio.val() == 0 && radio.is(':checked')) {
      radio.siblings('label').append('<div class="nata_sss_onpage_validate_yes_warning">' + Drupal.t('Note: This action is required for the Safe Sports School award.') + '</div>');
    }
    else {
      var name = radio.attr('name');
      $('input[type="radio"][name="' + name + '"][value="0"]').siblings('label').find('div.nata_sss_onpage_validate_yes_warning').remove();
    }
  }
}(jQuery));
