---
layout: post
title: Tikz - Vẽ hình tam giác cho luận văn 
summary: Hình tam giác cho luận văn của LVL
featured-img: TEXmath-Tinh-cach-ca-nhan-quyet-dinh-ban-kiem-duoc-bao-nhieu-tien.jpg
image: assets/img/posts/TEXmath-Tinh-cach-ca-nhan-quyet-dinh-ban-kiem-duoc-bao-nhieu-tien.jpg_sm.jpg
tags: 
categories: [LaTeX]

---
# Thêm đường cong có dấu mũi tên

Mặc dù không thích mấy cái tọa độ lộn xộn của Geobra, nhưng vì lười vẽ lại nên dùng code của chú. Chỉ thêm cái đường cong thôi.

<div align="center" markdown="1">
![Hinh Tikz](/assets/img/luanvan/hinhtikz1.png)
</div>

### Code

```
\documentclass[12pt]{report}
\usepackage{tikz}
\usetikzlibrary{decorations.markings}
\begin{document}
\begin{figure}[!htp]
\centering
\definecolor{xdxdff}{rgb}{0.49019607843137253,0.49019607843137253,1.}
\definecolor{ududff}{rgb}{0.30196078431372547,0.30196078431372547,1.}
\definecolor{ffqqqq}{rgb}{1.,0.,0.}
\definecolor{ffffqq}{rgb}{1.,1.,0.}
\begin{tikzpicture}[line cap=round,line join=round,x=1.0cm,y=1.0cm, decoration={
    markings,
    mark=at position 0.5cm with {\arrow[red]{latex};},
	mark=at position 1.0cm with {\arrow[red]{latex};},
	mark=at position 1.5cm with {\arrow[red]{latex};},
	mark=at position 2.0cm with {\arrow[red]{latex};},
	mark=at position 2.5cm with {\arrow[red]{latex};},
	mark=at position 3.0cm with {\arrow[red]{latex};},
    mark=at position 3.5cm with {\arrow[red]{latex};}}]
    \begin{scriptsize}
\draw[fill=blue] (7.795694527149545,2.3942593695327266) -- (8.88613566463769,2.4238958169046656) -- (7.459977100709584,0.) -- cycle;
\draw [line width=1pt] (9.,4.)-- (11.,0.);
\draw [line width=1pt] (6.,0.)-- (11.,0.);
\draw [line width=1pt] (9.,4.)-- (6.,0.);
\draw [line width=1pt] (6.993974005212116,1.325298673616154)-- (7.459977100709584,0.);
\draw [line width=1pt] (9.105544674472783,0.8551213965837519)-- (7.459977100709584,0.);
\draw [line width=1pt] (7.795694527149545,2.3942593695327266)-- (7.459977100709584,0.);
\draw [line width=1pt] (7.459977100709584,0.)-- (8.88613566463769,2.4238958169046656);
\draw [line width=1pt] (7.795694527149545,2.3942593695327266)-- (8.88613566463769,2.4238958169046656);
\draw [line width=1pt] (8.88613566463769,2.4238958169046656)-- (9.105544674472783,0.8551213965837519);
\draw [line width=1pt] (9.105544674472783,0.8551213965837519)-- (9.35786503578314,0.);
\draw [line width=1pt] (9.105544674472783,0.8551213965837519)-- (11.,0.);
\draw [line width=1pt] (9.105544674472783,0.8551213965837519)-- (10.,2.);
\draw [line width=1pt] (8.88613566463769,2.4238958169046656)-- (10.,2.);
\draw [line width=1pt] (8.88613566463769,2.4238958169046656)-- (9.,4.);
\draw [line width=1pt] (7.795694527149545,2.3942593695327266)-- (8.88613566463769,2.4238958169046656);
\draw [line width=1pt] (8.88613566463769,2.4238958169046656)-- (7.459977100709584,0.);
\draw [line width=1pt] (7.459977100709584,0.)-- (7.795694527149545,2.3942593695327266);
\draw [fill=ffffqq] (6.,0.) circle (2.5pt);
\draw[color=black] (5.935084482355688,-0.3) node {$B$};
\draw [fill=ffqqqq] (11.,0.) circle (2.5pt);
\draw[color=black] (10.981491708562828,-0.3) node {$C$};
\draw [fill=ududff] (9.,4.) circle (2.5pt);
\draw[color=black] (9.072633322997518,4.206594021814795) node[above] {$A$};
\draw [fill=ffffqq] (6.993974005212116,1.325298673616154) circle (2.5pt);
\draw [fill=ffffqq] (7.795694527149545,2.3942593695327266) circle (2.5pt);
\draw [fill=ududff] (8.88613566463769,2.4238958169046656) circle (2.5pt);
\draw [fill=ffqqqq] (7.459977100709584,0.) circle (2.5pt);
\draw [fill=ffqqqq] (9.35786503578314,0.) circle (2.5pt);
\draw [fill=ududff] (9.105544674472783,0.8551213965837519) circle (2.5pt);
\draw [fill=xdxdff] (10.,2.) circle (2.5pt);
\draw [postaction=decorate, dashed, line width=1pt, color=red] (11,1.2) to [out=-180, in=0] (9,0.5) to [out=-180, in=-60] (7.9,1.2);
\end{scriptsize}
\end{tikzpicture}
\end{figure}
\end{document}
``` 


<div class="alert note" markdown="1">
Chú ý: Phải khai báo thư viện **\usetikzlibrary{decorations.markings}**
</div>

Nếu muốn dùng dấu mũi tên kiểu steath thì thay chữ `latex` bằng `steath`

<div align="center" markdown="1">
![Hinh Tikz](/assets/img/luanvan/hinhtikz2.png)
</div>

<div class="alert note" markdown="1">
Màu đang dùng là `magenta!50` 
</div>

# Dùng pattern kẻ sọc

Hình này vẽ như bình thường, riêng chỗ hình chữ nhất thì mình khai báo thêm option `pattern= dots` để cho Tikz fill hình chữ nhật bằng những dấu chấm. Ngoài ra còn có các kiểu khác: `dots`, `grid`, `crosshatch`,... 

Xem thêm các pattern ở đây [Tikz-PGF](/assets/files/LaTeX/Tikz-pgf.pdf) (trang 217)

### Code

```
\documentclass{report}
\usepackage{tikz}
\usetikzlibrary{patterns}
\begin{document}
   \begin{tikzpicture}
      \draw[->] (-0.6,0) -- (5,0) node[below]{$x$};
      \draw[->] (0,-0.6) -- (0,4) node[left]{$y$};
      \draw (0,0) node[below left]{$O$};
      \draw[dashed] (1,0) node[below]{$a_1$} -- (1,3);
      \draw[dashed] (2,0) node[below]{$a_2$} -- (2,2.5);
      \draw[dashed] (3,0) node[below]{$b_1$} -- (3,3);
      \draw[dashed] (4,0) node[below]{$b_2$} -- (4,2.5);
      \draw[dashed] (0,1.5) node[left]{$c_1$} -- (4,1.5);
      \draw[dashed] (0,2) node[left]{$c_2$} -- (3,2);
      \draw[dashed] (0,2.5) node[left]{$d_1$} -- (4,2.5);
      \draw[dashed] (0,3) node[left]{$d_2$} -- (3,3);
      \draw[pattern=crosshatch] (1,2) rectangle (3,3);
      \draw[pattern=dots] (2,1.5) rectangle (4,2.5); 
   \end{tikzpicture}
\end{document}
```


<div align="center" markdown="1">
![Hinh Tikz](/assets/img/luanvan/hinhtikz3.png)
</div>

<div class="alert danger" markdown="1">
Chú ý khai báo `\usetikzlibrary{patterns}` 
</div>

---
