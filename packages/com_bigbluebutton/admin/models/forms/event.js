/**
 * @package    BigBlueButton
 *
 * @created    17th July, 2018
 * @author     Jibon L. Costa <jiboncosta57@gmail.com>
 * @website    https://www.hoicoimasti.com
 * @copyright  Copyright (C) 2018 Hoicoi Extension. All Rights Reserved
 * @license    MIT
 */

// Initial Script
jQuery(document).ready(function()
{
	var timezone_vvvvvvx = jQuery("#jform_timezone input[type='radio']:checked").val();
	vvvvvvx(timezone_vvvvvvx);

	var emails_vvvvvvy = jQuery("#jform_emails").val();
	vvvvvvy(emails_vvvvvvy);
});

// the vvvvvvx function
function vvvvvvx(timezone_vvvvvvx)
{
	// set the function logic
	if (timezone_vvvvvvx == 0)
	{
		jQuery('#jform_event_timezone').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_event_timezone').closest('.control-group').hide();
	}
}

// the vvvvvvy function
function vvvvvvy(emails_vvvvvvy)
{
	// set the function logic
	if (emails_vvvvvvy.length >= 5)
	{
		jQuery('#jform_send_invitation_email').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_send_invitation_email').closest('.control-group').hide();
	}
}

// the isSet function
function isSet(val)
{
	if ((val != undefined) && (val != null) && 0 !== val.length){
		return true;
	}
	return false;
} 
