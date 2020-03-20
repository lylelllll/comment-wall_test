<?php


namespace app\common\validate;


use think\Validate;

class Comment extends Validate{
    protected $rule = [
        'nickname'  =>  'require|max:15',
        'content'  =>  'require|max:520',
    ];

    protected $message = [
        'nickName.require'  =>  '昵称未填~',
        'nickName.max'  =>  '昵称限制在15字符内！', ,
        'contents.require'  =>  '留言的内容未填~',
        'contents.max'  =>  '留言的内容限制在520字符内！',
    ];

}