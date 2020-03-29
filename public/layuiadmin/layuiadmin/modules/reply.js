/**

 @Name：layuiAdmin 工单系统
 @Author：star1029
 @Site：http://www.layui.com/admin/
 @License：GPL-2
    
 */


layui.define(['table', 'form', 'element'], function(exports){
  var $ = layui.$
  ,table = layui.table
  ,form = layui.form
  ,element = layui.element;

  table.render({
    elem: '#LAY-app-system-reply'
    ,url: "/event/xclback/public/index.php/index/home/getreplylist"//layui.setter.base + 'json/workorder/demo.js' //模拟接口
    ,cols: [[
      {type: 'numbers', fixed: 'left'}
      ,{field: 'casid', width: 140, title: '学号', sort: true,fixed:'left'}
      ,{field: 'name', width: 100, title: '姓名',fixed:'left'}
      ,{field: 'ontime',width: 70, title: '按时面试', align: 'center', sort: true,templet: '#sexTpl'}
      ,{field: 'reply_content', title: '回复内容'}
      ,{field: 'create_time', title: '回复时间',sort: true,width:200}
    ]]
    // ,page: true
    // ,limit: 10
    ,limits: [10, 15, 20, 25, 30]
    ,text: '对不起，加载出现异常！'
    ,done: function(){
      element.render('progress')
    }
  });

  exports('reply', {})
});