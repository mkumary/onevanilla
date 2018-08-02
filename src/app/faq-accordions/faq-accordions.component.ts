import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-accordions',
  templateUrl: './faq-accordions.component.html',
  styleUrls: ['./faq-accordions.component.css']
})
export class FaqAccordionsComponent implements OnInit {
   $data = [{
      heading : 'General Information & Getting Started',
      subPanels : [{
        panelHeading : 'How do I use my OneVanilla Card?',
        panelBody:'Simply present the card at the time of payment, and sign the receipt. If you wish to use your card for a debit transaction, you will need to select a PIN of your choice for your card. See below to learn more about selecting your PIN. As you use the OneVanilla Card, the balance will be reduced by the full amount of each purchase including taxes, charges and other fees, if any. The OneVanilla Card can be used to pay the full amount of the purchase and applicable taxes, so long as the balance remaining on the card is sufficient. If you want to make a purchase for an amount greater than the remaining balance, you must notify the merchant before completing the transaction.',
      },
    {
      panelHeading : 'What denominations can I purchase a OneVanilla Card in?',
      panelBody: 'The OneVanilla Prepaid Card is a variable load card, which means you can load it with any amount of your choice from $20 up to $500. The variable load OneVanilla Card is available for purchase at certain retail locations. You can also purchase $50 and $100 OneVanilla Cards at select retail locations.'
    },
  {
    panelHeading : 'When can I start using my OneVanilla Card?',
    panelBody: 'You can start using your OneVanilla Card at the time of purchase. The OneVanilla Card is activated at the store. Note: Some retailers may hold funds for up to 24 hours after time of purchase.'
  },
{
  panelHeading : 'Where can I use my OneVanilla Card?',
  panelBody : 'You can use your OneVanilla Card anywhere Visa debit cards, PULSE cards or Debit MasterCard is accepted within the fifty United States and District of Columbia. The OneVanilla Card cannot be used at merchants outside the United States, including Internet and mail order/telephone order merchants.'
},
{
  panelHeading : ' How do I activate my OneVanilla Card?',
  panelBody : 'The card is activated by the cashier at the time of purchase. Sign the back of the card immediately where indicated. We recommend that you write down the card number and the Customer Care number on a separate piece of paper in case the card is lost or stolen.'
},
{
  panelHeading : ' Can I reload my OneVanilla Card?',
  panelBody : 'The OneVanilla Card is not reloadable or returnable. If you are interested in a reloadable prepaid card, visit www.myvanillacard.com&nbsp;to learn how to sign up for a MyVanilla Prepaid Card.'
},
{
  panelHeading : 'Can I get cash with my OneVanilla Card?',
  panelBody : 'The OneVanilla Card cannot be used at ATMs. Neither can you use your card to get cash back at the point of sale.'
},
{
  panelHeading : 'What are the fees associated with the card?',
  panelBody : 'No fees other than the initial purchase charge will be applied to the card.'
},
{
  panelHeading : 'Can I share the balance or funds from one OneVanilla Card to another OneVanilla Card?',
  panelBody : 'No, you cannot share the balance or funds from one OneVanilla Card to another OneVanilla Card.'
}]
   },
  {
    heading : 'Using My Card',
    subPanels : [
      {
      panelHeading : 'What billing address do I use for online and phone transactions?',
      panelBody:'Your personal information is not associated with the card, therefore you should use your mailing address. This will ensure that if a problem arises you are able to be contacted by the merchant.',
    },
    {
      panelHeading:'Why is the merchant charging me for more than what I signed on my receipt?',
      panelBody:'Some purchases require a preauthorization. This is where the merchant sends in a transaction for a higher amount than the purchase. For example a $40 purchase at a restaurant is typically sent by the restaurant as $48 as they want to allow for a tip. We are required to approve and hold funds based on the $48 until the merchant finalizes the transaction which can take up to 10 days.'
    },
    {
      panelHeading : 'How are merchandise returns processed?',
      panelBody : 'If you are entitled to a refund for goods or services obtained with your card, you agree to accept credits to the balance on your card in place of cash. The credit will reflect on the card within 30 days.'
    },
    {
      panelHeading: 'Can I use my OneVanilla Card at gas stations?',
      panelBody : 'Yes, you can use your OneVanilla Card at gas stations. However, please be aware some merchants place a hold of $125 or more on your card when you pay-at-the-pump. The hold is only temporary until the transaction is finalized. While the hold is typically brief, it may remain on your card for up to seven days. Once the transaction is finalized, you will only pay for the gas you purchased. If your card does not have a balance of at least $125, it may be declined. We recommend you pay inside with the attendant for the exact amount and sign the receipt instead.'
    },
    {
      panelHeading : ' Can I use my OneVanilla Card for recurring billing?',
      panelBody : 'No, your OneVanilla Card cannot be used for recurring bill payments.'
    }
  ]
  },
  {
    heading : 'Security and Fees',
    subPanels : [
      {
      panelHeading : 'If I lose my card or my card gets stolen, how do I get a refund or a replacement card?',
      panelBody:'If you believe that your card has been lost or stolen, you need to notify us IMMEDIATELY. You can do this by calling Customer Care at 1-877-770-6408. You will be asked to provide the card number and other identifying information. We cannot provide a replacement card unless you provide your card number and all other requested identifying information. If our records show that a balance still remains on the card, we will cancel the card, and upon your request, issue a replacement card to you in an amount equal to the remaining balance less any applicable fee.',
    },
    {
      panelHeading : 'How do I select a PIN for the OneVanilla Card?',
      panelBody: 'While a PIN is not required to use your card, for your convenience, you may add a PIN to your Card. Simply select a 4-digit PIN of your choice during your first debit or PIN transaction. The PIN that you enter at the register at that time will be your PIN for all future PIN transactions.'
    },
    {
      panelHeading : 'What do I do if I forget my PIN?',
      panelBody: 'Your OneVanilla Card can always be used for credit transactions without a PIN. But if you would like to clear your PIN, you may do so by logging into this website with your card number and choosing "Manage PIN" or by calling the Customer Care number on the back of your card. Once you have cleared your PIN, you will need to select a new 4-digit PIN of your choice during the next use of your card for a PIN transaction.'
    }
  ]
  }
];
  constructor() { }

  

  ngOnInit() {
    
  }

}
