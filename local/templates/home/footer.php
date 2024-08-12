  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
            <?$APPLICATION->IncludeComponent(
                "bitrix:main.include",
                ".default",
                array(
                    "AREA_FILE_SHOW" => "file",
                    "AREA_FILE_SUFFIX" => "inc",
                    "EDIT_TEMPLATE" => "",
                    "PATH" => "/include/about.php",
                    "COMPONENT_TEMPLATE" => ".default"
                ),
                false
            );?>


        </div>
        <div class="col-lg-4 mb-5 mb-lg-0">





                <?$APPLICATION->IncludeComponent(
                    "bitrix:main.include",
                    ".default",
                    array(
                        "AREA_FILE_SHOW" => "file",
                        "AREA_FILE_SUFFIX" => "inc",
                        "EDIT_TEMPLATE" => "",
                        "PATH" => "/include/navigations.php",
                        "COMPONENT_TEMPLATE" => ".default"
                    ),
                    false
                );?>






        </div>

        <div class="col-lg-4 mb-5 mb-lg-0">

            <?$APPLICATION->IncludeComponent(
                "bitrix:main.include",
                ".default",
                array(
                    "AREA_FILE_SHOW" => "file",
                    "AREA_FILE_SUFFIX" => "inc",
                    "EDIT_TEMPLATE" => "",
                    "PATH" => "/include/follow.php",
                    "COMPONENT_TEMPLATE" => ".default"
                ),
                false
            );?>





        </div>

      </div>
      <div class="row pt-5 mt-5 text-center">


          <div class="col-md-12">



          <?$APPLICATION->IncludeComponent(
              "bitrix:main.include",
              ".default",
              array(
                  "AREA_FILE_SHOW" => "file",
                  "AREA_FILE_SUFFIX" => "inc",
                  "EDIT_TEMPLATE" => "",
                  "PATH" => "/include/copyrightsite.php",
                  "COMPONENT_TEMPLATE" => ".default"
              ),
              false
          );?>



          </div>

      </div>
    </div>
  </footer>

  </div>



</body>

</html>