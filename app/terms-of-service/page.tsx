import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 w-full px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">QuiryLab 利用規約</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <p className="leading-relaxed mb-4">
                この利用規約（以下、「本規約」といいます。）は、QuiryLab（以下、「弊団体」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。本サービスを利用する者（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第 1 条（適用）
              </h2>
              <p className="leading-relaxed mb-3">
                本規約は、ユーザーと弊団体との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                <br />
                弊団体は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
                <br />
                本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第 2 条（利用登録）
              </h2>
              <p className="leading-relaxed mb-3">
                本サービスにおいては、登録希望者が本規約に同意の上、弊団体の定める方法によって利用登録を申請し、弊団体がこれを承認することによって、利用登録が完了するものとします。
                <br />
                弊団体は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className="leading-relaxed">
                  利用登録の申請に際して虚偽の事項を届け出た場合
                </li>
                <li className="leading-relaxed">
                  本規約に違反したことがある者からの申請である場合
                </li>
                <li className="leading-relaxed">
                  その他、弊団体が利用登録を適当でないと判断した場合
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第 3 条（ユーザー ID およびパスワードの管理）
              </h2>
              <p className="leading-relaxed">
                ユーザーは、自己の責任において、本サービスのユーザー ID
                およびパスワードを適切に管理するものとします。
                <br />
                ユーザーは、弊団体の事前の承認なくして、ユーザー ID
                およびパスワードを第三者に譲渡することはできません。ただし、貸与または共有については、行うことができます。
                <br />
                また、ユーザーは、自己のユーザー ID
                およびパスワードの管理および利用について一切の責任を負うものとし、第三者による利用によって生じた損害やトラブルについても、全てユーザー自身が責任を負うものとします。
                <br />
                弊団体は、ユーザー ID
                とパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザー
                ID を登録しているユーザー自身による利用とみなします。
                <br />
                ユーザー ID
                及びパスワードが第三者によって使用されたことによって生じた損害は、弊団体は一切の責任を負わないものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第 4 条（禁止事項）
              </h2>
              <p className="leading-relaxed">
                ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className="leading-relaxed">
                  法令または公序良俗に違反する行為
                </li>
                <li className="leading-relaxed">犯罪行為に関連する行為</li>
                <li className="leading-relaxed">
                  本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為
                </li>
                <li className="leading-relaxed">
                  弊団体、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
                </li>
                <li className="leading-relaxed">
                  弊団体のサービスの運営を妨害するおそれのある行為
                </li>
                <li className="leading-relaxed">
                  不正アクセスをし、またはこれを試みる行為
                </li>
                <li className="leading-relaxed">
                  他のユーザーに関する個人情報等を収集または蓄積する行為
                </li>
                <li className="leading-relaxed">
                  不正な目的を持って本サービスを利用する行為
                </li>
                <li className="leading-relaxed">
                  本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為
                </li>
                <li className="leading-relaxed">
                  他のユーザーに成りすます行為
                </li>
                <li className="leading-relaxed">
                  弊団体が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為
                </li>
                <li className="leading-relaxed">
                  面識のない異性との出会いを目的とした行為
                </li>
                <li className="leading-relaxed">
                  弊団体のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
                </li>
              </ul>
              <p className="leading-relaxed">
                その他、本サービスの運営上不適切と判断する行為
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第 5 条（本サービスの提供の停止等）
              </h2>
              <p className="leading-relaxed">
                弊団体は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className="leading-relaxed">
                  本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
                </li>
                <li className="leading-relaxed">
                  地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
                </li>
                <li className="leading-relaxed">
                  コンピュータまたは通信回線等が事故により停止した場合
                </li>
                <li className="leading-relaxed">
                  その他、弊団体が本サービスの提供が困難と判断した場合
                </li>
              </ul>
              <p className="leading-relaxed">
                弊団体は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。ただし、定期メンテナンスや更新の場合は、原則として事前に告知します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第 6 条（利用制限および登録抹消）
              </h2>
              <p className="leading-relaxed">
                弊団体は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className="leading-relaxed">
                  本規約のいずれかの条項に違反した場合
                </li>
                <li className="leading-relaxed">
                  登録事項に虚偽の事実があることが判明した場合
                </li>
                <li className="leading-relaxed">
                  弊団体からの連絡に対し、一定期間返答がない場合
                </li>
                <li className="leading-relaxed">
                  本サービスについて、最終の利用から一定期間利用がない場合
                </li>
                <li className="leading-relaxed">
                  弊団体が本サービスの利用を適当でないと判断した場合
                </li>
              </ul>
              <p className="leading-relaxed">
                弊団体は、本条に基づき弊団体が行った行為によりユーザーに生じた損害について、一切の責任を負いません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第 7 条（退会）
              </h2>
              <p className="leading-relaxed">
                ユーザーは、弊団体の定める退会手続により、本サービスから退会できるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第 8 条（保証の否認および免責事項）
              </h2>
              <p className="leading-relaxed">
                弊団体は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
                <br />
                弊団体は、本サービスに起因してユーザーに生じたあらゆる損害について、弊団体の故意又は重過失による場合を除き、一切の責任を負いません。
                <br />
                弊団体は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第 9 条（サービス内容の変更等）
              </h2>
              <p className="leading-relaxed">
                弊団体は、弊団体ウェブサイト上での掲示その他弊団体が適当と判断する方法により、ユーザーへ事前に告知した上で、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。
                <br />
                弊団体は、本サービスの内容の変更、追加または廃止により、ユーザーに生じた損害について、一切の責任を負いません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第 10 条（利用規約の変更）
              </h2>
              <p className="leading-relaxed">
                弊団体は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className="leading-relaxed">
                  本規約の変更がユーザーの一般の利益に適合するとき。
                </li>
                <li className="leading-relaxed">
                  本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。
                </li>
                <li className="leading-relaxed">
                  弊団体はユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第 11 条（個人情報の取扱い）
              </h2>
              <p className="leading-relaxed">
                弊団体は、本サービスの利用によって取得する個人情報については、弊団体「プライバシーポリシー」に従い適切に取り扱うものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第 12 条（通知または連絡）
              </h2>
              <p className="leading-relaxed">
                ユーザーと弊団体との間の通知または連絡は、弊団体の定める方法によって行うものとします。弊団体は、ユーザーから、弊団体が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第 13 条（準拠法・裁判管轄）
              </h2>
              <p className="leading-relaxed">
                本規約の解釈にあたっては、日本法を準拠法とします。
                <br />
                本サービスに関して紛争が生じた場合には、福岡地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                第 14 条（分離条項）
              </h2>
              <p className="leading-relaxed">
                本契約のいずれかの条項が違法、無効または執行不可能と司法当局に判断されても、本契約のその他の条項または規定の適法性、有効性または執行可能性には何ら影響を及ぼさない。
              </p>
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
