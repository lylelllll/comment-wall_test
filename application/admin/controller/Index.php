<?php

namespace app\admin\controller;

use think\Controller;

class Index extends Controller
{
    //重复登录过滤
    public function initialize()
    {
        if (session('?admin.id')){
            $this->redirect('admin/home/index');
        };
    }

    //后台登陆
    public function login()
     {
         if (request()->isAjax()){
             $data = [
                 'username'=>input('post.username'),
                 'password'=>input('post.password')
             ];
             $result = model('Admin')->login($data);
             if ($result == 1){
                 $this->success('登陆成功','admin/home/index');
             }else{
                 $this->error($result);
             }
         }
       return view();
     }

    //注册
    public function register(){
        if (request()->isAjax()){
            $data = [
                'username'=>input('post.username'),
                'password'=>input('post.password'),
                'conpass'=>input('post.conpass')//确认密码
            ];
            $result = model('Admin')->register($data);
            if($result == 1){
                $this->success('注册成功','admin/index/login');
            }else{
                $this->error($result);
            }
        }
        return view();
    }

    //重置密码
    public function reset()
    {
        $data = [
            'username'=>input('post.username'),
            'password'=>input('post.password'),
        ];
        $result = model('admin')->reset($data);
        if ($result == 1){
            $this->success('密码重置成功','admin/index/login');
        }else{
            $this->error($result);
        }
    }



}
