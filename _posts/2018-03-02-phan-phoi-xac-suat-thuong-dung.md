---
layout: post
title: Phân phối xác suất thường dùng
summary: Markdown is a way to style text on the web. You control the display of the document; formating words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown.
featured-img: emile-perron-190221
tags: [xac suat]
categories: [Math]

---
## Phân phối xác suất thường dùng

### Phân phối Beta
Giả sử $X = Beta(\alpha,\beta)$
- Mean: $\mathbb E(X)=\frac{1}{1+\beta/\alpha}$
- Variance: $Var(X) = \frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$
- Nếu $X=\Gamma(\alpha), Y=\Gamma(\beta)$ thì $Z=\frac{X}{X+Y}=Beta(\alpha,\beta)$

### Phân phối Chi-squared
Giả sử $X_i=\mathcal N(0,1)$ thì $Z=\sum^kX_i$ có phân phối $\chi^2(k)$
- Mean: $\mathbb E(Z)=\frac{\alpha}{\alpha+\beta}$
- Là trường hợp riêng của phân phối Gamma: $\chi^2_k = \Gamma(\frac{k}{2},\frac{1}{2})$