import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

/**
 * PRIVACY NOTICE — UNREVIEWED DRAFT.
 *
 * This page is deliberately `noindex, nofollow` and is NOT linked from the navbar or footer.
 * A privacy notice is a legal representation to data subjects, and this one covers Kenyan
 * smallholders' national ID numbers. It was drafted from a factual audit of what the platform
 * actually collects, stores and transmits — not by a lawyer — and it must be reviewed and
 * approved by the Data Protection Officer and Kenyan counsel before it is published.
 *
 * TO PUBLISH, once signed off:
 *   1. Resolve every [DPO] marker in the copy below. They are real decisions, not placeholders
 *      for prose: controller-vs-processor, lawful basis per purpose, and retention periods are
 *      not derivable from the code and no one has recorded them.
 *   2. Delete the DraftBanner component and its usage.
 *   3. Remove `robots: { index: false }` from the metadata.
 *   4. Add the footer link.
 *   5. Mirror the approved wording into microcrop-backend/src/config/consent.js
 *      (FARMER_DATA_PROCESSING) and set `approved: true`. Until that happens, the platform
 *      records consent against a placeholder document — which is to say, no farmer has been
 *      shown a notice at all.
 */

export const metadata: Metadata = {
  title: { absolute: 'Privacy Notice — MicroCrop' },
  description:
    'How MicroCrop collects, uses, stores and shares personal data, and your rights under the Kenya Data Protection Act 2019.',
  alternates: { canonical: '/privacy' },
  // Unreviewed legal copy must not be indexed. Search engines cache aggressively and a
  // retracted legal notice can outlive its retraction by months.
  robots: { index: false, follow: false },
}

function DraftBanner() {
  return (
    <div className="border-b-4 border-amber-500 bg-amber-50">
      <div className="mx-auto max-w-3xl px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-900">
          Unpublished draft — not legally reviewed
        </p>
        <p className="mt-2 text-sm leading-relaxed text-amber-900">
          This notice has not been approved by a Data Protection Officer or by Kenyan counsel.
          It is an accurate description of current technical practice, prepared so that it can
          be reviewed. It is not yet a statement of MicroCrop&rsquo;s legal position and should
          not be relied on. Sections marked <strong>[DPO]</strong> record decisions that have
          not been made.
        </p>
      </div>
    </div>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-700">{children}</div>
    </section>
  )
}

function Pending({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-amber-100 px-1.5 py-0.5 font-medium text-amber-900">
      [DPO] {children}
    </span>
  )
}

export default function PrivacyPage() {
  return (
    <div className="font-poppins">
      <Navbar />
      <DraftBanner />
      <main id="main" className="mx-auto max-w-3xl px-6 py-14">
        <h1 className="text-4xl font-bold text-gray-900">Privacy Notice</h1>
        <p className="mt-4 text-base text-gray-600">
          This notice explains what personal data MicroCrop handles, why, where it is kept, who
          else sees it, and what you can require of us. It is written to the Kenya Data
          Protection Act 2019.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Last updated: <Pending>set on approval</Pending>
        </p>

        <Section id="who-we-are" title="1. Who we are">
          <p>
            MicroCrop builds parametric crop and livestock insurance infrastructure. We are
            registered with the Office of the Data Protection Commissioner (Kenya),
            registration number <Pending>insert ODPC registration number</Pending>.
          </p>
          <p>
            <Pending>
              Confirm our role for each tier. Where an insurer uses us only to determine
              whether a weather trigger fired, we are likely a data <em>processor</em> acting on
              that insurer&rsquo;s instructions. Where we also pay the farmer, we are more
              likely a <em>controller</em>. This notice must state which, per tier, because the
              rights below are exercised against different parties in each case.
            </Pending>
          </p>
        </Section>

        <Section id="farmers" title="2. If you are a farmer">
          <p>
            Your insurer or its agent registers you. The data they give us, and that we then
            hold, is:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Identity</strong> — your name, phone number and national ID number.
            </li>
            <li>
              <strong>Where you are</strong> — county, sub-county, ward and village.
            </li>
            <li>
              <strong>Your land</strong> — the name, size, crop and <em>precise coordinates</em>{' '}
              of each plot, and the mapped boundary where one has been walked. For livestock, the
              herd size, species and grazing location.
            </li>
            <li>
              <strong>Your cover</strong> — sum insured, premium, dates, status, and the M-Pesa
              references for payments to and from you.
            </li>
            <li>
              <strong>Your agreement</strong> — which version of which document you agreed to,
              how that was captured, in what language, by which agent, and when, including any
              later withdrawal.
            </li>
            <li>
              <strong>What we observe</strong> — satellite vegetation measurements and weather
              data for your plot&rsquo;s location, and the determination we calculate from them.
            </li>
            <li>
              <strong>What we assess</strong> — if a claim looks inconsistent with the satellite
              record, we record that assessment and a confidence score. See section 8.
            </li>
          </ul>
          <p>
            We do <strong>not</strong> collect your biometrics, and we do not keep the raw
            movement trace from a boundary walk — only the resulting shape of the field.
          </p>
        </Section>

        <Section id="partners" title="3. If you work for an insurer or distribution partner">
          <p>
            We hold your name, work email, phone number and role, and a hashed password. For the
            organisation we hold its registered name and number, contact details, regulator and
            licence number, and the documents required to verify it — which include a
            director&rsquo;s identity document, a tax certificate, proof of address and a bank
            statement. Where an officer attests to the organisation&rsquo;s available capital, we
            record that officer&rsquo;s name, title and email.
          </p>
          <p>
            If you are named in a document an organisation gives us but you have no account with
            us — a company director, for example — you still have the rights in section 9, and
            you can exercise them against us directly.
          </p>
        </Section>

        <Section id="why" title="4. Why we use it">
          <ul className="list-disc space-y-1 pl-6">
            <li>To issue cover and keep a record of what each policy covers.</li>
            <li>
              To determine, from weather and satellite data, whether a policy&rsquo;s trigger was
              met — and to produce a signed, independently checkable record of that determination.
            </li>
            <li>To collect premiums and, where we are the settling party, to pay claims.</li>
            <li>To verify that an organisation is who it says it is, and to screen for sanctions and financial crime.</li>
            <li>To detect claims inconsistent with the satellite record.</li>
            <li>To meet our legal, regulatory and audit obligations.</li>
          </ul>
          <p>
            <Pending>
              State the lawful basis for each purpose above. Consent is not automatically the
              right basis for all of them — contract performance and legal obligation are likely
              to apply to some, and relying on consent where it can be withdrawn mid-policy
              creates a problem we should choose deliberately rather than inherit.
            </Pending>
          </p>
        </Section>

        <Section id="where" title="5. Where your data is kept">
          <p>
            <strong>
              Our main database is hosted in the United States, in California, by Railway.
            </strong>{' '}
            All farmer and partner records described above are stored there, including national
            ID numbers. Encrypted evidence files supporting determinations are stored with
            Cloudflare. Verification documents are held on our application servers.
          </p>
          <p>
            This means personal data collected in Kenya is transferred out of Kenya and stored
            abroad.{' '}
            <Pending>
              Record the lawful basis and the safeguards for this transfer under sections 48 and
              49 of the Act, and state them here plainly. If the chosen basis is consent, the
              notice shown to farmers must say so before they agree — which is not the case
              today.
            </Pending>
          </p>
        </Section>

        <Section id="sharing" title="6. Who else sees it">
          <p>We share only what each party needs to do its job:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Your insurer or distribution partner</strong> — your record and your cover.
            </li>
            <li>
              <strong>Mobile money providers</strong> — your phone number and amount, to collect
              a premium or send a payment.
            </li>
            <li>
              <strong>Our SMS provider</strong> — your phone number, to send you messages about
              your cover.
            </li>
            <li>
              <strong>Our identity-verification provider</strong> — organisation and director
              documents, for sanctions and financial-crime screening. This provider is outside
              Kenya.
            </li>
            <li>
              <strong>A public weather archive</strong> — the coordinates of an insured plot, to
              retrieve the rainfall record for that location. No name, phone number or ID is sent.
            </li>
            <li>
              <strong>Our signing and key-management providers</strong> — the determination data
              that is cryptographically signed.
            </li>
            <li>
              Courts, regulators or law enforcement, where we are legally required to.
            </li>
          </ul>
          <p>We do not sell personal data, and we do not use it for advertising.</p>
        </Section>

        <Section id="blockchain" title="7. What we publish to a public ledger">
          <p>
            We record a cryptographic <em>hash</em> of a determination on a public blockchain, so
            that the determination can later be proven unaltered. A hash is a fingerprint: it
            cannot be reversed into the underlying data.
          </p>
          <p>
            We do not put names, phone numbers, ID numbers or plot locations on any public
            ledger. Note that a ledger entry, once made, cannot be deleted — which is precisely
            why nothing identifying you is placed there.
          </p>
        </Section>

        <Section id="automated" title="8. Automated decisions">
          <p>
            Whether a policy pays is determined automatically, by applying an agreed formula to
            rainfall and satellite measurements for your plot. That is the nature of parametric
            insurance: the outcome depends on measured weather, not on an assessor&rsquo;s
            judgement of your individual loss. We can tell you which measurements and which
            formula produced your result, and give you the signed record of it.
          </p>
          <p>
            Separately, our system may flag a claim as inconsistent with the satellite record and
            attach a confidence score. A flag is reviewed by a person and is not by itself a
            decision about you.{' '}
            <Pending>
              Confirm the human-review guarantee and the challenge route before publication, and
              confirm it is actually operated that way.
            </Pending>
          </p>
        </Section>

        <Section id="rights" title="9. Your rights">
          <p>Under the Kenya Data Protection Act 2019 you may:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>be told what data we hold about you, and get a copy;</li>
            <li>have inaccurate data corrected;</li>
            <li>object to how we use your data, or ask us to restrict it;</li>
            <li>ask us to delete it, where no legal or contractual duty requires us to keep it;</li>
            <li>withdraw consent, where consent is the basis we rely on;</li>
            <li>receive your data in a portable form;</li>
            <li>complain to the Office of the Data Protection Commissioner.</li>
          </ul>
          <p>
            Withdrawing consent does not undo what was lawfully done beforehand, and it may mean
            we can no longer administer an active policy.{' '}
            <Pending>
              State the consequence precisely — in particular whether withdrawal during a policy
              term cancels cover, and who bears the premium if so. This is a product and
              underwriting decision as much as a legal one.
            </Pending>
          </p>
        </Section>

        <Section id="retention" title="10. How long we keep it">
          <p>
            <Pending>
              Retention periods are not defined anywhere today — no schedule exists in the
              system or on paper. Counsel must set a period for each category (farmer records,
              policy and claim records, verification documents, consent records, determination
              evidence), balanced against insurance record-keeping and anti-money-laundering
              obligations. Until a schedule exists, data is kept indefinitely, and that is the
              honest position to state.
            </Pending>
          </p>
        </Section>

        <Section id="security" title="11. How we protect it">
          <p>
            Access is restricted by role and separated per organisation, so one partner cannot
            see another&rsquo;s farmers. Verification documents are reachable only through
            short-lived signed links, so a copied URL stops working. Evidence files supporting
            determinations are encrypted before storage. Data moves over encrypted connections.
          </p>
          <p>
            <Pending>
              Two gaps found in audit should be closed before this is published, because stating
              otherwise would be inaccurate: national ID numbers are stored without
              field-level encryption, and verification documents currently sit on storage that
              is not durable.
            </Pending>
          </p>
        </Section>

        <Section id="contact" title="12. Contact us">
          <p>
            Data Protection Officer:{' '}
            <Pending>insert DPO name and email</Pending>
          </p>
          <p>
            MicroCrop, <Pending>insert registered address</Pending>
          </p>
          <p>
            You can also complain directly to the Office of the Data Protection Commissioner at{' '}
            <a className="underline" href="https://www.odpc.go.ke" rel="noopener noreferrer" target="_blank">
              odpc.go.ke
            </a>
            .
          </p>
        </Section>

        <Section id="changes" title="13. Changes">
          <p>
            If we change this notice materially we will update the date above and, where the law
            requires it, ask for your agreement again. Our system records which version of this
            notice each person agreed to, so a change cannot rewrite what you were originally
            told.
          </p>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
