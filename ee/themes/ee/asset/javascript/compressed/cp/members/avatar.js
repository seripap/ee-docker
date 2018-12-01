/*!
 * This source file is part of the open source project
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */
"use strict";!function(i){i(document).ready(function(){i("input[name='avatar_picker']").each(function(){i(this).is(":checked")||i(this).parent().next().hide()}),i('input[name="avatar_picker"]').click(function(){i(this).is(":checked")&&(i(this).parent().next().show(),i("input[name='avatar_picker']").each(function(){i(this).is(":checked")||i(this).parent().next().hide()}))}),i("li.remove a").click(function(t){i(this).closest("figure").find('input[type="hidden"]').val(""),i(this).closest("fieldset").hide(),t.preventDefault()}),i(".avatarPicker").FilePicker({ajax:!1,filters:!1,callback:function(i,t){i instanceof jQuery?(i=i.find("img"),t.modal.find(".m-close").click(),t.input_value.val(i.attr("alt")),t.input_img.html("<img src='"+i.attr("src")+"' />"),t.input_img.parents("fieldset").show()):(t.modal.find(".m-close").click(),t.input_value.val(i.file_id),t.input_name.html(i.file_name),t.input_img.html("<img src='"+i.path+"' />"),t.input_img.parents("fieldset").show())}})})}(jQuery);