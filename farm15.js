javascript:var cook="15farm";
sp=0;sw=00;ax=0;ar=0;scout=0;lc=50;ma=0;hv=0;cat=0;ra=0;no=0;kn=0;
coords="689|695 695|686 698|688 695|685 685|693 694|683 684|690 686|685 684|687 704|690 682|695 683|698 682|697 690|704 689|680 684|683 685|702 680|694 690|679 684|682 706|699 704|702 681|683 692|707 694|677 678|688 678|690 686|678 680|683 704|680 678|685 682|705 700|708 681|705 704|706 710|686 678|702 711|698 699|674 682|677 677|703 674|698 674|686 694|692 692|691 693|694 692|690 695|691 695|694 690|692 693|695 691|695 696|694 690|693 689|692 694|696 689|693 694|688 690|689 695|688 697|695 688|691 694|687 698|693 692|687 698|690 688|690 697|688 689|696 690|697 687|693 699|693 698|696 699|695 687|689 693|685 686|692 688|687 698|697 687|696 688|698 687|697 693|684 694|700 700|696 701|690 701|694 699|686 701|695 696|684 686|687 697|700 699|685 701|697 685|697 684|689 684|695 702|689 690|683 702|688 700|685 703|692 693|702 701|686 691|682 691|702 695|682 698|701 684|697 683|695 700|700 685|685 700|684 703|696 689|682 687|701 684|686 702|698 693|703 694|681 704|688 682|688 683|697 682|690 683|687 701|684 696|681 687|702 681|692 693|704 702|684 692|704 705|693 701|701 681|693 685|701 682|687 691|704 681|694 683|685 696|680 690|680 699|681 704|686 705|688 681|696 697|704 705|696 702|683 685|682 688|704 698|704 680|692 681|697 680|693 694|679 700|703 680|691 682|685 700|704 695|705 689|695 695|686 698|688 695|685 685|693 694|683 684|690 686|685 684|687 704|690 682|695 683|698 682|697 690|704 689|680 684|683 685|702 680|694 690|679 684|682 706|699 704|702 681|683 692|707 694|677 678|688 678|690 686|678 680|683 704|680 678|685 682|705 700|708 681|705 704|706 710|686 678|702 711|698 699|674 682|677 677|703 674|698 674|686 691|679 706|695 687|680 681|698 684|702 704|700 680|688 682|684 689|679 682|700 688|679 693|678 694|706 679|691 694|678 692|706 707|694 691|678 704|683 704|701 679|689 705|700 701|704 701|680 689|706 680|699 700|679 686|705 688|706 704|682 707|697 698|706 681|701 708|692 684|704 684|680 708|693 689|707 678|696 707|686 679|698 701|705 678|695 696|707 678|689 682|681 705|682 681|682 707|699 679|685 684|679 680|701 706|683 688|707 678|697 677|692 693|708 677|689 696|708 682|704 705|681 709|697 677|687 685|706 699|707 687|677 706|702 703|705 700|707 708|699 684|706 702|678 681|704 681|680 705|680 678|700 708|700 708|684 701|707 680|703 680|681 709|686 691|709 691|675 703|706 679|702 707|682 710|695 676|696 700|676 678|701 708|683 706|680 705|679 680|680 688|709 679|703 707|703 701|676 709|700 675|692 676|686 711|693 687|709 710|685 676|685 687|710 711|686 711|695 696|674 677|683 702|676 709|683 675|688 681|706 689|710 708|703 678|681 688|710 703|676 677|702 674|693 694|711 707|679 706|678 674|690 674|689 696|711 686|674 700|710 675|685 709|703 709|681 674|697 675|684 711|684 701|674 703|709 683|675 707|706 679|706 708|705 712|686 699|673 687|711";
var%20doc=document;if(window.frames.length>0)doc=window.main.document;url=document.URL;if(url.indexOf("screen=place")==-1)alert("This%20script%20needs%20to%20be%20run%20from%20the%20rally%20point");
coords=coords.split("%20");index=0;farmcookie=document.cookie.match("(^|;) ?"+cook+"=([^;]*)(;|$)");if(farmcookie!=null)index=parseInt(farmcookie[2]);
if(index>=coords.length);if(index>=coords.length)index=0;coords=coords[index];coords=coords.split("|");index=index+1;
cookie_date=new%20Date(2015,11,11);
document.cookie =cook+"="+index+";expires="+cookie_date.toGMTString ();
doc.forms[0].x.value=coords[0];
doc.forms[0].y.value=coords[1];
insertUnit(doc.forms[0].spear,sp);insertUnit(doc.forms[0].knight,kn);insertUnit(doc.forms[0].marcher,ma);insertUnit(doc.forms[0].archer,ar);insertUnit(doc.forms[0].snob,no);insertUnit(doc.forms[0].sword,sw);insertUnit(doc.forms[0].axe,ax);insertUnit(doc.forms[0].spy,scout);insertUnit(doc.forms[0].light,lc);insertUnit(doc.forms[0].heavy,hv);insertUnit(doc.forms[0].ram,ra);insertUnit(doc.forms[0].catapult,cat);
doc.forms[0].x.focus();end();