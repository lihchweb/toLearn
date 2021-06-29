## 1. 基础知识

cmd到某个文件夹
- 打开该文件夹，双击输入 cmd，回车
- 比如目录在d/python下，则 输入 d: 回车，然后cd python回车即可。

常用操作：

- 切换磁盘：d:（进入 d 盘）
- 切换磁盘和目录：cd /d d:/test（进入 d 盘 test 文件夹）
- 进入文件夹：cd \test1\test2（进入 test2 文件夹）
- 返回根目录：cd \
- 回到上级目录：cd ..
- 新建文件夹：md test

- 显示目录中文件列表：dir
- 显示目录结构：tree d:\test（d 盘 test 目录）
- 显示当前目录位置：cd
- 显示指定磁盘的当前目录位置：cd d:


https://www.liaoxuefeng.com/wiki/1016959663602400/1017032074151456


---

- 区分换行`'''`前加`r`的区别: 字符串里的字符就不需要转义了
- `ord()`函数获取字符的整数表示
- `chr()`函数把编码转换为对应的字符
- 用`b'ABC'`这种方式来表示bytes类型的的数据
  - 使用Unicode表示的`str`通过使用`encode()`方法可以编码为指定的bytes
  - bytes变为Unicode表示的`str`通过使用`decode()`方法。
- 计算str包含多少个字符，可以用`len()`函数




```python
>>> ord('国')
22269

>>> chr(22269)
'国'

>>> 'ABC'.encode('ascii')
b'ABC'
>>> '中文'.encode('utf-8')
b'\xe4\xb8\xad\xe6\x96\x87'
>>> '中文'.encode('ascii')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
UnicodeEncodeError: 'ascii' codec can't encode characters in position 0-1: ordinal not in range(128)

>>> b'ABC'.decode('ascii')
'ABC'
>>> b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8')
'中文'

```

在计算机内存中，统一使用Unicode编码，当需要保存到硬盘或者需要传输的时候，就转换为UTF-8编码。

用记事本编辑的时候，从文件读取的UTF-8字符被转换为Unicode字符到内存里，编辑完成后，保存的时候再把Unicode转换为UTF-8保存到文件：

![image](https://user-images.githubusercontent.com/24636279/123756952-0a361800-d8f0-11eb-98f9-4d059d789c39.png)


浏览网页的时候，服务器会把动态生成的Unicode内容转换为UTF-8再传输到浏览器：

![image](https://user-images.githubusercontent.com/24636279/123756986-14f0ad00-d8f0-11eb-9854-7ffcbfc04041.png)


**在最新的Python 3版本中，字符串是以Unicode编码的，也就是说，Python的字符串支持多语言，**


> 由于Python的字符串类型是str，在内存中以Unicode表示，一个字符对应若干个字节。如果要在网络上传输，或者保存到磁盘上，就需要把str变为以字节为单位的bytes


**Python源代码也是一个文本文件，所以，当你的源代码中包含中文的时候，在保存源代码时，就需要务必指定保存为UTF-8编码。当Python解释器读取源代码时，为了让它按UTF-8编码读取，我们通常在文件开头写上这两行：**

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
```

第一行注释是为了告诉Linux/OS X系统，这是一个Python可执行程序，Windows系统会忽略这个注释；

第二行注释是为了告诉Python解释器，按照UTF-8编码读取源代码，否则，你在源代码中写的中文输出可能会有乱码。
