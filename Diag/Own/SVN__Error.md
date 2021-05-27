### 1. Failed to run the WC DB work queue associated with 'D:\svn_new\8.XXXXXX"

> https://www.cnblogs.com/ANCAN-RAY/p/8961832.html

参考上述文章，主要步骤如下:

1. 进入.svn目录，清空svn的队列

```javascript
//可以使用git bash直接在.svn文件夹里操作
//1. 查看wc.db文件是否存在
//2. 执行sqlite3 命令查看数据库内容
sqlite3 wc.db "select * from work_queue"
//3. 清空work_queue表数据，然后查看是否清除完毕
sqlite3 wc.db "delete from work_queue"
//4. 有时间只清空work_queue还不够，还需要清除wc_lock
sqlite3 wc.db "delete from wc_lock"
```

2. 运行clean up 命令，再去执行后续操作即可。
