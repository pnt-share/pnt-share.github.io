---
layout: post
title: Cấu trúc cơ bản của luận văn
summary: Tàu liệu khoa học, đặc biệt là luận văn (thesis), bài báo (paper), sách (book),... cần tuân theo một số quy ước nhất định. 
featured-img: emile-perron-190221
tags: 
categories: [LaTeX]

---
# Những phần cơ bản

- **Trang bìa:** Nên có bố cục cân đối và đơn giản. Nội dung gồm những thông tin sau
	- Tên trường/cơ quan: có thêm logo càng đẹp
	- Tên đề tài: đối với những tên dài thì nên ngắt dòng hợp lí
	- Lĩnh vực nghiên cứu
	- Mã số
	- Ngưòi thực hiện
	- Người hưóng dẫn
	- Nhà tài trợ
	- Nơi thực hiện, tháng, năm
	- [Ví dụ](#bia)

- **Abstract:** Tóm lược nội dung chính nhất. Cuối trang Abstract thường có phần **Keywords** ghi những từ khóa liên quan đến đề tài. Abstract không nên dài quá 1 trang. [Ví dụ](#tomtat)

- **Acknowledgements:** Tiếng Việt là *Lời cảm ơn*. Phần này cũng không nên dài quá 1 trang. [Ví dụ](#loicamon)

- **Table of contents:** Phần mục lục. Trong LaTeX chỉ cần dùng một câu lệnh đơn giản là `\tableofcontents`. Có nên liệt kê phần "Mục lục" ở trong mục lục không? Cái này tùy quan điểm mỗi người. Có người nói nó là một phần của tài liệu, cho nên nó phải được liệt kê trong Mục lục. Ngưòi khác lại cho rằng Mục lục là để tra cứu nội dung, nếu bạn đang dùng tới Mục lục thì tức là bạn đã biết Mục lục nằm chỗ nào rồi, cho nên không cần liệt kê nó vô. [Ví dụ](#mucluc)

- **Nội dung chính:** Được phân cấp như sau
	- Part I: thông thường luận văn chỉ có Chapter mà không có Part. 
		- Chapter 1: Có người thích đánh số bằng chữ số La Mã 
			- Section 1.1
				- Subsection 1.1.1
				- Subsection 1.1.2
				- ...
	- Appendices: Phụ lục nếu có. Về cơ bản nó được trình bày như Chapter hoặc Section nhưng thường được đánh số theo A, B, C,... [Ví dụ](#phuluc)

- **Bibliography:** Tài liệu tham khảo. Liệt kê những tài liệu tham khảo chính của luận văn/sách [Ví dụ](#thamkhao)
	

- **References:** Tài liệu trích dẫn. Có người xem phần này và phần **Bibliogrphy** là một. Tuy nhiên phần này nên được hiểu là nơi liệt kê các tài liệu mà nội dung của nó đưọc **nhắc đến** trong luận văn. Tài liệu trích dẫn phải đưọc liệt kê theo quy ước. Thông thường sẽ có thứ tự như sau
	- Sách: Tên tác giả, tên sách, trang trích dẫn, nhà xuất bản, năm xuất bản. [Ví dụ](#trichdan)
	- Bài báo: Tên tác giả, tên bài báo, tên tạp chí, quyển, trang trích dẫn, nhà xuất bản, năm xuất bản. [Ví dụ](#trichdan)

- **Notation:** Có thể đưa lên trước **Nội dung chính**. Liệt kê tất cả những ký hiệu toán dùng trong tài liệu và ý nghĩa của nó.

- **List of figures:** Có thể đưa lên trước **Nội dung chính**. Danh sách hình ảnh, biểu đồ,... trong luận văn. [Ví dụ](#hinh)

- **List of tables:** Có thể đưa lên trước **Nội dung chính**. Danh sách bảng trong luận văn. [Ví dụ](#hinh)

- **Index:** Chỉ mục. Thường dùng cho sách. Liệt kê tất cả các chỉ mục trong tài liệu, rất hữu ích để tra cứu những khái niệm, định nghĩa, công thức. [Ví dụ](#chimuc)

---
# Một số ví dụ
Sau đây là một số ví dụ cho từng phần của luận văn. Những ví dụ này được lấy từ nhiều luận văn khác nhau của các sinh viên master toán. Riêng phần **Index** và **References** được lấy từ sách.

<a name="bia"/>
## Trang bìa
![](/assets/img/luanvan/cover3.png)
![](/assets/img/luanvan/cover5.png)

---
![](/assets/img/luanvan/cover2.png)
![](/assets/img/luanvan/cover4.png)

---
![](/assets/img/luanvan/cover6.png)
![](/assets/img/luanvan/cover7.png)

---
<a name="tomtat"/>
## Abstract
![](/assets/img/luanvan/abstract3.png)
![](/assets/img/luanvan/abstract1.png)

---
![](/assets/img/luanvan/abstract2.png)
![](/assets/img/luanvan/abstract4.png)

---
<a name="mucluc"/>
## Mục lục
![](/assets/img/luanvan/mucluc1.png)
![](/assets/img/luanvan/mucluc2.png)

---
![](/assets/img/luanvan/mucluc3.png)
![](/assets/img/luanvan/mucluc4.png)

---
<a name="loicamon"/>
## Lời cảm ơn
![](/assets/img/luanvan/loicamon1.png)
![](/assets/img/luanvan/loicamon2.png)

---
![](/assets/img/luanvan/loicamon3.png)
![](/assets/img/luanvan/loicamon4.png)

---
<a name="noidung"/>
## Nội dung chính
![](/assets/img/luanvan/chuong1.png)
![](/assets/img/luanvan/chuong2.png)

---
![](/assets/img/luanvan/chuong3.png)
![](/assets/img/luanvan/chuong5.png)

---
<a name="phuluc"/>
## Phụ lục
![](/assets/img/luanvan/phuluc1.png)
![](/assets/img/luanvan/phuluc2.png)

---
<a name="thamkhao"/>
## Tài liệu tham khảo
![](/assets/img/luanvan/thamkhao2.png)
![](/assets/img/luanvan/thamkhao3.png)

---
<a name="trichdan"/>
## Tài liệu trích dẫn
![](/assets/img/luanvan/trichdan1.png)
![](/assets/img/luanvan/trichdan2.png)

---
<a name="hinh"/>
## List of figures
![](/assets/img/luanvan/hinh1.png)
![](/assets/img/luanvan/hinh2.png)


---
<a name="chimuc"/>
## Index
![](/assets/img/luanvan/chimuc1.png)
![](/assets/img/luanvan/chimuc2.png)

