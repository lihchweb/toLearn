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
- 输出格式化的字符串
  - 使用`%`表示
  - 使用`format()`表示
  - `f-string`:使用以 f 开头的字符串.规则是：{xx} 里面的值会被变量替换

常见的占位符：
占位符 | 替换内容
------------ | -------------
%d | 整数
%f | 浮点数
%s | 字符串
%x | 十六进制整数

格式化整数和浮点数还可以指定是否补0和整数与小数的位数：
```python
>>> '%2d-%02d' % (3, 1)
' 3-01'

>>> '%.2f' % 3.1415926
'3.14'

# 如果字符串里包含 % 是个普通字符，这时候要转义

>>>'growth rate: %d %%' % 7
'growth rate: 7 %'
```

使用`format()`格式化：
```python
>>> 'Hello, {0}, 成绩提升了 {1:.1f}%'.format('小红', 17.256)
'Hello, 小红, 成绩提升了 17.3%'
```
使用`f-sting`格式化：
```python
>>> r = 2.5
>>> s = 3.14 * r ** 2
>>> print(f'The area of a oricle with radius {r} is {s:.2f}')
The area of a oricle with radius 2.5 is 19.62
```


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

>>> 'hello, %s'%'world'
'hello, world'

>>> 'Hi,%s, you have $%d.' % ('jack', 100000)
'Hi, Michael, you have $1000000.'

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


## 代码理解
```python
s1 = 72
s2 = 85
r = (85-72) / 72 * 100
print('小明成绩提升了 %.1f%%' % r)
print('小明成绩提升了{0:.1f}%'.format(r))
print(f'小明成绩提升了{r:.1f}%')
```

## list和tuple

它们是python内置的的数据类型：列表。

一个是可变的，一个是不可变的。tuple的不变意味着列表内的元素指向永远不变。

他们一些共通的方法：
 - len()
 - 下标访问: l[1]
 - 空列表的表示方法: [] 和 ()


其中list拥有以下等方法：
 - append():添加
 - pop()：可传参
 - remove():移除匹配的元素



