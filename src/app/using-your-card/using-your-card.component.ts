import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-your-card',
  templateUrl: './using-your-card.component.html',
  styleUrls: ['./using-your-card.component.css']
})
export class UsingYourCardComponent implements OnInit {

  $features = [
    {
      "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_DoNot.png",
      "info": "Your OneVanilla Card does not have ATM access, and it cannot be used to get cash back at the point of sale."
    },
    {
      "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_NoFees.png",
      "info": "No fees after purchase – Spend your money on what counts."
    },
    {
      "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_Nationwide.png",
      "info": "Use wherever Debit MasterCard or Visa debit cards&nbsp;are accepted in the U.S. and District of Columbia, as applicable."
    },
    {
      "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_NoPersInfo.png",
      "info": "No personal information or credit* check required.",
      "note": "*This is not a credit card."
    }
  ];
  $howToUse = {
  "phone": [{
    "title": "Phone",
    "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_PhoneEmail.png",
    "alt": "Use for phone and mail order",
    "subTitle": "Use for phone and mail order",
    "info": "You can use your card to make purchases over the phone or through mail order.&nbsp;Accepted at locations&nbsp;in the U.S. and District of&nbsp;Columbia everywhere Debit MasterCard or Visa debit cards are&nbsp;accepted."
  }],
  "inStore": [{
    "title": "In-Store",
    "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_PhoneEmail.png",
    "alt": "Use for phone and mail order",
    "subTitle": "Use for phone and mail order",
    "info1": "Give your card to the cashier when making a purchase.",
    "info2": "Be sure to know your balance before you shop."
  },{
    "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_SelectSign.png",
    "alt": "",
    "subTitle": "Select and Sign",
    "info1": "Finalize your purchase as a Signature transaction. Select “Credit” and sign the receipt.",
    "info2": "Sign in to your online account to view all transactions."
  },{
    "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_PIN.png",
    "alt": "",
    "subTitle": "Debit Option ",
    "info1": "You can also finalize your purchase as a Debit transaction. Simply choose “Debit” and enter your PIN.",
    "info2": "Sign in to your account to set or clear your card PIN."
  }],
  "online": [{
    "title": "Online",
    "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_AssignZIP.png",
    "alt": "Assign a ZIP Code to your card",
    "subTitle": "Assign a ZIP Code",
    "info": "Some retailers use ZIP Codes as a checkout security feature. To assign a ZIP Code to your Card, sign in to your account and select Manage Card. The \"Assign ZIP Code\" page allows you to register your ZIP Code for the first time or update an existing ZIP Code"
  },{
    "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_ShopOnlineStore.png",
    "alt": "Shop online",
    "subTitle": "Checkout",
    "info": "At checkout, simply enter your card information in the Payment Method fields. Use your mailing address when shopping online. This will ensure that you can be contacted by the merchant, if a problem arises."
  },{
    "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_Nationwide.png",
    "alt": "Nationwide Online Use",
    "subTitle": "Nationwide Online Use",
    "info": "You can use your OneVanilla Card at online merchants based inside the United States and District of Columbia where Debit MasterCard or&nbsp;Visa debit cards are accepted, as applicable."
  },],

};
  $tips=[
    {
      "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_PayAtPump.png",
      "alt": "Paying at the Pump",
      "title": "Paying at the Pump",
      "info1": "When paying at the pump, most gas stations will put a $100 hold on your card to ensure that you have sufficient funds. So, make sure you know your balance. To avoid the hold, pay the cashier inside."
    },{
      "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_SplitTrans.png",
      "alt": "Using two forms of payment",
      "title": "Using two forms of payment",
      "info1": "If you need to make a purchase that is greater than the amount on your card, most retailers will allow you to use a second payment method – cash, check, credit card or debit card – for the difference.",
      "info2": "Not all merchants accept split transactions and some merchants may require that you pay for the remaining balance with cash. Be sure to check with the merchant. "
    },{
      "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_Tipping.png",
      "alt": "Tipping with your card",
      "title": "Tipping with your card",
      "info1": "Restaurants, hair salons, spas and some other types of merchants may place a hold on your Card equal to the total service bill plus up to 20%, in anticipation of you leaving a tip. So, be sure to know your balance."
    },{
      "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_BillPay.png",
      "alt": "Paying Bills Online",
      "title": "Paying Bills Online",
      "info1": "OneVanilla is a simple, safe and convenient method of making online bill payments."
    },{
      "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_ShopOnlineStore.png",
      "alt": "Shop Online and In-store",
      "title": "Shop Online and In-store",
      "info1": "Before you shop online using your OneVanilla Card, be sure to register your ZIP Code in the Manage Card section."
    },{
      "img": "https://assetscdn.incomm.com/static/onevanilla/images/onevanilla/en/icons/OneV_icons_KnowBalance.png",
      "alt": "Know your Balance",
      "title": "Know your Balance",
      "info1": "Merchants cannot determine the balance on your card. So, if you try to purchase an item of greater value than your card balance, your card may be declined."
    }];

  constructor() { }

  ngOnInit() {


  }

}
