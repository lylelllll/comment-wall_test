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
    elem: '#LAY-app-system-order'
    ,url: "index"//layui.setter.base + 'json/workorder/demo.js' //模拟接口
    ,method:'POST'
    // ,defaultToolbar: ['filter', 'print', 'exports']
    ,parseData: function(res){
      console.log(res);
      return {
        "code": 1, //解析接口状态
        "msg": 'success', //解析提示文本
        "count": res.total, //解析数据长度
        "data": res.data //解析数据列表
      };
    }
    ,cols: [[
      {type: 'numbers', fixed: 'left'}
      ,{field: 'id', width: 80, title: 'ID', sort: true}
      ,{field: 'content', width: 100, title: '内容'}
      ,{field: 'like_count', width: 70, title: '赞数量', align: 'center'}
      ,{field: 'is_audit', width: 150, title: '是否过审', templet: '#buttonTpl', minWidth: 80, align: 'center'}
      ,{field: 'nickname', width: 80, title: '昵称', align: 'center', sort: true}
      // ,{field: 'state', title: '报名状态', templet: '#buttonTpl', minWidth: 80, align: 'center', sort: true}
      // ,{title: '操作', align: 'center', fixed: 'right', toolbar: '#table-system-order', minWidth: 150}
    ]]

    ,page: true
    ,limit: 10
    ,limits: [10, 15, 20, 25, 30]
    ,text: '对不起，加载出现异常！'
    ,done: function(){
      element.render('progress')
    }
  });



  table.render({
    elem: '#LAY-app-system-order-check'
    ,url: "/event/xclback/public/index.php/index/home/sign_haschecklist"//layui.setter.base + 'json/workorder/demo.js' //模拟接口
    ,cols: [[
      // {type: 'numbers', fixed: 'left'}
      // ,{field: 'orderid', width: 100, title: '工单号', sort: true}
      // ,{field: 'attr', width: 100, title: '业务性质'}
      // ,{field: 'title', width: 100, title: '工单标题', width: 300}
      // ,{field: 'progress', title: '进度', width: 200, align: 'center', templet: '#progressTpl'}
      // ,{field: 'submit', width: 100, title: '提交者'}
      // ,{field: 'accept', width: 100, title: '受理人员'}
      // ,{field: 'state', title: '工单状态', templet: '#buttonTpl', minWidth: 80, align: 'center'}
      // ,{title: '操作', align: 'center', fixed: 'right', toolbar: '#table-system-order'}
      {type: 'numbers', fixed: 'left'}
      ,{field: 'casid', width: 140, title: '学号', sort: true}
      ,{field: 'name', width: 100, title: '姓名'}
      ,{field: 'gender', width: 70, title: '性别', align: 'center'}
      ,{field: 'policy', width: 70, title: '政治面貌', align: 'center'}
      ,{field: 'campus', width: 70, title: '校区', align: 'center', sort: true}
      ,{field: 'institute', width: 150, title: '学院', align: 'center', sort: true}
      ,{field: 'major', title: '专业班级', width: 150, align: 'center'}
      ,{field: 'phone', width: 120, title: '手机', align: 'center'}
      ,{field: 'first_parent', width: 100, title: '第一志愿'}
      ,{field: 'second_parent', width: 100, title: '第二志愿'}
      ,{field: 'submitAssignment', width: 80, title: '服从分配'}
      ,{field: 'introself', title: '自我介绍'}
      ,{field: 'experience', title: '工作经历'}
      ,{field: 'state', title: '报名状态', templet: '#buttonTpl', minWidth: 80, align: 'center', sort: true}
      ,{field: 'pre_inscription',title: '预录取组别', align: 'center', fixed: 'right', minWidth: 150, sort: true}
    ]]
    ,page: true
    ,limit: 10
    ,limits: [10, 15, 20, 25, 30]
    ,text: '对不起，加载出现异常！'
    ,done: function(){
      element.render('progress')
    }
  });




  
  table.render({
    elem: '#LAY-app-system-order-gc'
    ,url: "/event/xclback/public/index.php/index/home/sign_list_gc"//layui.setter.base + 'json/workorder/demo.js' //模拟接口
    ,cols: [[
      // {type: 'numbers', fixed: 'left'}
      // ,{field: 'orderid', width: 100, title: '工单号', sort: true}
      // ,{field: 'attr', width: 100, title: '业务性质'}
      // ,{field: 'title', width: 100, title: '工单标题', width: 300}
      // ,{field: 'progress', title: '进度', width: 200, align: 'center', templet: '#progressTpl'}
      // ,{field: 'submit', width: 100, title: '提交者'}
      // ,{field: 'accept', width: 100, title: '受理人员'}
      // ,{field: 'state', title: '工单状态', templet: '#buttonTpl', minWidth: 80, align: 'center'}
      // ,{title: '操作', align: 'center', fixed: 'right', toolbar: '#table-system-order'}
      {type: 'numbers', fixed: 'left'}
      ,{field: 'casid', width: 140, title: '学号', sort: true}
      ,{field: 'name', width: 100, title: '姓名'}
      ,{field: 'gender', width: 70, title: '性别', align: 'center'}
      ,{field: 'policy', width: 70, title: '政治面貌', align: 'center'}
      ,{field: 'campus', width: 80, title: '校区', align: 'center', sort: true}
      ,{field: 'institute', width: 150, title: '学院', align: 'center', sort: true}
      ,{field: 'major', title: '专业班级', width: 150, align: 'center'}
      ,{field: 'phone', width: 120, title: '手机', align: 'center'}
      ,{field: 'first_parent', width: 100, title: '第一志愿', sort: true}
      ,{field: 'second_parent', width: 100, title: '第二志愿', sort: true}
      ,{field: 'submitAssignment', width: 80, title: '服从分配'}
      ,{field: 'introself', title: '自我介绍'}
      ,{field: 'experience', title: '工作经历'}
      ,{field: 'state', title: '报名状态', templet: '#buttonTpl', minWidth: 80, align: 'center', sort: true}
      ,{title: '操作', align: 'center', fixed: 'right', toolbar: '#table-system-order', minWidth: 150}
    ]]
    ,page: true
    ,limit: 10
    ,limits: [10, 15, 20, 25, 30]
    ,text: '对不起，加载出现异常！'
    ,done: function(){
      element.render('progress')
    }
  });
  
  table.render({
    elem: '#LAY-app-system-order-ssl'
    ,url: "/event/xclback/public/index.php/index/home/sign_list_ssl"//layui.setter.base + 'json/workorder/demo.js' //模拟接口
    ,cols: [[
      // {type: 'numbers', fixed: 'left'}
      // ,{field: 'orderid', width: 100, title: '工单号', sort: true}
      // ,{field: 'attr', width: 100, title: '业务性质'}
      // ,{field: 'title', width: 100, title: '工单标题', width: 300}
      // ,{field: 'progress', title: '进度', width: 200, align: 'center', templet: '#progressTpl'}
      // ,{field: 'submit', width: 100, title: '提交者'}
      // ,{field: 'accept', width: 100, title: '受理人员'}
      // ,{field: 'state', title: '工单状态', templet: '#buttonTpl', minWidth: 80, align: 'center'}
      // ,{title: '操作', align: 'center', fixed: 'right', toolbar: '#table-system-order'}
      {type: 'numbers', fixed: 'left'}
      ,{field: 'casid', width: 140, title: '学号', sort: true}
      ,{field: 'name', width: 100, title: '姓名'}
      ,{field: 'gender', width: 70, title: '性别', align: 'center'}
      ,{field: 'policy', width: 70, title: '政治面貌', align: 'center'}
      ,{field: 'campus', width: 80, title: '校区', align: 'center', sort: true}
      ,{field: 'institute', width: 150, title: '学院', align: 'center', sort: true}
      ,{field: 'major', title: '专业班级', width: 150, align: 'center'}
      ,{field: 'phone', width: 120, title: '手机', align: 'center'}
      ,{field: 'first_parent', width: 100, title: '第一志愿', sort: true}
      ,{field: 'second_parent', width: 100, title: '第二志愿', sort: true}
      ,{field: 'submitAssignment', width: 80, title: '服从分配'}
      ,{field: 'introself', title: '自我介绍'}
      ,{field: 'experience', title: '工作经历'}
      ,{field: 'state', title: '报名状态', templet: '#buttonTpl', minWidth: 80, align: 'center', sort: true}
      ,{title: '操作', align: 'center', fixed: 'right', toolbar: '#table-system-order', minWidth: 150}
    ]]
    ,page: true
    ,limit: 10
    ,limits: [10, 15, 20, 25, 30]
    ,text: '对不起，加载出现异常！'
    ,done: function(){
      element.render('progress')
    }
  });
  
  

  //监听工具条
  table.on('tool(LAY-app-system-order)', function(obj){
    var data = obj.data;
    if(obj.event === 'edit'){
      var tr = $(obj.tr);
      layer.open({
        type: 2
        ,title: '审核'
        ,content: '/event/xclback/public/index.php/index/home/sign_listform?casid='+data.casid
        ,area: ['450px', '450px']
        ,btn: ['确定', '取消']
        ,yes: function(index, layero){
          var iframeWindow = window['layui-layer-iframe'+ index]
          ,submitID = 'LAY-app-workorder-submit'
          ,submit = layero.find('iframe').contents().find('#'+ submitID);

          //监听提交
          iframeWindow.layui.form.on('submit('+ submitID +')', function(data){
            var field = data.field; //获取提交的字段
            
            //提交 Ajax 成功后，静态更新表格中的数据
            $.ajax({
              url:'/event/xclback/public/index.php/index/home/sign_listform',
              type:'post',
              data:field,
              dataType:'json',
              success:function(res){
                console.log(res);
                if(res.code==1)
                {
                  layer.msg('更新成功',{icon:6,time:1000});
                }else{
                  layer.open({
                    title:'更新错误',
                    content:res.msg,
                    anim:6,
                    icon:5,
                  });
                }
                
              }

            });
            table.reload('LAY-app-system-order'); //数据刷新LAY-user-front-submit
            layer.close(index); //关闭弹层
          });  
          
          submit.trigger('click');
        }
        ,success: function(layero, index){
            console.log(index);
            console.log(layero);
        }
      });
    }else if(obj.event === 'download'){
        var tr = $(obj.tr);
          layer.open({
            type: 2
            ,title: '下载'
            ,content: '/event/xclback/public/index.php/index/home/download?casid='+data.casid
            ,area: ['450px', '450px']
            ,success: function(layero, index){
                // console.log(index);
                // console.log(layero);
            }
          });
    }
  });

  exports('workorder', {})
});