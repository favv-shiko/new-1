<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $message = htmlspecialchars($_POST['message']);
    
    // تخزين التعليق في ملف نصي
    $comment = "$name: $message\n";
    file_put_contents("comments.txt", $comment, FILE_APPEND);
    
    // إعادة توجيه إلى الصفحة الرئيسية بعد الإرسال
    header("Location: index.html");
    exit();
}
?>
