## 更改EP状态

### 1. 开启EP

1. AS > EP > SvcSts Changed
2. EP Sts -> WEP, ConsDps -> true
3. 更改NVM的值
   - 非CE用户:  WepDiagRegUsr               1
   - CE用户:  WepDiagRegCe                     1

### 2. 更改EP发送 job 时的状态

#### 2.1 OK

```javascript
var mid = "M_EP_STRT_RES";
var pid = new Array();
var info = new Object();
pid.push("P_JOB");
info.Job = new Object();
info.Job.Id=0;
pid.push("P_STATE");
info.State = new Object();
info.State.Sts = "COMP";
pid.push("P_SUBFUNC");
info.SUBFUNC = new Object();
info.SUBFUNC.Tp = "- select -";
pid.push("P_FUNC");
info.Func = new Object();
info.Func.Tp = "DIAGREQUSR";
pid.push("P_DTL");
info.Dtl = new Object();
info.Dtl.Sts = "- select -";
pid.push("P_ERR");
info.Err = new Object();
info.Err.Tp = "SYS_FAIL";
info.Err.C = 123;
info.Err.L = 234;
pid.push("P_CNCL");
info.Cncl = new Object();
info.Cncl.Flg = true;
var data = new top.As.AsEventData(mid, pid, info);
var ev   = new top.Cmn.UiEvent("IND", "EP", data, null);
top.Cmn.FpRcvEvt(ev);


var mid = "M_EP_STS";
var pid = new Array();
var info = new Object();
pid.push("P_JOB");
info.Job = new Object();
info.Job.Id=0;
pid.push("P_STATE");
info.State = new Object();
info.State.Sts = "COMP";
pid.push("P_SUBFUNC");
info.SUBFUNC = new Object();
info.SUBFUNC.Tp = "- select -";
pid.push("P_FUNC");
info.Func = new Object();
info.Func.Tp = "DIAGREQUSR";
pid.push("P_DTL");
info.Dtl = new Object();
info.Dtl.Sts = "- select -";
pid.push("P_ERR");
info.Err = new Object();
info.Err.Tp = "SYS_FAIL";
info.Err.C = 123;
info.Err.L = 234;
pid.push("P_CNCL");
info.Cncl = new Object();
info.Cncl.Flg = true;
var data = new top.As.AsEventData(mid, pid, info);
var ev   = new top.Cmn.UiEvent("IND", "EP", data, null);
top.Cmn.FpRcvEvt(ev);
```
