<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Избранное");
?><?$APPLICATION->IncludeComponent(
	"bitrix:news.list",
	"",
Array()
);?><br>
 <br>
 <br>
Избранные объявления покупателя<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>