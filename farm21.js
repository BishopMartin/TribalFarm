javascript:var cook="21farm";
sp=0;sw=00;ax=0;ar=0;scout=0;lc=50;ma=0;hv=0;cat=0;ra=0;no=0;kn=0;
coords="688|763 678|761 688|772 686|747 676|760 681|749 687|746 677|767 692|743 674|753 675|751 681|775 672|761 684|743 677|745 690|759 689|759 690|762 691|762 692|761 692|759 691|758 688|762 692|757 688|757 687|759 691|763 689|757 686|761 691|764 689|764 686|762 686|757 687|756 686|763 693|764 691|765 689|765 685|762 686|764 694|764 694|756 695|763 685|757 696|760 691|766 684|761 684|762 688|754 696|762 692|766 685|764 686|755 696|757 690|753 683|760 690|767 685|755 689|767 695|765 685|765 694|766 696|764 686|754 686|766 696|755 684|765 682|760 683|756 682|759 683|764 694|767 692|752 684|754 698|757 682|763 686|752 689|769 683|766 692|751 685|752 695|752 687|769 693|751 699|764 683|767 697|767 680|760 682|754 700|759 691|750 688|770 700|763 680|757 700|757 687|750 682|753 698|753 682|767 683|768 700|764 694|770 694|750 700|756 699|754 696|751 689|771 701|756 701|764 685|750 688|771 680|755 683|769 679|757 701|757 699|767 684|770 684|750 680|766 702|760 690|748 691|748 695|749 701|765 701|755 692|772 678|758 700|767 687|772 678|763 693|748 701|766 679|754 679|766 678|764 678|756 694|772 695|748 688|763 678|761 688|772 686|747 676|760 681|749 687|746 677|767 692|743 674|753 675|751 681|775 672|761 684|743 677|745 678|765 703|760 677|761 697|749 689|747 683|772 677|762 677|763 677|757 687|747 693|773 702|754 680|769 699|770 700|769 703|756 682|771 701|752 677|764 679|768 694|773 703|755 691|774 704|759 689|746 676|761 676|759 700|750 700|770 701|751 677|754 703|766 676|763 696|747 696|773 702|752 682|772 682|748 678|768 694|746 694|774 683|747 680|749 701|770 676|765 679|750 685|746 690|745 681|772 678|769 702|769 690|775 675|761 675|759 694|775 694|745 686|745 705|764 705|756 675|756 676|754 705|763 687|745 675|757 705|757 701|749 679|771 702|770 700|772 703|769 681|747 699|773 706|760 690|744 689|744 674|759 693|776 706|757 679|772 682|746 706|762 703|750 675|753 683|745 705|753 683|775 675|767 681|746 681|774 678|748 698|745 673|760 675|768 682|775 679|747 707|761 673|759 679|773 707|759 706|766 687|777 694|777 707|764 697|744 683|744 706|767 699|745 681|745 703|748 677|772 703|772 673|755 707|755 679|746 682|776 682|744 706|768 674|768 672|760 708|760 675|750 675|770 684|743 680|745 689|742 696|743 683|743 697|743 708|758 692|778 692|742 708|757 681|776 706|751 674|769 676|748 704|748 702|746 672|764 679|775 701|745 675|749 708|765 673|768 698|743 673|752 707|752 680|776 700|776 671|760 689|741 692|741 676|747 671|762 704|747 688|741 703|774 677|746 671|758 678|745 673|769 699|777 699|743 707|751 681|743 697|742 674|771 694|741 686|741 701|744 706|771 709|765 685|741 671|755 672|752 698|742 673|750 707|770 680|743 676|774 676|746 703|775 709|766 671|766";
var%20doc=document;if(window.frames.length>0)doc=window.main.document;url=document.URL;if(url.indexOf("screen=place")==-1)alert("This%20script%20needs%20to%20be%20run%20from%20the%20rally%20point");
coords=coords.split("%20");index=0;farmcookie=document.cookie.match("(^|;) ?"+cook+"=([^;]*)(;|$)");if(farmcookie!=null)index=parseInt(farmcookie[2]);
if(index>=coords.length);if(index>=coords.length)index=0;coords=coords[index];coords=coords.split("|");index=index+1;
cookie_date=new%20Date(2015,11,11);
document.cookie =cook+"="+index+";expires="+cookie_date.toGMTString ();
doc.forms[0].x.value=coords[0];
doc.forms[0].y.value=coords[1];
insertUnit(doc.forms[0].spear,sp);insertUnit(doc.forms[0].knight,kn);insertUnit(doc.forms[0].marcher,ma);insertUnit(doc.forms[0].archer,ar);insertUnit(doc.forms[0].snob,no);insertUnit(doc.forms[0].sword,sw);insertUnit(doc.forms[0].axe,ax);insertUnit(doc.forms[0].spy,scout);insertUnit(doc.forms[0].light,lc);insertUnit(doc.forms[0].heavy,hv);insertUnit(doc.forms[0].ram,ra);insertUnit(doc.forms[0].catapult,cat);
doc.forms[0].x.focus();end();