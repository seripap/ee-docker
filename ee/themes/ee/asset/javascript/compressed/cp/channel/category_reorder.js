/*!
 * This source file is part of the open source project
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */
!function(e){"use strict";e(document).ready(function(){e(".nestable").nestable({listNodeName:"ul",listClass:"tbl-list",itemClass:"tbl-list-item",rootClass:"nestable",dragClass:"drag-tbl-row",handleClass:"reorder",placeElement:e('<li><div class="tbl-row drag-placeholder"><div class="none"></div></div></li>'),expandBtnHTML:"",collapseBtnHTML:"",maxDepth:10}).on("change",function(){e.ajax({url:EE.cat.reorder_url,data:{order:e(".nestable").nestable("serialize")},type:"POST",dataType:"json",error:function(t,l,i){0==e("body > .banner").size()&&e("body").prepend(EE.alert.reorder_ajax_fail)}})}),e(".tbl-list .check-ctrl input").click(function(){e(this).parents(".tbl-list-item").first().find(".tbl-list .check-ctrl input").prop("checked",e(this).is(":checked")).trigger("change"),e(this).is(":checked")||e(this).parents(".tbl-list-item").find("> .tbl-row > .check-ctrl input").prop("checked",!1).trigger("change")})})}(jQuery);