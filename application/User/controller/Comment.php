<?php
namespace app\admin\controller;

class Comment extends Base{
    //展示评论
    public function addComment()
    {
        if (request()->isAjax()){
            $data = [
                'catename'=>input('post.catename'),
                'sort'=>input('post.sort')
            ];
            $result = model('Cate')->add($data);
            if ($result == 1){
                $this->success('栏目添加成功','admin/cate/list');
            }else{
                $this->error($result);
            }

        }

    }

    }
    //提交评论
    public function commentPost(){

    }




}