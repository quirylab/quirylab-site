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
              <p className="leading-relaxed">
                QuiryLab（以下、「弊団体」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第1条（個人情報）
              </h2>
              <p className="leading-relaxed">
                「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第2条（個人情報の収集方法）
              </h2>
              <p className="leading-relaxed mb-3">
                弊団体は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。
              </p>
              <p className="leading-relaxed">
                また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、弊団体の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第3条（個人情報を収集・利用する目的）
              </h2>
              <p className="leading-relaxed mb-3">
                弊団体が個人情報を収集・利用する目的は、以下のとおりです。
              </p>
              <ul className="space-y-2 ml-6 list-none">
                <li className="leading-relaxed">
                  ・弊団体サービスの提供・運営のため
                </li>
                <li className="leading-relaxed">
                  ・ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）
                </li>
                <li className="leading-relaxed">
                  ・ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び弊団体が提供する他のサービスの案内のメールを送付するため
                </li>
                <li className="leading-relaxed">
                  ・メンテナンス、重要なお知らせなど必要に応じたご連絡のため
                </li>
                <li className="leading-relaxed">
                  ・利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため
                </li>
                <li className="leading-relaxed">
                  ・ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため
                </li>
                <li className="leading-relaxed">
                  ・上記の利用目的に付随する目的
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第4条（利用目的の変更）
              </h2>
              <p className="leading-relaxed mb-3">
                弊団体は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
              </p>
              <p className="leading-relaxed">
                利用目的の変更を行った場合には、変更後の目的について、弊団体所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第5条（個人情報の第三者提供）
              </h2>
              <p className="leading-relaxed mb-3">
                弊団体は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
              </p>
              <ul className="space-y-2 ml-6 list-none">
                <li className="leading-relaxed">
                  ・人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
                </li>
                <li className="leading-relaxed">
                  ・国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
                </li>
                <li className="leading-relaxed">
                  ・予め次の事項を告知あるいは公表し、かつ弊団体が個人情報保護委員会に届出をしたとき
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>- 利用目的に第三者への提供を含むこと</li>
                    <li>- 第三者に提供されるデータの項目</li>
                    <li>- 第三者への提供の手段または方法</li>
                    <li>
                      - 本人の求めに応じて個人情報の第三者への提供を停止すること
                    </li>
                    <li>- 本人の求めを受け付ける方法</li>
                  </ul>
                </li>
              </ul>
              <p className="leading-relaxed mt-4 mb-3">
                前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。
              </p>
              <ul className="space-y-2 ml-6 list-none">
                <li className="leading-relaxed">
                  ・弊団体が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合
                </li>
                <li className="leading-relaxed">
                  ・合併その他の事由による事業の承継に伴って個人情報が提供される場合
                </li>
                <li className="leading-relaxed">
                  ・個人情報を特定の者との間で共同して利用する場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について、あらかじめ本人に通知し、または本人が容易に知り得る状態に置いた場合
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第6条（個人情報の開示）
              </h2>
              <p className="leading-relaxed mb-3">
                弊団体は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
              </p>
              <ul className="space-y-2 ml-6 list-none">
                <li className="leading-relaxed">
                  ・第三者の生命、身体、財産その他の権利利益を害するおそれがある場合
                </li>
                <li className="leading-relaxed">
                  ・弊団体の業務の適正な実施に著しい支障を及ぼすおそれがある場合
                </li>
                <li className="leading-relaxed">
                  ・その他法令に違反することとなる場合
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                前項の定めにかかわらず、履歴情報および特性情報などの個人情報以外の情報については、原則として開示いたしません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第7条（個人情報の訂正および削除）
              </h2>
              <p className="leading-relaxed mb-3">
                ユーザーは、弊団体の保有する自己の個人情報が誤った情報である場合には、弊団体が定める手続きにより、弊団体に対して個人情報の訂正、追加または削除（以下、「訂正等」といいます。）を請求することができます。
              </p>
              <p className="leading-relaxed mb-3">
                弊団体は、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。
              </p>
              <p className="leading-relaxed">
                弊団体は、前項の規定に基づき訂正等を行った場合、または訂正等を行わない旨の決定をしたときは遅滞なく、これをユーザーに通知します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第8条（個人情報の利用停止等）
              </h2>
              <p className="leading-relaxed mb-3">
                弊団体は、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下、「利用停止等」といいます。）を求められた場合には、遅滞なく必要な調査を行います。
              </p>
              <p className="leading-relaxed mb-3">
                前項の調査結果に基づき、その請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の利用停止等を行います。
              </p>
              <p className="leading-relaxed mb-3">
                弊団体は、前項の規定に基づき利用停止等を行った場合、または利用停止等を行わない旨の決定をしたときは、遅滞なく、これをユーザーに通知します。
              </p>
              <p className="leading-relaxed">
                前2項にかかわらず、利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって、ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は、この代替策を講じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第9条（クッキーの使用について）
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                1. クッキーについて
              </h3>
              <p className="leading-relaxed mb-4">
                クッキーとはお客様のウェブサイト閲覧情報を、そのお客様のコンピューター（PCやスマートフォン、タブレットなどインターネット接続可能な機器）に記憶させる機能のことです。
              </p>
              <p className="leading-relaxed mb-4">
                クッキーには、弊団体によって設定されるもの（ファーストパーティークッキー）と、弊団体と提携する第三者によって設定されるもの（サードパーティークッキー）があります。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                2. クッキーの利用目的
              </h3>
              <p className="leading-relaxed mb-4">
                弊団体では、クッキーを、お客様がウェブサイトを閲覧する際に同じ情報を繰り返し入力することがなくなるなど、お客様の利便性向上のために使用しています。
              </p>
              <p className="leading-relaxed mb-4">
                弊団体では、クッキーを使用して収集した情報を利用して、お客様のウェブサイトの利用状況（アクセス状況、トラフィック、ルーティング等）を分析し、ウェブサイト自体のパフォーマンス改善や、弊団体からお客様に提供するサービスの向上、改善のために使用することがあります。
              </p>
              <p className="leading-relaxed mb-4">
                また、この分析にあたっては、主に以下のツールが利用され、ツール提供者に情報提供されることがあります。
              </p>
              <ul className="space-y-2 ml-6 list-none mb-4">
                <li className="leading-relaxed">・Google Analytics</li>
              </ul>
              <p className="leading-relaxed">
                この他、クッキーは、提携する広告配信サービス提供会社における行動ターゲティング広告の配信に使用される場合があります。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                3. サードパーティクッキーによる送信情報
              </h3>
              <p className="leading-relaxed mb-4">
                本サービスでは、アクセス解析と広告配信の目的で、サードパーティークッキーを使用しています。
              </p>
              <p className="leading-relaxed mb-3">
                サードパーティークッキーによる送信情報等は以下のとおりです。
              </p>
              <div className="bg-gray-50 p-4 rounded mb-4">
                <p className="font-bold mb-2">サービス名: Google Analytics</p>
                <p className="leading-relaxed mb-2">
                  クッキーによってユーザーが送信する情報:
                </p>
                <ul className="ml-6 space-y-1 mb-3">
                  <li>
                    ・インターネット通信に通常用いられるシステム、デバイス、ネットワーク、通信に関する情報
                  </li>
                  <li>・位置情報</li>
                  <li>・サイト・アプリ上での行動に関するデータ</li>
                  <li>・閲覧ページに関するデータ</li>
                  <li>・ユーザー識別子（cookie、端末識別子等）</li>
                </ul>
                <p className="leading-relaxed mb-2">
                  詳細はGoogleのウェブサイトをご参照ください。
                </p>
                <p className="leading-relaxed mb-2">
                  情報の送信先: Google LLC及びその関係会社
                </p>
                <p className="leading-relaxed mb-2">
                  弊団体での利用目的:
                  利用者による閲覧の傾向や履歴の分析のため。詳細はGoogleのウェブサイトをご参照ください。
                </p>
                <p className="leading-relaxed">送信先での利用目的: 同上</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第10条（プライバシーポリシーの変更）
              </h2>
              <p className="leading-relaxed mb-3">
                本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。
              </p>
              <p className="leading-relaxed">
                弊団体が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第11条（お問い合わせ窓口）
              </h2>
              <p className="leading-relaxed mb-4">
                本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
              </p>
              <div className="mt-4 p-4 bg-gray-50 border-l-4 border-gray-900">
                <p className="leading-relaxed mb-1">代表役員：彩音</p>
                <p className="leading-relaxed">
                  メールアドレス：info@quirylab.com
                </p>
              </div>
            </section>

            <section className="pt-8 border-t border-gray-200">
              <p className="text-center text-sm text-gray-500">以上</p>
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
