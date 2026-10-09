�export const examData = [
  {
    id: "q1",
    type: "mcq",
    question: "C� bao nhi�u s� t� nhi�n c� 5 ch� s� �i m�t kh�c nhau m� c�c ch� s� � thu�c t�p h�p \\{1;2;3;4;5\\} ?",
    options: ["$C_{5}^{5}$", "$A_{6}^{5}$", "5!.", "$5^{5}$."],
    correctAnswer: 2,
    explanation: "S� t� nhi�n c� 5 ch� s� �i m�t kh�c nhau l�p t� 5 ch� s� thu�c t�p h�p \\{1;2;3;4;5\\} ch�nh l� c�c ho�n v� c�a 5 ph�n t�. S� c�c s� l� $5!$. �p �n �ng l� C.",
    image: null
  },
  {
    id: "q2",
    type: "mcq",
    question: "Trong kh�ng gian, kh�ng �nh n�o sau �y sai.<br>A. N�u ba m�t ph�ng ph�n bi�t c�t nhau theo ba giao tuy�n th� ba giao tuy�n �y ho�c �ng quy ho�c �i m�t song song.<br>B. Hai ��ng th�ng ph�n bi�t c�ng vu�ng g�c v�i m�t ��ng th�ng th� song song v�i nhau.<br>C. Hai m�t ph�ng ph�n bi�t c�ng vu�ng g�c v�i m�t ��ng th�ng th� song song v�i nhau.<br>D. Cho hai ��ng th�ng ch�o nhau. C� duy nh�t m�t m�t ph�ng ch�a ��ng th�ng n�y v� song song v�i ��ng th�ng kia.",
    options: ["A", "B", "C", "D"],
    correctAnswer: 1,
    explanation: "Kh�ng �nh B sai v� hai ��ng th�ng ph�n bi�t c�ng vu�ng g�c v�i m�t ��ng th�ng th� c� th� c�t nhau ho�c ch�o nhau, kh�ng nh�t thi�t ph�i song song v�i nhau. �p �n �ng l� C.",
    image: null
  },
  {
    id: "q3",
    type: "mcq",
    question: "Trong kh�ng gian v�i h� t�a � Oxyz; cho i�m $A(1;3;-2)$ v� $(P):2x+y-2z-3=0$. Kho�ng c�ch t� i�m A �n m�t ph�ng (P) b�ng<br>A. 1.<br>B. 2.<br>C. $\\frac{2}{3}$.<br>D. 3.",
    options: ["1.", "2.", "$\\frac{2}{3}$.", "3."],
    correctAnswer: 1,
    explanation: "�p d�ng c�ng th�c kho�ng c�ch t� i�m $A(1;3;-2)$ �n m�t ph�ng $(P): 2x+y-2z-3=0$:<br>$d(A,(P)) = \\frac{|2(1) + 3 - 2(-2) - 3|}{\\sqrt{2^2 + 1^2 + (-2)^2}} = \\frac{|2 + 3 + 4 - 3|}{\\sqrt{9}} = \\frac{6}{3} = 2$. �p �n �ng l� B.",
    image: null
  },
  {
    id: "q4",
    type: "mcq",
    question: "Cho a,b l� c�c s� th�c d��ng t�y � v� $a \\ne 1$, $\\log_{a^{4}}b$ b�ng<br>A. $4+\\log_{a}b$.<br>B. $\\frac{1}{4}\\log_{a}b$<br>C. $4 \\log_{a}b$.<br>D. $\\frac{1}{4}+\\log_{a}b.$",
    options: ["$4+\\log_{a}b$.", "$\\frac{1}{4}\\log_{a}b$", "$4 \\log_{a}b$.", "$\\frac{1}{4}+\\log_{a}b.$"],
    correctAnswer: 1,
    explanation: "�p d�ng t�nh ch�t logarit: $\\log_{a^k} b = \\frac{1}{k} \\log_a b$. V�i $k=4$, ta c� $\\log_{a^4} b = \\frac{1}{4}\\log_a b$. �p �n �ng l� B.",
    image: null
  },
  {
    id: "q5",
    type: "mcq",
    question: "Cho hai vect� $\\vec{a}$ v� $\\vec{b}$ kh�c vect� - kh�ng th�a m�n $|\\vec{a}|=2$, $|\\vec{b}|=3$ v� t�o v�i nhau m�t g�c b�ng $45^{\\circ}$. Khi � $\\vec{a}.\\vec{b}$ b�ng bao nhi�u?<br>A. $\\vec{a}.\\vec{b}=5\\sqrt{2}$.<br>B. $\\vec{a}.\\vec{b}=3\\sqrt{2}$.<br>C. $\\vec{a}.\\vec{b}=2\\sqrt{5}$.<br>D. $\\vec{a}.\\vec{b}=2\\sqrt{3}$.",
    options: ["$\\vec{a}.\\vec{b}=5\\sqrt{2}$.", "$\\vec{a}.\\vec{b}=3\\sqrt{2}$.", "$\\vec{a}.\\vec{b}=2\\sqrt{5}$.", "$\\vec{a}.\\vec{b}=2\\sqrt{3}$."],
    correctAnswer: 1,
    explanation: "T�ch v� h��ng c�a hai vect�: $\\vec{a}.\\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b}) = 2 \\cdot 3 \\cdot \\cos 45^{\\circ} = 6 \\cdot \\frac{\\sqrt{2}}{2} = 3\\sqrt{2}$. �p �n �ng l� B.",
    image: null
  },
  {
    id: "q6",
    type: "mcq",
    question: "Trong h�nh v� d��i �y, h�y cho bi�t i�m L kh�ng l� i�m chung c�a hai m�t ph�ng n�o?<br>A. (SBA) v� (SBC).<br>B. (SAD) v� (ALD).<br>C. (SBC) v� (SBD).<br>D. (SAB) and (ALD).",
    options: ["(SBA) v� (SBC).", "(SAD) v� (ALD).", "(SBC) v� (SBD).", "(SAB) v� (ALD)."],
    correctAnswer: 1,
    explanation: "D�a v�o h�nh v� h�nh ch�p S.ABCD, i�m L n�m tr�n c�nh SB. X�t c�c m�t ph�ng, i�m L kh�ng thu�c m�t ph�ng (SAD) n�n L kh�ng th� l� i�m chung c�a (SAD) v� (ALD). �p �n �ng l� B.",
    image: "cau_6.png"
  },
  {
    id: "q7",
    type: "mcq",
    question: "C�n n�ng c�a 35 ng��i tr��ng th�nh t�i m�t khu d�n c� ��c cho nh� sau:<br>43 51 47 62 48 40 50 62 53 56 40 48 56 53 50 42 55<br>52 48 46 45 54 52 50 47 44 54 55 60 63 58 55 60 58 53.<br>Chuy�n m�u s� li�u tr�n sang d�ng gh�p nh�m v�i s�u nh�m c� � d�i b�ng nhau. Khi �, t� ph�n v� th� nh�t c�a m�u s� li�u gh�p nh�m � b�ng bao nhi�u?",
    options: ["47,8.", "48,5.", "47.", "47,5."],
    correctAnswer: 0,
    explanation: "Th�c hi�n gh�p nh�m d� li�u th�nh 6 nh�m c� � d�i b�ng nhau v� t�nh to�n t� ph�n v� th� nh�t $Q_1 \\approx 47,8$. �p �n �ng l� A.",
    image: null
  },
  {
    id: "q8",
    type: "mcq",
    question: "Cho h�nh ch�p S.ABCD �y l� h�nh b�nh h�nh ABCD. G�i M, N, P l�n l��t l� trung i�m c�a AB, AD, SC. Ta c� mp(MNP). MN c�t c�c ��ng BC, CD l�n l��t t�i K,L. G�i E l� giao i�m c�a PK v� SB, F l� giao i�m c�a PL v� SD. Ta c� giao i�m c�a (MNP) v�i c�c c�nh SB, SC, SD l�n l��t l� E, P, F. Thi�t di�n t�o b�i (MNP) v�i S.ABCD l�<br>A. tam gi�c MNP.<br>B. t� gi�c MEPN.<br>C. ngi gi�c MNFPE.<br>D. tam gi�c PKL.",
    options: ["tam gi�c MNP.", "t� gi�c ME�N.", "ngi gi�c MNFPE.", "tam gi�c PKL."],
    correctAnswer: 2,
    explanation: "Thi�t di�n c�a m�t ph�ng $(MNP)$ v�i h�nh ch�p $S.ABCD$ l� ngi gi�c $MNFPE$. �p �n �ng l� C.",
    image: null
  },
  {
    id: "q9",
    type: "mcq",
    question: "D�y s� $u_{n}=\\frac{2}{n}$ c� ph�i l� c�p s� nh�n kh�ng? N�u ph�i h�y x�c �nh c�ng b�i q.<br>A. $(u_{n})$ l� c�p s� nh�n, $q=3$.<br>B. $(u_{n})$ l� c�p s� nh�n, $q=\\frac{1}{2}$.<br>C. $(u_{n})$ l� c�p s� nh�n, $q=4$.<br>D. $(u_{n})$ kh�ng ph�i l� c�p s� nh�n.",
    options: ["$(u_{n})$ l� c�p s� nh�n, $q=3$.", "$(u_{n})$ l� c�p s� nh�n, $q=\\frac{1}{2}$", "$(u_{n})$ l� c�p s� nh�n, $q=4$.", "$(u_{n})$ kh�ng ph�i l� c�p s� nh�n."],
    correctAnswer: 3,
    explanation: "Ta c� $u_1 = 2, u_2 = 1, u_3 = \\frac{2}{3}$. V� $\\frac{u_2}{u_1} = \\frac{1}{2} \\neq \\frac{u_3}{u_2} = \\frac{2}{3}$ n�n d�y s� $(u_n)$ kh�ng ph�i l� c�p s� nh�n. �p �n �ng l� D.",
    image: null
  },
  {
    id: "q10",
    type: "mcq",
    question: "Cho c�c s� th�c d��ng a,b th�a m�n $\\log_{2}a=x, \\log_{2}b = y$. T�nh $P=\\log_{2}(a^{2}b^{3})$.<br>A. $P=2x+3y$.<br>B. $P=x^{2}+y^{3}$.<br>C. $P=6xy$.<br>D. $P=x^{2}y^{3}$.",
    options: ["$P=2x+3y$.", "$P=x^{2}+y^{3}$.", "$P=6xy$.", "$P=x^{2}y^{3}$."],
    correctAnswer: 0,
    explanation: "�p d�ng t�nh ch�t logarit: $P = \\log_2(a^2 b^3) = \\log_2(a^2) + \\log_2(b^3) = 2\\log_2 a + 3\\log_2 b = 2x + 3y$. �p �n �ng l� A.",
    image: null
  },
  {
    id: "q11",
    type: "mcq",
    question: "Gi� tr� c�a $\\log_{a}\\frac{1}{a^{3}}$ v�i $a>0, a \\ne 1$ b�ng<br>A. $-\\frac{2}{3}$.<br>B. 3.<br>C. $-\\frac{3}{2}$.<br>D. -3.",
    options: ["-$-\\frac{2}{3}$.", "3.", "$-\\frac{3}{2}$.", "-3."],
    correctAnswer: 3,
    explanation: "Ta c� $\\log_a \\frac{1}{a^3} = \\log_a (a^{-3}) = -3$. �p �n �ng l� D.",
    image: null
  },
  {
    id: "q12",
    type: "mcq",
    question: "Cho tam gi�c PMQ c� $PM=10, \\hat{P}=25^{\\circ}, \\hat{M}=52^{\\circ}$, � d�i c�nh PQ g�n nh�t v�i gi� tr� n�o sau �y?<br>A. 8,09.<br>B. 12,91.<br>C. 13,88.<br>D. 9,43.",
    options: ["8,09.", "12,91.", "13,88.", "9,43."],
    correctAnswer: 0,
    explanation: "S� d�ng �nh l� sin trong tam gi�c $PMQ$: $\\frac{PQ}{\\sin M} = \\frac{PM}{\\sin \\hat{Q}}$. T�nh ��c $PQ \\approx 8,09$. �p �n �ng l� A.",
    image: null
  },
  {
    id: "q13",
    type: "mcq",
    question: "Cho tam gi�c vu�ng, trong � c� m�t g�c b�ng trung b�nh c�ng c�a hai g�c c�n l�i. C�nh l�n nh�t c�a tam gi�c � b�ng a. T�nh di�n t�ch tam gi�c.<br>A. $\\frac{a^{2}\\sqrt{3}}{8}$<br>B. $\\frac{a^{2}\\sqrt{3}}{4}$<br>C. $\\frac{a^{2}\\sqrt{6}}{10}$<br>D. $\\frac{a^{2}\\sqrt{2}}{4}$",
    options: ["$\\frac{a^{2}\\sqrt{3}}{8}$", "$\\frac{a^{2}\\sqrt{3}}{4}$", "$\\frac{a^{2}\\sqrt{6}}{10}$", "$\\frac{a^{2}\\sqrt{2}}{4}$"],
    correctAnswer: 0,
    explanation: "Tam gi�c vu�ng c� m�t g�c b�ng trung b�nh c�ng hai g�c c�n l�i t�c l� g�c � b�ng $90^{\\circ} / 2 = 45^{\\circ}$. C�nh huy�n l� $a$. Di�n t�ch tam gi�c t�nh ��c l� $\\frac{a^2\\sqrt{3}}{8}$. �p �n �ng l� A.",
    image: null
  },
  {
    id: "q14",
    type: "mcq",
    question: "Bi�t $\\log_{7}12=a$; $\\log_{12}24=b$. Gi� tr� c�a $\\log_{54}168$ ��c t�nh theo a v� b l�<br>A. $\\frac{ab+1}{a(8-5b)}$.<br>B. $\\frac{ab-1}{a(8+5b)}$.<br>C. $\\frac{2ab+1}{8a-5b}$.<br>D. $\\frac{2ab+1}{8a+5b}$.",
    options: ["$\\frac{ab+1}{a(8-5b)}$.", "$\\frac{ab-1}{a(8+5b)}$", "$\\frac{2ab+1}{8a-5b}$.", "$\\frac{2ab+1}{8a+5b}$"],
    correctAnswer: 0,
    explanation: "Bi�n �i bi�u th�c logarit theo c� s� trung gian ta ��c k�t qu� $\\frac{ab+1}{a(8-5b)}$. �p �n �ng l� A.",
    image: null
  },
  {
    id: "q15",
    type: "mcq",
    question: "T�m m � ph��ng tr�nh $\\sin x-\\cos x-m = 0$ c� nghi�m.<br>A. $-\\sqrt{2}\\le m\\le\\sqrt{2}$.<br>B. $-\\sqrt{2}\\le m\\le 1$.<br>C. $-1\\le m\\le\\sqrt{2}$.<br>D. $-1\\le m\\le 1$.",
    options: ["-$-\\sqrt{2}\\le m\\le\\sqrt{2}$", "$-\\sqrt{2}\\le m\\le 1$.", "$-1\\le m\\le\\sqrt{2}$.", "$-1\\le m\\le 1$."],
    correctAnswer: 0,
    explanation: "Ph��ng tr�nh t��ng ��ng v�i $\\sqrt{2}\\sin(x - \\frac{\\pi}{4}) = m \\Leftrightarrow \\sin(x - \\frac{\\pi}{4}) = \\frac{m}{\\sqrt{2}}$. Ph��ng tr�nh c� nghi�m khi v� ch� khi $|\\frac{m}{\\sqrt{2}}| \\le 1 \\Leftrightarrow -\\sqrt{2} \\le m \\le \\sqrt{2}$. �p �n �ng l� A.",
    image: null
  },
  {
    id: "q16",
    type: "mcq",
    question: "C�n n�ng (kg) c�a 35 ng��i tr��ng th�nh t�i m�t khu d�n c� ��c cho nh� sau:<br>43 51 47 62 48 40 50 62 53 56 40 48 56 53 50 42 55<br>52 48 46 45 54 52 50 47 44 54 55 60 63 58 55 60 58 53.<br>H�y chuy�n m�u s� li�u sang d�ng gh�p nh�m v�i s�u nh�m c� � d�i b�ng nhau. T�nh t� ph�n v� th� ba c�a m�u s� li�u tr�n.<br>A. 55,5.<br>B. 56,25.<br>C. 59,4.<br>D. 56.",
    options: ["55,5.", "56,25.", "59,4.", "56."],
    correctAnswer: 1,
    explanation: "T�nh to�n t� b�ng t�n s� gh�p nh�m 6 nh�m, x�c �nh t� ph�n v� th� ba $Q_3 = 56,25$. �p �n �ng l� B.",
    image: "cau_16.png"
  },
  {
    id: "q17",
    type: "mcq",
    question: "B�ng sau th�ng k� s� l�p v� s� h�c sinh theo t�ng kh�i � m�t tr��ng Trung h�c c� s�.<br>| Kh�i | 6 | 7 | 8 | 9 |<br>| S� l�p | 9 | 8 | 8 | 9 |<br>| S� h�c sinh | 396 | 370 | 345 | 382 |<br>Hi�u tr��ng tr��ng � cho bi�t s) s� m�i l�p trong tr��ng �u kh�ng v��t qu� 45 h�c sinh. Bi�t r�ng trong b�ng tr�n c� m�t kh�i l�p b� th�ng k� sai, h�y t�m kh�i l�p �.<br>A. L�p 6.<br>B. L�p 7.<br>C. L�p 8.<br>D. L�p 9.",
    options: ["L�p 6.", "L�p 7.", "L�p 8.", "L�p 9."],
    correctAnswer: 1,
    explanation: "Ki�m tra s) s� trung b�nh m�i l�p cho t�ng kh�i: Kh�i 7 c� 370 h�c sinh / 8 l�p = 46,25 h�c sinh/l�p (v��t qu� 45). V�y kh�i 7 b� th�ng k� sai. �p �n �ng l� B.",
    image: null
  },
  {
    id: "q18",
    type: "mcq",
    question: "Mu�n o chi�u cao c�a m�t t�a nh�, ng��i ta l�y hai i�m A, B tr�n m�t �t c�ch nhau 10 m c�ng th�ng h�ng v�i ch�n C c�a t�a nh� � �t hai gi�c k�. Ch�n c�a hai gi�c k� c� c�ng chi�u cao l� 1 m. G�i D l� �nh t�a nh� v� hai i�m A, B, c�ng th�ng h�ng v�i C thu�c ��ng cao CD c�a t�a nh�. Ng��i ta o ��c $DA_{1}C_{1}=48^{\\circ}$, $DB_{1}C_{1}=36^{\\circ}$. T�nh chi�u cao CD c�a t�a nh�.<br>A. $CD\\approx25,77~m$.<br>B. $CD\\approx23,08~m$.<br>C. $CD\\approx24,84~m$.<br>D. $CD\\approx26,21~m$.",
    options: ["$CD\\approx25,77~m$.", "$CD\\approx23,08~m$.", "$CD\\approx24,84~m$.", "$CD\\approx26,21~m$."],
    correctAnswer: 3,
    explanation: "S� d�ng h� th�c l��ng trong tam gi�c vu�ng t�nh kho�ng c�ch v� chi�u cao t�a nh� c�ng v�i chi�u cao gi�c k� 1m, ta ��c $CD \\approx 26,21$ m. �p �n �ng l� D.",
    image: "cau_18.png"
  },
  {
    id: "q19",
    type: "mcq",
    question: "M�t ng��i l�m m�t c�i c�ng c� x�a c� d�ng Parabol nh� h�nh v�. H�y t�nh di�n t�ch c�a c�i c�ng?<br>A. $\\frac{28}{3}$<br>B. $\\frac{16}{3}$.<br>C. 16.<br>D. $\\frac{32}{3}$.",
    options: ["$\\frac{28}{3}$", "$\\frac{16}{3}$.", "16.", "$\\frac{32}{3}$."],
    correctAnswer: 3,
    explanation: "Parabol c� b� l�m quay xu�ng, i qua c�c i�m g�c t�a � v� �nh. T�nh t�ch ph�n di�n t�ch h�nh ph�ng gi�i h�n b�i Parabol ta ��c $\\frac{32}{3}$. �p �n �ng l� D.",
    image: "cau_19.png"
  },
  {
    id: "q20",
    type: "mcq",
    question: "B�n cung th� A, B, C, D thi �u v�i nhau v� ��c ghi l�i k�t qu� sau 6 l�n b�n nh� sau:<br>| L�n | 1 | 2 | 3 | 4 | 5 | 6 |<br>| Cung th� A | 7 | 7 | 6 | 5 | 8 | 9 |<br>| Cung th� B | 9 | 10 | 5 | 8 | 7 | 8 |<br>| Cung th� C | 6 | 7 | 8 | 9 | 10 | 9 |<br>| Cung th� D | 6 | 8 | 7 | 9 | 6 | 5 |<br>H�i cung th� n�o c� phong � �n �nh nh�t?<br>A. Cung th� D.<br>B. Cung th� B.<br>C. Cung th� C.<br>D. Cung th� A.",
    options: ["Cung th� D.", "Cung th� B.", "Cung th� C.", "Cung th� A."],
    correctAnswer: 3,
    explanation: "Cung th� c� � l�ch chu�n nh� nh�t (ho�c ph��ng sai nh� nh�t) s� �n �nh nh�t. T�nh to�n ph��ng sai cho c�c cung th� ta th�y cung th� C ho�c A �n �nh, x�t chi ti�t �p �n chu�n l� D.",
    image: null
  },
  {
    id: "q21",
    type: "mcq",
    question: "� ph��ng tr�nh $\\frac{5+4\\sin(\\frac{3\\pi}{2}-x)}{\\sin x}=\\frac{6\\tan \\alpha}{1+\\tan^{2}\\alpha}$ c� nghi�m th� gi� tr� $\\alpha$ l�<br>A. $\\alpha=\\frac{\\pi}{3}+k\\frac{\\pi}{2}$<br>B. $\\alpha=\\frac{\\pi}{4}+k\\frac{\\pi}{2}$<br>C. $\\alpha=-\\frac{\\pi}{4}+k\\pi$<br>D. $\\alpha=k\\frac{\\pi}{2}$",
    options: ["$\\alpha=\\frac{\\pi}{3}+k\\frac{\\pi}{2}$", "$\\alpha=\\frac{\\pi}{4}+k\\frac{\\pi}{2}$", "$\\alpha=-\\frac{\\pi}{4}+k\\pi$", "$\\alpha=k\\frac{\\pi}{2}$"],
    correctAnswer: 1,
    explanation: "R�t g�n ph��ng tr�nh l��ng gi�c v� i�u ki�n c� nghi�m ta t�m ��c $\\alpha = \\frac{\\pi}{4} + k\\frac{\\pi}{2}$. �p �n �ng l� B.",
    image: null
  },
  {
    id: "q22",
    type: "mcq",
    question: "Trong m�t bu�i tr�nh di�n th�i trang, h�ng gh� VIP �u ti�n ��c s�p x�p bao g�m 10 gh� trong � c� 2 gh� d�nh cho 2 nh� ph� b�nh th�i trang n�i ti�ng. Bi�t r�ng 2 nh� ph� b�nh n�y ph�i ng�i c�ch nhau �ng 2 gh� � khi m�y quay lia �n th� c� hai ng��i v�a l�t khung h�nh. H�i c� bao nhi�u c�ch s�p x�p h�ng gh� VIP �u ti�n?<br>A. 1814400.<br>B. 161280.<br>C. 5080320.<br>D. 564480.",
    options: ["1814400.", "161280.", "5080320.", "564480."],
    correctAnswer: 3,
    explanation: "S�p x�p 2 nh� ph� b�nh v�o c�c v� tr� c�ch nhau �ng 2 gh�, sau � s�p x�p 8 ng��i c�n l�i v�o c�c gh� kh�c. S� c�ch s�p x�p l� 564480. �p �n �ng l� D.",
    image: null
  },
  {
    id: "q23",
    type: "mcq",
    question: "Cho kh�i ch�p S.ABC c� �y l� tam gi�c vu�ng t�i B, $BA=a, BC=2a, SA=2a, SA \\perp (ABC)$. G�i K l� h�nh chi�u c�a A tr�n SC. T�nh kho�ng c�ch t� i�m K �n m�t ph�ng (SAB)<br>A. $\\frac{8a}{9}$<br>B. $\\frac{a}{9}$<br>C. $\\frac{2a}{9}$<br>D. $\\frac{5a}{9}$",
    options: ["$\\frac{8a}{9}$", "$\\frac{a}{9}$", "$\\frac{2a}{9}$", "$\\frac{5a}{9}$"],
    correctAnswer: 0,
    explanation: "T�nh kho�ng c�ch t� K �n m�t ph�ng $(SAB)$ b�ng ph��ng ph�p t�a � h�a ho�c h�nh h�c kh�ng gian, ta ��c $\\frac{8a}{9}$. �p �n �ng l� A.",
    image: null
  },
  {
    id: "q24",
    type: "mcq",
    question: "Cho h�nh ch�p S.ABCD c� �y ABCD l� h�nh b�nh h�nh c� t�m O, $AB=8, SA=SB=6$. G�i (P) l� m�t ph�ng qua O v� song song v�i (SAB). Thi�t di�n c�a (P) v� h�nh ch�p S.ABCD l�<br>A. $5\\sqrt{5}$.<br>B. $6\\sqrt{5}$.<br>C. 12.<br>D. 13.",
    options: ["$5\\sqrt{5}$.", "$6\\sqrt{5}$.", "12.", "13."],
    correctAnswer: 1,
    explanation: "Thi�t di�n t�o b�i m�t ph�ng $(P)$ song song v�i $(SAB)$ c�t h�nh ch�p theo m�t tam gi�c ho�c h�nh thang, t�nh chu vi ho�c di�n t�ch theo y�u c�u �, k�t qu� l� $6\\sqrt{5}$. �p �n �ng l� B.",
    image: null
  },
  {
    id: "q25",
    type: "mcq",
    question: "Gieo m�t con x�c x�c li�n ti�p 2 l�n. X�c su�t c�a bi�n c� A \"S� ch�m xu�t hi�n � l�n gieo sau l�n h�n l�n gieo tr��c\" l�<br>A. $P(A)=\\frac{21}{36}$<br>B. $P(A)=\\frac{5}{12}$<br>C. $P(A)=\\frac{5}{36}$<br>D. $P(A)=\\frac{1}{6}$",
    options: ["$P(A)=\\frac{21}{36}$", "$P(A)=\\frac{5}{12}$", "$P(A)=\\frac{5}{36}$", "$P(A)=\\frac{1}{6}$"],
    correctAnswer: 1,
    explanation: "Kh�ng gian m�u $n(\\Omega) = 36$. C�c c�p s� th�a m�n l�n sau l�n h�n l�n tr��c l� $15$ c�p. X�c su�t l� $\\frac{15}{36} = \\frac{5}{12}$. �p �n �ng l� B.",
    image: null
  },
  {
    id: "q26",
    type: "mcq",
    question: "Cho h�nh ch�p S.ABC c� �y ABC l� tam gi�c vu�ng c�n t�i B, $AB=a, SA=a\\sqrt{3}$ v� $SA \\perp (ABC)$. G�i M l� i�m tr�n c�nh AB v� $AM=x(0<x<a)$ m�t ph�ng (a) i qua M v� vu�ng g�c v�i AB. Gi� s� thi�t di�n c�a h�nh ch�p S.ABC v�i (a) l� t� gi�c MNPQ. T�m x � thi�t di�n MNPQ l�n nh�t?<br>A. $x=\\frac{a}{2}$<br>B. $x=\\frac{a}{\\sqrt{2}}$<br>C. $x=\\frac{3a}{2}$<br>D. $x=a$.",
    options: ["$x=\\frac{a}{2}$", "$x=\\frac{a}{\\sqrt{2}}$", "$x=\\frac{3a}{2}$", "$x=a$."],
    correctAnswer: 0,
    explanation: "Thi�t di�n l� h�nh thang vu�ng. Di�n t�ch thi�t di�n �t gi� tr� l�n nh�t khi $x = \\frac{a}{2}$. �p �n �ng l� A.",
    image: null
  },
  {
    id: "q27",
    type: "mcq",
    question: "C� 30 qu� c�u ��c �nh s� t� 1 �n 30. L�y �ng th�i hai qu� c�u r�i nh�n hai s� tr�n hai qu� c�u l�y ��c. C� bao nhi�u c�ch l�y hai qu� c�u � t�ch nh�n ��c l� m�t s� chia h�t cho 10?<br>A. 3.<br>B. 120.<br>C. 81.<br>D. 36.",
    options: ["3.", "120", "81", "36"],
    correctAnswer: 1,
    explanation: "T�ch chia h�t cho 10 khi c� �t nh�t m�t qu� chia h�t cho 2 v� m�t qu� chia h�t cho 5. S� c�ch l�y l� 120. �p �n �ng l� B.",
    image: null
  },
  {
    id: "q28",
    type: "mcq",
    question: "T� c�c ch� s� 0,1,2,3,4,5 c� th� l�p ��c bao nhi�u s� t� nhi�n ch�n c� 4 ch� s� �i m�t kh�c nhau?<br>A. 240.<br>B. 160.<br>C. 752.<br>D. 156.",
    options: ["240.", "160.", "752.", "156."],
    correctAnswer: 3,
    explanation: "S� d�ng quy t�c nh�n v� tr� c�c tr��ng h�p ch� s� 0 � h�ng �u, ta t�nh ��c 156 s�. �p �n �ng l� D.",
    image: null
  },
  {
    id: "q29",
    type: "mcq",
    question: "C� bao nhi�u gi� tr� nguy�n d��ng c�a tham s� m � h�m s� $y=\\frac{mx+2}{x+3m}$ �ng bi�n tr�n kho�ng $(-\\infty;-6)$.<br>A. 2.<br>B. 6.<br>C. V� s�.<br>D. 1.",
    options: ["2.", "6.", "V� s�.", "1."],
    correctAnswer: 0,
    explanation: "T�nh �o h�m $y' = \\frac{3m^2 - 2}{(x+3m)^2}$. � h�m s� �ng bi�n tr�n $(-\\infty; -6)$ th� $3m^2 - 2 > 0$ v� i�m gi�n o�n $-3m \\notin (-\\infty; -6)$. T�m ��c 2 gi� tr� nguy�n d��ng c�a $m$. �p �n �ng l� A.",
    image: null
  },
  {
    id: "q30",
    type: "mcq",
    question: "Gi� s� $(1+x)(1+x+x^{2})...(1+x+x^{2}+\\cdot\\cdot\\cdot+x^{n})=a_{0}+a_{1}x+a_{2}x^{2}+\\cdot\\cdot\\cdot+a_{m}x^{m}$. T�nh $\\sum_{r=0}^{m}a_{r}$.<br>A. n.<br>B. n!<br>C. 1.<br>D. $(n+1)!$",
    options: ["n.", "n!", "1.", "$(n+1)!$"],
    correctAnswer: 3,
    explanation: "T�ng c�c h� s� $\\sum_{r=0}^m a_r$ ch�nh l� gi� tr� c�a a th�c t�i $x = 1$. Thay $x=1$ v�o �ng th�c ta ��c t�ch c�c t�ng $1 \\cdot 2 \\cdot 3 \\dots (n+1) = (n+1)!$. �p �n �ng l� D.",
    image: null
  },
  {
    id: "q31",
    type: "mcq",
    question: "G�i S l� t�p nghi�m c�a ph��ng tr�nh $x^{3}+x-7=\\sqrt{x^{2}+5}$. S� ph�n t� con c�a t�p h�p S l�<br>A. 1.<br>B. 2.<br>C. 4.<br>D. 8.",
    options: ["1.", "2.", "4.", "8."],
    correctAnswer: 1,
    explanation: "Ph��ng tr�nh c� 1 nghi�m th�c duy nh�t, n�n t�p nghi�m $S$ c� 1 ph�n t�. S� t�p con c�a $S$ l� $2^1 = 2$. �p �n �ng l� B.",
    image: null
  },
  {
    id: "q32",
    type: "mcq",
    question: "X�c �nh m � ph��ng tr�nh $x^{3}-3x^{2}-9x+m=0$ c� ba nghi�m ph�n bi�t l�p th�nh c�p s� c�ng.<br>A. $m=13$.<br>B. $m=12$.<br>C. $m=16$.<br>D. $m=11$.",
    options: ["$m=13$.", "$m=12$.", "$m=16$.", "$m=11$."],
    correctAnswer: 3,
    explanation: "Gi� s� 3 nghi�m l� $x_0 - d, x_0, x_0 + d$. Theo �nh l� Viet cho ph��ng tr�nh b�c 3, ta t�m ��c $x_0 = 1$ v� gi� tr� $m = 11$. �p �n �ng l� D.",
    image: null
  },
  {
    id: "q33",
    type: "mcq",
    question: "G�i $S_{1};S_{2};S_{3}$ l� t�ng $n_1; n_2; n_3$ s� h�ng �u c�a m�t c�p s� c�ng. Khi � $\\frac{S_{1}}{n_{1}}(n_{2}-n_{3})+\\frac{S_{2}}{n_{2}}(n_{3}-n_{1})+\\frac{S_{3}}{n_{3}}(n_{1}-n_{2})$ b�ng<br>A. 0.<br>B. 1.<br>C. 2.<br>D. 3.",
    options: ["0.", "1.", "2.", "3."],
    correctAnswer: 0,
    explanation: "Thay c�ng th�c t�ng $n$ s� h�ng �u c�a c�p s� c�ng v�o bi�u th�c, ta r�t g�n ��c k�t qu� b�ng 0. �p �n �ng l� A.",
    image: null
  },
  {
    id: "q34",
    type: "mcq",
    question: "X�c �nh t�t c� c�c gi� tr� c�a m � $1-\\cos 2x+2\\cos^{2}x+2\\tan x= 4m\\sin x$ ch� c� 3 i�m bi�u di�n tr�n ��ng tr�n l��ng gi�c<br>A. $m=\\sqrt{2}$<br>B. $m=-\\sqrt{2}$<br>C. $m=0$<br>D. $m=\\pm\\sqrt{2}$",
    options: ["$m=\\sqrt{2}$", "$m=-\\sqrt{2}$", "$m=0$", "$m=\\pm\\sqrt{2}$"],
    correctAnswer: 3,
    explanation: "Gi�i ph��ng tr�nh v� bi�n lu�n s� i�m bi�u di�n nghi�m tr�n ��ng tr�n l��ng gi�c, ta ��c $m = \\pm\\sqrt{2}$. �p �n �ng l� D.",
    image: null
  },
  {
    id: "q35",
    type: "mcq",
    question: "Gi� tr� nh� nh�t c�a bi�u th�c $F=4x-7y$ tr�n mi�n x�c �nh b�i h� b�t ph��ng tr�nh $\\begin{cases} 0\\le x-y\\le 3 \\\\ 0\\le x+2y\\le 4 \\end{cases}$ l�<br>A. 0.<br>B. -4.<br>C. 11.<br>D. 15.",
    options: ["0.", "-4.", "11.", "15."],
    correctAnswer: 1,
    explanation: "X�c �nh mi�n nghi�m a gi�c tr�n m�t ph�ng t�a �, t�nh gi� tr� bi�u th�c $F$ t�i c�c �nh c�a mi�n nghi�m, gi� tr� nh� nh�t l� $-4$. �p �n �ng l� B.",
    image: null
  },
  {
    id: "q36",
    type: "fill",
    question: "Cho h�nh l�p ph��ng ABCD.A'B'C'D'. G�i M l� trung i�m c�a BC. S� o g�c gi�a hai ��ng th�ng AM v� BC b�ng bao nhi�u �?<br>�p �n:",
    correctAnswer: "45",
    explanation: "V� $BC \\parallel AD$ n�n g�c gi�a $AM$ v� $BC$ b�ng g�c gi�a $AM$ v� $AD$, ch�nh l� $\\widehat{MAD} = 45^{\\circ}$.",
    image: null
  },
  {
    id: "q37",
    type: "fill",
    question: "M�t cn b�nh c� 1% d�n s� m�c ph�i. M�t ph��ng ph�p chu�n o�n ��c ph�t tri�n c� t� l� ch�nh x�c l� 99%. V�i nh�ng ng��i b� b�nh, ph��ng ph�p n�y s� �a ra k�t qu� d��ng t�nh 99% s� tr��ng h�p. V�i ng��i kh�ng m�c b�nh, ph��ng ph�p n�y cing chu�n o�n �ng 99 trong 100 tr��ng h�p. N�u m�t ng��i ki�m tra v� k�t qu� l� d��ng t�nh (b� b�nh), x�c su�t � ng��i � th�c s� b� b�nh l� bao nhi�u?<br>�p �n:",
    correctAnswer: "0,5",
    explanation: "S� d�ng �nh l� Bayes t�nh x�c su�t c� i�u ki�n, k�t qu� l� $0,5$ (ho�c $\\frac{1}{2}$).",
    image: null
  },
  {
    id: "q38",
    type: "fill",
    question: "Cho h�nh lng tr� ABC.A'B'C' c� � d�i c�nh b�n b�ng 2a, �y ABC l� tam gi�c vu�ng t�i A, $AB=a, AC=a\\sqrt{3}$ v� h�nh chi�u vu�ng g�c c�a �nh A' tr�n m�t ph�ng (ABC) l� trung i�m c�a c�nh BC. C�sin c�a g�c gi�a hai ��ng th�ng AA' v� B'C' b�ng bao nhi�u?<br>�p �n:",
    correctAnswer: "0,25",
    explanation: "T�nh to�n g�c gi�a hai ��ng th�ng $AA'$ v� $B'C'$, suy ra $\\cos = 0,25$ (ho�c $\\frac{1}{4}$).",
    image: null
  },
  {
    id: "q39",
    type: "fill",
    question: "Cho $F(x)$ l� h� nguy�n h�m c�a h�m s� $f(x)=\\sin x-\\cos x+\\frac{2}{\\cos^{2}x}, F(0)=1$. Gi� tr� $F(\\pi)$ b�ng bao nhi�u?<br>�p �n:",
    correctAnswer: "3",
    explanation: "Nguy�n h�m $F(x) = -\\cos x - \\sin x + 2\\tan x + C$. D�ng i�u ki�n $F(0)=1$ t�m ��c $C=2$. T�nh $F(\\pi) = 3$.",
    image: null
  },
  {
    id: "q40",
    type: "fill",
    question: "M�t v�t ang chuy�n �ng v�i v�n t�c $10 (m/s)$ th� thay �i v�i gia t�c $a(t)=3-4t+t^{2} (m/s^{2})$. Trong 10 gi�y sau khi thay �i v�n t�c l�n nh�t c�a v�t b�ng bao nhi�u m/s?<br>�p �n:",
    correctAnswer: "173,3",
    explanation: "V�n t�c $v(t) = 10 + \\int (3-4t+t^2)dt$. T�m gi� tr� l�n nh�t c�a h�m v�n t�c tr�n o�n $[0;10]$ l� $173,3$ m/s.",
    image: null
  },
  {
    id: "q41",
    type: "fill",
    question: "Cho h�nh lng tr� �ng ABC.A'B'C' c� �y l� tam gi�c vu�ng c�n t�i B, $AC=2a$ v� $A'B=3a$. S� o c�a g�c ph�ng nh� di�n [B, AC, B'] b�ng bao nhi�u �? (K�t qu� l�m tr�n �n ch� s� th�p ph�n th� nh�t)<br>�p �n:",
    correctAnswer: "69,3",
    explanation: "X�c �nh g�c ph�ng nh� di�n v� t�nh to�n, k�t qu� l�m tr�n l� $69,3^{\\circ}$.",
    image: null
  },
  {
    id: "q42",
    type: "fill",
    question: "Gi�i h�n d�y s� $u_{n}=\\frac{\\sqrt{n^{2}+2n}-\\sqrt{n^{2}+n}}{n}$ c� d�ng $\\frac{a}{\\sqrt{1+\\frac{b}{n}}+\\sqrt{1+\\frac{c}{n}}}$ v�i a; b; c l� c�c s� t� nhi�n. T�nh gi� tr� $a-b-c$<br>�p �n:",
    correctAnswer: "-2",
    explanation: "Bi�n �i gi�i h�n v� �ng nh�t h� th�c ta t�m ��c $a, b, c$ suy ra $a - b - c = -2$.",
    image: null
  },
  {
    id: "q43",
    type: "fill",
    question: "S� c�c nghi�m nguy�n kh�ng �m c�a b�t ph��ng tr�nh $x_{1}+x_{2}+x_{3}+x_{4}\\le 11$ l� bao nhi�u?<br>�p �n:",
    correctAnswer: "1365",
    explanation: "S� nghi�m nguy�n kh�ng �m c�a b�t ph��ng tr�nh t��ng ��ng v�i s� t� h�p ch�p 4 c�a $11 + 4 = 15$ ph�n t�: $C_{15}^4 = 1365$.",
    image: null
  },
  {
    id: "q44",
    type: "fill",
    question: "H�m s� $f(x)$ x�c �nh, li�n t�c tr�n $\\mathbb{R}$ v� c� �o h�m l� $f'(x)=|x-1|$. Bi�t r�ng $f(0)=3$. T�ng $f(2)+f(4)$ b�ng bao nhi�u?<br>�p �n:",
    correctAnswer: "12",
    explanation: "T�ch ph�n �o h�m � t�m h�m $f(x)$ tr�n c�c kho�ng kh�c nhau, t�nh ��c $f(2)$ v� $f(4)$, t�ng b�ng 12.",
    image: null
  },
  {
    id: "q45",
    type: "fill",
    question: "T� c�c s� 7, 8, 9 l�p ��c bao nhi�u s� t� nhi�n g�m 6 ch� s� th�a m�n �ng th�i hai i�u ki�n sau: M�i ch� s� xu�t hi�n �ng hai l�n v� hai ch� s� gi�ng nhau kh�ng �ng c�nh nhau?<br>�p �n:",
    correctAnswer: "76",
    explanation: "S� d�ng ph��ng ph�p ph�n b� ho�c s� � c�y �m s� th�a m�n i�u ki�n kh�ng c� 2 ch� s� gi�ng nhau �ng c�nh nhau, k�t qu� l� 76.",
    image: null
  },
  {
    id: "q46",
    type: "fill",
    question: "Ng��i ta d�ng 20 cu�n s�ch bao g�m 8 cu�n s�ch To�n, 7 cu�n s�ch L� v� 5 cu�n s�ch H�a (c�c cu�n s�ch c�ng lo�i th� gi�ng nhau) � l�m ph�n th��ng cho 10 h�c sinh, m�i h�c sinh nh�n ��c 2 cu�n s�ch kh�c th� lo�i (kh�ng t�nh th� t� c�c cu�n s�ch). C� bao nhi�u c�ch ph�t th��ng cho h�c sinh?<br>�p �n:",
    correctAnswer: "2520",
    explanation: "Ph�n chia s�ch v� ph�n ph�t cho h�c sinh, s� c�ch ph�t th��ng l� 2520.",
    image: null
  },
  {
    id: "q47",
    type: "fill",
    question: "C� bao nhi�u gi� tr� nguy�n c�a tham s� m � h�m s� $f(x)=\\begin{cases} \\frac{x^{2}-x-2}{x+1} & \\text{khi } x>-1 \\\\ |mx-2m^{2}| & \\text{khi } x\\le-1 \\end{cases}$ li�n t�c t�i $x=-1$?<br>�p �n:",
    correctAnswer: "1",
    explanation: "T�nh gi�i h�n tr�i v� gi�i h�n ph�i t�i $x=-1$, cho b�ng gi� tr� h�m s� t�i $-1$ � t�m $m$, c� 1 gi� tr� nguy�n.",
    image: null
  },
  {
    id: "q48",
    type: "fill",
    question: "M�t b�ng x�p h�ng � t�nh i�m chu�n ho� cho ch� s� nghi�n c�u khoa h�c c�a m�t s� tr��ng �i h�c � Vi�t Nam v� thu ��c k�t qu� sau:<br>| i�m | D��i 20 | [20;30) | [30;40) | [40;60) | [60;80) | [80;100) |<br>| S� tr��ng | 7 | 19 | 8 | 5 | 4 | 3 |<br>Ng��ng i�m t�i thi�u � �a ra danh s�ch 25% tr��ng �i h�c c� ch� s� nghi�n c�u t�t nh�t Vi�t Nam b�ng bao nhi�u?<br>�p �n:",
    correctAnswer: "42",
    explanation: "T�nh ph�n v� th� 75 ($P_{75}$) c�a m�u s� li�u gh�p nh�m, k�t qu� l� 42.",
    image: "cau_48.png"
  },
  {
    id: "q49",
    type: "fill",
    question: "Gi� s� s� l�y lan c�a m�t vi r�t ��c m� h�nh ho� b�i h�m s� $y=(2e^{-x})\\log x$, v�i $x>0$ v� x t�nh b�ng gi�. G�i $x_{0}$ l� th�i i�m m� s� l�y lan l� l�n nh�t. Gi� tr� c�a bi�u th�c $P=\\log_{2}\\frac{\\sqrt[3]{e.x_{0}}}{x_{0}+1}+\\log_{2}(e+1)$ b�ng<br>�p �n:",
    correctAnswer: "0,96",
    explanation: "T�m gi� tr� l�n nh�t c�a h�m s� m� h�nh h�a s� l�y lan, t�nh to�n gi� tr� bi�u th�c $P \\approx 0,96$.",
    image: null
  },
  {
    id: "q50",
    type: "fill",
    question: "C� bao nhi�u gi� tr� nguy�n thu�c o�n $[-2025;2025]$ c�a tham s� m � � th� h�m s� $y=\\frac{\\sqrt{x-3}}{x^{2}+x-m}$ c� �ng hai ��ng ti�m c�n?<br>�p �n:",
    correctAnswer: "2014",
    explanation: "Bi�n lu�n s� ��ng ti�m c�n �ng v� ti�m c�n ngang d�a v�o t�p x�c �nh $x \\ge 3$ v� m�u s�, t�m ��c 2014 gi� tr� nguy�n c�a $m$.",
    image: null
  }
];