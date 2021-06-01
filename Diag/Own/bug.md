## 1. dc673Set页面checkbox只能点击一次，随后就hang掉

> 原因：代码里设置了画面迁移时的参数'LEAVEFRAME'

```
//不设置该参数
 DiagCommonRegistButton(item.tbl, null, dc673setCheckedSts, false, 'LEAVEFRAME');
 //改为：
 DiagCommonRegistButton(item.tbl, null, dc673setCheckedSts, false);
```

## 2. dc673页面 禁用HOME失效

> 原因：未在 FrmStyleInfo.js 里设置让HOME失效的样式信息

```
{
  'DC673_frm': {'transType': 'Slide', 'dvcCtrlDisp': 'Alert'},
  'DC673Set_frm': {'transType': 'Dissolve ', 'dvcCtrlDisp': 'Alert'},
}
```

其中 transType 表示 关闭该页面的方式， 比如:
- 为 Slide 时，返回按钮 为 '<'
- 为 Dissolve 时，673Set页面关闭时的icon为 'X'

同时设置如下：
```
  top.Cmn.KeySetCasualProc('KEY_MENU', new top.Cmn.UiActionProc(DiagCommonHandleHomeKeyTapped, null));
```
