import { CodePreview } from "./components/code-preview";

const steps = [
  "فایل جدیدی با پسوند ‎.lsp‎ ایجاد کنید و کد زیر را در آن ذخیره کنید.",
  "در اتوکد فرمان ‎APPLOAD‎ را اجرا کرده و فایل لود شده را انتخاب کنید.",
  "پس از لود شدن پیغام، در خط فرمان عبارت ‎FLATTENZ‎ را تایپ کرده و اینتر بزنید.",
  "تمام آبجکت‌ها (حتی داخل بلاک‌ها) به Z=0 منتقل می‌شوند و نقشه ریجن می‌شود."
];

const features = [
  "پشتیبانی از تمامی اشیاء معمول ۲بعدی و سه‌بعدی",
  "فلت کردن آبجکت‌های داخل بلاک‌ها و بلاک‌های تو در تو",
  "بازنشانی ارتفاع ابعاد و بلاک‌های دینامیک",
  "نمایش پیام‌های کاربردی در خط فرمان برای گزارش وضعیت"
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-16 gap-16">
      <header className="max-w-4xl text-center space-y-4">
        <h1 className="text-4xl font-semibold text-sky-200">
          فلت کردن کامل محور Z در اتوکد
        </h1>
        <p className="text-lg leading-8 text-slate-200">
          این ابزار کد لیسپ اختصاصی برای صفر کردن موقعیت تمام آبجکت‌ها در راستای
          محور Z تولید می‌کند؛ چه آبجکت‌ها در فضای مدل آزاد باشند و چه درون
          بلاک‌های تو در تو قرار گرفته باشند.
        </p>
      </header>

      <section className="flex flex-col gap-8 w-full items-center">
        <CodePreview />
        <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-slate-900/70 p-6 shadow-lg backdrop-blur">
            <h2 className="mb-4 text-xl font-semibold text-sky-200">
              راهنمای اجرای سریع
            </h2>
            <ul className="space-y-3 text-sm leading-6 text-slate-200">
              {steps.map((step) => (
                <li
                  key={step}
                  className="rounded-lg border border-slate-700/60 bg-slate-800/50 px-4 py-3"
                >
                  {step}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-slate-900/70 p-6 shadow-lg backdrop-blur">
            <h2 className="mb-4 text-xl font-semibold text-sky-200">
              نکات کلیدی
            </h2>
            <ul className="space-y-3 text-sm leading-6 text-slate-200">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-lg border border-slate-700/60 bg-slate-800/50 px-4 py-3"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <footer className="w-full max-w-4xl rounded-2xl border border-slate-600/40 bg-slate-900/60 p-6 text-sm leading-7 text-slate-300">
        <p>
          برای سفارشی‌سازی بیشتر، می‌توانید بخش‌های مجزا مانند تابع{" "}
          <code className="font-mono text-sky-200">_flatten-entity</code> را ویرایش
          کنید تا برای اشیای خاص تنظیمات منحصر به فردی ایجاد نمایید.
        </p>
      </footer>
    </main>
  );
}
