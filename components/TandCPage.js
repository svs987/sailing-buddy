import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
/**
 * 
 */
const TandCPage = ({navigation}) => {

    return (
        <View style={styles.container}>
            <ScrollView style={styles.body}>
                <Text> {`General
This app is for the use of members of yacht clubs for the purpose of enabling boat owners (aka skippers) to find crew for sailing trips.

The app is provided as is and neither Stonivale Ltd nor the participating yacht clubs assume any responsibility for the accuracy of the information.

In particular, users of the app should note that yachting is a potentially hazardous activity. The presence of a user or a trip invitation on the app does not represent any endorsement of either the competence of the user or the sea-worthiness of the vessel.
Users must make their own arrangements to make sure they understand the level of risk that they are undertaking before accepting any invitation through this app or by any other means. 

This app is intended for non-commercial use only. Trip invitations may be removed and user accounts disabled if it is discovered that users are using the app for commercial activities. 

Contact details shared by users of the app are for the purpose of arranging yachting trips only. Trip invitations may be removed and user accounts may be disabled if it is discovered that user contact details are being used for any other reason.

1 Acceptable use

1.1 You must not:

(a) use our app in any way or take any action that causes, or may cause, damage to the app or impairment of the performance, availability or accessibility of the app;

(b) use our app in any way that is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity;

(c) use our app to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software;

(d) conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to our app without our express written consent;

(e) access or otherwise interact with our app using any robot, spider or other automated means;

(f) use data collected from our app for any direct marketing activity (including without limitation email marketing, SMS marketing, telemarketing and direct mailing).

1.2 You must not use data collected from our app to contact individuals, companies or other persons or entities for any reason other than for the purpose of arranging sailing trips.

1.3 You must ensure that all the information you supply to us through our app, or in relation to our app, is true, accurate, current, complete and non-misleading.

2 Registration and accounts

2.1 If you are a member of a Yacht Club that has signed up to use the app, you may use the app by requesting an Authorisation Code from your Yacht Club.

2.2 You must notify either us or your Yacht Club immediately if you become aware of any unauthorised use of your Authorisation Code.

2.3 You must not use any other person's Authorisation Code to access the app, unless you have that person's express permission to do so.

3 Authorisation Codes

3.1 Once you have requested access to the app from your Yacht Club you will be supplied with a unigue Authorisation Code. You will be asked to enter this code the first time that you use the app.

3.3 You are responsible for any activity on our app arising out of any failure to keep your Authorisation Code confidential, and may be held liable for any losses arising out of such a failure.

4 Cancellation and suspension of account

4.1 We may:

(a) suspend your access to the app;

(b) cancel your access to the app; and/or

(c) edit your account details,

at any time in our sole discretion without notice or explanation.

4.2 You may cancel your authorisation code on our app by making a request to ourselves or to your Yacht Club that your details be removed from the app.

5 Your content: licence

5.1 In these terms and conditions, "your content" means all works and materials (including without limitation text, graphics, images, audio material, video material, audio-visual material, scripts, software and files) that you submit to us or our app for storage or publication on, processing by, or transmission via, our app.

5.2 You grant to us a worldwide, irrevocable, non-exclusive, royalty-free licence to use, reproduce, store, adapt, publish, translate and distribute your content in any existing or future media in relation to this app and any successor app.

5.3 You grant to us the right to sub-license the rights licensed under Section 5.2.

5.4 You grant to us the right to bring an action for infringement of the rights licensed under Section 5.2.

5.5 You hereby waive all your moral rights in your content to the maximum extent permitted by applicable law; and you warrant and represent that all other moral rights in your content have been waived to the maximum extent permitted by applicable law.

5.6 You may edit your content to the extent permitted using the editing functionality made available on our app.

5.7 Without prejudice to our other rights under these terms and conditions, if you breach any provision of these terms and conditions in any way, or if we reasonably suspect that you have breached these terms and conditions in any way, we may delete, unpublish or edit any or all of your content.

6 Your content: rules

6.1 You warrant and represent that your content will comply with these terms and conditions.

6.2 Your content must not be illegal or unlawful, must not infringe any person's legal rights, and must not be capable of giving rise to legal action against any person (in each case in any jurisdiction and under any applicable law).

6.3 Your content, and the use of your content by us in accordance with these terms and conditions, must not:

(a) be libellous or maliciously false;

(b) be obscene or indecent;

(c) infringe any copyright, moral right, database right, trade mark right, design right, right in passing off, or other intellectual property right;

(d) infringe any right of confidence, right of privacy or right under data protection legislation;

(e) constitute negligent advice or contain any negligent statement;

f) constitute an incitement to commit a crime, instructions for the commission of a crime or the promotion of criminal activity;

(g) be in contempt of any court, or in breach of any court order;

(h) be in breach of racial or religious hatred or discrimination legislation;

(i) be blasphemous;

(j) be in breach of official secrets legislation;

(k) be in breach of any contractual obligation owed to any person;

(l) depict violence in an explicit, graphic or gratuitous manner;

(m) be pornographic, lewd, suggestive or sexually explicit;

(n) be untrue, false, inaccurate or misleading;

(o) consist of or contain any instructions, advice or other information which may be acted upon and could, if acted upon, cause illness, injury or death, or any other loss or damage;

(p) constitute spam;

(q) be offensive, deceptive, fraudulent, threatening, abusive, harassing, anti-social, menacing, hateful, discriminatory or inflammatory; or

(r) cause annoyance, inconvenience or needless anxiety to any person.

7 Limited warranties

7.1 We do not warrant or represent:

(a) the completeness or accuracy of the information published on our app;

(b) that the material on the app is up to date; or

(c) that the app or any service on the app will remain available.

7.2 We reserve the right to discontinue or alter any or all of our app services, and to stop publishing our app, at any time in our sole discretion without notice or explanation; and save to the extent expressly provided otherwise in these terms and conditions, you will not be entitled to any compensation or other payment upon the discontinuance or alteration of any app services, or if we stop publishing the app.

7.3 To the maximum extent permitted by applicable law and subject to Section 8.1, we exclude all representations and warranties relating to the subject matter of these terms and conditions, our app and the use of our app.

8 Limitations and exclusions of liability

8.1 Nothing in these terms and conditions will:

(a) limit or exclude any liability for death or personal injury resulting from negligence;

(b) limit or exclude any liability for fraud or fraudulent misrepresentation;

(c) limit any liabilities in any way that is not permitted under applicable law; or

(d) exclude any liabilities that may not be excluded under applicable law.

8.2 The limitations and exclusions of liability set out in this Section 8 and elsewhere in these terms and conditions:

(a) are subject to Section 8.1; and

(b) govern all liabilities arising under these terms and conditions or relating to the subject matter of these terms and conditions, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty, except to the extent expressly provided otherwise in these terms and conditions.

8.3 To the extent that our app and the information and services on our app are provided free of charge, we will not be liable for any loss or damage of any nature.

8.4 We will not be liable to you in respect of any losses arising out of any event or events beyond our reasonable control.

8.5 We will not be liable to you in respect of any business losses, including (without limitation) loss of or damage to profits, income, revenue, use, production, anticipated savings, business, contracts, commercial opportunities or goodwill.

8.6 We will not be liable to you in respect of any loss or corruption of any data, database or software.

8.7 We will not be liable to you in respect of any special, indirect or consequential loss or damage.

8.8 You accept that we have an interest in limiting the personal liability of our officers and employees and, having regard to that interest, you acknowledge that we are a limited liability entity; you agree that you will not bring any claim personally against our officers or employees in respect of any losses you suffer in connection with the app or these terms and conditions (this will not, of course, limit or exclude the liability of the limited liability entity itself for the acts and omissions of our officers and employees).

9 Breaches of these terms and conditions

9.1 Without prejudice to our other rights under these terms and conditions, if you breach these terms and conditions in any way, or if we reasonably suspect that you have breached these terms and conditions in any way, we may:

(a) send you one or more formal warnings;

(b) temporarily suspend your access to our app;

(c) permanently prohibit you from accessing our app;

(d) block computers using your IP address from accessing our app;

(e) contact any or all of your internet service providers and request that they block your access to our app;

(f) commence legal action against you, whether for breach of contract or otherwise; and/or

(g) suspend or delete your account on our app.

9.2 Where we suspend or prohibit or block your access to our app or a part of our app, you must not take any action to circumvent such suspension or prohibition or blocking.

10 Variation

10.1 We may revise these terms and conditions from time to time.

10.2 The revised terms and conditions shall apply to the use of our app from the date of publication of the revised terms and conditions on the app, and you hereby waive any right you may otherwise have to be notified of, or to consent to, revisions of these terms and conditions.

11 Assignment

11.1 You hereby agree that we may assign, transfer, sub-contract or otherwise deal with our rights and/or obligations under these terms and conditions.

11.2 You may not without our prior written consent assign, transfer, sub-contract or otherwise deal with any of your rights and/or obligations under these terms and conditions.

12 Severability

12.1 If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect.

12.2 If any unlawful and/or unenforceable provision of these terms and conditions would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.

13 Third party rights

13.1 A contract under these terms and conditions is for our benefit and your benefit, and is not intended to benefit or be enforceable by any third party.

13.2 The exercise of the parties' rights under a contract under these terms and conditions is not subject to the consent of any third party.

14 Entire agreement

14.1 Subject to Section 8.1, these terms and conditions, together with our privacy and cookies policy, shall constitute the entire agreement between you and us in relation to your use of our app and shall supersede all previous agreements between you and us in relation to your use of our app.

15 Law and jurisdiction

15.1 These terms and conditions shall be governed by and construed in accordance with English law.

15.2 Any disputes relating to these terms and conditions shall be subject to the non-exclusive jurisdiction of the courts of England and Wales.

16 Statutory and regulatory disclosures

16.1 Stonivale Ltd is a Limited Company, registered in England and Wales.

16.2  We are registered as a company limited by guarantee: Company No. 08158116.

17 Our details

17.1 You can contact us by email, using info@stonivale..co.uk`}


 </Text>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
});

export { TandCPage };
