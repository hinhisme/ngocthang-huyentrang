import ExcelJS from "exceljs";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "rsvp_data.xlsx");

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
  }
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, relation, phone, attendance, message } = req.body;

    try {
      await ensureExcelFile();
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.readFile(filePath);
      const sheet = workbook.getWorksheet("RSVP");

      sheet.addRow([
        name,
        relation,
        phone,
        attendance,
        message,
        new Date().toLocaleString("vi-VN"),
      ]);
      await workbook.xlsx.writeFile(filePath);

      return res.status(200).json({ success: true });
    } catch (err) {
      console.error("❌ Lỗi ghi file Excel:", err);
      return res.status(500).json({ success: false, message: "Lỗi ghi file" });
    }
  }

  if (req.method === "GET") {
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

      return res.status(200).json(data.reverse());
    } catch (err) {
      console.error("❌ Lỗi đọc file Excel:", err);
      return res.status(500).json({ success: false, message: "Lỗi đọc file" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
