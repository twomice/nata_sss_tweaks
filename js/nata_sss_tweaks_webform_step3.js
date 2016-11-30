(function ($) {
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
      // Set membership fee to 100 if Renewal Code is defined.
      if ($('input#edit-submitted-civicrm-1-case-1-cg14-custom-86').val()) {
        $('#edit-submitted-civicrm-2-membership-1-membership-fee-amount-2').click();
      }
    }
  };
}(jQuery));
