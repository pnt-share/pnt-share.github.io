---
layout: post
title: Tikz - Vẽ một hình caro đơn giản bằng vòng lặp
summary: Bài viết này hướng dẫn sử dụng vòng lặp trong Tikz. Áp dụng để vẽ một hình ca rô đơn giản.
featured-img: yuri1.jpg
image: assets/img/posts/yuri1.jpg_md.jpg
tags: Tikz
categories: [LaTeX]

---
# Vòng lặp trong Tikz

Tikz cung cấp câu lệnh đơn giản sau đây giúp ta tiến hành một vòng lặp

```
\foreach \x in {tập hợp giá trị} \draw somethings;
```

Trong đó 
- **\foreach** là từ khóa, có nghĩa là *với mỗi* (for each)
- **\x** là biến chạy (trong các ngôn ngữ lập trình khác ta thường dùng **i**)
- **{tập hợp giá trị}** là một tập rời rạc các giá trị của **\x**
- **\draw something** là lệnh vẽ bất kì nào đó có sử dụng đến giá trị của **\x**

#### Ví dụ

Sau đây là một số ví dụ đơn giản

```
\foreach \x in {1,2,3,4,5} \draw[red] (\x,10) circle (5pt);
```
<div align="center" markdown="1">
![](/assets/img/Tikz/fivedots.png)
</div>

Nếu muốn sử dụng nhiều hơn 1 biến chạy, chẳng hạn ta muốn tăng dần kích thước của vòng tròn, thì làm như sau

```
\foreach \x/\y in {1/5,2/7,3/9,4/11,5/13} \draw[red] (\x,10) circle (\y pt);
```
<div align="center" markdown="1">
![](/assets/img/Tikz/fivedots_2.png)
</div>

<div class="alert note" markdown="1">
**Chú ý:** Ở đây ta đã sử dụng dấu **slash** (tức là dấu /) để phân cách cách **\x** và **\y**. Tập hợp giá trị bây giờ là các **cặp giá trị**, thay vì các giá trị đơn như trước kia
</div>

# Vẽ hình caro bằng vòng lặp

<div align="center" markdown="1">
![](/assets/img/Tikz/caro.png)
</div>

#### Code
```
\documentclass{article}
\usepackage{tikz}
\definecolor{MicrosoftRed}{HTML}{f65314}
\definecolor{MicrosoftBlue}{HTML}{00a1f1}
\definecolor{MicrosoftGreen}{HTML}{7cbb00}
\definecolor{MicrosoftYellow}{HTML}{ffbb00}
\begin{document}
\begin{tikzpicture}
    \foreach \y in {0,2,4,6}{
    \foreach \x in {0,2,4,6}{
    \fill[MicrosoftBlue]  (\x,\y) rectangle (\x+1,\y+1);
    \fill[MicrosoftRed]   (\x,\y+1) rectangle (\x+1,\y+2);
    \fill[MicrosoftYellow](\x+1,\y) rectangle (\x+2,\y+1);
    \fill[MicrosoftGreen] (\x+1,\y+1) rectangle (\x+2,\y+2);
    }}
\end{tikzpicture}
\end{document}
```

---

