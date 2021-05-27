# 项目目录

## 项目目录

- as
  - asDiag.js
    - asReq: 发送脚本请求
    - asGet：获取数据
    - asSet：设置数据
  - asDM.js
- cgi
  - .cgi: 用来模拟响应response
  - .pl: 用来模拟机器或者用纸等的固定信息
- common
  - GUI库
  - lib函数
- CSCWidget： https://alexandrite-fb.fujifilm.com/git/login?next=/projects/OCDOC/repos/lui_cscwidget/browse/cscwidget 
  - own
- dbg
- diag
- mgr
- msg
- rc
- utility

## Diag代码介绍

- DiagCommon.js
- DiagCmnSimpRun.js
- DiagCmnSimpAlert.js
- 共同feature
- 入口画面
  - KO登录：DeviceControl > 设定 > 保守：DeviceSupport_frm （入口菜单)
  - CE登录：DeviceControl > 设定 > 保守 > 保守诊断 > 诊断： DiagCEList_frm （入口菜单）
- 看DC1244和DC1239页面

> CmnCePwd_frm 登陆画面 密码 6789
>
> Launcher → aaa → KO login

# 开发流程

- DC开发
  - 式样书:  即需求文档。https://alexandrite.fujixerox.co.jp/git/scm/ocdoc/lui_dialog.git 
  - TSD：测试脚本
  - workflow：流程图
  - DD
    - workflow：流程图
    - 详细设计：式样书
  - jvos
    - 生成物
      - 文言
      - img
      - css
      - rc_js
    - 结构
      - header
      - main
      - info
        - up
        - bottom
      - inner
      - stock
  - coding
    - UT：单元测试
    - 对照checkList自检
    - review
  - IFT：给测试人员进行
  - 打patch给bob



# 开发文档

- 式样书：  https://alexandrite.fujixerox.co.jp/git/scm/ocdoc/lui_dialog.git 
- IF表：接口文档    \\10.87.64.223\share\既存資料\ui_IF\IF\3.06 Diag 
- TSD：测试脚本
- workflow
- DD
- jvos
- code
- FF



# 开发环境

- jvos开发环境
  - uilcw_dev
  - jvos_dev
- chrome SIM环境
  - view
  - log
  - debug
    - FrmMgr
    - As
    - Cfglib
- test
  - gimlet：虚拟机模拟
  - gismo：软件+硬件的模拟

# 测试

- UT
  - .pl：初始配置
    - asLib：数据仓库
    - asLibCfg：更新机器的配置信息
  - .cgi：模拟job response
  - event
    - 明确Mid
    - dbg页面
    - 继续查找搜索

# 关于数据

- 数据
  - UsrDat：画面内部使用
  - AS：全局使用的数据：asDiag.js
  - frmMsg：top.Cmn.FrmGetMsg()，返回以下
    - from
    - Msg
  - 全局配置
    - .pl：asLibCfg.pl：
      - top.Cmn.LibGetExist('DC1239')
      - top.Cmn.LibGetCfgPGS2135SGP('DIAG_DC1244_RANGE');
    - NVM



# 关于控件

- 常用控件
  - Button
  - Header
  - Indicator
  - InputField
  - Popover：switching ➡switchitem。弹框
  - Popup：整个画面弹出的
  - TableRow
    - ReadOnlyTableRow
    - ...
  - SpinBox
  - Table
  - ToggleSwitch
  - Text
    - GuideMessage
      - static： LibViewUtilGetStaticText 
      - Dynamic： LibViewUtilGetHalfDynamicText  动态
- 查看控件的option和实例方法
  - 文档
  - 代码
    - cscsCall
    - opts
    - inherit



# 关于资源

- 资源
  - JVOS
    - msg
    - rc
      - css
      - js
        - 控件option
        - HTMLStr
    - img
  - frmidDB
    - Frmid.js
    - FrmStyleInfo.js



# 资源整合标准

- 资源整合标准
  - 入口条件
  - 画面迁移
  - 具体的job
    - 参数
    - 功能
    - api
    - 是否含有禁则，若有则详细描述
  - 各个画面的逻辑

​	
