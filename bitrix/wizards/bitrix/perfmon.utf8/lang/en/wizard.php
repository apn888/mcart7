<?php
$MESS["UTFWIZ_BACKUP_CONSENT"] = "I have created backup copies. I confirm that I can restore the site from the backup.";
$MESS["UTFWIZ_BACKUP_WARNING"] = "Backup copies of the files and database must be created before starting the conversion.";
$MESS["UTFWIZ_CANCELSTEP_BUTTONTITLE"] = "Close";
$MESS["UTFWIZ_CANCELSTEP_CONTENT"] = "The wizard has been canceled.";
$MESS["UTFWIZ_CANCELSTEP_TITLE"] = "The wizard has been canceled.";
$MESS["UTFWIZ_CHARSET_CONN_VS_RES"] = "The database connection encoding (#CONN#) must be the same as the result encoding (#RES#).";
$MESS["UTFWIZ_CHECK_SITE_WARNING"] = "Before clicking \"Next\", make sure that all of the files are available for writing. Open the page \"System check\" and select the tab \"Access check\" for checking.";
$MESS["UTFWIZ_CHOOSE"] = "Select the original encoding for conversion to UTF-8:";
$MESS["UTFWIZ_CONNECTION_CHARSET"] = "The database connection encoding must be set to utf8.";
$MESS["UTFWIZ_CONNECTION_COLLATION"] = "The database connection collation must be set to utf8_unicode_ci.";
$MESS["UTFWIZ_CONVERT_NOTICE"] = "Note that the Wizard uses the statement \"ALTER TABLE ... CONVERT TO CHARACTER SET charset\" to convert the tables. As a side effect, it increases the maximum length of some of the character fields. Site check will show the incongruity of database structure and table definitions in the modules. This kind of mismatch is not critical and can be amended by executing the statements \"ALTER TABLE ... CHANGE COLUMN\" in the site check log.";
$MESS["UTFWIZ_DATABASE_NOT_SUPPORTED"] = "The wizard does not support the installed database type.";
$MESS["UTFWIZ_DB_CONVERT_ALREADY"] = "The database is already converted.";
$MESS["UTFWIZ_DB_CONVERT_MANUAL"] = "I will convert the database on my own";
$MESS["UTFWIZ_DB_CONVERT_WIZARD"] = "Let the wizard to convert the database encoding";
$MESS["UTFWIZ_EDIT_AFTER_CONNECT"] = "Use the file <a target=\"_blank\" href=\"#EDIT_HREF#\">/bitrix/php_interface/after_connect_d7.php</a> to set the connection encoding.";
$MESS["UTFWIZ_EXCLUDE_MASK"] = "Exclude files:";
$MESS["UTFWIZ_FINALSTEP_BUTTONTITLE"] = "Close";
$MESS["UTFWIZ_FINALSTEP_CONTENT"] = "The wizard has finished successfully.";
$MESS["UTFWIZ_FINALSTEP_TITLE"] = "The wizard has finished";
$MESS["UTFWIZ_FIX_AND_RETRY"] = "There was an error. Find and fix the issue and try again.";
$MESS["UTFWIZ_INIT"] = "Initializing...";
$MESS["UTFWIZ_OR_OTHER"] = "or specify custom encoding:";
$MESS["UTFWIZ_RETRYSTEP_BUTTONTITLE"] = "Try again";
$MESS["UTFWIZ_RUN_SQL"] = "Execute these queries:";
$MESS["UTFWIZ_SITE_CLOSED_WARNING"] = "Your site will not be available for visitors while the conversion is in progress.";
$MESS["UTFWIZ_SKIP_LINKS"] = "Skip symbolic links";
$MESS["UTFWIZ_STEP1_TITLE"] = "Create backup";
$MESS["UTFWIZ_STEP2_BX_UTF_CONSTANT"] = "Add define('BX_UTF', true); to the file <a target=\"_blank\" href=\"#EDIT_HREF#\">/bitrix/php_interface/dbconn.php</a>.";
$MESS["UTFWIZ_STEP2_DEFAULT_CHARSET"] = "Open the php.ini file and set the value of default_charset to \"utf-8\".";
$MESS["UTFWIZ_STEP2_MB_FUNC_OVERLOAD"] = "Set mbstring.func_overload to 0.";
$MESS["UTFWIZ_STEP2_MB_INSTALLED"] = "mbstring extension is installed.";
$MESS["UTFWIZ_STEP2_MB_INTERNAL_ENCODING"] = "Remove all calls to the function mb_internal_encoding() in <a target=\"_blank\" href=\"#EDIT_HREF#\">/bitrix/php_interface/dbconn.php</a>. When the wizard calls this function without parameters as a means to verify the current encoding when starting the conversion, it must return 'UTF-8'.";
$MESS["UTFWIZ_STEP2_SETLOCALE"] = "Remove all function calls setlocale(LC_ALL, ...) in the file <a target=\"_blank\" href=\"#EDIT_HREF#\">/bitrix/php_interface/dbconn.php</a>.";
$MESS["UTFWIZ_STEP2_TITLE"] = "Check the environment settings";
$MESS["UTFWIZ_STEP2_UTF_MODE"] = "Set the key 'value' => true for the variable utf_mode in the file <a target=\"_blank\" href=\"#EDIT_HREF#\">/bitrix/.settings.php</a>. Alternatively, you can add the following line to the file: 'utf_mode' => ['value' => true, 'readonly' => true] .";
$MESS["UTFWIZ_STEP3_TITLE"] = "Check database and table encoding";
$MESS["UTFWIZ_STEP4_TITLE"] = "Convert the database";
$MESS["UTFWIZ_STEP5_TITLE"] = "Database connection parameters";
$MESS["UTFWIZ_STEP6_TITLE"] = "Check and fix serialized data";
$MESS["UTFWIZ_STEP7_TITLE"] = "Convert files";
$MESS["UTFWIZ_STEP8_TITLE"] = "Reset cache";
