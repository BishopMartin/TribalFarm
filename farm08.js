javascript:var cook="08farm";
sp=0;sw=00;ax=0;ar=0;scout=0;lc=50;ma=0;hv=0;cat=0;ra=0;no=0;kn=0;
coords="669|740 664|739 669|734 671|741 662|733 673|743 660|742 672|745 656|739 676|745 662|749 677|745 661|727 673|749 671|726 663|751 669|753 675|751 653|745 660|724 683|739 666|754 651|734 674|753 664|755 650|742 684|743 681|749 659|722 683|730 650|732 654|751 652|749 648|740 671|719 650|728 666|738 667|739 666|737 668|739 665|738 667|736 665|739 664|738 670|738 664|736 666|735 671|738 663|738 665|734 665|742 669|742 670|742 670|734 665|743 669|733 671|742 663|742 664|743 668|744 666|732 669|732 661|740 669|744 672|742 661|741 664|744 667|745 660|739 662|743 660|737 661|734 669|745 672|732 661|743 660|734 663|731 663|745 675|737 665|746 665|730 673|744 673|732 659|735 664|746 659|741 662|731 662|745 674|743 660|743 663|746 667|747 658|737 666|729 674|744 673|745 661|731 672|730 676|735 658|741 671|747 667|748 673|730 657|738 675|732 659|732 657|737 677|737 657|741 657|735 659|745 675|731 663|728 661|729 676|732 658|732 667|727 667|749 666|749 666|727 656|742 656|736 669|749 677|743 669|727 678|735 660|729 670|749 674|729 677|732 667|750 655|738 666|750 659|729 679|739 676|746 672|749 662|727 670|750 679|741 670|726 656|744 673|727 663|726 676|747 677|730 677|746 659|728 655|733 667|725 680|738 678|745 655|745 654|740 670|751 654|741 680|741 655|744 655|732 673|750 657|747 669|740 664|739 669|734 671|741 662|733 673|743 660|742 672|745 656|739 676|745 662|749 677|745 661|727 673|749 671|726 663|751 669|753 675|751 653|745 660|724 683|739 666|754 651|734 674|753 664|755 650|742 684|743 681|749 659|722 683|730 650|732 654|751 652|749 648|740 671|719 650|728 676|748 658|728 680|742 659|727 680|734 671|751 656|746 675|749 672|751 680|743 680|733 662|725 667|752 666|752 681|737 653|740 680|732 681|741 653|735 655|730 675|750 679|746 671|724 663|752 653|742 680|745 660|751 653|743 681|743 678|748 672|752 678|728 662|752 655|729 679|747 667|753 652|739 682|737 668|753 682|734 652|742 652|734 653|744 673|752 654|746 652|741 682|735 678|727 655|728 655|748 681|745 653|731 682|733 654|729 662|753 672|723 683|738 683|737 683|735 655|749 651|735 683|733 651|743 683|743 681|746 669|722 665|722 661|723 682|744 661|753 652|732 680|728 654|748 651|742 682|731 658|752 681|729 681|747 679|750 655|750 667|721 675|753 650|738 682|746 668|755 666|721 680|749 654|727 656|751 673|722 683|744 684|736 684|740 669|721 683|731 671|755 663|721 683|745 658|723 676|723 684|733 662|755 684|743 653|727 685|738 685|739 673|755 682|748 660|721 650|745 661|756 673|720 665|756 649|736 669|720 649|735 670|720 685|741 676|754 683|747 663|756 663|720 655|724 649|742 678|723 652|727 685|733 649|743 684|730 683|728 677|754 668|757 686|737 686|739 680|724 665|757 669|719 665|719 652|750 658|721 684|729 648|741 686|741 650|747 660|720 686|734 663|719 663|757 651|749 651|727 648|743 662|719 649|730 675|720 675|756 685|746 659|720 650|748 653|752 654|723 661|757";
var%20doc=document;if(window.frames.length>0)doc=window.main.document;url=document.URL;if(url.indexOf("screen=place")==-1)alert("This%20script%20needs%20to%20be%20run%20from%20the%20rally%20point");
coords=coords.split("%20");index=0;farmcookie=document.cookie.match("(^|;) ?"+cook+"=([^;]*)(;|$)");if(farmcookie!=null)index=parseInt(farmcookie[2]);
if(index>=coords.length);if(index>=coords.length)index=0;coords=coords[index];coords=coords.split("|");index=index+1;
cookie_date=new%20Date(2015,11,11);
document.cookie =cook+"="+index+";expires="+cookie_date.toGMTString ();
doc.forms[0].x.value=coords[0];
doc.forms[0].y.value=coords[1];
insertUnit(doc.forms[0].spear,sp);insertUnit(doc.forms[0].knight,kn);insertUnit(doc.forms[0].marcher,ma);insertUnit(doc.forms[0].archer,ar);insertUnit(doc.forms[0].snob,no);insertUnit(doc.forms[0].sword,sw);insertUnit(doc.forms[0].axe,ax);insertUnit(doc.forms[0].spy,scout);insertUnit(doc.forms[0].light,lc);insertUnit(doc.forms[0].heavy,hv);insertUnit(doc.forms[0].ram,ra);insertUnit(doc.forms[0].catapult,cat);
doc.forms[0].x.focus();end();