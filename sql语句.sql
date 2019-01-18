-- 查询语句的语法：select *|字段列表 from 表列表 where 条件   查询可以返回一个结果集(表)
-- *代表当前表的所有字段
-- 1.查询mytalbe中的所有数据
select * from mytable
-- 2.查询mytable中的id和姓名
select id,name from mytable;
-- 3.带条件的查询
select * from mytable where id =3
select * from mytable where age < 20
-- 4.创建多条件查询 not>! and>&& or>||
select * from mytable where age < 20 and gender = 0

-- 增加删除和修改是返回受影响的行数

-- 增加语句的语法：insert [into] 表名[(字段1，字段2，...)] values(值1，值2...)
-- Column count doesn't match value count at row 1:如果表名后没有指定字段那么必须设置对应的数量的值
insert into mytable values(5,'lili',30,0)
-- 如果有标识列，那么标识列一般可以给null值，如果给null,系统会自动生成
insert into mytable values(null,'lili',30,0)
-- 指定需要添加数据的字段
insert into mytable(name,age,gender) values('lili123',30,0)
-- 对于可以为null的字段可以不赋值
insert into mytable(name) values("ok")
-- 非空字段需要赋值，否则系统也不会自动为其生成默认值--建议，非空字段一定要赋值
insert into mytable(age,gender) values(40,1)

-- 修改语句的语法：update 表名 set 字段1 = 值1，字段2=值2...where 条件
update mytable set age = age + 1
update mytable set age = age +10 where id =5 or id = 4
update mytable set age = age +1,gender = 1 where id = 5

-- 删除语句的语法 delete [from] 表名 where 条件
delete from mytable where id = 8
delete from mytable where id in(4,5)

-- 常见的数学函数--统计
-- count():可以查询满足条件的记录数 无法对null值进行计算，会忽略null值
select count(*) from mytable
select count(id) from mytable
select count(age) from mytable
-- max：获取最大值  min:获取最小值
select max(age) from mytable
select min(age) from mytable
select max(name) from mytable
select min(name) from mytable

-- avg:获取平均值，它的参数一般来说是数值
select avg(age) from mytable
select avg(name) from mytable

-- order by :排序
-- select * | 字段列表 from 表列表 where order by 排序字段列表 asc（升序） | desc(降序)

select * from mytable order by id desc
select * from mytable ORDER BY name
select * from mytable ORDER BY gender asc,age asc

-- limit :获取指定范围的数据
-- limit后只有一个参数：相当于获取指定的前n条记录
select * from mytable limit 5
select * from mytable order by id desc limit 3
select * from mytable limit 3 order by id desc

-- limit n(偏移量，从0开始),m(获取的记录数)
select * from mytable limit 2,4
select * from mytable limit 4 offset 2

int pageSize = 10;
int pageCount = 1;
select * from mytable limit pageSize offset (pageCount - 1) * pageSize
select * from mytable limit pageSize offset (pageCount - 1) * pageSize
select * from mytable limit pageSize offset (pageCount - 1) * pageSize



select * from student
-- 使用from where 的方式
select * from student,class where student.cid = class.classid
select studentId,studentName,age,gender,className from student,class where student.cid = class.classid

select * from student INNER JOIN class on student.cid = class.classid

-- left join:它可以获取左表中的所有数据，如果建立关联的字段在右表中没有存在，那么右表中的相应字段的数据默认为null
select * from student left JOIN class on student.cid = class.classid
-- right koin：它可以获取右表中的所有数据，如果建立关联的字段在左表中没有存在，那么左表中的相应字段的数据默认为null
select * from student right JOIN class on student.cid = class.classid

