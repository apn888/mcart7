<?
define("DBPersistent", false);
$DBType = "mysql";
$DBHost = "localhost:3306";
$DBLogin = "study_auto_user";
$DBPassword = "pt6O82aRosl6LTfrifruKUg";
$DBName = "study_auto_db_pajgashov";
$DBDebug = false;
$DBDebugToFile = false;

define("DELAY_DB_CONNECT", true);
define("CACHED_b_file", 3600);
define("CACHED_b_file_bucket_size", 10);
define("CACHED_b_lang", 3600);
define("CACHED_b_option", 3600);
define("CACHED_b_lang_domain", 3600);
define("CACHED_b_site_template", 3600);
define("CACHED_b_event", 3600);
define("CACHED_b_agent", 3660);
define("CACHED_menu", 3600);

define("BX_FILE_PERMISSIONS", 0644);
define("BX_DIR_PERMISSIONS", 0755);
@umask(~(BX_FILE_PERMISSIONS|BX_DIR_PERMISSIONS)&0777);

define("MYSQL_TABLE_TYPE", "INNODB");
define("SHORT_INSTALL", true);
define("VM_INSTALL", true);

define("BX_UTF", true);
define("BX_CRONTAB_SUPPORT", true);
define("BX_COMPRESSION_DISABLED", true);

define("BX_DISABLE_INDEX_PAGE", true);

define("BX_TEMPORARY_FILES_DIRECTORY", "/home/pajgashov/.bx_temp");

define("BX_USE_MYSQLI", true);
?>
