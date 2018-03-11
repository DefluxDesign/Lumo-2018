<?php 

?>
<div id="page-wrapper"><div id="page">
  <div id="main-wrapper"><div id="main">
    <div id="content" class="column"><div class="section">
      <?php print $messages; ?>
      <?php print render($page['help']); ?>
       <?php if ($tabs = render($tabs)): ?>
        <div class="tabs"><?php print $tabs; ?></div>
      <?php endif; ?>
      <?php print render($page['content']); ?>
       <?php if ($title): ?>
        <h1 class="title" id="page-title"><?php print $title; ?></h1>
      <?php endif; ?>
    </div></div><!-- /.section, /#content -->
    <?php print render($page['sidebar_first']); ?>
<div class="toggle-item toggle-item-about">
<div id="close"><a href="#">CLOSE</a></div>
		<div class="about-content"></div>
		</div>
<div class="toggle-item toggle-item-commercial-about">
<div id="close">
		<a href="#">CLOSE</a>
		</div>
		<div class="about-commercial-photography"></div>
		</div>
<div class="toggle-item toggle-item-wedding-about">
<div id="close">
		<a href="#">CLOSE</a></div>
		<div class="wedding-about-content"></div>
		</div>
<div class="toggle-item toggle-item-enquiry">
<div id="close">
<a href="#">CLOSE</a></div>
		<div class="enquiry-content"></div>
		</div>
<div class="toggle-item toggle-item-hello">
<div id="close">
	<a href="#">CLOSE</a></div>
		<div class="hello-content"></div>
		</div>
  </div></div><!-- /#main, /#main-wrapper -->
</div></div><!-- /#page, /#page-wrapper -->