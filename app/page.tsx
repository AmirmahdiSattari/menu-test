import { Container, Divider, Paper, Stack, Typography } from "@mui/material";

import React from "react";

const ReadmePage = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          اپلیکیشن دسته‌بندی آگهی‌ها
        </Typography>

        <Typography variant="body1" gutterBottom>
          این پروژه با استفاده از فریم‌ورک <strong>Next.js</strong> توسعه داده
          شده و برای شبیه‌سازی سمت سرور از ابزار <strong>json-server</strong>{" "}
          استفاده شده.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" fontWeight="bold" gutterBottom>
          🚀 نحوه اجرا
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          ابتدا پکیج‌ها رو نصب کن:
        </Typography>

        <Paper
          variant="outlined"
          sx={{ my: 1, p: 1, bgcolor: "#f7f7f7", fontFamily: "monospace" }}
        >
          npm install
        </Paper>

        <Typography variant="subtitle1" gutterBottom>
          اجرای JSON Server:
        </Typography>

        <Typography variant="body2" gutterBottom>
          برای راه‌اندازی سرور JSON:
        </Typography>

        <Paper
          variant="outlined"
          sx={{ my: 1, p: 1, bgcolor: "#f7f7f7", fontFamily: "monospace" }}
        >
          json-server --watch mock-api/db.json --port 3001
        </Paper>

        <Typography variant="body2" gutterBottom>
          این دستور فایل <code>db.json</code> رو در مسیر <code>mock-api/</code>{" "}
          با پورت ۳۰۰۱ اجرا می‌کنه.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          اجرای پروژه Next.js:
        </Typography>

        <Paper
          variant="outlined"
          sx={{ my: 1, p: 1, bgcolor: "#f7f7f7", fontFamily: "monospace" }}
        >
          npm run dev
        </Paper>

        <Typography variant="body2" gutterBottom>
          پروژه روی آدرس <code>http://localhost:3000</code> اجرا می‌شه.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" fontWeight="bold" gutterBottom>
          📚 درباره پروژه
        </Typography>
        <Typography variant="body1" gutterBottom>
          این پروژه یک منوی دسته‌بندی آگهی داره که شامل دسته‌بندی‌ها، فرزندان
          (زیردسته‌ها) و نوه‌هاست. ساختارش به شکلی طراحی شده که فقط یک لایه از
          فرزندان نشون داده می‌شه و با کلیک روی هر فرزند، نوه‌هاش باز می‌شن.
        </Typography>
        <Typography variant="body1" gutterBottom>
          برای طراحی UI از <strong>MUI</strong> و برای ارتباط با API از{" "}
          <strong>Axios</strong> استفاده شده. داده‌ها هم به صورت mock و از طریق{" "}
          <code>json-server</code> شبیه‌سازی شدن.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          ⚠️ نکته
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          ازتون ممنونم که زمان ددلاین رو تمدید کردید 🙏 این فرصت باعث شد بتونم
          پروژه رو با کیفیت بهتری به پایان برسونم.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Stack  flexDirection={"row"} justifyContent={"space-between"}>
          <Typography textAlign="center" mt={1} variant="caption">
            Menu App v1.0.1
          </Typography>

          <Typography textAlign="center" mt={1} variant="caption">
            amirmahdisattariams@gmail.com
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
};

export default ReadmePage;
