import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 w-full px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">プライバシーポリシー</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <p className="leading-relaxed mb-4">
                QuiryLab（以下「当団体」）は、ユーザーの個人情報保護を重要視し、以下のプライバシーポリシーに従って適切に取り扱います。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. 収集する情報
              </h2>
              <p className="leading-relaxed mb-3">
                当団体は、以下の情報を収集する場合があります。
              </p>
              <ul className="space-y-2 ml-6">
                <li className="leading-relaxed">
                  ・氏名、メールアドレス、所属などの基本情報
                </li>
                <li className="leading-relaxed">
                  ・サービス利用時のアクセスログやIPアドレス
                </li>
                <li className="leading-relaxed">
                  ・お問い合わせ内容や連絡履歴
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. 情報の利用目的
              </h2>
              <p className="leading-relaxed mb-3">
                収集した情報は、以下の目的で利用します。
              </p>
              <ul className="space-y-2 ml-6">
                <li className="leading-relaxed">・サービスの提供および運営</li>
                <li className="leading-relaxed">
                  ・メンバー向けサービス（メールアドレス、サーバー、サブドメインなど）の提供
                </li>
                <li className="leading-relaxed">・お問い合わせへの対応</li>
                <li className="leading-relaxed">
                  ・サービスの改善および新サービスの開発
                </li>
                <li className="leading-relaxed">
                  ・重要なお知らせや通知の送信
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. 情報の第三者提供
              </h2>
              <p className="leading-relaxed">
                当団体は、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. 情報の管理
              </h2>
              <p className="leading-relaxed">
                当団体は、個人情報の漏洩、紛失、改ざんを防止するため、適切なセキュリティ対策を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Cookie（クッキー）について
              </h2>
              <p className="leading-relaxed">
                当サイトでは、サービスの利便性向上のためCookieを使用する場合があります。ユーザーはブラウザの設定でCookieを無効化できますが、一部機能が利用できなくなる可能性があります。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. プライバシーポリシーの変更
              </h2>
              <p className="leading-relaxed">
                当団体は、必要に応じて本プライバシーポリシーを変更する場合があります。変更後のポリシーは、本ページに掲載した時点から効力を生じます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. お問い合わせ
              </h2>
              <p className="leading-relaxed">
                個人情報の取り扱いに関するご質問やご意見は、下記までお問い合わせください。
              </p>
              <div className="mt-4 p-4 bg-gray-50 border-l-4 border-gray-900">
                <p className="font-bold mb-1">QuiryLab</p>
                <p>Email: contact@quirylab.com</p>
              </div>
            </section>

            <section className="pt-4">
              <p className="text-sm text-gray-500">制定日: 2025年10月1日</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
