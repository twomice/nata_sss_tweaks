(function ($) {
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
      $('input[type="radio"][id^="edit-submitted-sss-qualifications-"]:not(:checked)').closest('div').hide();
      $('input[type="radio"][id^="edit-submitted-sss-qualifications-"]:checked').hide();

      switch (Drupal.settings.nata_sss_tweaks.step) {
        case 'step_3':
        case 'step_4':
        $('input[type="radio"][id*="-civicrm-1-case-1-"]:not(:checked)').closest('div').hide();
        $('input[type="radio"][id*="-civicrm-1-case-1-"]:checked').hide();
      }

      // FIXME: hardcoded field IDs.
      $('select[id$="cg14-custom-79"], select[id$="cg14-custom-80"]').each(function(idx, el){
        el = $(el)
        el.replaceWith(el.find('option:selected').text());
      });

      $('input[readonly="readonly"]').css({'border': 'none'});
    }
  };
}(jQuery));
