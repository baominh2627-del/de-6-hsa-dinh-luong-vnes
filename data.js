export const examData = [
  {
    id: "q1",
    type: "mcq",
    question:
      "Có bao nhiêu số tự nhiên có 5 chữ số đôi một khác nhau mà các chữ số đó thuộc tập hợp \\{1;2;3;4;5\\} ?",
    options: ["$C_{5}^{5}$", "$A_{6}^{5}$", "5!.", "$5^{5}$."],
    correctAnswer: 2,
    explanation:
      "Số tự nhiên có 5 chữ số đôi một khác nhau lập từ 5 chữ số thuộc tập hợp \\{1;2;3;4;5\\} chính là các hoán vị của 5 phần tử. Số các số là $5!$. Đáp án đúng là C.",
    image: null,
  },
  {
    id: "q2",
    type: "mcq",
    question:
      "Trong không gian, khẳng định nào sau đây sai.<br>A. Nếu ba mặt phẳng phân biệt cắt nhau theo ba giao tuyến thì ba giao tuyến ấy hoặc đồng quy hoặc đôi một song song.<br>B. Hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thì song song với nhau.<br>C. Hai mặt phẳng phân biệt cùng vuông góc với một đường thẳng thì song song với nhau.<br>D. Cho hai đường thẳng chéo nhau. Có duy nhất một mặt phẳng chứa đường thẳng này và song song với đường thẳng kia.",
    options: ["A", "B", "C", "D"],
    correctAnswer: 1,
    explanation:
      "Khẳng định B sai vì hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thì có thể cắt nhau hoặc chéo nhau, không nhất thiết phải song song với nhau. Đáp án đúng là C.",
    image: null,
  },
  {
    id: "q3",
    type: "mcq",
    question:
      "Trong không gian với hệ tọa độ Oxyz; cho điểm $A(1;3;-2)$ và $(P):2x+y-2z-3=0$. Khoảng cách từ điểm A đến mặt phẳng (P) bằng<br>A. 1.<br>B. 2.<br>C. $\\frac{2}{3}$.<br>D. 3.",
    options: ["1.", "2.", "$\\frac{2}{3}$.", "3."],
    correctAnswer: 1,
    explanation:
      "Áp dụng công thức khoảng cách từ điểm $A(1;3;-2)$ đến mặt phẳng $(P): 2x+y-2z-3=0$:<br>$d(A,(P)) = \\frac{|2(1) + 3 - 2(-2) - 3|}{\\sqrt{2^2 + 1^2 + (-2)^2}} = \\frac{|2 + 3 + 4 - 3|}{\\sqrt{9}} = \\frac{6}{3} = 2$. Đáp án đúng là B.",
    image: null,
  },
  {
    id: "q4",
    type: "mcq",
    question:
      "Cho a,b là các số thực dương tùy ý và $a \\ne 1$, $\\log_{a^{4}}b$ bằng<br>A. $4+\\log_{a}b$.<br>B. $\\frac{1}{4}\\log_{a}b$<br>C. $4 \\log_{a}b$.<br>D. $\\frac{1}{4}+\\log_{a}b.$",
    options: [
      "$4+\\log_{a}b$.",
      "$\\frac{1}{4}\\log_{a}b$",
      "$4 \\log_{a}b$.",
      "$\\frac{1}{4}+\\log_{a}b.$",
    ],
    correctAnswer: 1,
    explanation:
      "Áp dụng tính chất logarit: $\\log_{a^k} b = \\frac{1}{k} \\log_a b$. Với $k=4$, ta có $\\log_{a^4} b = \\frac{1}{4}\\log_a b$. Đáp án đúng là B.",
    image: null,
  },
  {
    id: "q5",
    type: "mcq",
    question:
      "Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ khác vectơ - không thỏa mãn $|\\vec{a}|=2$, $|\\vec{b}|=3$ và tạo với nhau một góc bằng $45^{\\circ}$. Khi đó $\\vec{a}.\\vec{b}$ bằng bao nhiêu?<br>A. $\\vec{a}.\\vec{b}=5\\sqrt{2}$.<br>B. $\\vec{a}.\\vec{b}=3\\sqrt{2}$.<br>C. $\\vec{a}.\\vec{b}=2\\sqrt{5}$.<br>D. $\\vec{a}.\\vec{b}=2\\sqrt{3}$.",
    options: [
      "$\\vec{a}.\\vec{b}=5\\sqrt{2}$.",
      "$\\vec{a}.\\vec{b}=3\\sqrt{2}$.",
      "$\\vec{a}.\\vec{b}=2\\sqrt{5}$.",
      "$\\vec{a}.\\vec{b}=2\\sqrt{3}$.",
    ],
    correctAnswer: 1,
    explanation:
      "Tích vô hướng của hai vectơ: $\\vec{a}.\\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b}) = 2 \\cdot 3 \\cdot \\cos 45^{\\circ} = 6 \\cdot \\frac{\\sqrt{2}}{2} = 3\\sqrt{2}$. Đáp án đúng là B.",
    image: null,
  },
  {
    id: "q6",
    type: "mcq",
    question:
      "Trong hình vẽ dưới đây, hãy cho biết điểm L không là điểm chung của hai mặt phẳng nào?<br>A. (SBA) và (SBC).<br>B. (SAD) và (ALD).<br>C. (SBC) và (SBD).<br>D. (SAB) and (ALD).",
    options: [
      "(SBA) và (SBC).",
      "(SAD) và (ALD).",
      "(SBC) và (SBD).",
      "(SAB) và (ALD).",
    ],
    correctAnswer: 1,
    explanation:
      "Dựa vào hình vẽ hình chóp S.ABCD, điểm L nằm trên cạnh SB. Xét các mặt phẳng, điểm L không thuộc mặt phẳng (SAD) nên L không thể là điểm chung của (SAD) và (ALD). Đáp án đúng là B.",
    image: "cau_6.png",
  },
  {
    id: "q7",
    type: "mcq",
    question:
      "Cân nặng của 35 người trưởng thành tại một khu dân cư được cho như sau:<br>43 51 47 62 48 40 50 62 53 56 40 48 56 53 50 42 55<br>52 48 46 45 54 52 50 47 44 54 55 60 63 58 55 60 58 53.<br>Chuyển mẫu số liệu trên sang dạng ghép nhóm với sáu nhóm có độ dài bằng nhau. Khi đó, tứ phân vị thứ nhất của mẫu số liệu ghép nhóm đó bằng bao nhiêu?",
    options: ["47,8.", "48,5.", "47.", "47,5."],
    correctAnswer: 0,
    explanation:
      "Thực hiện ghép nhóm dữ liệu thành 6 nhóm có độ dài bằng nhau và tính toán tứ phân vị thứ nhất $Q_1 \\approx 47,8$. Đáp án đúng là A.",
    image: null,
  },
  {
    id: "q8",
    type: "mcq",
    question:
      "Cho hình chóp S.ABCD đáy là hình bình hành ABCD. Gọi M, N, P lần lượt là trung điểm của AB, AD, SC. Ta có mp(MNP). MN cắt các đường BC, CD lần lượt tại K,L. Gọi E là giao điểm của PK và SB, F là giao điểm của PL và SD. Ta có giao điểm của (MNP) với các cạnh SB, SC, SD lần lượt là E, P, F. Thiết diện tạo bởi (MNP) với S.ABCD là<br>A. tam giác MNP.<br>B. tứ giác MEPN.<br>C. ngũ giác MNFPE.<br>D. tam giác PKL.",
    options: [
      "tam giác MNP.",
      "tứ giác MEΡN.",
      "ngũ giác MNFPE.",
      "tam giác PKL.",
    ],
    correctAnswer: 2,
    explanation:
      "Thiết diện của mặt phẳng $(MNP)$ với hình chóp $S.ABCD$ là ngũ giác $MNFPE$. Đáp án đúng là C.",
    image: null,
  },
  {
    id: "q9",
    type: "mcq",
    question:
      "Dãy số $u_{n}=\\frac{2}{n}$ có phải là cấp số nhân không? Nếu phải hãy xác định công bội q.<br>A. $(u_{n})$ là cấp số nhân, $q=3$.<br>B. $(u_{n})$ là cấp số nhân, $q=\\frac{1}{2}$.<br>C. $(u_{n})$ là cấp số nhân, $q=4$.<br>D. $(u_{n})$ không phải là cấp số nhân.",
    options: [
      "$(u_{n})$ là cấp số nhân, $q=3$.",
      "$(u_{n})$ là cấp số nhân, $q=\\frac{1}{2}$",
      "$(u_{n})$ là cấp số nhân, $q=4$.",
      "$(u_{n})$ không phải là cấp số nhân.",
    ],
    correctAnswer: 3,
    explanation:
      "Ta có $u_1 = 2, u_2 = 1, u_3 = \\frac{2}{3}$. Vì $\\frac{u_2}{u_1} = \\frac{1}{2} \\neq \\frac{u_3}{u_2} = \\frac{2}{3}$ nên dãy số $(u_n)$ không phải là cấp số nhân. Đáp án đúng là D.",
    image: null,
  },
  {
    id: "q10",
    type: "mcq",
    question:
      "Cho các số thực dương a,b thỏa mãn $\\log_{2}a=x, \\log_{2}b = y$. Tính $P=\\log_{2}(a^{2}b^{3})$.<br>A. $P=2x+3y$.<br>B. $P=x^{2}+y^{3}$.<br>C. $P=6xy$.<br>D. $P=x^{2}y^{3}$.",
    options: ["$P=2x+3y$.", "$P=x^{2}+y^{3}$.", "$P=6xy$.", "$P=x^{2}y^{3}$."],
    correctAnswer: 0,
    explanation:
      "Áp dụng tính chất logarit: $P = \\log_2(a^2 b^3) = \\log_2(a^2) + \\log_2(b^3) = 2\\log_2 a + 3\\log_2 b = 2x + 3y$. Đáp án đúng là A.",
    image: null,
  },
  {
    id: "q11",
    type: "mcq",
    question:
      "Giá trị của $\\log_{a}\\frac{1}{a^{3}}$ với $a>0, a \\ne 1$ bằng<br>A. $-\\frac{2}{3}$.<br>B. 3.<br>C. $-\\frac{3}{2}$.<br>D. -3.",
    options: ["-$-\\frac{2}{3}$.", "3.", "$-\\frac{3}{2}$.", "-3."],
    correctAnswer: 3,
    explanation:
      "Ta có $\\log_a \\frac{1}{a^3} = \\log_a (a^{-3}) = -3$. Đáp án đúng là D.",
    image: null,
  },
  {
    id: "q12",
    type: "mcq",
    question:
      "Cho tam giác PMQ có $PM=10, \\hat{P}=25^{\\circ}, \\hat{M}=52^{\\circ}$, độ dài cạnh PQ gần nhất với giá trị nào sau đây?<br>A. 8,09.<br>B. 12,91.<br>C. 13,88.<br>D. 9,43.",
    options: ["8,09.", "12,91.", "13,88.", "9,43."],
    correctAnswer: 0,
    explanation:
      "Sử dụng định lý sin trong tam giác $PMQ$: $\\frac{PQ}{\\sin M} = \\frac{PM}{\\sin \\hat{Q}}$. Tính được $PQ \\approx 8,09$. Đáp án đúng là A.",
    image: null,
  },
  {
    id: "q13",
    type: "mcq",
    question:
      "Cho tam giác vuông, trong đó có một góc bằng trung bình cộng của hai góc còn lại. Cạnh lớn nhất của tam giác đó bằng a. Tính diện tích tam giác.<br>A. $\\frac{a^{2}\\sqrt{3}}{8}$<br>B. $\\frac{a^{2}\\sqrt{3}}{4}$<br>C. $\\frac{a^{2}\\sqrt{6}}{10}$<br>D. $\\frac{a^{2}\\sqrt{2}}{4}$",
    options: [
      "$\\frac{a^{2}\\sqrt{3}}{8}$",
      "$\\frac{a^{2}\\sqrt{3}}{4}$",
      "$\\frac{a^{2}\\sqrt{6}}{10}$",
      "$\\frac{a^{2}\\sqrt{2}}{4}$",
    ],
    correctAnswer: 0,
    explanation:
      "Tam giác vuông có một góc bằng trung bình cộng hai góc còn lại tức là góc đó bằng $90^{\\circ} / 2 = 45^{\\circ}$. Cạnh huyền là $a$. Diện tích tam giác tính được là $\\frac{a^2\\sqrt{3}}{8}$. Đáp án đúng là A.",
    image: null,
  },
  {
    id: "q14",
    type: "mcq",
    question:
      "Biết $\\log_{7}12=a$; $\\log_{12}24=b$. Giá trị của $\\log_{54}168$ được tính theo a và b là<br>A. $\\frac{ab+1}{a(8-5b)}$.<br>B. $\\frac{ab-1}{a(8+5b)}$.<br>C. $\\frac{2ab+1}{8a-5b}$.<br>D. $\\frac{2ab+1}{8a+5b}$.",
    options: [
      "$\\frac{ab+1}{a(8-5b)}$.",
      "$\\frac{ab-1}{a(8+5b)}$",
      "$\\frac{2ab+1}{8a-5b}$.",
      "$\\frac{2ab+1}{8a+5b}$",
    ],
    correctAnswer: 0,
    explanation:
      "Biến đổi biểu thức logarit theo cơ số trung gian ta được kết quả $\\frac{ab+1}{a(8-5b)}$. Đáp án đúng là A.",
    image: null,
  },
  {
    id: "q15",
    type: "mcq",
    question:
      "Tìm m để phương trình $\\sin x-\\cos x-m = 0$ có nghiệm.<br>A. $-\\sqrt{2}\\le m\\le\\sqrt{2}$.<br>B. $-\\sqrt{2}\\le m\\le 1$.<br>C. $-1\\le m\\le\\sqrt{2}$.<br>D. $-1\\le m\\le 1$.",
    options: [
      "-$-\\sqrt{2}\\le m\\le\\sqrt{2}$",
      "$-\\sqrt{2}\\le m\\le 1$.",
      "$-1\\le m\\le\\sqrt{2}$.",
      "$-1\\le m\\le 1$.",
    ],
    correctAnswer: 0,
    explanation:
      "Phương trình tương đương với $\\sqrt{2}\\sin(x - \\frac{\\pi}{4}) = m \\Leftrightarrow \\sin(x - \\frac{\\pi}{4}) = \\frac{m}{\\sqrt{2}}$. Phương trình có nghiệm khi và chỉ khi $|\\frac{m}{\\sqrt{2}}| \\le 1 \\Leftrightarrow -\\sqrt{2} \\le m \\le \\sqrt{2}$. Đáp án đúng là A.",
    image: null,
  },
  {
    id: "q16",
    type: "mcq",
    question:
      "Cân nặng (kg) của 35 người trưởng thành tại một khu dân cư được cho như sau:<br>43 51 47 62 48 40 50 62 53 56 40 48 56 53 50 42 55<br>52 48 46 45 54 52 50 47 44 54 55 60 63 58 55 60 58 53.<br>Hãy chuyển mẫu số liệu sang dạng ghép nhóm với sáu nhóm có độ dài bằng nhau. Tính tứ phân vị thứ ba của mẫu số liệu trên.<br>A. 55,5.<br>B. 56,25.<br>C. 59,4.<br>D. 56.",
    options: ["55,5.", "56,25.", "59,4.", "56."],
    correctAnswer: 1,
    explanation:
      "Tính toán từ bảng tần số ghép nhóm 6 nhóm, xác định tứ phân vị thứ ba $Q_3 = 56,25$. Đáp án đúng là B.",
    image: "cau_16.png",
  },
  {
    id: "q17",
    type: "mcq",
    question:
      "Bảng sau thống kê số lớp và số học sinh theo từng khối ở một trường Trung học cơ sở. <br>Hiệu trưởng trường đó cho biết sĩ số mỗi lớp trong trường đều không vượt quá 45 học sinh. Biết rằng trong bảng trên có một khối lớp bị thống kê sai, hãy tìm khối lớp đó.<br>A. Lớp 6.<br>B. Lớp 7.<br>C. Lớp 8.<br>D. Lớp 9.",
    options: ["Lớp 6.", "Lớp 7.", "Lớp 8.", "Lớp 9."],
    correctAnswer: 1,
    explanation:
      "Kiểm tra sĩ số trung bình mỗi lớp cho từng khối: Khối 7 có 370 học sinh / 8 lớp = 46,25 học sinh/lớp (vượt quá 45). Vậy khối 7 bị thống kê sai. Đáp án đúng là B.",
    image: null,
  },
  {
    id: "q18",
    type: "mcq",
    question:
      "Muốn đo chiều cao của một tòa nhà, người ta lấy hai điểm A, B trên mặt đất cách nhau 10 m cùng thẳng hàng với chân C của tòa nhà để đặt hai giác kế. Chân của hai giác kế có cùng chiều cao là 1 m. Gọi D là đỉnh tòa nhà và hai điểm A, B, cùng thẳng hàng với C thuộc đường cao CD của tòa nhà. Người ta đo được $DA_{1}C_{1}=48^{\\circ}$, $DB_{1}C_{1}=36^{\\circ}$. Tính chiều cao CD của tòa nhà.<br>A. $CD\\approx25,77~m$.<br>B. $CD\\approx23,08~m$.<br>C. $CD\\approx24,84~m$.<br>D. $CD\\approx26,21~m$.",
    options: [
      "$CD\\approx25,77~m$.",
      "$CD\\approx23,08~m$.",
      "$CD\\approx24,84~m$.",
      "$CD\\approx26,21~m$.",
    ],
    correctAnswer: 3,
    explanation:
      "Sử dụng hệ thức lượng trong tam giác vuông tính khoảng cách và chiều cao tòa nhà cộng với chiều cao giác kế 1m, ta được $CD \\approx 26,21$ m. Đáp án đúng là D.",
    image: "cau_18.png",
  },
  {
    id: "q19",
    type: "mcq",
    question:
      "Một người làm một cái cổng cổ xưa có dạng Parabol như hình vẽ. Hãy tính diện tích của cái cổng?<br>A. $\\frac{28}{3}$<br>B. $\\frac{16}{3}$.<br>C. 16.<br>D. $\\frac{32}{3}$.",
    options: ["$\\frac{28}{3}$", "$\\frac{16}{3}$.", "16.", "$\\frac{32}{3}$."],
    correctAnswer: 3,
    explanation:
      "Parabol có bề lõm quay xuống, đi qua các điểm gốc tọa độ và đỉnh. Tính tích phân diện tích hình phẳng giới hạn bởi Parabol ta được $\\frac{32}{3}$. Đáp án đúng là D.",
    image: "cau_19.png",
  },
  {
    id: "q20",
    type: "mcq",
    question:
      "Bốn cung thủ A, B, C, D thi đấu với nhau và được ghi lại kết quả sau 6 lần bắn như sau:<br>| Lần | 1 | 2 | 3 | 4 | 5 | 6 |<br>| Cung thủ A | 7 | 7 | 6 | 5 | 8 | 9 |<br>| Cung thủ B | 9 | 10 | 5 | 8 | 7 | 8 |<br>| Cung thủ C | 6 | 7 | 8 | 9 | 10 | 9 |<br>| Cung thủ D | 6 | 8 | 7 | 9 | 6 | 5 |<br>Hỏi cung thủ nào có phong độ ổn định nhất?<br>A. Cung thủ D.<br>B. Cung thủ B.<br>C. Cung thủ C.<br>D. Cung thủ A.",
    options: ["Cung thủ D.", "Cung thủ B.", "Cung thủ C.", "Cung thủ A."],
    correctAnswer: 3,
    explanation:
      "Cung thủ có độ lệch chuẩn nhỏ nhất (hoặc phương sai nhỏ nhất) sẽ ổn định nhất. Tính toán phương sai cho các cung thủ ta thấy cung thủ C hoặc A ổn định, xét chi tiết đáp án chuẩn là D.",
    image: null,
  },
  {
    id: "q21",
    type: "mcq",
    question:
      "Để phương trình $\\frac{5+4\\sin(\\frac{3\\pi}{2}-x)}{\\sin x}=\\frac{6\\tan \\alpha}{1+\\tan^{2}\\alpha}$ có nghiệm thì giá trị $\\alpha$ là<br>A. $\\alpha=\\frac{\\pi}{3}+k\\frac{\\pi}{2}$<br>B. $\\alpha=\\frac{\\pi}{4}+k\\frac{\\pi}{2}$<br>C. $\\alpha=-\\frac{\\pi}{4}+k\\pi$<br>D. $\\alpha=k\\frac{\\pi}{2}$",
    options: [
      "$\\alpha=\\frac{\\pi}{3}+k\\frac{\\pi}{2}$",
      "$\\alpha=\\frac{\\pi}{4}+k\\frac{\\pi}{2}$",
      "$\\alpha=-\\frac{\\pi}{4}+k\\pi$",
      "$\\alpha=k\\frac{\\pi}{2}$",
    ],
    correctAnswer: 1,
    explanation:
      "Rút gọn phương trình lượng giác và điều kiện có nghiệm ta tìm được $\\alpha = \\frac{\\pi}{4} + k\\frac{\\pi}{2}$. Đáp án đúng là B.",
    image: null,
  },
  {
    id: "q22",
    type: "mcq",
    question:
      "Trong một buổi trình diễn thời trang, hàng ghế VIP đầu tiên được sắp xếp bao gồm 10 ghế trong đó có 2 ghế dành cho 2 nhà phê bình thời trang nổi tiếng. Biết rằng 2 nhà phê bình này phải ngồi cách nhau đúng 2 ghế để khi máy quay lia đến thì cả hai người vừa lọt khung hình. Hỏi có bao nhiêu cách sắp xếp hàng ghế VIP đầu tiên?<br>A. 1814400.<br>B. 161280.<br>C. 5080320.<br>D. 564480.",
    options: ["1814400.", "161280.", "5080320.", "564480."],
    correctAnswer: 3,
    explanation:
      "Sắp xếp 2 nhà phê bình vào các vị trí cách nhau đúng 2 ghế, sau đó sắp xếp 8 người còn lại vào các ghế khác. Số cách sắp xếp là 564480. Đáp án đúng là D.",
    image: null,
  },
  {
    id: "q23",
    type: "mcq",
    question:
      "Cho khối chóp S.ABC có đáy là tam giác vuông tại B, $BA=a, BC=2a, SA=2a, SA \\perp (ABC)$. Gọi K là hình chiếu của A trên SC. Tính khoảng cách từ điểm K đến mặt phẳng (SAB)<br>A. $\\frac{8a}{9}$<br>B. $\\frac{a}{9}$<br>C. $\\frac{2a}{9}$<br>D. $\\frac{5a}{9}$",
    options: [
      "$\\frac{8a}{9}$",
      "$\\frac{a}{9}$",
      "$\\frac{2a}{9}$",
      "$\\frac{5a}{9}$",
    ],
    correctAnswer: 0,
    explanation:
      "Tính khoảng cách từ K đến mặt phẳng $(SAB)$ bằng phương pháp tọa độ hóa hoặc hình học không gian, ta được $\\frac{8a}{9}$. Đáp án đúng là A.",
    image: null,
  },
  {
    id: "q24",
    type: "mcq",
    question:
      "Cho hình chóp S.ABCD có đáy ABCD là hình bình hành có tâm O, $AB=8, SA=SB=6$. Gọi (P) là mặt phẳng qua O và song song với (SAB). Thiết diện của (P) và hình chóp S.ABCD là<br>A. $5\\sqrt{5}$.<br>B. $6\\sqrt{5}$.<br>C. 12.<br>D. 13.",
    options: ["$5\\sqrt{5}$.", "$6\\sqrt{5}$.", "12.", "13."],
    correctAnswer: 1,
    explanation:
      "Thiết diện tạo bởi mặt phẳng $(P)$ song song với $(SAB)$ cắt hình chóp theo một tam giác hoặc hình thang, tính chu vi hoặc diện tích theo yêu cầu đề, kết quả là $6\\sqrt{5}$. Đáp án đúng là B.",
    image: null,
  },
  {
    id: "q25",
    type: "mcq",
    question:
      'Gieo một con xúc xắc liên tiếp 2 lần. Xác suất của biến cố A "Số chấm xuất hiện ở lần gieo sau lớn hơn lần gieo trước" là<br>A. $P(A)=\\frac{21}{36}$<br>B. $P(A)=\\frac{5}{12}$<br>C. $P(A)=\\frac{5}{36}$<br>D. $P(A)=\\frac{1}{6}$',
    options: [
      "$P(A)=\\frac{21}{36}$",
      "$P(A)=\\frac{5}{12}$",
      "$P(A)=\\frac{5}{36}$",
      "$P(A)=\\frac{1}{6}$",
    ],
    correctAnswer: 1,
    explanation:
      "Không gian mẫu $n(\\Omega) = 36$. Các cặp số thỏa mãn lần sau lớn hơn lần trước là $15$ cặp. Xác suất là $\\frac{15}{36} = \\frac{5}{12}$. Đáp án đúng là B.",
    image: null,
  },
  {
    id: "q26",
    type: "mcq",
    question:
      "Cho hình chóp S.ABC có đáy ABC là tam giác vuông cân tại B, $AB=a, SA=a\\sqrt{3}$ và $SA \\perp (ABC)$. Gọi M là điểm trên cạnh AB và $AM=x(0<x<a)$ mặt phẳng (a) đi qua M và vuông góc với AB. Giả sử thiết diện của hình chóp S.ABC với (a) là tứ giác MNPQ. Tìm x để thiết diện MNPQ lớn nhất?<br>A. $x=\\frac{a}{2}$<br>B. $x=\\frac{a}{\\sqrt{2}}$<br>C. $x=\\frac{3a}{2}$<br>D. $x=a$.",
    options: [
      "$x=\\frac{a}{2}$",
      "$x=\\frac{a}{\\sqrt{2}}$",
      "$x=\\frac{3a}{2}$",
      "$x=a$.",
    ],
    correctAnswer: 0,
    explanation:
      "Thiết diện là hình thang vuông. Diện tích thiết diện đạt giá trị lớn nhất khi $x = \\frac{a}{2}$. Đáp án đúng là A.",
    image: null,
  },
  {
    id: "q27",
    type: "mcq",
    question:
      "Có 30 quả cầu được đánh số từ 1 đến 30. Lấy đồng thời hai quả cầu rồi nhân hai số trên hai quả cầu lấy được. Có bao nhiêu cách lấy hai quả cầu để tích nhận được là một số chia hết cho 10?<br>A. 3.<br>B. 120.<br>C. 81.<br>D. 36.",
    options: ["3.", "120", "81", "36"],
    correctAnswer: 1,
    explanation:
      "Tích chia hết cho 10 khi có ít nhất một quả chia hết cho 2 và một quả chia hết cho 5. Số cách lấy là 120. Đáp án đúng là B.",
    image: null,
  },
  {
    id: "q28",
    type: "mcq",
    question:
      "Từ các chữ số 0,1,2,3,4,5 có thể lập được bao nhiêu số tự nhiên chẵn có 4 chữ số đôi một khác nhau?<br>A. 240.<br>B. 160.<br>C. 752.<br>D. 156.",
    options: ["240.", "160.", "752.", "156."],
    correctAnswer: 3,
    explanation:
      "Sử dụng quy tắc nhân và trừ các trường hợp chữ số 0 ở hàng đầu, ta tính được 156 số. Đáp án đúng là D.",
    image: null,
  },
  {
    id: "q29",
    type: "mcq",
    question:
      "Có bao nhiêu giá trị nguyên dương của tham số m để hàm số $y=\\frac{mx+2}{x+3m}$ đồng biến trên khoảng $(-\\infty;-6)$.<br>A. 2.<br>B. 6.<br>C. Vô số.<br>D. 1.",
    options: ["2.", "6.", "Vô số.", "1."],
    correctAnswer: 0,
    explanation:
      "Tính đạo hàm $y' = \\frac{3m^2 - 2}{(x+3m)^2}$. Để hàm số đồng biến trên $(-\\infty; -6)$ thì $3m^2 - 2 > 0$ và điểm gián đoạn $-3m \\notin (-\\infty; -6)$. Tìm được 2 giá trị nguyên dương của $m$. Đáp án đúng là A.",
    image: null,
  },
  {
    id: "q30",
    type: "mcq",
    question:
      "Giả sử $(1+x)(1+x+x^{2})...(1+x+x^{2}+\\cdot\\cdot\\cdot+x^{n})=a_{0}+a_{1}x+a_{2}x^{2}+\\cdot\\cdot\\cdot+a_{m}x^{m}$. Tính $\\sum_{r=0}^{m}a_{r}$.<br>A. n.<br>B. n!<br>C. 1.<br>D. $(n+1)!$",
    options: ["n.", "n!", "1.", "$(n+1)!$"],
    correctAnswer: 3,
    explanation:
      "Tổng các hệ số $\\sum_{r=0}^m a_r$ chính là giá trị của đa thức tại $x = 1$. Thay $x=1$ vào đẳng thức ta được tích các tổng $1 \\cdot 2 \\cdot 3 \\dots (n+1) = (n+1)!$. Đáp án đúng là D.",
    image: null,
  },
  {
    id: "q31",
    type: "mcq",
    question:
      "Gọi S là tập nghiệm của phương trình $x^{3}+x-7=\\sqrt{x^{2}+5}$. Số phần tử con của tập hợp S là<br>A. 1.<br>B. 2.<br>C. 4.<br>D. 8.",
    options: ["1.", "2.", "4.", "8."],
    correctAnswer: 1,
    explanation:
      "Phương trình có 1 nghiệm thực duy nhất, nên tập nghiệm $S$ có 1 phần tử. Số tập con của $S$ là $2^1 = 2$. Đáp án đúng là B.",
    image: null,
  },
  {
    id: "q32",
    type: "mcq",
    question:
      "Xác định m để phương trình $x^{3}-3x^{2}-9x+m=0$ có ba nghiệm phân biệt lập thành cấp số cộng.<br>A. $m=13$.<br>B. $m=12$.<br>C. $m=16$.<br>D. $m=11$.",
    options: ["$m=13$.", "$m=12$.", "$m=16$.", "$m=11$."],
    correctAnswer: 3,
    explanation:
      "Giả sử 3 nghiệm là $x_0 - d, x_0, x_0 + d$. Theo định lý Viet cho phương trình bậc 3, ta tìm được $x_0 = 1$ và giá trị $m = 11$. Đáp án đúng là D.",
    image: null,
  },
  {
    id: "q33",
    type: "mcq",
    question:
      "Gọi $S_{1};S_{2};S_{3}$ là tổng $n_1; n_2; n_3$ số hạng đầu của một cấp số cộng. Khi đó $\\frac{S_{1}}{n_{1}}(n_{2}-n_{3})+\\frac{S_{2}}{n_{2}}(n_{3}-n_{1})+\\frac{S_{3}}{n_{3}}(n_{1}-n_{2})$ bằng<br>A. 0.<br>B. 1.<br>C. 2.<br>D. 3.",
    options: ["0.", "1.", "2.", "3."],
    correctAnswer: 0,
    explanation:
      "Thay công thức tổng $n$ số hạng đầu của cấp số cộng vào biểu thức, ta rút gọn được kết quả bằng 0. Đáp án đúng là A.",
    image: null,
  },
  {
    id: "q34",
    type: "mcq",
    question:
      "Xác định tất cả các giá trị của m để $1-\\cos 2x+2\\cos^{2}x+2\\tan x= 4m\\sin x$ chỉ có 3 điểm biểu diễn trên đường tròn lượng giác<br>A. $m=\\sqrt{2}$<br>B. $m=-\\sqrt{2}$<br>C. $m=0$<br>D. $m=\\pm\\sqrt{2}$",
    options: ["$m=\\sqrt{2}$", "$m=-\\sqrt{2}$", "$m=0$", "$m=\\pm\\sqrt{2}$"],
    correctAnswer: 3,
    explanation:
      "Giải phương trình và biện luận số điểm biểu diễn nghiệm trên đường tròn lượng giác, ta được $m = \\pm\\sqrt{2}$. Đáp án đúng là D.",
    image: null,
  },
  {
    id: "q35",
    type: "mcq",
    question:
      "Giá trị nhỏ nhất của biểu thức $F=4x-7y$ trên miền xác định bởi hệ bất phương trình $\\begin{cases} 0\\le x-y\\le 3 \\\\ 0\\le x+2y\\le 4 \\end{cases}$ là<br>A. 0.<br>B. -4.<br>C. 11.<br>D. 15.",
    options: ["0.", "-4.", "11.", "15."],
    correctAnswer: 1,
    explanation:
      "Xác định miền nghiệm đa giác trên mặt phẳng tọa độ, tính giá trị biểu thức $F$ tại các đỉnh của miền nghiệm, giá trị nhỏ nhất là $-4$. Đáp án đúng là B.",
    image: null,
  },
  {
    id: "q36",
    type: "fill",
    question:
      "Cho hình lập phương ABCD.A'B'C'D'. Gọi M là trung điểm của BC. Số đo góc giữa hai đường thẳng AM và BC bằng bao nhiêu độ?<br>Đáp án:",
    correctAnswer: "45",
    explanation:
      "Vì $BC \\parallel AD$ nên góc giữa $AM$ và $BC$ bằng góc giữa $AM$ và $AD$, chính là $\\widehat{MAD} = 45^{\\circ}$.",
    image: null,
  },
  {
    id: "q37",
    type: "fill",
    question:
      "Một căn bệnh có 1% dân số mắc phải. Một phương pháp chuẩn đoán được phát triển có tỷ lệ chính xác là 99%. Với những người bị bệnh, phương pháp này sẽ đưa ra kết quả dương tính 99% số trường hợp. Với người không mắc bệnh, phương pháp này cũng chuẩn đoán đúng 99 trong 100 trường hợp. Nếu một người kiểm tra và kết quả là dương tính (bị bệnh), xác suất để người đó thực sự bị bệnh là bao nhiêu?<br>Đáp án:",
    correctAnswer: "0,5",
    explanation:
      "Sử dụng định lý Bayes tính xác suất có điều kiện, kết quả là $0,5$ (hoặc $\\frac{1}{2}$).",
    image: null,
  },
  {
    id: "q38",
    type: "fill",
    question:
      "Cho hình lăng trụ ABC.A'B'C' có độ dài cạnh bên bằng 2a, đáy ABC là tam giác vuông tại A, $AB=a, AC=a\\sqrt{3}$ và hình chiếu vuông góc của đỉnh A' trên mặt phẳng (ABC) là trung điểm của cạnh BC. Côsin của góc giữa hai đường thẳng AA' và B'C' bằng bao nhiêu?<br>Đáp án:",
    correctAnswer: "0,25",
    explanation:
      "Tính toán góc giữa hai đường thẳng $AA'$ và $B'C'$, suy ra $\\cos = 0,25$ (hoặc $\\frac{1}{4}$).",
    image: null,
  },
  {
    id: "q39",
    type: "fill",
    question:
      "Cho $F(x)$ là họ nguyên hàm của hàm số $f(x)=\\sin x-\\cos x+\\frac{2}{\\cos^{2}x}, F(0)=1$. Giá trị $F(\\pi)$ bằng bao nhiêu?<br>Đáp án:",
    correctAnswer: "3",
    explanation:
      "Nguyên hàm $F(x) = -\\cos x - \\sin x + 2\\tan x + C$. Dùng điều kiện $F(0)=1$ tìm được $C=2$. Tính $F(\\pi) = 3$.",
    image: null,
  },
  {
    id: "q40",
    type: "fill",
    question:
      "Một vật đang chuyển động với vận tốc $10 (m/s)$ thì thay đổi với gia tốc $a(t)=3-4t+t^{2} (m/s^{2})$. Trong 10 giây sau khi thay đổi vận tốc lớn nhất của vật bằng bao nhiêu m/s?<br>Đáp án:",
    correctAnswer: "173,3",
    explanation:
      "Vận tốc $v(t) = 10 + \\int (3-4t+t^2)dt$. Tìm giá trị lớn nhất của hàm vận tốc trên đoạn $[0;10]$ là $173,3$ m/s.",
    image: null,
  },
  {
    id: "q41",
    type: "fill",
    question:
      "Cho hình lăng trụ đứng ABC.A'B'C' có đáy là tam giác vuông cân tại B, $AC=2a$ và $A'B=3a$. Số đo của góc phẳng nhị diện [B, AC, B'] bằng bao nhiêu độ? (Kết quả làm tròn đến chữ số thập phân thứ nhất)<br>Đáp án:",
    correctAnswer: "69,3",
    explanation:
      "Xác định góc phẳng nhị diện và tính toán, kết quả làm tròn là $69,3^{\\circ}$.",
    image: null,
  },
  {
    id: "q42",
    type: "fill",
    question:
      "Giới hạn dãy số $u_{n}=\\frac{\\sqrt{n^{2}+2n}-\\sqrt{n^{2}+n}}{n}$ có dạng $\\frac{a}{\\sqrt{1+\\frac{b}{n}}+\\sqrt{1+\\frac{c}{n}}}$ với a; b; c là các số tự nhiên. Tính giá trị $a-b-c$<br>Đáp án:",
    correctAnswer: "-2",
    explanation:
      "Biến đổi giới hạn và đồng nhất hệ thức ta tìm được $a, b, c$ suy ra $a - b - c = -2$.",
    image: null,
  },
  {
    id: "q43",
    type: "fill",
    question:
      "Số các nghiệm nguyên không âm của bất phương trình $x_{1}+x_{2}+x_{3}+x_{4}\\le 11$ là bao nhiêu?<br>Đáp án:",
    correctAnswer: "1365",
    explanation:
      "Số nghiệm nguyên không âm của bất phương trình tương đương với số tổ hợp chập 4 của $11 + 4 = 15$ phần tử: $C_{15}^4 = 1365$.",
    image: null,
  },
  {
    id: "q44",
    type: "fill",
    question:
      "Hàm số $f(x)$ xác định, liên tục trên $\\mathbb{R}$ và có đạo hàm là $f'(x)=|x-1|$. Biết rằng $f(0)=3$. Tổng $f(2)+f(4)$ bằng bao nhiêu?<br>Đáp án:",
    correctAnswer: "12",
    explanation:
      "Tích phân đạo hàm để tìm hàm $f(x)$ trên các khoảng khác nhau, tính được $f(2)$ và $f(4)$, tổng bằng 12.",
    image: null,
  },
  {
    id: "q45",
    type: "fill",
    question:
      "Từ các số 7, 8, 9 lập được bao nhiêu số tự nhiên gồm 6 chữ số thỏa mãn đồng thời hai điều kiện sau: Mỗi chữ số xuất hiện đúng hai lần và hai chữ số giống nhau không đứng cạnh nhau?<br>Đáp án:",
    correctAnswer: "76",
    explanation:
      "Sử dụng phương pháp phần bù hoặc sơ đồ cây đếm số thỏa mãn điều kiện không có 2 chữ số giống nhau đứng cạnh nhau, kết quả là 76.",
    image: null,
  },
  {
    id: "q46",
    type: "fill",
    question:
      "Người ta dùng 20 cuốn sách bao gồm 8 cuốn sách Toán, 7 cuốn sách Lý và 5 cuốn sách Hóa (các cuốn sách cùng loại thì giống nhau) để làm phần thưởng cho 10 học sinh, mỗi học sinh nhận được 2 cuốn sách khác thể loại (không tính thứ tự các cuốn sách). Có bao nhiêu cách phát thưởng cho học sinh?<br>Đáp án:",
    correctAnswer: "2520",
    explanation:
      "Phân chia sách và phân phát cho học sinh, số cách phát thưởng là 2520.",
    image: null,
  },
  {
    id: "q47",
    type: "fill",
    question:
      "Có bao nhiêu giá trị nguyên của tham số m để hàm số $f(x)=\\begin{cases} \\frac{x^{2}-x-2}{x+1} & \\text{khi } x>-1 \\\\ |mx-2m^{2}| & \\text{khi } x\\le-1 \\end{cases}$ liên tục tại $x=-1$?<br>Đáp án:",
    correctAnswer: "1",
    explanation:
      "Tính giới hạn trái và giới hạn phải tại $x=-1$, cho bằng giá trị hàm số tại $-1$ để tìm $m$, có 1 giá trị nguyên.",
    image: null,
  },
  {
    id: "q48",
    type: "fill",
    question:
      "Một bảng xếp hạng đã tính điểm chuẩn hoá cho chỉ số nghiên cứu khoa học của một số trường đại học ở Việt Nam và thu được kết quả sau:<br>| Điểm | Dưới 20 | [20;30) | [30;40) | [40;60) | [60;80) | [80;100) |<br>| Số trường | 7 | 19 | 8 | 5 | 4 | 3 |<br>Ngưỡng điểm tối thiểu để đưa ra danh sách 25% trường đại học có chỉ số nghiên cứu tốt nhất Việt Nam bằng bao nhiêu?<br>Đáp án:",
    correctAnswer: "42",
    explanation:
      "Tính phân vị thứ 75 ($P_{75}$) của mẫu số liệu ghép nhóm, kết quả là 42.",
    image: "cau_48.png",
  },
  {
    id: "q49",
    type: "fill",
    question:
      "Giả sử sự lây lan của một vi rút được mô hình hoá bởi hàm số $y=(2e^{-x})\\log x$, với $x>0$ và x tính bằng giờ. Gọi $x_{0}$ là thời điểm mà sự lây lan là lớn nhất. Giá trị của biểu thức $P=\\log_{2}\\frac{\\sqrt[3]{e.x_{0}}}{x_{0}+1}+\\log_{2}(e+1)$ bằng<br>Đáp án:",
    correctAnswer: "0,96",
    explanation:
      "Tìm giá trị lớn nhất của hàm số mô hình hóa sự lây lan, tính toán giá trị biểu thức $P \\approx 0,96$.",
    image: null,
  },
  {
    id: "q50",
    type: "fill",
    question:
      "Có bao nhiêu giá trị nguyên thuộc đoạn $[-2025;2025]$ của tham số m để đồ thị hàm số $y=\\frac{\\sqrt{x-3}}{x^{2}+x-m}$ có đúng hai đường tiệm cận?<br>Đáp án:",
    correctAnswer: "2014",
    explanation:
      "Biện luận số đường tiệm cận đứng và tiệm cận ngang dựa vào tập xác định $x \\ge 3$ và mẫu số, tìm được 2014 giá trị nguyên của $m$.",
    image: null,
  },
];
