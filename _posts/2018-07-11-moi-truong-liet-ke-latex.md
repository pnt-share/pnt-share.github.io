---
layout: post
title: Môi trường liệt kê và Môi trường nguyên văn 
summary: Trong LaTeX, để hiển thị y nguyên một đoạn văn bản, ta dùng môi trường verbatim
featured-img: yoona-2.jpg
image: assets/img/posts/yoona-2_sm.jpg
tags: 
categories: [LaTeX]

---
# Môi trường liệt kê

Có 3 kiểu liệt kê trong LaTeX:
- `itemize`
- `enumerate`
- `description`

### Ví dụ kiểu description

<div align="center" markdown="1">
![Moi truong LaTeX](/assets/img/luanvan/Bang.jpg)
</div>

Để trình bày như trên, ta dùng kết hợp môi trường bảng và môi trường liệt kê kiểu **description**

```
\begin{table}[!h]
   \caption{Các lớp tài liệu}
   \vskip 12pt
   \centering
   \begin{tabular}{l}
      \hline
      \begin{minipage}{0.85\textwidth}
         \vskip 3pt
         \begin{description}
            \item[\tt article] phù hợp khi soạn các bài báo trong các tạp chí khoa học, các văn bản trình diễn, các báo cáo ngắn, chương trình hoạt động, thư mời,...
            \item[\tt report] phù hợp khi soạn các báo cáo gồm nhiều chương, các quyển sách nhỏ, luận văn,...
            \item[\tt book] phù hợp khi soạn sách.
            \item[\tt slides] dùng để thiết kế các trang trình diễn. Kiểu tài liệu này này sử dụng các kí tự sans serif cỡ lớn. Bạn có thể sử dụng một kiểu tài liệu khác là Foil\TeX
         \end{description}
         \vskip 2pt
      \end{minipage}\\
      \hline
   \end{tabular}
\end{table}
``` 


#### Giải thích

- Để đưa caption lên trên bảng, ta nhúng **tabular** vào trong **table**.
- Để sử dụng môi trường **description** trong môi trường **tabular**, ta phải bao bọc **description** bởi môi trường **minipage**.
- Lệnh `\textwidth` trả về gía trị chiều ngang của phần nội dung.
- Lệnh `[!h]` làm cho bảng phải hiển thị đúng vị trí hiện tại trong văn bản. Nếu không có lệnh này, bảng có thể *bay* lên trên hoặc xuống dưới

<div class="alert tip" markdown="1">
Tùy thuộc chiều ngang của văn bản (**\textwidth**), kết quả hiển thị trên mỗi máy có thể khác nhau
</div>

# Môi trường nguyên văn

Trong LaTeX, để hiển thị y nguyên một đoạn văn bản, ta dùng môi trường `verbatim`. 

### Ví dụ

<div align="center" markdown="1">
![Moi truong LaTeX](/assets/img/luanvan/verbatim.png)
</div>
Ta gõ như sau

```
\begin{verbatim}
   % Thí dụ 1
   \ldots khi mà Albert Einstein giới thiệu phương trình:
   \begin{equation}
     e = m \cdot c^2 \; ,
   \end{equation}
   thì vào thời điểm đó, nó là phương trình được biết đến nhiều nhất
   và đồng thời cũng ít người hiểu được nó nhất.

   % Thí dụ 2
   \ldots theo luật Kirchoff về cường độ dòng điện thì:
   \begin{equation}
     \sum_{k=1}^{n} I_k = 0 \; .
   \end{equation}
   
   Hiệu điện thế theo luật Kirchoff có công thức là \ldots

   % Thí dụ 3
   \ldots có nhiều lợi điểm.

   \begin{equation}
\end{verbatim}
```



