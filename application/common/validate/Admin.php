<?php


namespace app\common\validate;


use think\Validate;

class Admin extends Validate
{
    protected $rule =[
        'username|管理员账号'=>'require',
        'password|密码'=>'require',
        'conpass|确认密码'=>'require|confirm:password',
        ];

    //登录验证场景
    public  function sceneLogin()
    {
        return $this->only(['username','password']);
    }
    //注册验证场景
    public function sceneRegister()
    {
        return $this->only(['username','password','conpass'])
            ->append('username','unique:admin');//用户名是唯一的

    }
    //重置密码验证场景
    public function sceneReset()
    {
        return $this ->only(['username','password']);
    }
}