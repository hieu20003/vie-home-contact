# vie-home-contact
NHỚ ĐỌC KỸ VÀ NHÌN KỸ TÊN FILE, TRÁNH NHẦM LẪN :v

Đây là cách để sửa được file và dùng nó
Bình thường các file html, css, js khác các bạn chỉ cần download và thay đổi là tự động URL của js sẽ thay đổi 
Nhưng đây là file cố định URL rồi, giờ sẽ hướng dẫn các bạn thay đổi để có thể chỉnh sửa nó.
(tại sao mình không sửa luôn, thì tại nó nhiều quá mà mỗi người dùng 1 trình duyệt web khác nhau để chạy thử nên thôi, khi nào xong thì áp dụng 1 cái chung :v)
À trước tiên là sau khi download xong thì nhớ là nhét vào các ứng dụng chạy code thì mới lên hình nhé
 chứ bấm chạy không là nó không hiện lên cái gì đâu :|
 
>>>Giải thích tại sao phải dài dòng như vậy: Bởi vì đây là do người nước ngoài chủ yếu dùng javascript ĐẸP(thường là react, next) 
để nó nhập được nhiều dữ liệu từ các phần khác của HTML nên là nó đã làm phức tạp hoá vấn đề code dài dòng như vậy :O

Giờ là giới thiệu từng folder nhỏ trong các folder :v

- name folder-dảk là folder sẽ là cái mà hiện lên màn ảnh của các bạn
ví dụ như home-dảk, blog-dảk....
thường thì mấy folder này chứa những file html,css,js sửa được nhưng vì đây là theo dataURL nên là chỉ có mấy người dùng Chorme extension sửa được 
còn các trình duyệt khác như Bing, Cốc cốc, opera... thì phải thay đổi.(phần dưới sẽ nói rõ)

-- <gc.kis.v2.scr.kaspersky-labs.com> là folder giúp các bạn tránh được các virus nhỏ nó xâm nhập vì đây là phần mềm diệt virus của "kaspersky"
thế nên các bạn thích giữ lại cũng được, không thích thì xoá.

--<fonts.gstatic.com/s/poppins/v19> đây là folder fonts dành cho các bạn nào mà không thiên về mảnh design, nhưng muốn hiện rõ các chữ nó theo mẫu
 vì chữ có nhiều cái đa dạng nên là bạn nào muốn nó trở thành fonts Time New Roman thì xoá đi là được :D
 
 -- DataURL folder này xoá đi để chỉnh sửa URL mà các bạn thường dùng trình duyệt nào để hiện code html.
 
 --<.metadata> cái này chắc ai chạy code đều hiện nên thôi không nói nữa :v 
 
 ____________________GIẢI THÍCH VỀ VIỆC SỬA ĐƯỢC CÁC FILE HTML, CSS, JS_______________________
 
 
-Tích hợp URL
 
 Bước 1: vào folder mà bạn muốn (ví dụ: home-dark)
 
 Bước 2: chọn theo trình tự: home-dảk -> homepage/home1-dark 
 
 Bước 2 chạy live server file html lên để các file js biết được URL rồi tự tích hợp
 
-Cách thay đổi bên trong js, html, css
 
 Bước 1: Tương tự như trên
 
 Bước 2: Chọn theo trình tự: _next/static -> chunks -> pages -> homepage(nếu như là folder blog-detail thì chọn blog-detail tương tự như các folder khác)
 
 Bước 3: Vào file và đọc các đường link mà file js đã điền sẵn rồi chỉnh sửa theo ý muốn của bạn. 
 
 Bước bonus: Khi file js có đưa đường link vào css thì nó là folder css của folder <name-folder>-dảk nhé không phải của _next/static đâu :|
 
 Bước 4: Chỉnh sửa trong HTML thì mở file html như phần Tích hợp URL, thoả sức sáng tạo mà xoá rồi thêm vào
 nếu thấy xoá 1 thứ mà lỗi cả trang thì hãy sang phần css của mỗi phần được tích hợp để kiểm tra.
 
 Bước bonus: Các bạn thấy 1 đống file js ở phần chunks ? Những file này là những file sẽ tích hợp với các folder với nhau
   ví dụ hiện tại blog-detail đang được tích hợp với homepage.
   Nếu thấy không thích nó thì có thể tìm vài cái không ảnh hưởng rồi xoá đi cũng được, hoặc tiếc thì có thể biến nó thành comment
   rồi tiếp tục.
 
-Chỉnh sửa hình ảnh trong html: 
 p/s: cái này chắc các bạn đều biết rồi nên là mình thôi không nói nữa :<
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
