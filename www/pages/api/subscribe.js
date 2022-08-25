import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
})

export default async function handler(req, res) {
  const { email } = req.body
  if (!email) {
    return res.status(400).json({ msg: 'Das ist keine gültige Email-Adresse' })
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return res.status(400).json({ msg: 'Das ist keine gültige Email-Adresse' })
  }
  await mailchimp.lists
    .setListMember(process.env.MAILCHIMP_AUDIENCE_ID, email, {
      email_address: email,
      status_if_new: 'pending',
    })
    .then((data) => {
      return res.status(200).json({
        msg: '🎉 Wir benachrichtigen dich, sobald die Anmeldung losgeht.',
      })
    })
    .catch((error) => {
      return res.status(400).json({
        msg: 'Etwas ist schief gelaufen. Probier es später noch einmal.',
      })
    })
}
