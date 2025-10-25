import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ExcelJS from "exceljs";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// Xác định đường dẫn file Excel nằm ở gốc project (ngoài /src)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../rsvp_data.xlsx");

app.use(cors());
app.use(bodyParser.json());

// ✅ Hàm tạo file Excel nếu chưa tồn tại
async function ensureExcelFile() {
  try {
    await fs.access(filePath);
  } catch {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("RSVP");
    sheet.columns = [
      { header: "Họ và tên", key: "name", width: 25 },
      { header: "Mối quan hệ", key: "relation", width: 20 },
      { header: "Số điện thoại", key: "phone", width: 15 },
      { header: "Tham dự", key: "attendance", width: 15 },
      { header: "Lời chúc", key: "message", width: 40 },
      { header: "Thời gian gửi", key: "timestamp", width: 25 },
    ];
    await workbook.xlsx.writeFile(filePath);
    console.log(`📄 Đã tạo mới file Excel: ${filePath}`);
  }
}

// ✅ Bộ khóa tránh ghi chồng file
let writing = false;

// ✅ Ghi dữ liệu RSVP
app.post("/api/rsvp", async (req, res) => {
  console.log("📩 Dữ liệu nhận được từ client:", req.body);
  const { name, relation, phone, attendance, message } = req.body;

  try {
    while (writing) {
      console.log("⏳ Đang ghi file, chờ...");
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
    writing = true;

    await ensureExcelFile();

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const sheet = workbook.getWorksheet("RSVP");

    // 🟢 Thêm dòng dữ liệu
    const newRow = [
      name,
      relation,
      phone,
      attendance,
      message,
      new Date().toLocaleString("vi-VN"),
    ];
    sheet.addRow(newRow); // thêm dạng mảng cho chắc chắn
    sheet.lastRow.commit();

    // 🟢 Ghi đè file Excel
    await workbook.xlsx.writeFile(filePath);

    console.log(`✅ Đã lưu RSVP: ${name}`);
    console.log(`📊 Tổng số dòng hiện có (kể cả header): ${sheet.rowCount}`);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Lỗi ghi file Excel:", error);
    res.status(500).json({ success: false, message: "Lỗi ghi file Excel" });
  } finally {
    writing = false;
  }
});

// ✅ Đọc danh sách RSVP
app.get("/api/rsvp", async (req, res) => {
  try {
    await ensureExcelFile();

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const sheet = workbook.getWorksheet("RSVP");
    const rows = sheet.getSheetValues();

    const data = rows
      .slice(2)
      .map((r) => ({
        name: r[1],
        relation: r[2],
        phone: r[3],
        attendance: r[4],
        message: r[5],
        timestamp: r[6],
      }))
      .filter((r) => r.name);

    res.status(200).json(data.reverse());
  } catch (err) {
    console.error("❌ Lỗi đọc file Excel:", err);
    res
      .status(500)
      .json({ success: false, message: "Không đọc được file Excel" });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`)
);
