// Hàm này tính tổng số tiền sau một số năm với một lãi suất cố định.
function tinhLaiDon(sotien, laisuat, soNam) {
    let laiDon = sotien * laisuat / 100; // Tính số tiền lãi thu được từ số tiền ban đầu.
    let tongTien = sotien + laiDon * soNam; // Tính tổng số tiền sau khi cộng thêm số tiền lãi thu được trong số năm được cung cấp.
    return tongTien.toFixed(2).replace(/\.?0+$/,""); // Làm tròn kết quả đến hai chữ số thập phân và loại bỏ số 0 thừa ở cuối phần thập phân.
}

// Thêm một trình nghe sự kiện vào nút submit để tính tổng số tiền sau khi biểu mẫu được gửi đi.
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của việc gửi biểu mẫu.
    let sotien = Number(document.querySelector("#sotien").value); // Lấy giá trị đầu vào cho số tiền ban đầu và chuyển đổi sang kiểu dữ liệu Number.
    let laisuat = Number(document.querySelector("#laisuat").value); // Lấy giá trị đầu vào cho lãi suất và chuyển đổi sang kiểu dữ liệu Number.
    let soNam = Number(document.querySelector("#soNam").value); // Lấy giá trị đầu vào cho số năm và chuyển đổi sang kiểu dữ liệu Number.
    let ketqua = tinhLaiDon(sotien, laisuat, soNam); // Gọi hàm "tinhLaiDon" để tính tổng số tiền.
    document.querySelector("#ketqua").innerHTML = "Tổng số tiền sau " + soNam + " năm là: " + ketqua + " triệu đồng."; // Hiển thị kết quả cuối cùng trên trang web. 
});     