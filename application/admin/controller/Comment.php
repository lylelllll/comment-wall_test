<?php
namespace app\admin\controller;

class Comment extends Base{
    //TODO:以下方法有待增加参数验证
    /**
     * Notes:获取信息列表
     * User: charl
     * Date: 2020/3/29
     * Time: 13:49
     */
    public function index()
    {
        if(request()->isPost())
        {
            $limit = input('limit')?input('limit'):10;
            $comment = new \app\common\model\Comment();
            $res = $comment->order('create_time','desc')->paginate($limit);
            return json($res);
        }
        return view();
    }

    /**
     * Notes:审核
     * User: charl
     * Date: 2020/3/29
     * Time: 13:49
     */
    public  function audit()
    {
        $id = input('id');
        $audit = input('audit');
        $comment = \app\common\model\Comment::find($id);
        $comment->is_audit = $audit;
        $res = $comment->save();
        if($res)
        {
            return json($res);
        }else{
            return json(['msg'=>'审核操作异常'],500);
        }
    }



    //提交评论
//    public function commentPost()
//    {
//
//    }




}