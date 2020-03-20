<?php

namespace app\common\model;

use think\Model;
use think\model\concern\SoftDelete;

class Admin extends Model
{
    //软删除
    use SoftDelete;

    //登录校检
    public function  login($data)
    {
        $validate = new \app\common\validate\Admin();
        if (!$validate->scene('login')->check($data)){
            return $validate->getError();
        }
        $data['password'] = md5($data['password']);
        $result = $this->where($data)->find();
        if($result){
            //判断用户是否可用
            if ($result['status']!= 1) {
                return '用户已被禁用';//1是可用，0是禁用
            }
            $sessionData = [
                'id'=>$result['id'],
            ];
            session('admin',$sessionData);
            return 1;
        }else{
            return '用户名或者密码错误';
        }
    }
    //注册账户
    public function  register($data)
    {
        $validate = new \app\common\validate\Admin();
        if (!$validate->scene('register')->check($data)){
            return $validate->getError();
        }
        $data['password'] = md5($data['password']);
        $result = $this->allowField(true)->save($data);
        if($result){
            return 1;
        }else{
            return '注册失败';
        }

    }
    //重置密码
    public function reset($data){
   $validate = new  \app\common\validate\Admin();
   if (!$validate->scene('reset')->check($data)){
       return $validate->getError();
   }
        $newPassword = md5($data['password']);
        $result = $this->where($data['username'])->update(['password'=>$newPassword]);
   if ($result){
       return 1;
   }else{
       return '重置密码失败';
   }
    }
}
